import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/friends">Friends</Link>
        </li>
        <li>
          <Link to="/watch">Watch</Link>
        </li>
        <li>
          <Link to="/marketplace">Marketplace</Link>
        </li>
        <li>
          <Link to="/groups">Groups</Link>
        </li>
       
        <li>
          <Link to="/reelsfeed">Reels</Link>
        </li>


        <li>
          <Link to="/user-profile">vidisha</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
