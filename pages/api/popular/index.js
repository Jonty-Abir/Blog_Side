import { instance } from "@/instance/instance";

export default async function handler(req, res) {
  const { data } = await instance.get("/api/data");
  const { Popular } = data;

  if (Popular) return res.status(200).json(Popular);
  if (!Popular) return res.status(404).json({ error: "Data not found!" });
}
