import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import "./WriteBlog.scss";

const WriteBlog = () => {
  const state = useLocation().state;
  const navigate = useNavigate();

  const [title, setTitle] = useState(state?.title || "");
  const [value, setValue] = useState(state?.description || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/upload`, formData, { withCredentials: true });
      return res.data.url; // Assuming the response from server includes the Cloudinary URL
    } catch (err) {
      console.error('Error uploading image:', err);
      return ""; // Return empty string or handle error as needed
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      if (!title || !value || !cat) {
        throw new Error("Title, description, and category are required.");
      }

      const postData = {
        title,
        desc: value,
        cat,
        img: file ? imgUrl : "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      };

      if (state) {
        await axios.put(`${import.meta.env.VITE_APP_API_URL}/api/posts/${state._id}`, postData, { withCredentials: true });
      } else {
        await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/posts/`, postData, { withCredentials: true });
      }

      navigate("/");
    } catch (err) {
      console.error('Blog post submission error:', err);
      // Handle error state or display error message to user
    }
  };

  return (
    <div className="writeblog">
      <div className="container">
        <div className="left">
          <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Write Something, Anything..." />
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
              <button onClick={handleClick}>Publish</button>
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>
            <div className="cat">
              <input type="radio" onChange={() => setCat("art")} checked={cat === "art"} name="cat" value="art" id="art" />
              <label htmlFor="art">Art</label>
            </div>
            <div className="cat">
              <input type="radio" onChange={() => setCat("science")} checked={cat === "science"} name="cat" value="science" id="science" />
              <label htmlFor="science">Science</label>
            </div>
            <div className="cat">
              <input type="radio" onChange={() => setCat("technology")} checked={cat === "technology"} name="cat" value="technology" id="technology" />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="cat">
              <input type="radio" onChange={() => setCat("food")} checked={cat === "food"} name="cat" value="food" id="food" />
              <label htmlFor="food">Food</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteBlog;
