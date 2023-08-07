import LinkSidebarItem from "./link-sidebar-item";
import { component$ } from "@builder.io/qwik";
import { links } from "~/data/links";
import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import LucideArrowRight from "~icons/lucide/arrow-right";
import LucideMousePointerClick from "~icons/lucide/mouse-pointer-click";

const LinkSidebar = component$(() => {
  return (
    <div class="hidden lg:block border-r py-10 border-[#271F3C] pr-4 min-w-[250px] sticky top-0 h-screen">
      <Link href="/" class="px-3 flex items-center space-x-3">
        <Image src="/logo.svg" alt="Incline" height={30} width={30} />
        <h1 class="text-2xl tracking-tight font-medium text-white">Incline</h1>
      </Link>

      <main class="py-10">
        <div class="pb-6 mb-4 border-b border-[#271F3C]">
          <Link href="/contact">
            <button class="w-full select-none flex bg-[#E2C16B] hover:bg-[#EED288] duration-150 hover:shadow-[0_0_16px_0] hover:shadow-[#EED288]/30 text-[#160e27] text-sm items-center space-x-2 relative px-3 justify-center py-1.5 rounded-md group">
              <span class="font-semibold relative">Hit us up!</span>
              <div class="flex">
                <LucideArrowRight class="w-5 h-5 stroke-2 opacity-0 -translate-x-4 group-hover:translate-x-2 group-hover:opacity-100 duration-150 relative" />
                <LucideMousePointerClick class="w-5 h-5 stroke-2 -translate-x-4 group-hover:translate-x-4 group-hover:opacity-0 duration-150 relative" />
              </div>
            </button>
          </Link>
        </div>
        <nav class="space-y-3 flex flex-col">
          {links.map((link, i) => (
            <LinkSidebarItem
              key={i}
              link={link.to}
              label={link.name}
              Icon={link.icon}
            />
          ))}
        </nav>
      </main>
    </div>
  );
});

export default LinkSidebar;
