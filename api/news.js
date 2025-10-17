// api/news.js
import axios from "axios";

export default async function handler(req, res) {
  const { category = "general", page = 1 } = req.query;
  const PAGE_SIZE = 20;
  const API_KEY = process.env.NEWS_API_KEY; // use process.env, not import.meta.env

  if (!API_KEY) {
    return res.status(500).json({ error: "API key is missing" });
  }

  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines",
      {
        params: {
          country: "us",
          category,
          page,
          pageSize: PAGE_SIZE,
          apiKey: API_KEY,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(err.response?.status || 500).json({ error: err.message });
  }
}
