import React from "react";
import { Link } from "react-router-dom";
import "./BlogPost.scss";
import moment from "moment";
import DOMPurify from "dompurify";

const BlogPost = ({ post }) => {

  // Function to sanitize and return HTML
  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };
  // console.log(post.postId)

  return (
    <div className="blogpost">
      <div className="imgcont">
        <img src={`../upload/${post?.postImg}`} alt="Post cover" />
      </div>
      <div className="content">
        <div className="title">{post?.title}</div>
        <div className="authorinfo">
          <div className="colorbox"></div>
          <div className="authinfocont">

          <img src={`./profile/${post.userImg}`} alt="Author" />
            <div className="namendate">
              <span>{post?.username}</span>
              <span>Date: {post ? moment(post.date).format("MMM Do YY") : ""}</span>
            </div>
          </div>
        </div>
        <div className="desc">
          <div dangerouslySetInnerHTML={createMarkup(post.description.slice(0, 300))}></div>
          <p>...</p>
        </div>
        <div className="btncont">
          <Link to={`/singleblog/${post?.postId}`} className="link readmore">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
