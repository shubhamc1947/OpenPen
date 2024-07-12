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
  import SkeletonSingleBlog from '../../component/SkeletonSingleBlog/SkeletonSingleBlog'

// images
import delimg from "../../../public/img/delete.png";
import editimg from "../../../public/img/edit.png";

const SingleBlog = () => {
  const [loading, setLoading] = useState(true)
  const id = useLocation().pathname.split("/")[2];
  // console.log(id)
  const [blogPost, setBlogPost] = useState({});

  const navigate = useNavigate();
  const handleDelete = async () => {
    if(confirm("Are you Sure you want to delete ?")){
      try {
        await axios.delete(`${import.meta.env.VITE_APP_API_URL}/api/posts/${id}`, { withCredentials: true });
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
        const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/posts/${id}`);
        setBlogPost(res.data);
        setLoading(false)
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
// console.log(currentUser)
if(loading){
  return <SkeletonSingleBlog/>
}
  return (
    <div className="singleblog">
      <div className="container">
        <div className="leftcont">
          <div className="img">
            <img src={`../post/${blogPost?.img}`} alt="Post cover" />
          </div>
          <div className="userinfo">
            <div className="user">
              
              <img src={`../profile/${blogPost.uid?.img}`} className="borderradius" alt="Author" />
              <span>{blogPost.uid?.username}</span>
              <span>{blogPost ? moment(blogPost.date).fromNow() : ""}</span>
            </div>
            
            {blogPost && currentUser &&  blogPost.uid && currentUser.username === blogPost.uid.username && (
              <div className="editopt">
                <span className="del">
                  <img onClick={handleDelete} src={delimg} alt="Delete" />
                </span>
                <span className="edit">
                  <Link to={`/writeblog?edit=${blogPost?._id}`} state={blogPost}>
                    <img src={editimg} alt="Edit" />
                  </Link>
                </span>
              </div>
            )}
          </div>
          <div className="title">{blogPost?.title}</div>
          <div className="descrip" dangerouslySetInnerHTML={createMarkup(blogPost?.description)}></div>
        </div>
        <div className="rightcont">
          <div className="rightconthead">You might like ...</div>
          <div className="cont">
            {console.log(blogPost?.cat)}
            <RecommedPostWrap catValue={blogPost?.cat} />
          </div>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default SingleBlog;
