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
          <img class="object-cover w-20 h-20 mr-4 rounded-full shadow" src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/293269721_5440767829276891_3304808318704533494_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFOu91y4PtY7IqAHjJ6WMOlISD3Knz5KOUhIPcqfPko5TVnOBcRLRxw0m_2xvm_Mkh43axUho0bbDl7sTr2_qxQ&_nc_ohc=6rS9tRSNzmsAX9VW3i9&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfBNwoQBth-obQSMOfGdzWrxYiWQ4P2z7kI5VvfztzuDYQ&oe=64F33D86" alt="Person" />
          <div class="flex flex-col justify-center">
            <p class="text-lg font-bold">Percival Ian Muico</p>
            <p class="text-sm text-[#958AB2]">Project Manager</p>
          </div>
        </div>
        <div class="flex">
          <img class="object-cover w-20 h-20 mr-4 rounded-full shadow" src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/313012394_1961398074069917_4934194412484540725_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE_qd8VSyJzPR4thTLKHFe4icYkOVlv4NOJxiQ5WW_g000r3TevflSHTUlfj69TW6V_FQkqBzeoEmThHwKwYSRU&_nc_ohc=TJ0w0lWPz4QAX8BnMQg&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfC8PnLB1Vg41ZQ_4Mm9f8VBdX8HudEa4yopaQxltdquEA&oe=64F386EA" alt="Person" />
          <div class="flex flex-col justify-center">
            <p class="text-lg font-bold">Ishmael Cascabel</p>
            <p class="text-sm text-[#958AB2]">Full Stack Developer</p>
          </div>
        </div>
        <div class="flex">
          <img class="object-cover w-20 h-20 mr-4 rounded-full shadow" src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-1/331025996_870642757551325_8542218222823514119_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEXY6YpS1_IODqmjKM47_GB9Ti9C9Vz3Wr1OL0L1XPdap2a8BW9eRjHwuU5uRgo-fOfPsO_mD57pAmYNrWM-ank&_nc_ohc=zhdDDm3j5-UAX__W178&_nc_ht=scontent.fmnl4-1.fna&oh=00_AfDN-YVxMgRtwTDvO5kdunTmwdJvOCH9_svTodiUkEBsRw&oe=64F370EC" alt="Person" />
          <div class="flex flex-col justify-center">
            <p class="text-lg font-bold">John Aeron Sencil</p>
            <p class="text-sm text-[#958AB2]">Web Designer</p>
          </div>
        </div>
        <div class="flex">
          <img class="object-cover w-20 h-20 mr-4 rounded-full shadow" src="https://media.licdn.com/dms/image/D5603AQEJapVYKw_KXQ/profile-displayphoto-shrink_800_800/0/1691999498887?e=1698883200&v=beta&t=9Tr0llF-W5I021jlOALq4ej2dfYQvHrhQaPN4rsKSqs" alt="Person" />
          <div class="flex flex-col justify-center">
            <p class="text-lg font-bold">Harold Martin Patacsil</p>
            <p class="text-sm text-[#958AB2]">Frontend Developer</p>
          </div>
        </div>
        <div class="flex">
          <img class="object-cover w-20 h-20 mr-4 rounded-full shadow" src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/371929237_6353944484727773_2040545339292467036_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGkkp_pl5dvRcs5ruv90sdDrw5z4778eZKvDnPjvvx5kqynuKo9rU3ioDNyTQGyDJ99BoZQb9is_bRSqHohoU4B&_nc_ohc=_XfQcNalJdsAX9pZtXG&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfB-GmyZBavWiPtDUbn__9lcWoCuUWQoWw7WBUhwEkgZNQ&oe=64F37E2A" alt="Person" />
          <div class="flex flex-col justify-center">
            <p class="text-lg font-bold">Jan Humphrey Salangsang</p>
            <p class="text-sm text-[#958AB2]">UI/UX Designer</p>
          </div>
        </div>
        <div class="flex">
          <img class="object-cover w-20 h-20 mr-4 rounded-full shadow" src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/311883866_645069407197305_1052682593457606137_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHCzs9S_wtoXOMu25EKmfRYV5UObV3V3OJXlQ5tXdXc4lrjlJagKkIrPRQnKYaG69i_iCTgOaALEQgvkpmMOcX1&_nc_ohc=0a6Rc0dSjMMAX_F0e90&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfD-3t828AiHZRkINPMtEC3DSO9qWbjygStZ9DZJ-hoypw&oe=64F4D57F" alt="Person" />
          <div class="flex flex-col justify-center">
            <p class="text-lg font-bold">Luis Lloyd Tolentino</p>
            <p class="text-sm text-[#958AB2]">Associate Developer</p>
          </div>
        </div>
        <div class="flex">
          <img class="object-cover w-20 h-20 mr-4 rounded-full shadow" src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-1/350666866_523255806537646_7729859903824961656_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeE_w4PRXmTdlFLcZyPmj6TxQEHzKmTVWkxAQfMqZNVaTEX4etE3QJpxQkSHZvehYxuvYltrOQTOPjdTgJavSqvb&_nc_ohc=9WlkTVch6_sAX8hMNY8&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfAE06HdrJNQx9DHYL6qVLmDVKYK5Ebfu-LbpJh69T2Q6g&oe=64F48124" alt="Person" />
          <div class="flex flex-col justify-center">
            <p class="text-lg font-bold">Ericka Del Rosario</p>
            <p class="text-sm text-[#958AB2]">Associate Developer</p>
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
