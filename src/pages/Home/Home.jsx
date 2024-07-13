import React, { useEffect, useState } from "react";
import "./Home.scss";
import BlogPost from "../../component/BlogPost/BlogPost";
import axios from "axios";
import { useLocation } from "react-router-dom";
import BlogPostSkeleton from '../../component/BlogPostSkeleton/BlogPostSkeleton'
const Home = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [category, setCategory] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Extract category from location search params
    const params = new URLSearchParams(location.search);
    const cat = params.get("cat") || "";
    setCategory(cat);

    // Reset page number and posts when category changes
    setBlogPosts([]);
    setPage(1);
    setHasMore(true);
    fetchPosts(1, cat); // Fetch the first page with the new category
  }, [location.search]);

  const fetchPosts = async (pageNum, cat) => {
    setLoading(true);
    try {
      const url = `${import.meta.env.VITE_APP_API_URL}/api/posts?page=${pageNum}&limit=3&category=${cat}`;
      console.log(url)
      const res = await axios.get(url);
      const data = res.data;

      if (data.posts.length === 0) {
        setHasMore(false);
      } else {
        setBlogPosts((prevPosts) => [...prevPosts, ...data.posts]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (loading || !hasMore) return;

    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      setPage((prevPage) => prevPage + 1); // Increment page number on scroll
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]); // Cleanup scroll event listener

  useEffect(() => {
    // Ensure fetching data when page state changes
    if (page > 1) {
      fetchPosts(page, category);
    }
  }, [page, category]); // Fetch new data when page or category changes

  return (
    <div className="home">
      <div className="container">
        {blogPosts.map((post,idx) => (
          <BlogPost post={post} key={idx} />
        ))}
        {loading && <><BlogPostSkeleton /><BlogPostSkeleton /><BlogPostSkeleton /></>}
        {!hasMore && (
          <p className="seenall">
            Yay! You have seen All the Post ...
          </p>
        )}
        
      </div>
    </div>
  );
};

export default Home;
