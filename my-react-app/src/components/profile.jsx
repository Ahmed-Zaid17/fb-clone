import React from "react";
import CoverPhoto from "./CoverPhoto";
import ProfileHeader from "./ProfileHeader";
import NavMenu from "./NavMenu";
import IntroSection from "./IntroSection";
import PostsSection from "./PostsSection";
import '../index.css';
import "./profile.css";

function Profile() {
  return (
    <div className="page-container">
      <CoverPhoto />
      <ProfileHeader />
      <NavMenu />
      <div className="content-section">
        <IntroSection />
        <PostsSection />
      </div>
    </div>
  );
}

export default Profile;
