import React from "react";

const menuItems = [
  { label: "Home", icon: "👥" },
  { label: "Friend requests", icon: "📨" },
  { label: "Suggestions", icon: "🔍" },
  { label: "All friends", icon: "👤" },
  { label: "Birthdays", icon: "🎂" },
  { label: "Custom lists", icon: "📋" },
];

const FriendSidebar = () => {
  return (
    <div style={{ width: "250px", backgroundColor: "#fff", padding: "20px", height: "100vh" }}>
      <h2>Friends</h2>
      {menuItems.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer",
            marginBottom: "10px",
            backgroundColor: i === 0 ? "#e7f3ff" : "transparent",
          }}
        >
          <span style={{ marginRight: "10px" }}>{item.icon}</span>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default FriendSidebar;
