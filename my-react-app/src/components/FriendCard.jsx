import React from "react";

const FriendCard = ({ name, mutual, image }) => {
  return (
    <div
      style={{
        width: "170px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", borderRadius: "10px", height: "180px", objectFit: "cover" }}
      />
      <h4>{name}</h4>
      <p style={{ fontSize: "12px", color: "gray" }}>{mutual}</p>
      <button
        style={{
          width: "100%",
          backgroundColor: "#e7f3ff",
          border: "none",
          borderRadius: "6px",
          padding: "6px",
          marginBottom: "6px",
          cursor: "pointer",
        }}
      >
        Add Friend
      </button>
      <button
        style={{
          width: "100%",
          backgroundColor: "#e4e6eb",
          border: "none",
          borderRadius: "6px",
          padding: "6px",
          cursor: "pointer",
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default FriendCard;
