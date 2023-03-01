import axios from "axios";

const baseUrl =
  process.env.NEXT_PUBLIC_PREFIX_BASE_URL_SERVER || "http://localhost:8080";

// axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: baseUrl,
});

export { instance };

