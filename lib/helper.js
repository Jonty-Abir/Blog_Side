import { instance } from "../instance/instance";

export default async function getPost(id) {
  try {
    const { data } = await instance.get("/Posts");
    if (data && id) {
      return data.find((element) => element.id == id);
    }
    return data;
  } catch (err) {
    return err;
  }
}

export async function getPopularPost(id) {
  try {
    const { data } = await instance.get("/Popular");

    if (data && id) {
      return data.find((element) => element.id == id);
    }
    return data;
  } catch (err) {
    return err;
  }
}
