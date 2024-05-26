import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.scss";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [errmsg, setErrmsg] = useState(null);

  const { currentUser, login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Include credentials to allow cookies
      const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/login`, input, {
        withCredentials: true, //ye nhi likhne pe cookie backend se frontend shi nhi aa rhi thi
      });

      login(res);
      // console.log(res);
      setErrmsg(null);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      // console.log(err);
      setErrmsg(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="heading">
        <h2>OpenPen</h2>
        <p>Write Something , Anything ...</p>
      </div>
      <div className="container">
        <h2>Login Page</h2>
        <div className="form">
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
          <button onClick={handleSubmit}>Login</button>
          {errmsg && <div className="errmsg">{errmsg}</div>}
          <div className="alreadyexist">
            <p>
              Not a User? <Link className="link" to={"/register"}>Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
