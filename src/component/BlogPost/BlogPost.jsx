import React from "react";
import { Link } from "react-router-dom";
import "./BlogPost.scss";
import moment from "moment";
import DOMPurify from "dompurify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogPost = ({ post, loading }) => {
  // Function to sanitize and return HTML
  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <div className="blogpost">
      <div className="imgcont">
        {loading ? (
          <Skeleton height={200} />
        ) : (
          <img src={`../post/${post?.postImg}`} alt="Post cover" />
        )}
      </div>
      <div className="content">
        <div className="title">
          {loading ? <Skeleton width={300} /> : post?.title}
        </div>
        <div className="authorinfo">
          <div className="colorbox"></div>
          <div className="authinfocont">
            {loading ? (
              <Skeleton circle={true} height={40} width={40} />
            ) : (
              <img src={`./profile/${post.userImg}`} alt="Author" className="borderradius" />
            )}
            <div className="namendate">
              <span>{loading ? <Skeleton width={100} /> : post?.username}</span>
              <span>
                {loading ? (
                  <Skeleton width={100} />
                ) : (
                  `Date: ${post ? moment(post.date).format("MMM Do YY") : ""}`
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="desc">
          {loading ? (
            <Skeleton count={3} />
          ) : (
            <div dangerouslySetInnerHTML={createMarkup(post.description.slice(0, 300))}></div>
          )}
          {!loading && <p>...</p>}
        </div>
        <div className="btncont">
          {loading ? (
            <Skeleton width={100} height={40} />
          ) : (
            <Link to={`/singleblog/${post?._id}`} className="link readmore">
              Read More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
