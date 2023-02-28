import { instance } from "../../../instance/instance";

export default async function handler(req, res) {
  try {
    const { data } = await instance.get("/Posts");
    const Posts = data;
    if (Posts) return res.status(200).json(Posts);
    if (!Posts) return res.status(404).json({ error: "Data not found!" });
  } catch (err) {
    res.status(500).json({ error: "error was occure!" });
  }
}
