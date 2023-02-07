const baseUrl = "https://blog-side-e4l81nzo0-jonty-abir.vercel.app/";
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