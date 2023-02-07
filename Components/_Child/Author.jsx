import Image from "next/image";
import Link from "next/link";
function Author({ data }) {
  if (!data)
    return (
      <h2 className="text-red-500 font-bold text-md text-center">Loading..</h2>
    );
  const { name, img, designation } = data;
  return (
    <div className="author flex py-5">
      <Image
        className="rounded-full bg-cover"
        src={`${img}` || "/images/author/author1.jpeg"}
        height={50}
        width={50}
        alt="Author_img"
      />
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"}>
          <span className="text-md font-bold text-gray-800 hover:text-gray-600">
            {name || "Unknown"}
          </span>
        </Link>
        <span className="text-sm text-gray-500">
          {designation || "Unknown"}
        </span>
      </div>
    </div>
  );
}

export default Author;
