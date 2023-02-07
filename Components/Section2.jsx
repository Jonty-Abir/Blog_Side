import { Fetcher } from "@/lib/fetcher";
import Image from "next/image";
import Link from "next/link";
import Error from "../Components/_Child/Error";
import Author from "./_Child/Author";
import Spinner from "./_Child/Spinner";

export default function Section2() {
  const { data, error, isLoading } = Fetcher("/api/post/");
  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl pb-12 text-center">latest post</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((value, inx) => {
            return <Post data={value} key={inx}></Post>;
          })}
        </div>
      </section>
    </>
  );
}

function Post({ data }) {
  const { img, published, subtitle, title, category,id, author } = data;
  return (
    <>
      <div className="items shadow-sm shadow-gray-700 rounded-md items-center px-6 pt-6 hover:scale-105 duration-300 bg-gray-300">
        <div className="images">
          <Link href={`/post/${id}`}>
            <Image
              className="rounded-md"
              src={img}
              width={500}
              height={500}
              alt="section_img"
            />
          </Link>
        </div>
        <div className="info flex flex-col py-4 justify-center">
          <div className="cat">
            <Link href={`/post/${id}`}>
              <span className="text-orange-600 hover:text-orange-800">
                {category || "Unknown"}
              </span>
            </Link>
            <Link href={`/post/${id}`}>
              <span className="text-gray-800 hover:text-gray-600">
                {published || "Unknown"}
              </span>
            </Link>
          </div>
          <div className="title">
            <Link href={`/post/${id}`}>
              <span className="text-3xl md:text-xl font-bold text-gray-800 hover:text-gray-600">
                {title || "Unknown"}
              </span>
            </Link>
          </div>
          <p className="text-gray-500 py-3">{subtitle || "Unknown"}</p>
          {/* Author Components */}
          {author ? <Author data={author}></Author> : <></>}
        </div>
      </div>
    </>
  );
}
