import { instance } from "@/instance/instance";

export default async function handler(req, res) {
  const { data } = await instance.get("/api/data");
  const { Posts } = data;
  if (Posts) return res.status(200).json(Posts);
  if (!Posts) return res.status(404).json({ error: "Data not found!" });
}
