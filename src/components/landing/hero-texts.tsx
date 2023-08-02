import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuArrowRight, LuPhone } from "@qwikest/icons/lucide";
import LucideShapes from '~icons/lucide/shapes'
import LucidePhone from '~icons/lucide/phone'
import LucideArrowRight from '~icons/lucide/arrow-right'

const LandingHeroTexts = component$(() => {
  return (
    <div>
      <TitleCTA />
      <Title />
      <Description />
      <div class="mt-10 flex center space-x-3">
        <CTAButton />
        <BesideCTAButton />
      </div>
    </div>
  );
});

const TitleCTA = () => (
  <Link href="/socials" class="text-[#E2C16B] hover:underline">
    Follow us on our socials!
  </Link>
);

const Title = () => (
  <h1 class="text-4xl md:text-6xl max-w-[10ch] !leading-snug my-2 md:my-4 text-white tracking-tight font-bold">
    <span class="bg-gradient-to-b from-[#FFD700] to-[#FFF5DB] bg-clip-text text-transparent">
      Flex
    </span>{" "}
    a better website with <span class="text-[#FFE6A4]">Incline.</span>
  </h1>
);

const Description = () => (
  <p class="md:text-lg text-base leading-relaxed font-light max-w-[40ch] text-[#958AB2] mx-auto">
    We build elegant responsive websites, web applications, and custom
    software solutions to help your business grow, stand out from the digital
    market, and boost lead generation!
  </p>
);

const CTAButton = () => (
  <Link href="/contact">
    <button class="border duration-300 border-white/20 select-none flex bg-[#E2C16B] text-[#160e27] hover:bg-[#EED288] items-center space-x-4 pr-4 pl-1.5 py-1.5 hover:shadow-[0_0_20px_0] hover:shadow-[#E2C16B]/40 group rounded-full">
      <div class="p-1.5 rounded-full bg-[#160e27]">
        <LucidePhone class="w-5 h-5 stroke-2 text-[#E2C16B]" />
      </div>
      <span class="font-semibold">Contact us</span>
      <LucideArrowRight
        class="stroke-2 duration-150 group-hover:translate-x-1"
      />
    </button>
  </Link>
);

const BesideCTAButton = () => (
  <Link href="/projects">
    <button class="select-none flex bg-[#160e27] border border-[#B08FFF]/10 hover:border-[#B08FFF]/30 group duration-150 text-white items-center space-x-3 px-5 z-[55] py-2.5 rounded-full">
      <span class="font-semibold">See projects we've built</span>
      <LucideShapes
        class="w-6 stroke-2 h-6 text-[#E2C16B] group-hover:scale-125 duration-150 group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_0_12px] group-hover:drop-shadow-[#E2C16B]/10"
      />
    </button>
  </Link>
);
export default LandingHeroTexts