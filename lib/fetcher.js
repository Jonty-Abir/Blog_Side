import useSwr from "swr";

const baseUrl = "https://gentle-gumdrop-75d919.netlify.app";
// const baseUrl= process.env.BASE_URL
console.log(baseUrl)
// const baseUrl = "https://gentle-gumdrop-75d919.netlify.app/";
const response = async (...arg) => {
  const response = await fetch(...arg);
  const data = await response.json();
  return data;
};

export function Fetcher(apiEndPoint) {
  const { data, error, isLoading } = useSwr(
    `${baseUrl}${apiEndPoint}`,
    response
  );
  return { data, error, isLoading };
}
