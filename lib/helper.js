// const baseUrl = "http://localhost:3000";
const baseUrl = "https://gentle-gumdrop-75d919.netlify.app/";

// endpoind: http://localhost:3000/api/post/
export default async function getPost(id) {
  const response = await fetch(`${baseUrl}/api/post/`);
  const data = await response.json();
  if (data && id) {
    return data.find((element) => element.id == id);
  }
  return data;
}

export  async function getPopularPost(id) {
  const response = await fetch(`${baseUrl}/api/popular/`);
  const data = await response.json();
  if (data && id) {
    return data.find((element) => element.id == id);
  }
  return data;
}