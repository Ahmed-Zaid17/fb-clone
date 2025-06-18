import React, { useState } from "react";
import "../styles/styles.css";

const chats = [
  { id: 1, name: "John Doe", message: "Hey! How are you?", time: "10:30 AM" },
  { id: 2, name: "Jane Smith", message: "Let's catch up!", time: "09:15 AM" },
  { id: 3, name: "Meta AI", message: "Hello! How can I assist?", time: "08:45 AM" },
];

const ChatSidebar = ({ setSelectedChat }) => {
  const [search, setSearch] = useState("");

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="chat-sidebar">
      <h2>Chats</h2>
      <input
        type="text"
        placeholder="Search chats..."
        className="chat-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="chat-list">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            className="chat-item"
            onClick={() => setSelectedChat(chat)}
          >
            <div className="chat-avatar"></div>
            <div className="chat-info">
              <h4>{chat.name}</h4>
              <p>{chat.message}</p>
            </div>
            {/* <span className="chat-time">{chat.time}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
