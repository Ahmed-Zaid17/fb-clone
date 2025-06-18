// routes/pexels.js
import express from "express";
import axios from "axios";

const router = express.Router();
const API_KEY = "a0BP1Fu8okDPkNPL3deBBMR79fqqFEelmhAfIAok457uRVNGkvrljTsY";

router.get("/videos", async (req, res) => {
  const { page = 1, per_page = 5 } = req.query;

  try {
    const response = await axios.get("https://api.pexels.com/videos/popular", {
      headers: {
        Authorization: API_KEY,
      },
      params: {
        page,
        per_page,
      },
    });

    res.json(response.data);
  } catch (err) {
    console.error("Error fetching from Pexels:", err);
    res.status(500).json({ error: "Failed to fetch videos" });
  }
});

export default router;
