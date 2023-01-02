import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CursorArrowRippleIcon,
} from "@heroicons/react/24/outline";

const Main = () => {
  return (
    <main className="mx-auto max-w-5xl pt-20">
      <h1 className="mx-auto text-center text-6xl font-bold leading-snug tracking-tight text-white">
        We're a team of
        <br />
        <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
          enthusiastic developers
        </span>
      </h1>
      <h2 className="mx-auto mt-6 max-w-[64ch] text-center text-lg text-zinc-500">
        We build elegant responsive websites, landing pages, web applications,
        and software solutions to help your business grow and enhance its
        digital presence.
      </h2>
      <div className="mt-10 mb-10 flex items-center justify-center space-x-2">
        <Link
          href="#"
          className="flex items-center space-x-4 rounded-lg border-t border-transparent border-blue-500 bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          <span>Get in touch</span>
          <CursorArrowRippleIcon className="h-6 w-6" />
        </Link>
        <Link
          href="#"
          className="lock flex items-center space-x-4 rounded-lg border-t border-zinc-800 bg-zinc-900 px-6 py-3 font-semibold text-zinc-300 duration-200 hover:border-zinc-700 hover:bg-zinc-800"
        >
          <span>Check out what we offer</span>
          <ChevronRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
};

export default Main;
