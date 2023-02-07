import Author from "@/Components/_Child/Author";
import Related from "@/Components/_Child/related";
import Layout from "@/Layout/Layout";
import { getPopularPost } from "@/lib/helper";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Page({ data, allData }) {
  const router = useRouter();
  const { popularId } = router.query;
  return <Article data={data} allPost={allData}></Article>;
}
function Article({ data, allPost }) {
  const { author, category, description, img, published, subtitle, id, title } =
    data;
  return (
    <>
      <Head>
        <title>Propular post</title>
      </Head>
      <Layout>
        <section className="container mx-auto md:px-2 py-16 pt-44 w-1/2">
          <div className="flex justify-center">
            {author ? <Author data={author}></Author> : <></>}
          </div>
          <div className="post py-10">
            <h2 className="font-bold text-3xl text-center pb-5s">
              {title || "Unknown"}
            </h2>
            <p className="text-gray-500 text-xl text-center"></p>
            <div className="py-10">
              <Image
                src={img || "/images/img1.jpg"}
                width={600}
                height={600}
                alt="Img"
              />
            </div>
            <div className="content text-gray-500 flex flex-col gap-4">
              <p>{description || "Unknown"}</p>
            </div>
          </div>
          <Related data={allPost} linkNav="/popular/" />
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { popularId } = params;
  const data = await getPopularPost(popularId);
  const allData = await getPopularPost();

  return {
    props: {
      data,
      allData,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPopularPost();
  const paths = posts.map((value) => {
    return { params: { popularId: value.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}
