import { instance } from "@/instance/instance";

export default async function handler(req, res) {
  const { popularPostId } = req.query;
  try {
    const { data } = await instance.get("/api/data");
    const { Popular } = data;
    if (Popular) {
      const myPopularPost = Popular.find(
        (element) => element.id == popularPostId
      );
      if (myPopularPost) return res.status(200).json({ data: myPopularPost });
      return res.status(404).json({ error: "Popular Post not found" });
    }
    res.status().json({ error: "Data not found!" });
  } catch (err) {
    res.status(500).json({
      error: "there was serverside error!",
    });
  }
}
