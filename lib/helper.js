import { instance } from "@/instance/instance";
// const baseUrl = "https://gentle-gumdrop-75d919.netlify.app/";
// endpoind: http://localhost:3000/api/post/
export default async function getPost(id) {
  const { data } = await instance.get(`/api/post/`);
  // const data = await response.json();
  if (data && id) {
    return data.find((element) => element.id == id);
  }
  return data;
}

export async function getPopularPost(id) {
  const { data } = await instance.get(`/api/popular/`);
  // const data = await response.json();
  if (data && id) {
    return data.find((element) => element.id == id);
  }
  return data;
}
