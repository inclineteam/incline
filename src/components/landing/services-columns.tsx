import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import LucideChevronRight from "~icons/lucide/chevron-right";

const ServicesColumns = component$(() => {
  return (
    <div class="px-4 flex-col-reverse lg:flex-row gap-10 flex items-start justify-center">
      <div class="w-full">
        <div class="w-full pb-4 p-px border border-[#412D70]/40 rounded-[20px]">
          <div class="text-7xl space-x-10 justify-center pt-10 pb-6 flex font-extrabold">
            <div class="relative">
              <div class="absolute -top-2.5 -right-2 w-24 h-24 rounded-full blur-xl bg-gradient-to-br from-[#E29D6B]/30 to-[#E2C16B]/30"></div>
              <span class="text-[#E2C16B]">UI</span>
            </div>

            <div class="relative">
              <div class="absolute -top-2.5 left-4 w-24 left-10 h-24 rounded-full blur-xl bg-gradient-to-tl from-[#6B77E2]/30 to-[#6BA9E2]/30"></div>
              <span class="text-[#6B77E2]">UX</span>
            </div>
          </div>
          <p class="text-3xl font-bold bg-gradient-to-r from-[#E2C16B] to-[#6B77E2] bg-clip-text text-transparent w-max mx-auto">
            DESIGN
          </p>
        </div>
        <div class="pt-4 gap-4 flex flex-col md:flex-row">
          <div class="flex-1 pb-4 p-px border border-[#412D70]/40 rounded-[20px]">
            <div class="text-6xl space-x-10 justify-center pt-10 pb-6 flex font-extrabold">
              <div class="relative">
                <span class="bg-gradient-to-r from-[#9D6AFF] to-[#7035E0] text-transparent bg-clip-text">
                  WEB
                </span>

                <div class="absolute -top-3 right-0 w-32 h-24 rounded-full blur-xl bg-gradient-to-br from-[#9D6AFF]/30 to-[#7035E0]/30"></div>
              </div>
            </div>
            <p class="text-2xl font-bold bg-gradient-to-r from-[#9D6AFF] to-[#7035E0] bg-clip-text text-transparent w-max mx-auto">
              DEVELOPMENT
            </p>
          </div>{" "}
          <div class="flex-1 pb-4 p-px border border-[#412D70]/40 rounded-[20px]">
            <div class="text-6xl space-x-10 justify-center pt-10 pb-6 flex font-extrabold">
              <div class="relative">
                <span class="bg-gradient-to-r from-[#69EBE3] to-[#A9A429] text-transparent bg-clip-text">
                  SEO
                </span>

                <div class="absolute -top-3 -right-1 w-32 h-24 rounded-full blur-xl bg-gradient-to-br from-[#69EBE3]/30 to-[#A9A429]/30"></div>
              </div>
            </div>
            <p class="text-2xl font-bold bg-gradient-to-r from-[#69EBE3] to-[#A9A429] bg-clip-text text-transparent w-max mx-auto">
              CONSULTING
            </p>
          </div>
        </div>
      </div>

      <div class="w-full">
        <div class="overflow-hidden rounded-t-[20px] border-x border-t border-[#8C6CCF]/30 border-t-[#8C6CCF]/50 border-r-[#8C6CCF]/50 bg-[#24113E] shadow-[inset_-40px_40px_70px_-5px] shadow-[#361166] p-4 lg:p-10 relative">
          <Image
            src="/meteor-hey.svg"
            alt="Services"
            width={100}
            height={100}
            class="absolute right-32 top-14 -rotate-[80deg]"
          />

          <Image
            src="/meteor-hey.svg"
            alt="Services"
            width={200}
            height={200}
            class="absolute right-10 top-2 -rotate-[80deg]"
          />

          <Image
            src="/meteor-hey.svg"
            alt="Services"
            width={150}
            height={150}
            class="absolute right-0 top-0 -rotate-[80deg]"
          />

          <Image src="/services.svg" alt="Services" width={80} height={80} />
        </div>

        <div class="border rounded-b-[20px] border-[#8C6CCF]/30 p-4 pt-2 lg:p-10 lg:pt-4 bg-gradient-to-b from-[#331C52] to-[#211538]">
          <p class="text-[#E2C16B] font-medium mt-4 mb-2">Services</p>
          <p class="max-w-[44ch] text-sm md:text-base text-white font-light">
            Giving our clients the best of our efforts to build websites with
            these services we offer.
          </p>

          <Link
            href="/services"
            role="button"
            class="w-max border text-sm border-[#3A255B] text-white/70 pr-3 pl-4 mt-4 lg:mt-8 text-center py-1 rounded-md flex items-center space-x-2 hover:border-white/20 hover:text-white"
          >
            <span>Check details about our services</span>
            <LucideChevronRight class="h-6 w-6 stroke-2" />
          </Link>
        </div>
      </div>
    </div>
  );
});

export default ServicesColumns;
