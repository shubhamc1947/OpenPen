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
      const formData = new FormData();
      formData.append("profile", file);
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/profile`, formData, { withCredentials: true });
       return res.data.filename;
    } catch (err) {
      console.log(err);
    }
  };



  // console.log(input)
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const imgUrl = await upload();


    //checking for the empty inputs
    if (!input.email || !input.username || !input.password || !file) {
      setErrmsg("All fields are required.");
      return;
    }

    // Update input state with the image URL
    const updatedInput = { ...input, img: imgUrl };

    try {
      const res = await axios.post("http://localhost:8800/api/register", updatedInput);
      // console.log(res);
      setErrmsg(null);
      setMsg(res.data);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
     
    } catch (err) {
     
      setErrmsg(err.response.data);
      setMsg(null);
    }
  };

  return (
    <div className="register">
      <div className="heading">
        <h2>OpenPen</h2>
        <p>Write Something , Anything ...</p>
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
          />
          <input
            type="text"
            name="username"
            value={input.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button onClick={handleSubmit}>Register</button>
          {errmsg && <div className="errmsg">{errmsg}</div>}
          {msg && (
            <div className="errmsg" style={{ color: "lightgreen" }}>
              {msg}
            </div>
          )}
          <div className="alreadyexist">
            <p>
              Already a User ?{" "}
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
