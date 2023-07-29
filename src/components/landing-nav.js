import { CursorClick } from "@phosphor-icons/react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import MobileNavLinks from "./mobile-nav-links"

const LandingNav = ({ openMobileNav, setOpenMobileNav }) => {
	return (
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
	)
}

export default LandingNav