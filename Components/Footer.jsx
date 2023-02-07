import Link from "next/link";
import { ImFacebook, ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";
import NewsLatter from "./_Child/newsLatter";

function Footer() {
  const bg = {
    background: "url('/images/footer.png')",
    backgroundRepeat:"no-repeat",
    backgroundPosition: "bottom left",
  };
  return (
    <footer className="bg-gray-50" style={bg}>
      <NewsLatter />
      <div className=" container mx-auto justify-center py-12 ">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <span>
                <ImFacebook color="#888888" />
              </span>
            </Link>
            <Link href={"/"}>
              <span>
                <ImGithub color="#888888" />
              </span>
            </Link>
            <Link href={"/"}>
              <span>
                <ImLinkedin color="#888888" />
              </span>
            </Link>
            <Link href={"/"}>
              <span>
                <ImTwitter color="#888888" />
              </span>
            </Link>
          </div>
          <p className="py-5 text-gray-400 text-center">
            Copyright © 2023 All right resived | Made With Next JS by Abir Santra
          </p>
          <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
