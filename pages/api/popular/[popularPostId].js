// import { data } from "../data";
import { instance } from "../../../instance/instance";

export default async function handler(req, res) {
  try {
    const { data } = await instance.get("/Popular");
    const Popular = data;
    const { popularPostId } = req.query;

    if (Popular) {
      const myPopularPost = Popular.find(
        (element) => element.id == popularPostId
      );
      if (myPopularPost) return res.status(200).json({ data: myPopularPost });
      return res.status(404).json({ error: "Popular Post not found" });
    }
    res.status().json({ error: "Data not found!" });
  } catch (err) {
    res.status(500).json({ error: "error was occure!" });
  }
}
