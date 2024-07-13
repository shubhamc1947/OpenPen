import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './BlogPost.scss';

const BlogPostSkeleton = () => {
  return (
    <div className="blogpost">
      <div className="imgcont">
        <Skeleton height={350} />
      </div>
      <div className="content">
        <div className="title">
          <Skeleton width="80%" height={40} />
        </div>
        <div className="authorinfo">
          <div className="colorbox">
            <Skeleton height="90%" />
          </div>
          <div className="authinfocont">
            <Skeleton circle={true} height={40} width={40} />
            <div className="namendate">
              <span>
                <Skeleton width={100} />
              </span>
              <span>
                <Skeleton width={100} />
              </span>
            </div>
          </div>
        </div>
        <div className="desc">
          <Skeleton count={3} />
        </div>
        <div className="btncont">
          <Skeleton width={100} height={40} />
        </div>
      </div>
    </div>
  );
};

export default BlogPostSkeleton;


