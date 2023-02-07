import data from "../data";

export default function handler(req, res) {
  const { trendingId } = req.query;
  const { Trending } = data;
  if (Trending) {
    const myTrendingPost = Trending.find((element) => element.id == trendingId);
    if (myTrendingPost) return res.status(200).json({ data: myTrendingPost });
    return res.status(404).json({ error: "Trending post not found!" });
  }
  res.status(404).json({ error: "Data not found!" });
}
