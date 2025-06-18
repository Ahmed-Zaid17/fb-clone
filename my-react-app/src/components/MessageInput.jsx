import React, { useState } from "react";
import { FaPaperPlane, FaSmile, FaPlus, FaImage } from "react-icons/fa";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() || image) {
      onSend(message || "📷 Image sent!");
      setMessage("");
      setImage(null);
    }
  };

  return (
    <div className="message-input">
      <FaPlus className="icon" />
      <FaSmile className="icon" />
      <label>
        <FaImage className="icon" />
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        />
      </label>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default MessageInput;
