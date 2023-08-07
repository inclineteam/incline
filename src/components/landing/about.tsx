import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

const About = component$(() => {
  return (
    <div class="pb-40 px-4 flex flex-col">
      <div class="relative">
        <div class="absolute -top-2.5 -left-2 w-24 h-24 rounded-full blur-xl bg-gradient-to-br from-blue-500/30 to-pink-500/30"></div>
        <Image
          src="/team.svg"
          alt="Team"
          width={80}
          height={80}
          class="relative"
        />
      </div>
      <p class="text-[#E2C16B] font-medium my-4">Incline Team</p>
      <div>
        <div class="text-4xl font-bold tracking-tight text-[#31234a] leading-snug">
          We are a{" "}
          <span class="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
            passionate
          </span>{" "}
          and{" "}
          <span class="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
            enthusiastic
          </span>{" "}
          group of{" "}
          <span class="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
            tech enthusiasts
          </span>{" "}
          who thrive on turning ideas into reality. Our team is driven by a
          collective{" "}
          <span class="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
            commitment to excellence,
          </span>{" "}
          fueled by the love of technology, and empowered by the joy of creating{" "}
          <span class="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
            innovative solutions
          </span>{" "}
          that make a positive impact.
        </div>
      </div>
    </div>
  );
});

export default About;
