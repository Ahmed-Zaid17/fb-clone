import React from "react";
import { FaBellSlash, FaSearch } from "react-icons/fa";
import "../styles/styles.css";

const ProfileSidebar = () => {
  return (
    <div className="profile-sidebar">
      <div className="profile-header">
        <div className="profile-avatar"></div>
        <h3>Meta AI <span className="verified">✔</span></h3>
      </div>
      <div className="profile-options">
        <div className="option">
          <FaBellSlash className="icon" />
          <span>Mute</span>
        </div>
        <div className="option">
          <FaSearch className="icon" />
          <span>Search</span>
        </div>
      </div>
      <div className="privacy-section">
        <h4>Privacy and Support</h4>
      </div>
    </div>
  );
};

export default ProfileSidebar;
