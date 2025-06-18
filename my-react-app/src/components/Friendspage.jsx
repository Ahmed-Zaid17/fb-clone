import React from "react";
import Navbar from "../components/Navbar";
import SidebarLeft from "./SidebarLeft";
import FriendCard from "./FriendCard";

const dummyFriends = [
  { name: "Shozib Sayied", mutual: "1 mutual friend", image: "https://i.pinimg.com/736x/52/93/ec/5293ecff201c7b042d8d92ca639d4d70.jpg" },
  { name: "Dar-Al Arqam", mutual: "2 mutual friends", image: "https://i.pinimg.com/736x/52/93/ec/5293ecff201c7b042d8d92ca639d4d70.jpg" },
  { name: "Hina Ubaid", mutual: "8 mutual friends", image: "https://i.pinimg.com/736x/52/93/ec/5293ecff201c7b042d8d92ca639d4d70.jpg" },
  { name: "Musab Junaidi", mutual: "15 mutual friends", image: "https://i.pinimg.com/736x/52/93/ec/5293ecff201c7b042d8d92ca639d4d70.jpg" },
  { name: "Sana Noman", mutual: "10 mutual friends", image: "https://i.pinimg.com/736x/52/93/ec/5293ecff201c7b042d8d92ca639d4d70.jpg" },
  { name: "Ali Fakhri Niazi", mutual: "3 mutual friends", image: "https://i.pinimg.com/736x/52/93/ec/5293ecff201c7b042d8d92ca639d4d70.jpg" },
  { name: "Syed Javed Ahmed", mutual: "26 mutual friends", image: "https://i.pinimg.com/736x/52/93/ec/5293ecff201c7b042d8d92ca639d4d70.jpg" },
  { name: "Vihanga Jadeja", mutual: "5 mutual friends", image: "https://i.pinimg.com/736x/52/93/ec/5293ecff201c7b042d8d92ca639d4d70.jpg" },
  { name: "Shozib Sayied", mutual: "1 mutual friend", image: "https://i.pinimg.com/736x/52/93/ec/5293ecff201c7b042d8d92ca639d4d70.jpg" },
  { name: "Dar-Al Arqam", mutual: "2 mutual friends", image: "https://i.pinimg.com/736x/52/93/ec/5293ecff201c7b042d8d92ca639d4d70.jpg" },
  { name: "Hina Ubaid", mutual: "8 mutual friends", image: "https://i.pinimg.com/736x/52/93/ec/5293ecff201c7b042d8d92ca639d4d70.jpg" },
  { name: "Musab Junaidi", mutual: "15 mutual friends", image: "https://i.pinimg.com/736x/52/93/ec/5293ecff201c7b042d8d92ca639d4d70.jpg" },
  { name: "Sana Noman", mutual: "10 mutual friends", image: "https://i.pinimg.com/736x/52/93/ec/5293ecff201c7b042d8d92ca639d4d70.jpg" },
  { name: "Ali Fakhri Niazi", mutual: "3 mutual friends", image: "https://i.pinimg.com/736x/52/93/ec/5293ecff201c7b042d8d92ca639d4d70.jpg" },
  { name: "Syed Javed Ahmed", mutual: "26 mutual friends", image: "https://i.pinimg.com/736x/52/93/ec/5293ecff201c7b042d8d92ca639d4d70.jpg" },
  { name: "Vihanga Jadeja", mutual: "5 mutual friends", image: "https://i.pinimg.com/736x/52/93/ec/5293ecff201c7b042d8d92ca639d4d70.jpg" },
];

const FriendsPage = () => {
  return (<>
    <Navbar/>

    <div style={{ display: "flex", backgroundColor: "#f0f2f5" }}>
      {/* <FriendSidebar /> */}
      <SidebarLeft />
      <div style={{ flex: 1, padding: "20px", marginLeft:"2%" }}>
        <h2>People you may know</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {dummyFriends.map((friend, index) => (
            <FriendCard key={index} {...friend} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FriendsPage;
