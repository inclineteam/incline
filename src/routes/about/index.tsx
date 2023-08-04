import MainLayout from "~/components/main-layout";
import type { DocumentHead } from "@builder.io/qwik-city";
import { metaDefaults } from "~/data/meta-defaults";
import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import LucideUsers from '~icons/lucide/users'

const metaTitle = 'About | Incline - Software Development: Web & Mobile apps'
const description = 'Learn about Incline, and check out our wonderful team.'

export default component$(() => {
  return (
    <MainLayout title="About" subtitle={description}>
      <div class="border-t mt-6 pt-12 border-[#B08FFF]/10">
        <div class='flex items-end space-x-4'>
          <Image src='/logo-no-bg.svg' alt="Logo" width={28} height={28} />
        <h1 class="leading-none text-2xl text-white tracking-tight font-semibold">
          Incline
        </h1>
        </div>
        <p class="text-[#958AB2] font-light max-w-[64ch] mt-4 text-base/relaxed">
          A dynamic startup agency that unifies freelancers, open-source
          developers, and an agency environment, creating a powerful synergy.
          Our exceptional ecosystem thrives on fostering collaboration and
          growth by seamlessly connecting experienced mentors, ambitious
          students, and clients.
        </p>
      </div>

      <div class="mt-14">
        <div class="flex space-x-4">
            <LucideUsers class="w-7 h-7 stroke-2 text-white" />
          <h1 class="text-2xl text-white tracking-tight font-semibold">
          Our Team
        </h1>
        </div>
        <p class="text-[#958AB2] font-light max-w-[64ch] mt-4 text-base/relaxed">
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
