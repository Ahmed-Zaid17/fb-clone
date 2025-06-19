// import React, { useState, useRef, useCallback } from "react";
// import Post from "./Post";
// import "./Feed.css";

// function Feed() {
//   // Sample data
//   const initialPosts = [
//     {
//       id: 1,
//       userName: "हँसते रहो",
//       content: "बहुत ही अनोखी मज़ाक की बात !",
//       videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//       likes: 10,
//       comments: []
//     },
//     {
//       id: 2,
//       userName: "S a d Thinking",
//       content: "This is a text-only post.",
//       videoUrl: "",
//       likes: 2,
//       comments: []
//     }
//   ];

//   const [posts, setPosts] = useState(initialPosts);
//   const [hasMore, setHasMore] = useState(true);
//   const observer = useRef();

//   const lastPostRef = useCallback(
//     (node) => {
//       if (observer.current) observer.current.disconnect();
//       observer.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting && hasMore) {
//           loadMorePosts();
//         }
//       });
//       if (node) observer.current.observe(node);
//     },
//     [hasMore]
//   );

//   const loadMorePosts = () => {
//     if (posts.length >= 5) {
//       // Stop after 5 posts for demo
//       setHasMore(false);
//       return;
//     }
//     const newPosts = [
//       {
//         id: 3,
//         userName: "Another User",
//         content: "Here's another post with a video",
//         videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//         likes: 0,
//         comments: []
//       }
//     ];
//     setPosts((prev) => [...prev, ...newPosts]);
//   };

//   return (
//     <div className="feed">
//       <div className="feed-inner">
//         {posts.map((post, idx) => {
//           if (idx === posts.length - 1) {
//             return (
//               <div ref={lastPostRef} key={post.id}>
//                 <Post post={post} />
//               </div>
//             );
//           }
//           return <Post key={post.id} post={post} />;
//         })}
//       </div>
//     </div>
//   );
// }

// export default Feed;

// import React, { useState, useRef, useCallback, useEffect } from "react";
// import Post from "./Post";
// import axios from "axios";
// import "./Feed.css";

// const API_KEY = "a0BP1Fu8okDPkNPL3deBBMR79fqqFEelmhAfIAok457uRVNGkvrljTsY";
// const API_URL = "https://api.pexels.com/v1/curated";

// function Feed() {
//   const [posts, setPosts] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const [page, setPage] = useState(1);
//   const observer = useRef();

//   const fetchPosts = async (pageNum) => {
//     try {
//       const res = await axios.get(API_URL, {
//         headers: {
//           Authorization: API_KEY
//         },
//         params: {
//           per_page: 5,
//           page: pageNum
//         }
//       });

//       const photoPosts = res.data.photos.map((photo) => ({
//         id: photo.id,
//         userName: photo.photographer,
//         content: photo.alt || "A beautiful photo",
//         videoUrl: "", // no video here
//         imageUrl: photo.src.large, // 👈 you'll need to update <Post /> to support this
//         likes: Math.floor(Math.random() * 100), // just a mock
//         comments: []
//       }));

//       if (photoPosts.length === 0) {
//         setHasMore(false);
//       } else {
//         setPosts((prev) => [...prev, ...photoPosts]);
//       }
//     } catch (error) {
//       console.error("Error fetching from API:", error);
//     }
//   };

//   useEffect(() => {
//     fetchPosts(page);
//   }, [page]);

//   const lastPostRef = useCallback(
//     (node) => {
//       if (observer.current) observer.current.disconnect();
//       observer.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting && hasMore) {
//           setPage((prevPage) => prevPage + 1);
//         }
//       });
//       if (node) observer.current.observe(node);
//     },
//     [hasMore]
//   );

//   return (
//     <div className="feed">
//       <div className="feed-inner">
//         {posts.map((post, idx) => {
//           if (idx === posts.length - 1) {
//             return (
//               <div ref={lastPostRef} key={post.id}>
//                 <Post post={post} />
//               </div>
//             );
//           }
//           return <Post key={post.id} post={post} />;
//         })}
//       </div>
//     </div>
//   );
// }

// export default Feed;

import React, { useState, useRef, useCallback, useEffect } from "react";
import Post from "./Post";
import axios from "axios";
import "./Feed.css";
import Navbar from "../components/Navbar";
import SidebarLeft from "./SidebarLeft";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const observer = useRef();

  const fetchVideoPosts = async (pageNum) => {
    try {
      const res = await axios.get("https://facebook-backend-9kq5.onrender.com/api/pexels/videos", {
        params: {
          per_page: 5,
          page: pageNum,
        },
        withCredentials: true,
      });

      const videoPosts = res.data.videos.map((video) => ({
        id: video.id,
        userName: video.user.name,
        content: "A trending video from Pexels",
        videoUrl: video.video_files.find(
          (file) => file.quality === "hd" && file.file_type === "video/mp4"
        )?.link,
        imageUrl: "",
        likes: Math.floor(Math.random() * 100),
        comments: [],
      }));

      if (videoPosts.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prev) => [...prev, ...videoPosts]);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideoPosts(page);
  }, [page]);

  const lastPostRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  return (
    <>
      <Navbar />
      <div className="feed-container">
        <SidebarLeft />
        <div className="feed">
          <div className="feed-inner">
           
            {posts.map((post, idx) => {
              const uniqueKey = `${post.id}-${idx}`;

              if (idx === posts.length - 1) {
                return (
                  <div ref={lastPostRef} key={uniqueKey}>
                    <Post post={post} />
                  </div>
                );
              }
              return <Post key={uniqueKey} post={post} />;
            })}


          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
