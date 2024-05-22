import "./SingleBlog.scss";
import moment from "moment";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RecommedPostWrap from "../../component/RecommedPost/RecommedPostWrap";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

// images
import delimg from "../../../public/img/delete.png";
import editimg from "../../../public/img/edit.png";

const SingleBlog = () => {

  const id = useLocation().pathname.split("/")[2];
  // console.log(id)
  const [blogPost, setBlogPost] = useState([]);

  const navigate = useNavigate();
  const handleDelete = async () => {
    if(confirm("Are you Sure you want to delete ?")){
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/posts/${id}`, { withCredentials: true });
        toast.warning("Data is Deleted")
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } catch (err) {
        console.log(err);
      }

    }
  };
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/posts/${id}`);
        setBlogPost(res.data);
        // console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };
// console.log(blogPost);
  return (
    <div className="singleblog">
      <div className="container">
        <div className="leftcont">
          <div className="img">
            <img src={`../upload/${blogPost[0]?.postImg}`} alt="Post cover" />
          </div>
          <div className="userinfo">
            <div className="user">
              
              <img src={`../profile/${blogPost[0]?.userImg}`} alt="Author" />
              <span>{blogPost[0]?.username}</span>
              <span>{blogPost[0] ? moment(blogPost[0].date).fromNow() : ""}</span>
            </div>
            {blogPost[0] && currentUser &&  currentUser.username === blogPost[0].username && (
              <div className="editopt">
                <span className="del">
                  <img onClick={handleDelete} src={delimg} alt="Delete" />
                </span>
                <span className="edit">
                  <Link to={`/writeblog?edit=${blogPost[0]?.postId}`} state={blogPost[0]}>
                    <img src={editimg} alt="Edit" />
                  </Link>
                </span>
              </div>
            )}
          </div>
          <div className="title">{blogPost[0]?.title}</div>
          <div className="descrip" dangerouslySetInnerHTML={createMarkup(blogPost[0]?.description)}></div>
        </div>
        <div className="rightcont">
          <div className="rightconthead">You might like ...</div>
          <div className="cont">
            <RecommedPostWrap catValue={blogPost[0]?.cat} />
          </div>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default SingleBlog;
