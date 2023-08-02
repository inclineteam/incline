import MainLayout from "~/components/main-layout";
import type { DocumentHead } from "@builder.io/qwik-city";
import { metaDefaults } from "~/data/meta-defaults";
import { component$ } from "@builder.io/qwik";

const metaTitle = 'Services | Incline - Software Development: Web & Mobile apps'
const description = 'Check out all the services our agency offers.'

export default component$(() => {
  return (
    <MainLayout title="Services" subtitle={description}>
      <div class="border-t mt-6 pt-12 border-[#B08FFF]/10">
        <h1 class="text-2xl text-white tracking-tight font-semibold">
          Incline
        </h1>
        <p class="text-[#958AB2] font-light max-w-[64ch] mt-2 text-base/relaxed">
          A dynamic startup agency that unifies freelancers, open-source
          developers, and an agency environment, creating a powerful synergy.
          Our exceptional ecosystem thrives on fostering collaboration and
          growth by seamlessly connecting experienced mentors, ambitious
          students, and clients.
        </p>
      </div>

      <div class="mt-10">
        <h1 class="text-2xl text-white tracking-tight font-semibold">
          Our Team
        </h1>
        <p class="text-[#958AB2] font-light max-w-[64ch] mt-2 text-base/relaxed">
           We are a passionate and enthusiastic group of tech enthusiasts who thrive on turning ideas into reality. Our team is driven by a collective commitment to excellence, fueled by the love of technology, and empowered by the joy of creating innovative solutions that make a positive impact.
        </p>
      </div>
    </MainLayout>
  );
})

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
      content:
        description,
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
