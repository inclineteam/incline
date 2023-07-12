import LinkSidebar from "@/components/link-sidebar";
import { ArrowRight, List, Timer } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MobileNavLinks from "@/components/mobile-nav-links";
import Head from "next/head";
import Footer from "@/components/footer";

const MainLayout = ({ title, children }) => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openMobileNav ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [openMobileNav]);

  const seoTitle = `${title} | Incline`;

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
      </Head>
      <div className="h-auto min-h-screen bg-[#160e27]">
        <div className="ray-blur max-w-7xl relative lg:pt-0 lg:flex mx-auto md:px-10">
          <header
            className={`z-50 flex sticky items-center justify-between duration-300 lg:hidden py-2.5 backdrop-blur-md ${
              openMobileNav ? "bg-white/10 top-8 mx-6 rounded-full px-3" : "px-6 bg-black/40 top-0"
            }`}
          >

            <Link href="/" className="flex w-max items-center space-x-3">
              <Image src='/logo.svg' alt="logo" height={30} width={30} />
              <h1 className="text-lg tracking-tight font-medium text-white">
                Incline
              </h1>
            </Link>

            <button
              onClick={() => setOpenMobileNav(!openMobileNav)}
              className={`flex flex-col h-[30px] w-[30px] duration-300 items-center justify-center rounded-full ${openMobileNav ? "bg-white/10" : null}`}
            > 
                <div>
                  <div
                  className={`h-0.5 w-5 bg-white duration-150 ${
                    openMobileNav && "translate-y-1.5 -rotate-45"
                  }`}
                ></div>
                <div
                  className={`h-0.5 w-3 ml-auto duration-150 mt-1 bg-white ${
                    openMobileNav
                      ? "-translate-x-2 opacity-0"
                      : "opacity-1 translate-x-0"
                  }`}
                ></div>
                <div
                  className={`h-0.5 w-5 mt-1 duration-150 bg-white ${
                    openMobileNav && "-translate-y-1.5 rotate-45"
                  }`}
                ></div>
                </div>
            </button>
          </header>
          <LinkSidebar />

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
                  className="z-40 md:hidden fixed bg-white/10 p-4 right-6 left-6 rounded-3xl backdrop-blur-lg top-24 shadow-xl"
                >
                  <nav className="space-y-4 flex flex-col">
                    <Link
                      href="/contact"
                      className="border-b pt-2 border-white/[0.05] pb-5"
                    >
                      <button className="w-full select-none flex bg-[#E2C16B] hover:bg-[#EED288] duration-150 hover:shadow-[0_0_16px_0] hover:shadow-[#EED288]/30 text-[#160e27] text-sm items-center space-x-2 relative px-3 justify-center py-1.5 rounded-md group">
                        <span className="font-semibold relative">
                          Hit us up!
                        </span>
                        <div className="flex">
                          <ArrowRight weight="bold" />
                        </div>
                      </button>
                    </Link>
                    <MobileNavLinks />
                  </nav>
                </motion.div>

                <motion.div
                  onClick={() => setOpenMobileNav(false)}
                  role="button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.2 } }}
                  exit={{ opacity: 0 }}
                  className="inset-0 fixed h-screen bg-black/50 backdrop-blur-md"
                ></motion.div>
              </>
            )}
          </AnimatePresence>
          <div className="flex-1 pb-40 pt-8 md:pt-10 px-6 md:px-10">
            <h1 className="text-xl mb-2 md:mb-4 md:block md:text-2xl lg:text-4xl text-white tracking-tight font-bold">
              {title}
            </h1>
            {children}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
