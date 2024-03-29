import LucideMousePointer from "~icons/lucide/mouse-pointer";
import { links } from "~/data/links";
import { Image } from "@unpic/qwik";
import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

const Footer = component$(() => {
  return (
    <footer class="pt-10 pb-20 w-full border-t text-sm border-[#271F3C] mx-auto">
      <div class="max-w-7xl lg:flex lg:items-start mx-auto px-10">
        <div class="flex items-center text-[#958AB2] space-x-4">
          <Image src="/logo.svg" alt="Incline" width={40} height={40} />
          <p class="leading-relaxed">
            © 2023 Incline Team. <br /> All rights reserved.
          </p>
        </div>

        <div class="ml-14 lg:ml-20 lg:mr-auto flex pt-14 lg:pt-0 space-x-10 lg:space-x-20 flex-wrap">
          <div>
            <p class="text-white mb-4 font-medium">Links</p>
            <div class="flex space-y-3 flex-col">
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.to}
                  class="text-[#958AB2] hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p class="text-white mb-4 font-medium">Socials</p>
            <div class="flex space-y-3 flex-col">
              <a
                href="https://www.facebook.com/inclineteam"
                target="_blank"
                class="text-[#958AB2] hover:text-white"
              >
                Facebook
              </a>
              <a
                href="https://github.com/inclineteam"
                target="_blank"
                class="text-[#958AB2] hover:text-white"
              >
                Github
              </a>
              <a
                href="https://twitter.com/inclineteam_"
                target="_blank"
                class="text-[#958AB2] hover:text-white"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/company/96308721"
                target="_blank"
                class="text-[#958AB2] hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <p class="text-white mb-4 font-medium">Resources</p>
            <div class="flex space-y-3 flex-col">
              <a
                href="https://github.com/inclineteam"
                target="_blank"
                class="text-[#958AB2] hover:text-white"
              >
                Open Source
              </a>
              <a
                href="https://github.com/inclineteam"
                target="_blank"
                class="text-[#958AB2] hover:text-white"
              >
                Contribute
              </a>
              <a href="/" class="text-[#958AB2] hover:text-white">
                Newsletter
              </a>
            </div>
          </div>

          <div>
            <p class="text-white mb-4 font-medium">Help</p>
            <div class="flex space-y-3 flex-col">
              <a href="/" class="text-[#958AB2] hover:text-white">
                Customer Service
              </a>
              <a href="/" class="text-[#958AB2] hover:text-white">
                Privacy Policy
              </a>
              <a href="/" class="text-[#958AB2] hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <Link
          href="/contacts"
          role="button"
          class="duration-150 w-max hidden md:flex select-none bg-[#E2C16B] text-[#160e27] text-sm items-center space-x-2 relative px-4 py-1.5 rounded-full hover:bg-[#EED288] hover:shadow-[0_0_16px_0] hover:shadow-[#E2C16B]/30"
        >
          <span class="font-semibold relative">Get in touch</span>
          <LucideMousePointer class="stroke-2 w-5 h-5 relative" />
        </Link>
      </div>
    </footer>
  );
});

export default Footer;
