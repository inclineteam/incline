import { ArrowRight, Phone, Shapes } from "@phosphor-icons/react";
import Link from 'next/link' 

const LandingHeroTexts = () => {
  return (
    <div>
      <TitleCTA />
      <Title />
      <Description />
      <div className="mt-10 flex center space-x-3">
        <CTAButton />
        <BesideCTAButton />
      </div>
    </div>
  );
};

export default LandingHeroTexts;

const TitleCTA = () => (
  <Link href="/socials" className="text-[#E2C16B] hover:underline">
    Follow us on our socials!
  </Link>
);

const Title = () => (
  <h1 className="text-4xl md:text-6xl max-w-[10ch] !leading-snug my-2 md:my-4 text-white tracking-tight font-bold">
    <span className="bg-gradient-to-b from-[#FFD700] to-[#FFF5DB] bg-clip-text text-transparent">
      Flex
    </span>{" "}
    a better website with <span className="text-[#FFE6A4]">Incline.</span>
  </h1>
);

const Description = () => (
  <p className="md:text-lg text-base leading-relaxed font-light max-w-[40ch] text-[#958AB2] mx-auto">
    We build elegant responsive websites, landing pages, web applications, and
    software solutions to help your business grow and enhance its digital
    presence.{" "}
  </p>
);

const CTAButton = () => (
  <Link href="/contact">
    <button className="border duration-300 border-white/20 select-none flex bg-[#E2C16B] text-[#160e27] hover:bg-[#EED288] items-center space-x-4 pr-4 pl-1.5 py-1.5 hover:shadow-[0_0_20px_0] hover:shadow-[#E2C16B]/40 group rounded-full">
      <div className="p-1 rounded-full bg-[#160e27]">
        <Phone weight="fill" className="text-[#E2C16B]" />
      </div>
      <span className="font-semibold">Contact us</span>
      <ArrowRight
        size={20}
        weight="bold"
        className="duration-150 group-hover:translate-x-1"
      />
    </button>
  </Link>
);

const BesideCTAButton = () => (
  <Link href="/projects">
    <button className="select-none flex bg-[#160e27] border border-[#B08FFF]/10 hover:border-[#B08FFF]/30 group duration-150 text-white items-center space-x-3 px-4 z-[55] py-1.5 rounded-full">
      <span className="font-semibold">See projects we've built</span>
      <Shapes
        weight="fill"
        size={20}
        className="text-[#E2C16B] group-hover:scale-125 duration-150 group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_0_12px] group-hover:drop-shadow-[#E2C16B]/10"
      />
    </button>
  </Link>
);
