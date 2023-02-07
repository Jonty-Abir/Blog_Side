import Image from "next/image";
import Link from "next/link";
import Author from "./_Child/Author";
// Import Swiper React components
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Fetcher } from "@/lib/fetcher";
import "swiper/css";
import Error from "../Components/_Child/Error";
import Spinner from "./_Child/Spinner";

export default function Section1() {
  SwiperCore.use([Autoplay]);

  const bgImg = {
    background: "URL('/images/banner.png')no-repeat",
    backgroundPosition: "right",
    backgroundSize: "350px",
  };
  const { data, error, isLoading } = Fetcher("/api/post/");

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <section className="py-24 pt-44" style={bgImg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Treading</h1>
        <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 2000 }}>
          {data?.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                <Slide data={value}></Slide>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

function Slide({ data }) {
  const { img, published, subtitle, title, category, id, author } = data;
  return (
    <>
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 px-4 ">
        <div className="image">
          <Link href={`/post/${id}`}>
            <Image
              className="rounded-md"
              src={`${img}` || "/images/author/author1.jpg"}
              width={400}
              height={300}
              alt="section_img"
            />
          </Link>
        </div>
        <div className="info flex justify-center flex-col">
          {/* catagoris */}
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
              <span className="text-3xl md:text-3xl font-bold text-gray-800 hover:text-gray-600">
                {title || "Unknown"}
              </span>
            </Link>
          </div>
          <p className="text-gray-500 py-3">{subtitle || "Unknown"}</p>
          {/* Author Components */}
          {author ? <Author data={author}></Author> : <></>}
          {/* <Author/> */}
        </div>
      </div>
      ;
    </>
  );
}
