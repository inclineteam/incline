import ChevronRightOutlined from "@/icons/ChevronRightOutlined";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Incline - Showcase a better website</title>
        <meta
          property="og:title"
          content="Incline -  Showcase a better website"
        />
        <meta
          property="og:description"
          content="We build elegant responsive websites, landing pages, web applications, and software solutions to help your business grow and enhance its digital presence."
        />
        <meta property="og:image" content="/og-img.png" />
      </Head>
      <div className="h-auto min-h-screen app text-[#E4E4FB] font-['BDOGrotesk']">
        <div
          style={{ backgroundImage: 'url("/grid.svg")' }}
          className="px-4 pt-4 relative bg-[#121220] overflow-y-hidden"
        >
          <div className="absolute w-32 -bottom-10 h-32 blur-3xl left-1/2 -translate-x-1/2 bg-[#855AFF]/70 rounded-full"></div>
          <header className="flex justify-between items-center relative max-w-6xl mx-auto rounded-full p-2 bg-[#151525]/70 shadow-[0_0_0_1px] shadow-[#6D6DCB]/20">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo-round.svg" width={35} height={35} />
              <p className="font-['Apfel'] text-2xl">Incline</p>
            </Link>

            <nav className="hidden md:flex items-center font-medium text-sm absolute left-1/2 -translate-x-1/2 space-x-10 top-1/2 -translate-y-1/2">
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/services">Services</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/design" className="flex items-center space-x-1">
                <p>Design System</p>
                <span className="px-2 py-0.5 text-indigo-200 bg-indigo-500/30 rounded-full">
                  Soon
                </span>
              </Link>
            </nav>

            <button className="font-semibold flex items-center bg-[#2F314F]/30 px-3 p-1.5 rounded-full border-[#D2D1FF]/10 border text-sm space-x-3">
              <p>Get in touch</p>
            </button>
          </header>

          <div className="py-20 border-b flex justify-center border-[#35396F]/20">
            <Image
              src="/incline.svg"
              width={330}
              height={330}
              className="-mb-20 relative "
            />
          </div>
        </div>
        <main className="px-4 max-w-6xl mx-auto pt-10 pb-20">
          <h1 className="text-4xl md:text-6xl font-['Apfel'] text-center mb-4">
            Showcase a better website.
          </h1>
          <p className="text-[#E4E4FB]/60 max-w-[64ch] mx-auto text-center md:text-lg">
            We build elegant responsive websites, landing pages, web
            applications, and software solutions to help your business grow and
            enhance its digital presence.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <button className="font-semibold flex items-center bg-[#2F314F]/30 p-1 pl-4 rounded-full border-[#D2D1FF]/20 border space-x-3">
              <p>See projects we've built</p>
              <div className="p-0.5 rounded-full bg-[#35385C]/40 border border-[#8388CD]/20">
                <ChevronRightOutlined className="w-6 h-6" />
              </div>
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
