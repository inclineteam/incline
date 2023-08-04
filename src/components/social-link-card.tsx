import { QRL, QwikIntrinsicElements, Slot, component$ } from "@builder.io/qwik";
import type { FunctionComponent, JSX } from "@builder.io/qwik/jsx-runtime";
import LucideExternalLink from '~icons/lucide/external-link'

interface LinkCard {
	color: string;
}

const SocialLinkCard = component$<LinkCard>(({ color }) => {
	return (
<div class="p-4 w-full rounded-xl text-white bg-gradient-to-br shadow-[inset_0_0_0_1px] shadow-white/[0.05] from-purple-500/30 to-indigo-500/10 relative overflow-hidden">
           <div class="flex items-center justify-between">
              <p class="text-sm text-purple-300 font-semibold mb-2">LinkedIn</p>
              <a href="https://linkedin.com/company/inclineteam" target="_blank" rel="noopener noferrer">
                <LucideExternalLink class="w-6 h-6 stroke-2 text-white/30" />
              </a>
           </div>
            <div class="flex font-medium items-center mt-2">
              <Slot />
              <p class="ml-16">Incline Team</p>
            </div>
          </div>
	)
})

export default SocialLinkCard