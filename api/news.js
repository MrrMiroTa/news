export default async function handler(req, res) {
  const { category = "general", page = 1 } = req.query;

  const API_KEY = process.env.NEWS_API_KEY; // use server-side env var
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=20&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news data" });
  }
}
