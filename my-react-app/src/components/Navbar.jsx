import React from "react";
import "./Home.css"; // Optional: If you're using separate CSS for styling

const Navbar = () => {
  return (
    <div className="fb-navbar">
      <div className="fb-logo"><i class="fa-brands fa-facebook fa-lg fb-nav-logo" ></i></div>
      <input
        type="text"
        placeholder="Search Facebook"
        className="fb-search"
      />
      <div className="fb-icons">
        <span>🏠</span>
        <span>👥</span>
        <span>🎥</span>
        <span>🛒</span>
        <span>🔔</span>
        <span>⚙️</span>
      </div>
    </div>
  );
};

export default Navbar;
