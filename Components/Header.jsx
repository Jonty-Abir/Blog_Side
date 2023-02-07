import Link from "next/link";
import { ImFacebook, ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";

function Header() {
  return (
    <header className="navbar w-screen">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-2 flex justify-center py-4 sm:py-0 ">
          <input type="text" className="input-text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href="/" className="font-bold text-2xl">
            Home
          </Link>
        </div>
        <div className="w-96 flex justify-center order-3">
          <div className="flex gap-6">
            <a href="#">
              <ImFacebook color="#888888" />
            </a>
            <a href="#">
              <ImTwitter color="#888888" />
            </a>
            <a href="#">
              <ImLinkedin color="#888888" />
            </a>
            <a href="#">
              <ImGithub color="#888888" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
