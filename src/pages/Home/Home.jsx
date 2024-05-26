import React, { useEffect, useState } from "react";
import "./Home.scss";
import BlogPost from "../../component/BlogPost/BlogPost";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const cat = useLocation().search; // get the category
  
  useEffect(() => {
    const fetchData = async () => {
      try {        
        const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/posts/${cat}`);
        if (Array.isArray(res.data)) {
          setBlogPosts(res.data);
        } else {
          console.error("API response is not an array:", res.data);
          setBlogPosts([]); // Set to empty array if response is not an array
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); // Set loading to false after the data is fetched
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="home">
      <div className="container">
        {loading ? (
          // Render shimmer loaders
          Array.from({ length: 5 }).map((_, index) => (
            <BlogPost key={index} loading={loading} />
          ))
        ) : blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <BlogPost post={post} key={post._id} loading={loading} />
          ))
        ) : (
          <div className="emptydatacont">
            No data Found !!!
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
