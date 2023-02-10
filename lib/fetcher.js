import { instance } from "@/instance/instance";
import useSwr from "swr";

// const baseUrl = "http://localhost:3000";
// const baseUrl = "https://gentle-gumdrop-75d919.netlify.app/";
const response = async (...arg) => {
  const { data } = await instance.get(...arg);
  // const data = await response.json();
  return data;
};

export function Fetcher(apiEndPoint) {
  const { data, error, isLoading } = useSwr(`${apiEndPoint}`, response);
  return { data, error, isLoading };
}
