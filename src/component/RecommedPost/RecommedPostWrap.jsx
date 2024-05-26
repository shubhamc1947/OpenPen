import React, { useEffect, useState } from "react";
import RecommedPost from "./RecommedPost";
import axios from "axios";

const RecommedPostWrap = ({ catValue }) => {
  // console.log(catValue)
  const cat = `?cat=${catValue}`;
  // console.log(cat);
  const [recommdedPost, setrecommdedPost] = useState([]);

  useEffect(() => {
    const fetchData = async (e) => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/api/posts/${cat}`
        );
        if (Array.isArray(res.data)) {
          setrecommdedPost(res.data);
        } else {
          console.error("API response is not an array:", res.data);
          setrecommdedPost([]);
        }
      } catch (err) {
        console.log(err);
        // setErrmsg(err.response.data);
      }
    };
    fetchData();
  }, [cat]);
  // console.log(recommdedPost)
  return (
    <>
      {recommdedPost &&
        recommdedPost.reverse().map((post) => {
          return <RecommedPost post={post} key={post.postId} />;
        })}
    </>
  );
};

export default RecommedPostWrap;
