import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import logo1 from "../public/logo1.png";

function MyApp({ Component, pageProps }) {
  return (
    //Creator dashboard shows what you created and sold on the marketplace
    <div>
      {/* <nav className="border-b p-6">
        <p className="navBar first-letter:text-4xl font-bold">MILKY WAY</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">Home</a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-pink-500">Sell</a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500">My Digital Assets</a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500">Creator Dashboard</a>
          </Link>
        </div>
      </nav> */}
      <nav className="flex sticky top-0 items-center justify-between flex-wrap shadow-lg bg-gradient-to-r from-blue-900 via-indigo-600 to-purple-700 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          {/* <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="/img/logo.svg"
          >
            {" "}
          </svg> */}
          <Image
            src={logo1}
            alt="no"
            h-8
            w-8
            mr-2
            width={54}
            height={54}
            viewBox="0 0 54 54"
          />

          <span className="font-semibold pl-3 drop-shadow-md first-letter:text-4xl text-l tracking-tight ">
            MILKY WAY
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="/img/logo.svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Docs
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
