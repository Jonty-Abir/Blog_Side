import { Fetcher } from "@/lib/fetcher";
import Image from "next/image";
import Link from "next/link";
import Error from "../Components/_Child/Error";
import Author from "./_Child/Author";
import Spinner from "./_Child/Spinner";

export default function Section4() {
  const { data, error, isLoading } = Fetcher("/api/post/");
  if (isLoading) return <Spinner />;
  if (error) return <Error />;
  return (
    <>
      <section className="container mx-auto md:px-20 py-10">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="item">
            <h1 className="font-bold text-4xl py-12">Business</h1>
            <div className="flex flex-col gap-6">
              {/* POST */}
              {data[1] ? <Post data={data[1]} /> : <></>}
              {data[2] ? <Post data={data[2]} /> : <></>}
              {data[3] ? <Post data={data[3]} /> : <></>}
            </div>
          </div>
          <div className="item">
            <h1 className="font-bold text-4xl py-12">Travle</h1>
            <div className="flex flex-col gap-6">
              {/* POST */}
              {data[4] ? <Post data={data[4]} /> : <></>}
              {data[5] ? <Post data={data[5]} /> : <></>}
              {data[2] ? <Post data={data[2]} /> : <></>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Post({ data }) {
  const { img, published, subtitle, title, category,id, author } = data;

  return (  
    <>
      <div className="flex gap-10 flex-col md:flex-row shadow-sm shadow-gray-700 rounded-md items-center px-6 pt-6 hover:scale-105 duration-300 bg-gray-300">
        <div className="img flex-col justify-start">
          <Link href={`/post/${id}`}>
            <span>
              <Image
                src={`${img}` || "/images/img1.jpg"}
                width={400}
                height={450}
                className="rounded"
                alt="img"
              />
            </span>
          </Link>
        </div>
        <div className="info flex justify-center flex-col">
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
              <span className="text-md md:text-lg font-bold text-gray-800 hover:text-gray-600">
                {title || "Unknown"}
              </span>
            </Link>
          </div>
          {author ? <Author data={author}></Author> : <></>}
        </div>
      </div>
    </>
  );
}
