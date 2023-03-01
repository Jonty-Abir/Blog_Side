import useSwr from "swr";

const baseUrl =
  process.env.NEXT_PUBLIC_PREFIX_BASE_URL || "http://localhost:3000";
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
