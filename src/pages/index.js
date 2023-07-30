import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import {
    ArrowRight,
  CaretDown,
  CaretRight,
  CursorClick,
  List,
  Phone,
  Shapes,
} from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import MobileNavLinks from "@/components/mobile-nav-links";
import Footer from "@/components/footer";
import LandingHeader from "@/components/landing-header";
import LandingNav from "@/components/landing-nav";
import LandingHeroTexts from "@/components/landing-hero-texts";

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
      <div className={"h-auto min-h-screen items-center app relative"}>

        <div className="flex flex-col min-h-screen">
        {/* TODO: Uncomment when the blog for Propl has been created */}
          {/*          <div className="w-full bg-[#E2C16B] py-4 px-6 text-xs md:text-sm font-medium text-center text-[#150E27]">
            We are doing a website for to make proposing your ideal website to
            us much faster! Click to learn more
          </div>*/}
          <div className="px-6 relative mx-auto max-w-7xl blur-bg flex-1 w-full pt-6 pb-20">
          <img src="/circle-pattern.png" className="opacity-30 pointer-events-none absolute top-0 z-50 left-28 h-[600px] w-auto" />
          <img src="/triangle-pattern.png" className="pointer-events-none absolute right-24 top-20 z-50 h-[650px] w-auto" />
            <LandingHeader openMobileNav={openMobileNav} setOpenMobileNav={setOpenMobileNav} />
            <LandingNav openMobileNav={openMobileNav} setOpenMobileNav={setOpenMobileNav} />

            <main className="py-20 lg:px-3 flex">
              <LandingHeroTexts />
              {/* <Image
                src="/hero-images.png"
                width={600}
                height={600}
                className="pointer-events-none select-none ml-auto -mt-20 -mb-10 relative z-[55]"
              />*/}
              <div style={{
                backgroundImage: "url('/hero-images.png')",
                backgroundSize: 700,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
                width: 700,
                height: 700,
              }} className="ml-auto -mt-28 -mb-10 relative z-[55]">
              </div>
            </main>

          <div className="flex items-center flex-col">
            <Image src='/team.svg' width={80} height={80} />
            <p className="text-[#E2C16B] font-medium mt-4 mb-2 text-center">Incline Team</p>
            <div>
              <p>
                We are a passionate and enthusiastic group of tech enthusiasts who thrive on turning ideas into reality. Our team is driven by a collective commitment to excellence, fueled by the love of technology, and empowered by the joy of creating innovative solutions that make a positive impact.
              </p>
            </div>
          </div>
          </div>

        </div>

        <Footer />
      </div>
    </>
  );
}
