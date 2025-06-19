// import React, { useState } from 'react';

// function ProfileHeader() {
//   const [isFollowing, setIsFollowing] = useState(false);

//   return (
//     <div className="profile-header">
//       <div className="profile-image-container">
//         <img
//           src="https://via.placeholder.com/150.png?text=ST"
//           alt="Profile"
//           className="profile-img"
//         />
//       </div>
//       <div className="profile-info">
//         <h1 className="profile-name">Sachin Tendulkar</h1>
//         <p className="profile-meta">
//           <span>38M followers</span>
//           <span> · </span>
//           <span>22 following</span>
//         </p>
//         <button 
//           className={`follow-btn ${isFollowing ? 'following' : ''}`}
//           onClick={() => setIsFollowing(!isFollowing)}
//         >
//           {isFollowing ? 'Following' : 'Follow'}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProfileHeader;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ProfileHeader() {
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://facebook-backend-9kq5.onrender.com/api/auth/me", { withCredentials: true })
//       .then((res) => setUser(res.data.user))
//       .catch(() => setUser(null));
//   }, []);

//   if (!user) {
//     return <div className="profile-header">Loading...</div>;
//   }

//   return (
//     <div className="profile-header">
//       <div className="profile-image-container">
//         <img
//           src="https://img.freepik.com/premium-vector/stylish-default-user-profile-photo-avatar-vector-illustration_664995-353.jpg"
//           alt="Profile"
//           className="profile-img"
//         />
//       </div>
//       <div className="profile-info">
//         <h1 className="profile-name">{user.firstName} {user.surname}</h1>
//         <p className="profile-meta">
//           <span>38M followers</span>
//           <span> · </span>
//           <span>22 following</span>
//         </p>
//         <button 
//           className={`follow-btn ${isFollowing ? 'following' : ''}`}
//           onClick={() => setIsFollowing(!isFollowing)}
//         >
//           {isFollowing ? 'Following' : 'Follow'}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProfileHeader;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileHeader() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);

  useEffect(() => {
    // Fetch logged-in user from session
    axios
      .get("https://facebook-backend-9kq5.onrender.com/api/auth/me", { withCredentials: true })
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null));

    // Generate random followers and following
    const randomFollowers = Math.floor(Math.random() * (100000000 - 1000000 + 1)) + 1000000; // 1M - 100M
    const randomFollowing = Math.floor(Math.random() * (500 - 20 + 1)) + 20; // 20 - 500

    setFollowers(randomFollowers);
    setFollowing(randomFollowing);
  }, []);

  if (!user) {
    return <div className="profile-header">Loading...</div>;
  }

  return (
    <div className="profile-header">
      <div className="profile-image-container">
        <img
          src="https://img.freepik.com/premium-vector/stylish-default-user-profile-photo-avatar-vector-illustration_664995-353.jpg"
          alt="Profile"
          className="profile-img"
        />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">{user.firstName} {user.surname}</h1>
        <p className="profile-meta">
          <span>{(followers / 1_000_000).toFixed(1)}M followers</span>
          <span> · </span>
          <span>{following} following</span>
        </p>
        <button 
          className={`follow-btn ${isFollowing ? 'following' : ''}`}
          onClick={() => setIsFollowing(!isFollowing)}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;
