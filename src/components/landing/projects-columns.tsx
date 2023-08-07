import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import LucideChevronRight from "~icons/lucide/chevron-right";

const ProjectsColumns = component$(() => {
  return (
    <div class="mt-10 px-4 flex-col lg:flex-row gap-10 flex justify-center">
      <div class="w-full">
        <div class="overflow-hidden rounded-t-[20px] border-x border-t border-[#8C6CCF]/30 border-l-[#8C6CCF]/50 bg-[#24113E] shadow-[inset_40px_-40px_70px_-5px] shadow-[#361166] p-4 lg:p-10 relative">
          <Image
            src="/circle-pattern.svg"
            alt="Services"
            width={160}
            height={160}
            class="right-0 rotate-180 absolute"
          />

          <div class="relative">
            <Image src="/projects.svg" alt="Projects" width={80} height={80} />

            <Image
              src="/circle-pattern.svg"
              alt="Services"
              width={100}
              height={100}
              class="bottom-full absolute"
            />
          </div>
        </div>

        <div class="border rounded-b-[20px] border-[#8C6CCF]/30  border-t-[#8C6CCF]/50 p-4 pt-2 lg:p-10 lg:pt-4 bg-gradient-to-b from-[#331C52] to-[#211538]">
          <p class="text-[#E2C16B] font-medium mt-4 mb-2">Projects</p>
          <p class="max-w-[44ch] text-sm md:text-base text-white font-light">
            Giving our clients the best of our efforts to build websites with
            these services we offer.
          </p>

          <Link
            href="/services"
            role="button"
            class="w-max border text-sm border-[#3A255B] text-white/70 pr-3 pl-4 mt-4 lg:mt-8 text-center py-1 rounded-md flex items-center space-x-2 hover:border-white/20 hover:text-white"
          >
            <span>Check details about our projects</span>
            <LucideChevronRight class="h-6 w-6 stroke-2" />
          </Link>
        </div>
      </div>

      <div class="w-full flex flex-col justify-between">
        <div class="overflow-hidden w-full pb-4 p-px shadow-[inset_0_0_0_1px] shadow-[#412D70]/40 rounded-[20px]">
          <div class="relative text-6xl text-center pt-10 pb-6 w-max mx-auto">
            <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-full h-52 rotate-[60deg] rounded-full blur-xl bg-gradient-to-t from-sky-500/20 to-violet-500/20"></div>
            <span class="tracking-tighter font-semibold relative bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent w-max mx-auto">
              QuikkDesign
            </span>
          </div>
          <p class="text-3xl font-bold bg-gradient-to-r from-sky-500 to-violet-500 relative bg-clip-text text-transparent w-max mx-auto">
            EDITOR
          </p>
        </div>
        <div class="overflow-hidden w-full pb-4 p-px shadow-[inset_0_0_0_1px] shadow-[#412D70]/40 rounded-[20px]">
          <div class="relative text-5xl text-center pt-10 pb-6 w-max mx-auto">
            <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-full h-64 -rotate-[60deg] rounded-full blur-xl bg-gradient-to-t from-teal-500/20 to-indigo-500/20"></div>
            <span class="tracking-tighter font-semibold relative bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent w-max mx-auto">
              IncognitoConfessions
            </span>
          </div>
          <p class="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-teal-500 relative bg-clip-text text-transparent w-max mx-auto">
            BOARD
          </p>
        </div>
      </div>
    </div>
  );
});

export default ProjectsColumns;
