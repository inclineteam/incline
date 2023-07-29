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
      {/* <!-- Primary Meta Tags --> */}
      <title>Incline - Software Development: Web, Mobile, & AI apps</title>
      <meta name="title" content="Incline - Software Development: Web, Mobile, & AI apps" />
      <meta name="description" content="We build elegant responsive websites, web applications, and custom software solutions to help your business grow, stand out from the digital market, and boost lead generation!" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://inclineteam.vercel.app/" />
      <meta property="og:title" content="Incline - Software Development: Web, Mobile, & AI apps" />
      <meta property="og:description" content="We build elegant responsive websites, web applications, and custom software solutions to help your business grow, stand out from the digital market, and boost lead generation!" />
      <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://inclineteam.vercel.app/" />
      <meta property="twitter:title" content="Incline - Software Development: Web, Mobile, & AI apps" />
      <meta property="twitter:description" content="We build elegant responsive websites, web applications, and custom software solutions to help your business grow, stand out from the digital market, and boost lead generation!" />
      <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
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

            <main className="py-20 flex">
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
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
