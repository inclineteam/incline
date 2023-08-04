import MainLayout from "~/components/main-layout";
import type { DocumentHead } from "@builder.io/qwik-city";
import { metaDefaults } from "~/data/meta-defaults";
import { Image } from "@unpic/qwik";
import LucideGlobe from '~icons/lucide/globe'
import LucideArrowUpRight from '~icons/lucide/arrow-up-right'
import LucideGithub from '~icons/lucide/github'
import { component$ } from "@builder.io/qwik";

const metaTitle = 'Projects | Incline - Software Development: Web & Mobile apps'
const description = 'We also do team projects to help us collaborate with each other, making the team in sync when doing tasks.'

export default component$(() => {
  return (
    <MainLayout title="Projects" subtitle={description}>
      <div class="border-t mt-6 pt-12 border-[#B08FFF]/10">
        {data.map((project, i) => (
          <div key={i} class="border-b mb-6 last:border-transparent border-[#B08FFF]/10 pb-6">
            <Image
              src={project.icon}
              width={40}
              height={40}
              alt="Project Logo"
              class="rounded-lg"
            />
            <p class="mt-4 mb-1 text-white">{project.name}</p>
            <div>
              <p class="leading-relaxed text-[#958AB2] max-w-[64ch] font-light">
                {project.description}
              </p>
            </div>

            <div class="flex-col lg:flex-row flex lg:items-center gap-4 mt-4 text-[#958AB2] text-xs">
              <div class="flex items-center space-x-4">
                {project.link ? (
                  <>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span class="pb-1 -mb-1 hover:text-white border-b border-transparent hover:border-[#958AB2] flex items-center">
                        <LucideGlobe class="mr-2 stroke-2 w-5 h-5" />
                        Website
                        <LucideArrowUpRight class="w-5 h-5 stroke-2 ml-1" />
                      </span>
                    </a>
                    <div class="h-0.5 w-0.5 rounded-full bg-[#958AB2]"></div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span class="pb-1 -mb-1 hover:text-white border-b border-transparent hover:border-[#958AB2] flex items-center">
                        <LucideGithub class="mr-2 stroke-2 w-5 h-5" />
                        Github
                         <LucideArrowUpRight class="w-5 h-5 stroke-2 ml-1" />
                      </span>
                    </a>
                  </>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="pb-1 -mb-1 hover:text-white border-b border-transparent hover:border-[#958AB2] flex items-center">
                     <LucideGithub class="mr-2 stroke-2 w-5 h-5" />
                      Github
                       <LucideArrowUpRight class="w-5 h-5 stroke-2 ml-1" />
                    </span>
                  </a>
                )}
              </div>
              <div class="text-xs font-medium text-white lg:hidden">
                Tech used
              </div>
              <div class="gap-4 flex items-center flex-wrap">
                {project.techs.map((tech, i) => (
                  <div key={i} class="w-max flex items-center space-x-4">
                    <div class="h-0.5 w-0.5 rounded-full bg-[#958AB2]"></div>{" "}
                    <p>{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
})

const data = [
  {
    name: "QuikkDesign",
    description: "A simple HTML, CSS, and JS code editor for web.",
    link: "https://quikkdesign.vercel.app",
    github: "https://github.com/inclineteam/quikkdesign",
    icon: "/quikk-icon.svg",
    techs: ["React", "Tailwind CSS", "Zustand", "Codemirror"],
  },
  {
    name: "Incognito Confessions",
    description:
      "A confession board for those who want to vent out their feelings.",
    link: null,
    github: "https://github.com/inclineteam/incognitoconfessions",
    icon: "/incognito-icon.svg",
    techs: ["Laravel", "Tailwind CSS", "Alpine.js"],
  },
];

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
