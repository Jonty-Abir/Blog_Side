import { instance } from "@/instance/instance";
export default async function handler(req, res) {
  const { trendingId } = req.query;
  try {
    const { data } = await instance.get(`/api/data/`);
    const { Trending } = data;
    if (Trending) {
      const myTrendingPost = Trending.find(
        (element) => element.id == trendingId
      );
      if (myTrendingPost) return res.status(200).json({ data: myTrendingPost });
      return res.status(404).json({ error: "Trending post not found!" });
    }
    res.status(404).json({ error: "Data not found!" });
  } catch (err) {
    res.status(500).json({ error: "there was serverside error!" });
  }
}
