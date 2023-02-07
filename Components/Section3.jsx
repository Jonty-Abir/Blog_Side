import { Fetcher } from "@/lib/fetcher";
import Image from "next/image";
import Link from "next/link";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Error from "../Components/_Child/Error";
import Author from "./_Child/Author";
import Spinner from "./_Child/Spinner";

export default function Section3() {
  SwiperCore.use([Autoplay]);
  const { data, error, isLoading } = Fetcher("/api/popular/");
  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl pb-12 text-center"> Most Propuler</h1>
        <Swiper
          // slidesPerView={2}
          breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 50 } }}
          loop={true}
          autoplay={{ delay: 2000 }}
        >
          {data?.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                {" "}
                <Post data={value}></Post>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}

function Post({ data }) {
  const { img, published, subtitle, title, category, id, author } = data;
  return (
    <>
      <div className="grid p-4 shadow-sm shadow-gray-700 items-center px-6 pt-6 hover:scale-105 duration-300 bg-gray-300">
        <div className="images">
          <Link href={`/popular/${id}`}>
            <Image
              className="rounded-md"
              src={`${img}` || "/images/img1.jpg"}
              width={300}
              height={200}
              alt="section_img"
            />
          </Link>
        </div>
        <div className="info flex flex-col py-4 justify-center">
          <div className="cat">
            <Link href={`/popular/${id}`}>
              <span className="text-orange-600 hover:text-orange-800">
                {category || "Unknown"}
              </span>
            </Link>
            <Link href={`/popular/${id}`}>
              <span className="text-gray-800 hover:text-gray-600">
                {published || "Unknown"}
              </span>
            </Link>
          </div>
          <div className="title">
            <Link href={`/popular/${id}`}>
              <span className="text-lg md:text-xl font-bold text-gray-800 hover:text-gray-600">
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
