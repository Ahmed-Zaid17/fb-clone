// import React from "react";
// import "./LoginPage.css";
// import { Link } from "react-router-dom";

// const LoginPage = () => {
//   return (
    
//     <div className="login-container">
//       <div className="left-section">
//         <div className="image-gallery">
//           {/* <img src="src/assets/images/facebook-logo.jpeg" alt="" className="gallery-item" style={h}/> */}
//           <img src="src/assets/images/login-page-img.png" alt="" className="gallery-item" />
//         </div>
//         <h1 className="login-title">
//           Explore <br></br> the <br></br>things<br></br> <span className="highlight">you love.</span>
//         </h1>
//       </div>
//       <div className="right-section">
//         <div className="login-box">
//           <h2>Log in to Facebook</h2>
//           <input type="text" placeholder="Email address or mobile number" />
//           <input type="password" placeholder="Password" />
//           <button className="login-button">Log in</button>
//           <a href="#" className="forgot-password">
//             Forgotten password?
//           </a>
//           <hr />
//           <button className="create-account">Create new account</button>
//         <Link to="/home">👥 Home</Link>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://facebook-backend-9kq5.onrender.com/api/auth/login", {
        emailOrPhone,
        password,
      });

      alert(res.data.message);
      navigate("/home"); // 👈 Redirect to home after login
    } catch (err) {
      alert("Invalid credentials or server error!");
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="image-gallery">
          <img src="src/assets/images/login-page-img.png" alt="" className="gallery-item" />
        </div>
        <h1 className="login-title">
          Explore <br /> the <br /> things <br /> <span className="highlight">you love.</span>
        </h1>
      </div>
      <div className="right-section">
        <div className="login-box">
          <h2>Log in to Facebook</h2>
          <input
            type="text"
            placeholder="Email address or mobile number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Log in
          </button>
          <a href="#" className="forgot-password">Forgotten password?</a>
          <hr />
          <Link to="/FacebookSignUp"> <button className="create-account">Create new account</button></Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
