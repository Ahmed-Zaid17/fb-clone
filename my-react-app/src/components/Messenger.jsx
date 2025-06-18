import React, { useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";
import ProfileSidebar from "./ProfileSidebar";
import "../styles/styles.css";
import Navbar from "./Navbar";
import SidebarLeft from "../components/SidebarLeft"; 
const Messenger = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (<>
  <Navbar />
  <div className="main-container" >
    <SidebarLeft/>
  <div className="messenger-layout">
      <ChatSidebar setSelectedChat={setSelectedChat} />
      <ChatWindow selectedChat={selectedChat} />
      <ProfileSidebar selectedChat={selectedChat} />
    </div>
  </div>
  </>
   
  );
};

export default Messenger;
