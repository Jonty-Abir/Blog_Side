import useSwr from "swr";

const baseUrl = "https://blog-side-e4l81nzo0-jonty-abir.vercel.app/";
const response = async (...arg) => {
  const response = await fetch(...arg);
  const data = await response.json();
  return data;
};

export  function Fetcher(apiEndPoint) {
  const { data, error, isLoading } = useSwr(
    `${baseUrl}${apiEndPoint}`,
    response
  );
  return { data, error, isLoading };
}
