import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import "./WriteBlog.scss";
const WriteBlog = () => {
  const state = useLocation().state;
  // console.log(state)
  const [title, setTitle] = useState(state?.title || "");
  const [value, setValue] = useState(state?.description || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/upload`, formData, { withCredentials: true });
       return res.data;
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    // if(title==="" || value==="" || cat===""){
    //   alert("Empmth can't")
    //   return ;
    // }
    try {
      if (state) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/posts/${state.postId}`, {
          title,
          desc: value,
          cat,
          img: file ? imgUrl : "",
        }, { withCredentials: true });
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/posts/`, {
          title,
          desc: value,
          cat,
          img: file ? imgUrl : "",
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        }, { withCredentials: true });
      }
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="writeblog">

      <div className="container">
        <div className="left">
          <input type="text" name="title"  value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Write Something , Anything..." />
          <div className="editcont">
            <ReactQuill
              className="editcontitem"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>

        <div className="right">
          <div className="item">
            <h1>Publish</h1>
            <div className="status">
              <span>Status :</span> <span>Draft</span>
            </div>
            <div className="visibility">
              <span>Visibility :</span>
              <span>Public</span>
            </div>
            <input
              type="file"
              className="blogimgupload"
              name="blogimgupload"
              id="blogimgupload"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label className="imglabel" htmlFor="blogimgupload">
              Upload Image
            </label>
            <div className="btn">
              <button>Save as Draft</button>
              <button onClick={handleClick}>Publish</button>
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>
            <div className="cat">
              <input type="radio" onChange={(e) => setCat(e.target.value)} checked={cat === "art"} name="cat" value="art" id="art" />
              <label htmlFor="art">Art</label>
            </div>
            <div className="cat">
              <input type="radio" onChange={(e) => setCat(e.target.value)} name="cat" checked={cat === "science"} value="science" id="science" />
              <label htmlFor="science">Science</label>
            </div>
            <div className="cat">
              <input
                type="radio" checked={cat === "technology"} onChange={(e) => setCat(e.target.value)}
                name="cat"
                value="technology"
                id="technology"
              />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="cat">
              <input type="radio" checked={cat === "cinema"} onChange={(e) => setCat(e.target.value)} name="cat" value="cinema" id="cinema" />
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div className="cat">
              <input type="radio" checked={cat === "food"} onChange={(e) => setCat(e.target.value)} name="cat" value="food" id="food" />
              <label htmlFor="food">Food</label>
            </div>
            <div className="cat">
              <input type="radio" checked={cat === "design"} onChange={(e) => setCat(e.target.value)} name="cat" value="design" id="design" />
              <label htmlFor="design">design</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteBlog;
