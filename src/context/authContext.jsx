import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  //agr pahle se kuch hai to whi apna currentUser hai ,we need to use localstorage as we want user to be logged in , not login multiple times
  //we need to json.parse as we can store only string value in localstorage so we need to make it json

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (res) => {
    setCurrentUser(res.data);
    // console.log(currentUser);
  };

  const logout = async (inputs) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/api/logout`,
        {},
        {
          withCredentials: true, //must for handling cooking and deleting it 
        }
      );
      // console.log(res);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }

    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
