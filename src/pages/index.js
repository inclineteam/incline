import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import {
  CaretDown,
  CaretRight,
  CursorClick,
  List,
} from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import MobileNavLinks from "@/components/mobile-nav-links";
import Footer from "@/components/footer";

export default function Home() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openMobileNav ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [openMobileNav]);

  return (
    <>
      <Head>
        <title>Incline - Synergistic Fusion</title>
        <meta property="og:title" content="Incline -  Synergistic Fusion" />
        <meta
          property="og:description"
          content="Incline Team is a dynamic startup agency that unifies freelancers, open-source developers, and an agency environment, creating a powerful synergy. Our exceptional ecosystem thrives on fostering collaboration and growth by seamlessly connecting experienced mentors, ambitious students, and clients."
        />
        <meta property="og:image" content="/og-img.png" />
      </Head>
      <div
        className={
          "h-auto min-h-screen items-center app relative"
        }
      >
       <div className="flex flex-col min-h-screen">
          <div className="w-full bg-[#E2C16B] py-4 px-6 text-xs md:text-sm font-medium text-center text-[#150E27]">
          We are doing a website for to make proposing your ideal website to us
          much faster! Click to learn more
        </div>
        <div className="px-6 relative max-w-7xl blur-bg flex-1 w-full pt-10 pb-20">
          <header
            className={`sticky duration-300 max-w-4xl top-10 overflow-hidden mx-auto backdrop-blur-lg px-3 py-2 rounded-full flex items-center z-50 justify-between ${
              openMobileNav ? "bg-white/10 top-28" : "bg-[#634e9c]/10 top-10"
            }`}
          >
            <Link href="/" className="flex items-center space-x-3">
              <Image src={logo} alt="" height={30} width={30} />
              <h1 className="text-2xl tracking-tight font-medium text-white">
                Incline
              </h1>
            </Link>

            <nav className="hidden md:flex space-x-10 items-center absolute left-1/2 -translate-x-1/2">
              <Link
                href="/about"
                className="text-white text-sm font-medium hover:text-[#e2c16b]"
              >
                About
              </Link>
              <Link
                href="/"
                className="text-white text-sm font-medium hover:text-[#e2c16b]"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-white text-sm font-medium hover:text-[#e2c16b]"
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className="text-white text-sm font-medium hover:text-[#e2c16b]"
              >
                Blogs
              </Link>
            </nav>

            <button className="hidden md:flex select-none bg-[#E2C16B] text-[#160e27] text-sm items-center space-x-2 relative px-4 py-1.5 rounded-full">
              <span className="font-semibold relative">Get in touch</span>
              <CursorClick weight="fill" className="relative" />
            </button>

            <button
              onClick={() => setOpenMobileNav(!openMobileNav)}
              className={`md:hidden relative h-[30px] w-[30px] duration-300 items-center justify-center flex flex-col rounded-full ${openMobileNav ? "bg-white/10" : null}`}
            >
                <div>
                  <div
                  className={`right-2 h-0.5 w-5 duration-150 bg-white ${
                    openMobileNav && "-rotate-45 translate-y-[3px]"
                  }`}
                ></div>
                <div
                  className={`right-2 duration-150 h-0.5 w-5 mt-1 bg-white ${
                    openMobileNav && "-translate-y-[3px] rotate-45"
                  }`}
                ></div>
                </div>
            </button>
          </header>

          <AnimatePresence>
            {openMobileNav && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.2 },
                  }}
                  exit={{ opacity: 0 }}
                  className="z-40 md:hidden fixed top-40 translate-y-1/2 bg-white/10 p-4 right-6 left-6 rounded-3xl backdrop-blur-lg mt-4 shadow-xl"
                >
                  <nav className="space-y-4 flex flex-col">
                    <Link
                      href="/contact"
                      className="border-b pt-2 border-white/[0.05] pb-5"
                    >
                      <button className="flex w-full justify-center select-none bg-[#E2C16B] text-[#160e27] text-sm items-center space-x-2 relative px-4 py-1.5 rounded-full">
                        <span className="font-semibold relative">
                          Get in touch
                        </span>
                        <CursorClick weight="fill" className="relative" />
                      </button>
                    </Link>
                    <MobileNavLinks />
                  </nav>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  role="button"
                  animate={{ opacity: 1, transition: { duration: 0.2 } }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpenMobileNav(false)}
                  className="inset-0 fixed h-screen bg-black/50 backdrop-blur-md"
                ></motion.div>
              </>
            )}
          </AnimatePresence>

          <main className="py-20 text-center">
            <Link href="/socials" className="text-[#E2C16B] hover:underline">
              Follow us on our socials!
            </Link>
            <h1 className="text-4xl md:text-5xl my-6 md:my-8 text-white tracking-tight font-bold">
              Flex a better website.
            </h1>
            <p className="md:text-lg text-base leading-relaxed font-light max-w-[60ch] text-[#958AB2] mx-auto">
              We build elegant responsive websites, landing pages, web
              applications, and software solutions to help your business grow
              and enhance its digital presence.{" "}
            </p>
            <div className="flex mt-10 justify-center">
              <button className="select-none flex bg-[#E2C16B] text-[#160e27] text-sm items-center space-x-2 pl-4 pr-1.5 py-1.5 rounded-full">
                <span className="font-semibold">
                  Learn how you can get started
                </span>
                <div className="p-1 rounded-full bg-[#160e27]">
                  <CaretRight weight="fill" className="text-[#E2C16B]" />
                </div>
              </button>
            </div>
          </main>
        </div>
       </div>

        <Footer />
      </div>
    </>
  );
}
