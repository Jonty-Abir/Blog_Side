import { instance } from "../../../instance/instance";

export default async function handler(req, res) {
  try {
    const { data } = await instance.get("/Trending");
    const Trending = data;
    if (Trending) return res.status(200).json(Trending);
    if (!Trending) return res.status(404).json({ error: "Data not found" });
  } catch (err) {
    res.status().json({ error: "error was occure!" });
  }
}
