// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css"; // Optional: Only if you want separate styles

// const SidebarLeft = () => {
//   return (
//     <div className="fb-sidebar">
//       <div className="profile-section">syed ahmed zaid</div>
//       <ul>
//         <li ><Link to="/home" className="left-sidebar-menu">👥 Home</Link></li>
//         <li><Link to="/messenger" className="left-sidebar-menu">👤 Chats</Link></li>
//         <li><Link to="/feed" className="left-sidebar-menu">📢  My feed</Link></li>
//         <li><Link to="/profile/:userId" className="left-sidebar-menu"> 👤 Profile</Link></li>
//         <li><Link to="/reelsfeed" className="left-sidebar-menu"> 🎥 shorts</Link></li>
//         <li><Link to="/user-profile" className="left-sidebar-menu">👥User Profile </Link></li>
//         {/* <li><Link to="/photos">🎥 photos</Link></li>
//         <li><Link to="/watch"> watch</Link></li>
//         <li><Link to="/reels">🎥 reels</Link></li> */}
//         <li><Link to="/" className="left-sidebar-menu">⬇️ Login</Link></li>
//         <li><Link to="/FacebookSignUp" className="left-sidebar-menu">SignUp</Link></li>
//         <li><Link to="/FriendsPage" className="left-sidebar-menu">Friends</Link></li>
    
//       </ul>
//     </div>
//   );
// };

// export default SidebarLeft;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const SidebarLeft = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/me", { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        { withCredentials: true }
      );
      alert("Logged out successfully!");
      navigate("/"); // redirect to login
    } catch (err) {
      console.error("Logout error:", err);
      alert("Failed to log out!");
    }
  };

  if (loading) return <div className="fb-sidebar">Loading...</div>;

  return (
    <div className="fb-sidebar">
      <div className="profile-section">
       🙎‍♂️ {user ? `${user.firstName} ${user.surname}` : "Guest"}
      </div>
      <ul>
        <li>
          <Link to="/home" className="left-sidebar-menu">
            <span className="sidebar-logo">🏠</span> Home
          </Link>
        </li>
        <li>
          <Link to="/messenger" className="left-sidebar-menu">
          <span className="sidebar-logo"> 💬</span> Chats
          </Link>
        </li>
        <li>
          <Link to="/feed" className="left-sidebar-menu">
            <span className="sidebar-logo"> 📢</span> My Feed
          </Link>
        </li>
        <li>
          <Link
            to={
              user ? `/profile/${user.id}` : "/profile/:userId"
            }
            className="left-sidebar-menu"
          >
            <span className="sidebar-logo">👤</span>Profile
          </Link>
        </li>
        <li>
          <Link to="/reelsfeed" className="left-sidebar-menu">
          <span className="sidebar-logo">🎥</span> Shorts
          </Link>
        </li>
        <li>
          <Link to="/user-profile" className="left-sidebar-menu">
             <span className="sidebar-logo">👥</span> User Profile
          </Link>
        </li>
        <li>
          <Link to="/FriendsPage" className="left-sidebar-menu">
          <span className="sidebar-logo">👥</span>  Friends
          </Link>
        </li>

        {user ? (
          <li>
            <button
              onClick={handleLogout}
              className="left-sidebar-menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                // color: "red",
                padding: 0,
                fontSize:'15px'
              }}
            >
              <span className="sidebar-logo">🚪</span>  Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/" className="left-sidebar-menu">
                ⬇️ Login
              </Link>
            </li>
            <li>
              <Link to="/FacebookSignUp" className="left-sidebar-menu">
                ✍️ Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default SidebarLeft;
