import { data } from "../data";
export default function handler(req, res) {
  const { postId } = req.query;
  const { Posts } = data;
  if (Posts) {
    const myPost = Posts.find((element) => element.id == postId);
    if (myPost) return res.status(200).json({ data: myPost });
    return res.status(404).json({ error: "Post not found!" });
  }
  res.status(404).json({ error: "posts not found!" });
}
