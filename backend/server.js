
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import session from 'express-session';
import pexelsRoutes from './routes/pexels.js';

dotenv.config();
const app = express();

// app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173', // your frontend's URL
  credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));


  // app.use(session({
  //   secret: 'yourSecretKey123', // change this in production!
  //   resave: false,
  //   saveUninitialized: false,
  //   store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  //   cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
  // }));

  app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // set true in production with https
      httpOnly: true
    }
  }));
  

app.use('/api/auth', authRoutes);
app.use('/api/pexels', pexelsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
