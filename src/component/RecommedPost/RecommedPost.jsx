import React from "react";
import "./RecommedPost.scss";
import moment from "moment";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
const RecommedPost = ({ post }) => {
  // Ensure post is defined before accessing its properties
  if (!post) return null;
  // console.log(post)
  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <div className="recommedpost">
      <div className="img">
        <img src={`../post/${post.postImg}`} alt="Post Image" />
      </div>
      <div className="user">
        <img src={`../public/profile/${post.userImg}`} className="borderradius" alt="Author" />
        <span>{post.username}</span>
        <span>Date: {moment(post.date).fromNow()}</span>
      </div>
      <div className="title">{post.title}</div>
      <div
        className="desc"
        dangerouslySetInnerHTML={createMarkup(
          post.description.slice(0, 100) + " ..."
        )}
      />
      <div className="btncont">
        <Link to={`/singleblog/${post?.postId}`} className="link readmore">
          Read More
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default RecommedPost;
