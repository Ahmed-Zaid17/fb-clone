import React from "react";
import "../styles/styles.css";

const MessageWindow = ({ messages }) => {
  return (
    <div className="message-window">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender === "You" ? "sent" : "received"}`}>
          <p><strong>{msg.sender}:</strong> {msg.text}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageWindow;
