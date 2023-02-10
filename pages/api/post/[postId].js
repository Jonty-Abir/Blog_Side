import { instance } from "@/instance/instance";
export default async function handler(req, res) {
  const { postId } = req.query;
  try {
    const { data } = await instance.get("/api/data/");
    const { Posts } = data;
    if (Posts) {
      const myPost = Posts.find((element) => element.id == postId);
      if (myPost) return res.status(200).json({ data: myPost });
      return res.status(404).json({ error: "Post not found!" });
    }
    res.status(404).json({ error: "posts not found!" });
  } catch (err) {
    res.status(500).json({ error: "there was serverside Error!" });
  }
}
