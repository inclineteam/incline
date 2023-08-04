import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import Footer from "~/components/footer";
import LandingHeader from "~/components/landing/header";
import LandingHeroTexts from "~/components/landing/hero-texts";
import { metaDefaults } from "~/data/meta-defaults";
import IcSharpFormatQuote from "~icons/ic/sharp-format-quote";
import LucideChevronRight from "~icons/lucide/chevron-right";

const metaTitle = "Incline - Software Development: Web & Mobile apps";
const description =
  "We build elegant responsive websites, web applications, and custom software solutions to help your business grow, stand out from the digital market, and boost lead generation!";

export default component$(() => {
  return (
    <>
      <div
        class={
          "h-auto min-h-screen items-center bg-[#160e27] relative text-white"
        }
      >
        <div class="flex flex-col min-h-screen">
          <div class="px-6 relative mx-auto max-w-7xl blur-bg flex-1 w-full pt-6 pb-40">
            <LandingHeader />

            <Image
              src="/circle-pattern.svg"
              alt="Circle Pattern"
              height={600}
              width={363}
              class="opacity-30 pointer-events-none absolute top-0 z-50 left-32"
            />
            <Image
              src="/triangle-pattern.svg"
              alt="Triangle Pattern"
              height={650}
              width={530}
              class="pointer-events-none absolute right-24 top-20 z-50"
            />

            <main class="py-20 lg:px-3 flex">
              <LandingHeroTexts />
              <Image
                src="/hero-images.svg"
                alt="Hero Image"
                width={700}
                height={700}
                priority={true}
                class="pointer-events-none select-none ml-auto -mt-20 -mb-10 relative z-[55]"
              />
            </main>

            <div class="pb-40 flex items-center flex-col">
              <Image src="/team.svg" alt="Team" width={80} height={80} />
              <p class="text-[#E2C16B] font-medium mt-4 mb-2 text-center">
                Incline Team
              </p>
              <div class="relative">
                <IcSharpFormatQuote class="w-36 h-36 text-[#291741] right-full bottom-full absolute" />
                <p class="font-light max-w-[68ch] text-center text-lg mx-auto text-white">
                  We are a passionate and enthusiastic group of tech enthusiasts
                  who thrive on turning ideas into reality. Our team is driven
                  by a collective commitment to excellence, fueled by the love
                  of technology, and empowered by the joy of creating innovative
                  solutions that make a positive impact.
                </p>
                <IcSharpFormatQuote class="w-36 h-36 text-[#291741] left-full top-full absolute" />
              </div>
            </div>

            <div class="flex justify-center items-center">
              <div class="w-[552px] h-[441px]">
                <div class="h-1/2 w-full pb-4 p-px border border-[#412D70]/40 rounded-[40px]">
                  <div class="text-8xl space-x-10 justify-center pt-10 pb-6 flex font-extrabold">
                    <div class="relative">
                      <div class="absolute -top-1 w-24 h-28 rounded-full blur-xl bg-gradient-to-br from-[#E29D6B]/30 to-[#E2C16B]/30"></div>
                      <span class="text-[#E2C16B]">UI</span>
                    </div>

                    <div class="relative">
                      <div class="absolute w-20 left-10 h-28 rotate-[60deg] rounded-full blur-xl bg-gradient-to-tl from-[#6B77E2]/30 to-[#6BA9E2]/30"></div>
                      <span class="text-[#6B77E2]">UX</span>
                    </div>
                  </div>
                  <p class="text-3xl font-bold bg-gradient-to-r from-[#E2C16B] to-[#6B77E2] bg-clip-text text-transparent w-max mx-auto">
                    DESIGN
                  </p>
                </div>
                <div class="pt-4 flex h-1/2">
                  <div class="mr-4 flex-1 pb-4 p-px border border-[#412D70]/40 rounded-[40px]">
                    <div class="text-7xl space-x-10 justify-center pt-10 pb-6 flex font-extrabold">
                      <div>
                        <span class="bg-gradient-to-r from-[#9D6AFF] to-[#7035E0] text-transparent bg-clip-text">
                          WEB
                        </span>
                      </div>
                    </div>
                    <p class="text-2xl font-bold bg-gradient-to-r from-[#9D6AFF] to-[#7035E0] bg-clip-text text-transparent w-max mx-auto">
                      DEVELOPMENT
                    </p>
                  </div>{" "}
                  <div class="flex-1 pb-4 p-px border border-[#412D70]/40 rounded-[40px]">
                    <div class="text-7xl space-x-10 justify-center pt-10 pb-6 flex font-extrabold">
                      <div>
                        <span class="bg-gradient-to-r from-[#69EBE3] to-[#A9A429] text-transparent bg-clip-text">
                          SEO
                        </span>
                      </div>
                    </div>
                    <p class="text-2xl font-bold bg-gradient-to-r from-[#69EBE3] to-[#A9A429] bg-clip-text text-transparent w-max mx-auto">
                      CONSULTING
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-8 pr-0">
                <div
                  style={{
                    backgroundImage: "url('/services-box.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                  }}
                  class="flex flex-col rounded-[40px] w-[552px] h-[441px] justify-between p-10"
                >
                  <Image
                    src="/services.svg"
                    alt="Services"
                    width={80}
                    height={80}
                  />

                  <div>
                    <p class="text-[#E2C16B] font-medium mt-4 mb-2">Services</p>
                    <p class="max-w-[44ch] text-white font-light">
                      Giving our clients the best of our efforts to build
                      websites with these services we offer.
                    </p>

                    <Link href="/services" role="button" class="w-max border text-sm border-[#3A255B] text-white/70 pr-3 pl-4 mt-8 text-center py-1 rounded-full flex items-center space-x-2 hover:border-white/20 hover:text-white">
                      <span>Check details on our services</span>
                      <LucideChevronRight class="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-center items-center">
              <div class="p-8 pl-0">
                <div
                  style={{
                    backgroundImage: "url('/projects-box.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                  }}
                  class="flex flex-col rounded-[40px] w-[552px] h-[441px] justify-between p-10"
                >
                  <Image
                    src="/projects.svg"
                    alt="Projects"
                    width={80}
                    height={80}
                  />

                  <div>
                    <p class="text-[#E2C16B] font-medium mt-4 mb-2">Projects</p>
                    <p class="max-w-[44ch] text-white font-light">
                      Giving our clients the best of our efforts to build
                      websites with these services we offer.
                    </p>

                    {/*<div class="p-px bg-gradient-to-b w-max mt-6 from-[#3A255B] rounded-lg to-[#6D4BA6]">*/}
                    <Link href="/projects" role="button" class="w-max border text-sm border-[#3A255B] text-white/70 pr-3 pl-4 mt-8 text-center py-1 rounded-full flex items-center space-x-2 hover:border-white/20 hover:text-white">
                      <span>Check details on our services</span>
                      <LucideChevronRight class="w-6 h-6" />
                    </Link>
                    {/*</div>*/}
                  </div>
                </div>
              </div>

              <div class="w-[552px] h-[441px]">
                <div class="pb-2 h-1/2">
                  <div class="w-full pb-4 p-px border border-[#412D70]/40 rounded-[40px]">
                    <div class="text-8xl space-x-10 justify-center pt-10 pb-6 flex font-extrabold">
                      <div class="relative">
                        <div class="absolute -top-1 w-24 h-28 rounded-full blur-xl bg-gradient-to-br from-[#E29D6B]/30 to-[#E2C16B]/30"></div>
                        <span class="text-[#E2C16B]">UI</span>
                      </div>

                      <div class="relative">
                        <div class="absolute w-20 left-10 h-28 rotate-[60deg] rounded-full blur-xl bg-gradient-to-tl from-[#6B77E2]/30 to-[#6BA9E2]/30"></div>
                        <span class="text-[#6B77E2]">UX</span>
                      </div>
                    </div>
                    <p class="text-3xl font-bold bg-gradient-to-r from-[#E2C16B] to-[#6B77E2] bg-clip-text text-transparent w-max mx-auto">
                      DESIGN
                    </p>
                  </div>
                </div>
                <div class="pt-2 h-1/2 ">
                  <div class="w-full pb-4 p-px border border-[#412D70]/40 rounded-[40px]">
                    <div class="text-8xl space-x-10 justify-center pt-10 pb-6 flex font-extrabold">
                      <div class="relative">
                        <div class="absolute -top-1 w-24 h-28 rounded-full blur-xl bg-gradient-to-br from-[#E29D6B]/30 to-[#E2C16B]/30"></div>
                        <span class="text-[#E2C16B]">UI</span>
                      </div>

                      <div class="relative">
                        <div class="absolute w-20 left-10 h-28 rotate-[60deg] rounded-full blur-xl bg-gradient-to-tl from-[#6B77E2]/30 to-[#6BA9E2]/30"></div>
                        <span class="text-[#6B77E2]">UX</span>
                      </div>
                    </div>
                    <p class="text-3xl font-bold bg-gradient-to-r from-[#E2C16B] to-[#6B77E2] bg-clip-text text-transparent w-max mx-auto">
                      DESIGN
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: metaTitle,
  meta: [
    ...metaDefaults,
    {
      name: "description",
      content: description,
    },
    {
      property: "og:title",
      content: metaTitle,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "twitter:title",
      content: metaTitle,
    },
    {
      property: "twitter:description",
      content: description,
    },
  ],
};
