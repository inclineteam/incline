import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import Footer from "~/components/footer";
import About from "~/components/landing/about";
import LandingHeader from "~/components/landing/header";
import LandingHeroTexts from "~/components/landing/hero-texts";
import ProjectsColumns from "~/components/landing/projects-columns";
import ServicesColumns from "~/components/landing/services-columns";
import { metaDefaults } from "~/data/meta-defaults";

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
              class="pointer-events-none absolute right-24 top-64 z-50"
            />

            <main class="py-20 lg:px-3 flex flex-col md:flex-row">
              <LandingHeroTexts />
              <Image
                src="/hero-images.svg"
                alt="Hero Image"
                width={700}
                height={700}
                priority={true}
                class="pointer-events-none select-none mx-auto md:ml-auto md:-mt-20 -mb-10 relative z-[55]"
              />
            </main>

            {/* this is components/landing/about - not pages/about */}
            <About />
            <ServicesColumns />
            <ProjectsColumns />
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
