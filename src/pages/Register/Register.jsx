import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [errmsg, setErrmsg] = useState(null);
  const [msg, setMsg] = useState(null);
  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [file, setFile] = useState(null); 

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const upload = async () => {
    try {
      if (!file) {
        throw new Error("Please select a profile picture.");
      }

      const formData = new FormData();
      formData.append("profile", file);

      const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/profile`, formData, { withCredentials: true });
      return res.data.url; // Assuming the response from server includes the Cloudinary URL
    } catch (err) {
      console.error('Error uploading profile image:', err);
      throw new Error("Could not upload profile picture. Please try again.");
    }
  };

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imgUrl = await upload();

      if (!input.email || !input.username || !input.password) {
        throw new Error("All fields are required.");
      }

      const updatedInput = { ...input, img: imgUrl };

      const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/register`, updatedInput);
      setErrmsg(null);
      setMsg(res.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error('Registration error:', err);
      setErrmsg(err.message || "An error occurred during registration.");
      setMsg(null);
    }
  };

  return (
    <div className="register">
      <div className="heading">
        <h2>OpenPen</h2>
        <p>Write Something, Anything...</p>
      </div>
      <div className="container">
        <h2>Register Page</h2>
        <div className="form">
          <input type="file" onChange={handleFileChange} name="profile" id="file" required />
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="username"
            value={input.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button onClick={handleSubmit}>Register</button>
          {errmsg && <div className="errmsg">{errmsg}</div>}
          {msg && (
            <div className="success-msg">
              {msg}
            </div>
          )}
          <div className="alreadyexist">
            <p>
              Already a User?{" "}
              <Link className="link" to={"/login"}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
