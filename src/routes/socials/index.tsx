import MainLayout from "~/components/main-layout";
import type { DocumentHead } from "@builder.io/qwik-city";
import { metaDefaults } from "~/data/meta-defaults";
import { component$ } from "@builder.io/qwik";
import LucideTwitter from '~icons/lucide/twitter'
import LucideFacebook from '~icons/lucide/facebook'
import LucideGithub from '~icons/lucide/github'
import LucideLinkedin from '~icons/lucide/linkedin'
import LucideExternalLink from '~icons/lucide/external-link'

const metaTitle = 'Socials | Incline - Software Development: Web & Mobile apps'
const description = 'Follow, and message us on our official social media accounts!'

export default component$(() => {
  return (
    <MainLayout title="Socials" subtitle={description}>
      <div class="border-t mt-6 pt-12 border-[#B08FFF]/10">
        <div class="gap-4 md:grid-cols-2 md:grid">
          <div class="p-4 w-full rounded-xl text-white bg-gradient-to-br shadow-[inset_0_0_0_1px] shadow-white/[0.05] from-sky-500/30 to-purple-500/10 relative overflow-hidden">
           <div class="flex items-center justify-between">
              <p class="text-sm text-sky-400 font-semibold mb-2">Facebook</p>
              <LucideExternalLink class="w-6 h-6 stroke-2 text-white/30" />
           </div>
            <div class="flex font-medium items-center mt-2">
              <LucideFacebook class="absolute -bottom-2 w-14 h-14 stroke-2 text-cyan-400/40" />
              <p class="ml-16">Incline Team</p>
            </div>
          </div>

          <div class="p-4 w-full rounded-xl text-white bg-gradient-to-br shadow-[inset_0_0_0_1px] shadow-white/[0.05] from-slate-500/30 to-purple-500/10 relative overflow-hidden">
           <div class="flex items-center justify-between">
              <p class="text-sm text-slate-300 font-semibold mb-2">Github</p>
              <LucideExternalLink class="w-6 h-6 stroke-2 text-white/30" />
           </div>
            <div class="flex font-medium items-center mt-2">
              <LucideGithub class="absolute -bottom-2 w-14 h-14 stroke-2 text-slate-400/40" />
              <p class="ml-16">inclineteam</p>
            </div>
          </div>

                    <div class="p-4 w-full rounded-xl text-white bg-gradient-to-br shadow-[inset_0_0_0_1px] shadow-white/[0.05] from-purple-500/30 to-indigo-500/10 relative overflow-hidden">
           <div class="flex items-center justify-between">
              <p class="text-sm text-purple-300 font-semibold mb-2">LinkedIn</p>
              <LucideExternalLink class="w-6 h-6 stroke-2 text-white/30" />
           </div>
            <div class="flex font-medium items-center mt-2">
              <LucideLinkedin class="absolute -bottom-2 w-14 h-14 stroke-2 text-purple-400/40" />
              <p class="ml-16">Incline Team</p>
            </div>
          </div>

          <div class="p-4 w-full rounded-xl text-white bg-gradient-to-br shadow-[inset_0_0_0_1px] shadow-white/[0.05] from-sky-500/30 to-purple-500/10 relative overflow-hidden">
           <div class="flex items-center justify-between">
            <p class="text-sm text-cyan-400 font-semibold mb-2">Twitter</p>
              <LucideExternalLink class="w-6 h-6 stroke-2 text-white/30" />
           </div>
            <div class="flex font-medium items-center mt-2">
              <LucideTwitter class="absolute -bottom-2 w-14 h-14 stroke-2 text-cyan-400/40" />
              <p class="ml-16">@inclineteam_</p>
            </div>
          </div>

        </div>
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
