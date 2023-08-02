// import LinkSidebar from "@/components/link-sidebar";
import { Slot, component$ } from "@builder.io/qwik";
import Footer from "./footer";
import Logo from "./logo";
import LinkSidebar from "./link-sidebar";

const MainLayout = component$(
  ({ title, subtitle }: { title: string; subtitle: string }) => {
    // const [openMobileNav, setOpenMobileNav] = useState(false);

    // useEffect(() => {
    //   document.body.style.overflow = openMobileNav ? "hidden" : "auto";
    //   return () => (document.body.style.overflow = "auto");
    // }, [openMobileNav]);

    return (
      <>
        <div class="h-auto min-h-screen bg-[#160e27]">
          <div class="ray-blur max-w-7xl relative lg:pt-0 lg:flex mx-auto md:px-10">
            <header
              class={`z-50 flex sticky items-center justify-between duration-300 lg:fixed lg:opacity-0 lg:pointer-events-none py-2.5 backdrop-blur-md`}
            >
              <Logo />

              <button
                aria-label="nav"
                // onClick={() => setOpenMobileNav(!openMobileNav)}
                class={`flex flex-col h-[30px] w-[30px] duration-300 items-center justify-center rounded-full`}
              >
                <div>
                  <div class={`h-0.5 w-5 bg-white duration-150`}></div>
                  <div
                    class={`h-0.5 w-3 ml-auto duration-150 mt-1 bg-white translate-x-0`}
                  ></div>
                  <div class={`h-0.5 w-5 mt-1 duration-150 bg-white`}></div>
                </div>
              </button>
            </header>
            <LinkSidebar />

            {/*          <AnimatePresence>
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
                  class="z-40 md:hidden fixed bg-white/10 p-4 right-6 left-6 rounded-3xl backdrop-blur-lg top-24 shadow-xl"
                >
                  <nav class="space-y-4 flex flex-col">
                    <Link
                      href="/contact"
                      class="border-b pt-2 border-white/[0.05] pb-5"
                    >
                      <button class="w-full select-none flex bg-[#E2C16B] hover:bg-[#EED288] duration-150 hover:shadow-[0_0_16px_0] hover:shadow-[#EED288]/30 text-[#160e27] text-sm items-center space-x-2 relative px-3 justify-center py-1.5 rounded-md group">
                        <span class="font-semibold relative">
                          Hit us up!
                        </span>
                        <div class="flex">
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
                  class="inset-0 fixed h-screen bg-black/50 backdrop-blur-md"
                ></motion.div>
              </>
            )}
          </AnimatePresence>*/}
            <div class="flex-1 pb-40 pt-8 md:pt-10 px-6 md:px-10">
              <h1 class="text-xl mb-2 md:mb-4 md:block md:text-2xl lg:text-4xl text-white tracking-tight font-bold">
                {title}
              </h1>
              <p class="text-[#958AB2] font-light max-w-[64ch] text-base/relaxed">
                {subtitle}
              </p>
              <Slot />
            </div>
          </div>

          <Footer />
        </div>
      </>
    );
  }
);

export default MainLayout;
