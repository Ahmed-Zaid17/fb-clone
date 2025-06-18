import React from "react";
import "../styles/styles.css";

const ChatList = ({ onSelectChat }) => {
  return (
    <div className="chat-list">
      <h2>Chats</h2>
      <div className="chat-item" onClick={() => onSelectChat("Alice")}>
        <img src="https://via.placeholder.com/40" alt="User" className="avatar" />
        <div>
          <strong>Alice</strong>
          <p>Hey! How are you?</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
