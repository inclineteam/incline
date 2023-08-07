import LucideUsers2 from "~icons/lucide/users-2";
import LucidePackage from "~icons/lucide/package";
import LucideShapes from "~icons/lucide/shapes";
import LucideLaptop2 from "~icons/lucide/laptop-2";
import { $ } from "@builder.io/qwik";

const iconClass = "w-6 h-6 stroke-2 mr-3";

export const links = [
  {
    name: "About",
    to: "/about",
    icon: $(() => <LucideUsers2 class={iconClass} />),
  },
  {
    name: "Services",
    to: "/services",
    icon: $(() => <LucidePackage class={iconClass} />),
  },
  {
    name: "Projects",
    to: "/projects",
    icon: $(() => <LucideShapes class={iconClass} />),
  },
  {
    name: "Socials",
    to: "/socials",
    icon: $(() => <LucideLaptop2 class={iconClass} />),
  },
];
