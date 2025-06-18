import React from "react";
import "../styles/styles.css";

const ChatBubble = ({ text, sender, time }) => {
  return (
    <div className={`chat-bubble ${sender === "me" ? "sent" : "received"}`}>
      <p>{text}</p>
      <span className="chat-time">{time}</span>
    </div>
  );
};

export default ChatBubble;
