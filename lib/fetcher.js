import useSwr from "swr";

const baseUrl =
  "https://blog-side.vercel.app" || "http://localhost:3000";
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
