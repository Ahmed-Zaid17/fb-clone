
// import { useState } from "react";
// import "./Home.css";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import SidebarLeft from "./SidebarLeft";


// function FacebookHome() {
//   const [posts, setPosts] = useState(Array(100).fill({
//     user: "Syed Ahmed Zaid",
//     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 🐱"
//   }));

//   return (
//     <div>
//       {/* Navbar */}
//     <Navbar/>

//       {/* Main Container */}
//       <div className="fb-container">
//         {/* Left Sidebar */}
//        <SidebarLeft/>

//         {/* Main Content */}
//         <div className="fb-main-content">
//           {/* Story Section */}
//           <div className="fb-story-section">
//             <div className="story">➕ Create Story</div>
//             <div className="story">🧔 Shah Sahab</div>
//             <div className="story">🧵 Sweet Stitches</div>
//             <div className="story">🎭 Reacts with Hassan</div>
//             <div className="story">🏏 Our Vadodara</div>
//             <div className="story">🧔 Our Gujarat</div>
//             <div className="story">🧔 Our Gujarat</div>
            
//           </div>

//           {/* Post Box */}
//           <div className="fb-post-box">
//             <input type="text" placeholder="What's on your mind, Syaidah?" />
//             <div className="post-options">
//               <button>📹 Live Video</button>
//               <button>🖼️ Photo/Video</button>
//               <button>😊 Feeling/Activity</button>
//             </div>
//           </div>

//           {/* Posts Section */}
//           <div className="fb-feed">
//             {posts.map((post, index) => (
//               <div key={index} className="fb-post">
//                 <h3>{post.user}</h3>
//                 <p>{post.content}</p>
//                 <div className="post-actions">
//                   <button>👍 Like</button>
//                   <button>💬 Comment</button>
//                   <button>🔄 Share</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Sidebar */}
//         {/* <div className="fb-right-sidebar"> */}
//           {/* Sponsored Section */}
//           {/* <div className="sponsored-section">
//             <h4>Sponsored</h4>
//             <div className="sponsored-ad">🌍 airindia.com</div>
//             <div className="sponsored-ad">👓 Lenskart Air</div>
//           </div> */}

//           {/* Contacts Section */}
//           {/* <div className="contacts-section">
//             <h4>Contacts</h4>
//             <ul>
//               <li>🟢 Zainab Khalid</li>
//               <li>🟢 Aiman Zia</li>
//               <li>🟢 Ahmar Siddiqui</li>
//               <li>🟢 Imtiyaz Ahmed</li>
//               <li>🟢 Syed Usama</li>
//             </ul>
//           </div> */}
//         {/* </div> */}
//       </div>
//     </div>
//   );
// }

// export default FacebookHome;

import { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import SidebarLeft from "./SidebarLeft";

function FacebookHome() {
  const [posts, setPosts] = useState([]);

  // Fetch videos from Pexels API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("https://api.pexels.com/videos/search?query=nature&per_page=10", {
          headers: {
            Authorization: "a0BP1Fu8okDPkNPL3deBBMR79fqqFEelmhAfIAok457uRVNGkvrljTsY"
          }
        });
        const data = await res.json();
        const formattedPosts = data.videos.map(video => ({
          user: "Pexels User",
          videoUrl: video.video_files[0]?.link,
          content: video.url // optional, or add your own caption
        }));
        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="fb-container">
        <SidebarLeft />

        <div className="fb-main-content">
          {/* Story Section */}
          <div className="fb-story-section">
            <div className="story">➕ Create Story</div>
            <div className="story">🧔 Shah Sahab</div>
            <div className="story">🧵 Sweet Stitches</div>
            <div className="story">🎭 Reacts with Hassan</div>
            <div className="story">🏏 Our Vadodara</div>
            <div className="story">🧔 Our Gujarat</div>
          </div>

          {/* Post Box */}
          <div className="fb-post-box">
            <input type="text" placeholder="What's on your mind, Syaidah?" />
            <div className="post-options">
              <button>📹 Live Video</button>
              <button>🖼️ Photo/Video</button>
              <button>😊 Feeling/Activity</button>
            </div>
          </div>

          {/* Posts Section */}
          <div className="fb-feed">
            {posts.map((post, index) => (
              <div key={index} className="fb-post">
                <h3>{post.user}</h3>
                {/* <p>{post.content}</p> */}
                {post.videoUrl && (
                  <video controls width="100%">
                    <source src={post.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <div className="post-actions">
                  <button>👍 Like</button>
                  <button>💬 Comment</button>
                  <button>🔄 Share</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacebookHome;
