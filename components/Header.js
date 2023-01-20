import Link from "next/link";
import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-5xl items-center py-4">
      <div className="flex-[0.4]">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <h1 className={"text-2xl font-semibold tracking-tight text-white"}>
            Incline
          </h1>
        </Link>
      </div>

      <nav className="flex flex-[1.2] items-center justify-center space-x-10 font-medium text-white/70">
        <Link href="#getintouch" className="scroll-smooth hover:text-white">
          <div>Services</div>
        </Link>
        <Link href="#" className="hover:text-white">
          <div>Products</div>
        </Link>
        <Link href="#" className="flex items-center space-x-1 hover:text-white">
          <div>Blogs</div>
          <span className="rounded-full bg-blue-500/10 px-2 py-1 text-xs font-semibold text-blue-300">
            Coming Soon
          </span>
        </Link>
      </nav>
      <div className="flex flex-[0.4] items-center justify-end">
        <Link
          href="#"
          className="group flex w-max items-center space-x-4 rounded-lg border-y border-zinc-800 border-b-transparent bg-zinc-900 px-4 py-2 font-semibold text-white/90 duration-200 hover:border-t-zinc-700 hover:bg-zinc-800"
        >
          <div>Contact us</div>
          <ArrowRightCircleIcon className="h-6 w-6 text-blue-300" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
