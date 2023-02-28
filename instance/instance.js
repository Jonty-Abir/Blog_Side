import axios from "axios";

const baseUrl = "http://localhost:8080";
// const baseUrl = "https://employ-management-system.vercel.app";

// axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: baseUrl,
});

export { instance };

