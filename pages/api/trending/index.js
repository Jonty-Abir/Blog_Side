import { instance } from "@/instance/instance";

export default async function handler(req, res) {
  const {
    data: { Trending },
  } = await instance.get("/api/data");
  if (Trending) return res.status(200).json(Trending);
  if (!Trending) return res.status(404).json({ error: "Data not found" });
}
