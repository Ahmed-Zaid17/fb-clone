import React, { useEffect, useState } from 'react';
import axios from 'axios';

function IntroSection() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/me", { withCredentials: true })
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  if (!user) {
    return <div className="intro-section">Loading...</div>;
  }

  return (
    <div className="intro-section">
      <h2>Intro</h2>
      <p>The Official Facebook page of {user.firstName} {user.surname}.</p>
      <p className="intro-sub">Page..</p>
    </div>
  );
}

export default IntroSection;
