import Image from "next/image";
import Link from "next/link";

const related = ({ data, linkNav }) => {
  return (
    <section className="py-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>
      <div className="flex flex-col gap-10">
        {data?.map((value, index) => {
          return <Post key={value?.id} data={value} linkNav={linkNav}></Post>;
        })}
      </div>
    </section>
  );
};

function Post({ data, linkNav }) {
  const { id, title, img, author, category, published } = data;
  return (
    <>
      <div className="flex gap-5">
        <div className="img flex-col justify-start">
          <Link href={`${linkNav}${id}`}>
            <span>
              <Image
                src={`${img}` || "/images/img1.jpg"}
                width={300}
                height={200}
                className="rounded"
                alt="img"
              />
            </span>
          </Link>
        </div>
        <div className="info flex justify-center flex-col">
          <div className="cat">
            <Link href={`${linkNav}${id}`}>
              <span className="text-orange-600 hover:text-orange-800">
                {category || "Unknown"}
              </span>
            </Link>
            <Link href={`${linkNav}${id}`}>
              <span className="text-gray-800 hover:text-gray-600">
                {published || "Unknown"}
              </span>
            </Link>
          </div>
          <div className="title">
            <Link href={`${linkNav}${id}`}>
              <span className="text-lg md:text-lg font-bold text-gray-800 hover:text-gray-600">
                {title || "Unknown"}
              </span>
            </Link>
          </div>
          {/* author */}
          <div className="author flex py-5">
            <Image
              className="rounded-full bg-cover"
              src={`${author?.img}` || "/images/author/author1.jpeg"}
              height={50}
              width={50}
              alt="Author_img"
            />
            <div className="flex flex-col justify-center px-4">
              <Link href={`${linkNav}${id}`}>
                <span className="text-md font-bold text-gray-800 hover:text-gray-600">
                  {author?.name || "Unknown"}
                </span>
              </Link>
              <span className="text-sm text-gray-500">
                {author?.designation || "Unknown"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default related;
