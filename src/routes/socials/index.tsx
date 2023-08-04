import MainLayout from "~/components/main-layout";
import type { DocumentHead } from "@builder.io/qwik-city";
import { metaDefaults } from "~/data/meta-defaults";
import { component$ } from "@builder.io/qwik";
import LucideTwitter from "~icons/lucide/twitter";
import LucideFacebook from "~icons/lucide/facebook";
import LucideGithub from "~icons/lucide/github";
import LucideLinkedin from "~icons/lucide/linkedin";
import LucideExternalLink from "~icons/lucide/external-link";

const metaTitle = "Socials | Incline - Software Development: Web & Mobile apps";
const description =
  "Follow, and message us on our official social media accounts!";

export default component$(() => {
  return (
    <MainLayout title="Socials" subtitle={description}>
      <div class="border-t mt-6 pt-12 border-[#B08FFF]/10">
        <div class="gap-4 md:grid-cols-2 md:grid">
          <div class="p-5 w-full rounded-2xl text-white bg-gradient-to-br shadow-lg border-t border-t-indigo-300/40  from-indigo-500/50 to-indigo-500/20 relative overflow-hidden">
            <div class="flex font-medium items-start">
              <div class="mr-5 bg-gradient-to-b from-indigo-400 to-indigo-600 p-2.5 rounded-full">
                <LucideFacebook class="w-7 h-7 stroke-2 text-indigo-100" />
              </div>
              <div>
                <p class="text-sm text-indigo-400 font-medium">Facebook</p>
                <p>Incline Team</p>
              </div>
              <a href="https://www.facebook.com/inclineteam/" target="_blank" rel="noopener noreferrer" class="ml-auto block">
                <LucideExternalLink class="w-6 h-6 stroke-2 text-white/40 hover:text-white" />
              </a>
            </div>
          </div>

          <div class="p-5 w-full rounded-2xl text-white bg-gradient-to-br shadow-lg border-t border-t-slate-300/40 from-slate-500/50 to-gray-500/20 relative overflow-hidden">
            <div class="flex font-medium items-start">
              <div class="mr-5 bg-gradient-to-b from-slate-800 to-slate-950 p-2.5 rounded-full">
                <LucideGithub class="w-7 h-7 translate-y-0.5 stroke-2 text-slate-100" />
              </div>
              <div>
                <p class="text-sm text-slate-400 font-medium">Github</p>
                <p>inclineteam</p>
              </div>
              <a href="https://www.github.com/inclineteam/" target="_blank" rel="noopener noreferrer" class="ml-auto block">
                <LucideExternalLink class="w-6 h-6 stroke-2 text-white/40 hover:text-white" />
              </a>
            </div>
          </div>
          <div class="p-5 w-full rounded-2xl text-white bg-gradient-to-br shadow-lg border-t border-cyan-300/40 from-cyan-500/50 to-teal-500/20 relative overflow-hidden">
            <div class="flex font-medium items-start">
              <div class="mr-5 bg-gradient-to-b from-cyan-400 to-cyan-600 p-2.5 rounded-full">
                <LucideTwitter class="w-7 h-7 stroke-2 text-sky-100" />
              </div>
              <div>
                <p class="text-sm text-cyan-300 font-medium">Twitter</p>
                <p>@inclineteam_</p>
              </div>
              <a href="https://www.x.com/inclineteam_/" target="_blank" rel="noopener noreferrer" class="ml-auto block">
                <LucideExternalLink class="w-6 h-6 stroke-2 text-white/40 hover:text-white" />
              </a>
            </div>
          </div>

          <div class="p-5 w-full rounded-2xl text-white bg-gradient-to-br shadow-lg border-t border-white/[0.05] border-violet-300/40 from-violet-500/50 to-purple-500/20 relative overflow-hidden">
            <div class="flex font-medium items-start">
              <div class="mr-5 bg-gradient-to-b from-violet-500 to-violet-700 p-2.5 rounded-full">
                <LucideLinkedin class="w-7 h-7 stroke-2 text-sky-100" />
              </div>
              <div>
                <p class="text-sm text-violet-300 font-medium">LinkedIn</p>
                <p>Incline Team</p>
              </div>
              <a href="https://www.linkedin.com/company/inclineteam/" target="_blank" rel="noopener noreferrer" class="ml-auto block">
                <LucideExternalLink class="w-6 h-6 stroke-2 text-white/40 hover:text-white" />
              </a>
            </div>
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
