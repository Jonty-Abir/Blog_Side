import { instance } from "../../../instance/instance";

export default async function handler(req, res) {
  try {
    const { data } = await instance.get("/Posts");
    const Posts = data;
    const { postId } = req.query;
    if (Posts) {
      const myPost = Posts.find((element) => element.id == postId);
      if (myPost) return res.status(200).json({ data: myPost });
      return res.status(404).json({ error: "Post not found!" });
    }
    res.status(404).json({ error: "posts not found!" });
  } catch (err) {
    res.status(500).json({ err: "error was occure!" });
  }
}
