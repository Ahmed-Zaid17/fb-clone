import React, { useState } from "react";
import MessageInput from "./MessageInput";
import "../styles/styles.css";

const ChatWindow = ({ selectedChat }) => {
  const [messages, setMessages] = useState([]);

  if (!selectedChat) {
    return <div className="chat-window">Select a chat to start messaging</div>;
  }

  const sendMessage = (message) => {
    setMessages([...messages, { text: message, sender: "You", reaction: null }]);
  };

  const addReaction = (index, reaction) => {
    const updatedMessages = [...messages];
    updatedMessages[index].reaction = reaction;
    setMessages(updatedMessages);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h3>{selectedChat.name}</h3>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "You" ? "message sent" : "message received"}>
            {msg.text}
            {msg.reaction && <span className="reaction">{msg.reaction}</span>}
            <div className="reaction-buttons">
              <button onClick={() => addReaction(index, "❤️")}>❤️</button>
              <button onClick={() => addReaction(index, "😂")}>😂</button>
              <button onClick={() => addReaction(index, "👍")}>👍</button>
            </div>
          </div>
        ))}
      </div>
      <MessageInput onSend={sendMessage} />
    </div>
  );
};

export default ChatWindow;
