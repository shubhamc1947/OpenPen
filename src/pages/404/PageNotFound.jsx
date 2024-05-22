import React from "react";
import "./PageNotFound.scss";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="pagenotfound">
      <div className="container">
        <h1>Page Not Found</h1>
        <p>
          <Link to="/" className="link">Go to Home Page</Link>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
