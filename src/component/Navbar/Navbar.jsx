import React, { useContext, useState } from "react";
import "./Navbar.scss";
import logoimg from "../../../public/img/logo.png";
import menuimg1 from "../../../public/img/menu1.png";
import menuimg2 from "../../../public/img/menu2.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
const Navbar = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);

  const [menuToggleStatus, setMenuToggleStatus] = useState(false);

  if (showUserInfo) {
    setTimeout(() => {
      setShowUserInfo(false);
    }, 4000);
  }
  const { currentUser, logout } = useContext(AuthContext);
  // console.log(currentUser);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link className="link" to={"/"}>
            <img src={logoimg} alt="" />
            <span>OpenPen</span>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            ART
          </Link>
          <Link className="link" to="/?cat=science">
            SCIENCE
          </Link>
          <Link className="link" to="/?cat=technology">
            TECHNOLOGY
          </Link>
          <Link className="link" to="/?cat=cinema">
            CINEMA
          </Link>
          <Link className="link" to="/?cat=design">
            DESIGN
          </Link>
          <Link className="link" to="/?cat=food">
            FOOD
          </Link>
          {currentUser ? (
            <span
              className="userdiv"
              onClick={() => setShowUserInfo(!showUserInfo)}
            >
              <img src={`./profile/${currentUser.img}`} alt="" />
              <span>{currentUser?.username}</span>
              {showUserInfo ? (
                <div className="usercont">
                  <Link to={`/writeblog`} className="link">
                    Write
                  </Link>
                  <span onClick={logout}>Logout</span>
                </div>
              ) : (
                ""
              )}
            </span>
          ) : (
            <Link to="/login" className="link">
              Login
            </Link>
          )}
        </div>
        <div className="phnlinks">
          {currentUser ? (
            <span
              className="userdiv"
              onClick={() => setShowUserInfo(!showUserInfo)}
            >
              <img src={`./profile/${currentUser.img}`} alt="" />
              <span>{currentUser?.username}</span>
              {showUserInfo ? (
                <div className="usercont">
                  <Link to={`/writeblog`} className="link">
                    Write
                  </Link>
                  <span onClick={logout}>Logout</span>
                </div>
              ) : (
                ""
              )}
            </span>
          ) : (
            <Link to="/login" className="link">
              Login
            </Link>
          )}
          <div
            className="menuimgcont"
            onClick={() => setMenuToggleStatus(!menuToggleStatus)}
          >
            <img src={menuToggleStatus ? menuimg1 : menuimg2} alt="" />
          </div>

          {menuToggleStatus ? (
            <div className="phnlinkswrap" onClick={()=>setMenuToggleStatus(!menuToggleStatus)}>
              <Link className="link" to="/?cat=art">
                ART
              </Link>
              <Link className="link" to="/?cat=science">
                SCIENCE
              </Link>
              <Link className="link" to="/?cat=technology">
                TECHNOLOGY
              </Link>
              <Link className="link" to="/?cat=cinema">
                CINEMA
              </Link>
              <Link className="link" to="/?cat=design">
                DESIGN
              </Link>
              <Link className="link" to="/?cat=food">
                FOOD
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
