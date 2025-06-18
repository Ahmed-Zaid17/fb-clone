import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { firstName, surname, dob, gender, emailOrPhone, password } = req.body;

  try {
    const user = new User({ firstName, surname, dob, gender, emailOrPhone, password });
    await user.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


// Login Route
// router.post('/login', async (req, res) => {
//   const { emailOrPhone, password } = req.body;

//   try {
//     const user = await User.findOne({ emailOrPhone });

//     if (!user) {
//       return res.status(401).json({ message: "User not found!" });
//     }

//     if (user.password !== password) {
//       return res.status(401).json({ message: "Incorrect password!" });
//     }

//     res.status(200).json({ message: "Login successful!" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error!" });
//   }
// });



router.post('/login', async (req, res) => {
  const { emailOrPhone, password } = req.body;

  try {
    const user = await User.findOne({ emailOrPhone });

    if (!user) return res.status(401).json({ message: "User not found!" });
    if (user.password !== password) return res.status(401).json({ message: "Incorrect password!" });

    // ✅ Store user info in session
    req.session.user = {
      id: user._id,
      firstName: user.firstName,
      surname: user.surname
    };

    res.status(200).json({ message: "Login successful!" });
  } catch (err) {
    res.status(500).json({ message: "Server error!" });
  }
});



router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed!" });
    }
    res.clearCookie('connect.sid');
    res.status(200).json({ message: "Logged out successfully" });
  });
});




router.get('/current-user', (req, res) => { //to see who is logged in
  if (req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(401).json({ message: "Not logged in" });
  }
});

router.get('/me', (req, res) => {
  if (req.session.user) {
    res.status(200).json({ user: req.session.user });
  } else {
    res.status(401).json({ message: "Not logged in" });
  }
});



export default router;



