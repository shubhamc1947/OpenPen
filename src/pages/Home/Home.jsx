import React, { useEffect, useState } from "react";
import "./Home.scss";
import BlogPost from "../../component/BlogPost/BlogPost";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [blogPosts,setBlogPosts]=useState([]);
  // console.log(blogPosts)
  const cat=useLocation().search;//get the category
  // console.log(cat)
  
  useEffect(()=>{

    const fetchData = async (e) => {
      try {        
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/posts/${cat}`);
        if (Array.isArray(res.data)) {
          setBlogPosts(res.data);
          
        } else {
          console.error("API response is not an array:", res.data);
          setBlogPosts([]); // Set to empty array if response is not an array
        }
      } catch (err) {
        console.log(err);
        
      }
    };
    fetchData();
  },[cat])
  // console.log(blogPosts)
  return (
    <div className="home">
      <div className="container">
        {
          blogPosts.length>0?(
            blogPosts.map((post) => {
              return (<BlogPost post={post} key={post.postId} />)
            })
          ):(
            <div className="emptydatacont">
              No data Found !!!
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Home;
