

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import FacebookHome from "./components/Home";
import Messenger from "./components/Messenger";

// import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import UserProfile from "./components/UserProfile";
import PhotoPage from "./components/PhotoPage";
import WatchPage from "./components/WatchPage";
import ReelsFeed from "./components/ReelsFeed";
import Reel from "./components/Reel";
import Profile from "./components/Profile"; // From second project
import FacebookSignUp from "./components/FacebookSignUp"; 
import FriendsPage from "./components/FriendsPage";


function App() {
  return (
    <Router>
      <Routes>
        {/* Login page without layout */}
        <Route path="/" element={<LoginPage />} />

        {/* Pages with shared layout */}
        <Route
          path="/home"
          element={
            // <Layout>
              <FacebookHome />
            // </Layout>
          }
        />
        <Route
          path="/messenger"
          element={
            // <Layout>
              <Messenger />
            // </Layout>
          }
        />
        <Route
          path="/feed"
          element={
            // <Layout>
              <Feed />
            // </Layout>
          }
        />
        <Route
          path="/profile/:userId"
          element={
            // <Layout>
              <UserProfile user={{ name: "John Doe", profilePic: "profile.jpg" }} />
            // </Layout>
          }
        />
        <Route
          path="/photos"
          element={
            // <Layout>
              <PhotoPage />
            // </Layout>
          }
        />
        <Route
          path="/watch"
          element={
            // <Layout>
              <WatchPage />
            // </Layout>
          }
        />
        <Route
          path="/reels"
          element={
            // <Layout>
              <Reel />
            // </Layout>
          }
        />
        <Route
          path="/reelsfeed"
          element={
            // <Layout>
              <ReelsFeed />
            // </Layout>
          }
        />
        <Route
          path="/user-profile"
          element={
            // <Layout>
              <Profile />
            // </Layout>
          }
        />
        <Route
          path="/FacebookSignUp"
          element={
            // <Layout>
              <FacebookSignUp />
            // </Layout>
          }
        />

        <Route
  path="/friendspage"
  element={
    // <Layout>
      <FriendsPage />
    // </Layout>
  }
/>

      </Routes>
    </Router>
  );
}

// A shared layout wrapper (Header + Sidebar)
const Layout = ({ children }) => (
  <div className="app">
    {/* <Header /> */}
    <div className="app-body">
      {/* <Sidebar /> */}
      {children}
    </div>
  </div>
);

export default App;
