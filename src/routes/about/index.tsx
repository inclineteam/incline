import MainLayout from "~/components/main-layout";
import type { DocumentHead } from "@builder.io/qwik-city";
import { metaDefaults } from "~/data/meta-defaults";
import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import LucideUsers from "~icons/lucide/users";

const metaTitle = "About | Incline - Software Development: Web & Mobile apps";
const description = "Learn about Incline, and check out our wonderful team.";

export default component$(() => {
  return (
    <MainLayout title="About" subtitle={description}>
      <div class="border-t mt-6 pt-12 border-[#B08FFF]/10">
        <div class="flex items-end space-x-4">
          <Image src="/logo-no-bg.svg" alt="Logo" width={28} height={28} />
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
          We are a passionate and enthusiastic group of tech enthusiasts who
          thrive on turning ideas into reality. Our team is driven by a
          collective commitment to excellence, fueled by the love of technology,
          and empowered by the joy of creating innovative solutions that make a
          positive impact.
        </p>
      </div>
      <br /> <br />
      <div class="grid gap-10 row-gap-8 text-white mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
        <div class="flex">
          <img class="object-cover w-20 h-20 mr-4 rounded-full shadow" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="Person" />
          <div class="flex flex-col justify-center">
            <p class="text-lg font-bold">Oliver Aguilerra</p>
            <p class="text-sm text-[#958AB2]">Product Manager</p>
          </div>
        </div>
        <div class="flex">
          <img class="object-cover w-20 h-20 mr-4 rounded-full shadow" src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Person" />
          <div class="flex flex-col justify-center">
            <p class="text-lg font-bold">Marta Clermont</p>
            <p class="text-sm text-[#958AB2]">Design Team Lead</p>
          </div>
        </div>
        <div class="flex">
          <img class="object-cover w-20 h-20 mr-4 rounded-full shadow" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Person" />
          <div class="flex flex-col justify-center">
            <p class="text-lg font-bold">Anthony Geek</p>
            <p class="text-sm text-[#958AB2]">CTO, Lorem Inc.</p>
          </div>
        </div>
        <div class="flex">
          <img class="object-cover w-20 h-20 mr-4 rounded-full shadow" src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Person" />
          <div class="flex flex-col justify-center">
            <p class="text-lg font-bold">Alice Melbourne</p>
            <p class="text-sm text-[#958AB2]">Human Resources</p>
          </div>
        </div>
        <div class="flex">
          <img class="object-cover w-20 h-20 mr-4 rounded-full shadow" src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="Person" />
          <div class="flex flex-col justify-center">
            <p class="text-lg font-bold">Martin Garix</p>
            <p class="text-sm text-[#958AB2]">Bad boy</p>
          </div>
        </div>
        <div class="flex">
          <img class="object-cover w-20 h-20 mr-4 rounded-full shadow" src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Person" />
          <div class="flex flex-col justify-center">
            <p class="text-lg font-bold">Andrew Larkin</p>
            <p class="text-sm text-[#958AB2]">Backend Developer</p>
          </div>
        </div>
        <div class="flex">
          <img class="object-cover w-20 h-20 mr-4 rounded-full shadow" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="Person" />
          <div class="flex flex-col justify-center">
            <p class="text-lg font-bold">Sophie Denmo</p>
            <p class="text-sm text-[#958AB2]">Designer UI/UX</p>
          </div>
        </div>
    </div>
    </MainLayout>
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
