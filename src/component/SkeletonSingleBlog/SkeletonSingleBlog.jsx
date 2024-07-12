import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./SkeletonSingleBlog.scss";

const SkeletonSingleBlog = () => {
  return (
    <div className="singleblogskeleton">
      <div className="container">
        <div className="leftcont">
          <div className="img">
            <Skeleton height={300} />
          </div>
          <div className="userinfo">
            <div className="user">
              <Skeleton circle={true} height={50} width={50} />
              <div className="user-details">
                <Skeleton width={100} />
                <Skeleton width={80} />
              </div>
            </div>
            <div className="editopt">
              <Skeleton width={30} height={30} />
              <Skeleton width={30} height={30} />
            </div>
          </div>
          <div className="title">
            <Skeleton width={200} height={30} />
          </div>
          <div className="descrip">
            <Skeleton count={6} />
          </div>
        </div>
        <div className="rightcont">
          <div className="rightconthead">
            <Skeleton width={150} height={30} />
          </div>
          <div className="cont">
            <Skeleton height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonSingleBlog;
