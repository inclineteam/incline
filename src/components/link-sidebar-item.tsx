import { QRL, QwikIntrinsicElements, component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { FunctionComponent, JSX } from "@builder.io/qwik/jsx-runtime";

interface LinkItem {
  link: string;
  label: string;
  Icon: QRL<() => JSX.Element>
}

const LinkSidebarItem = component$<LinkItem>(({ link, label, Icon }) => {
  const location = useLocation();
  const active = link + '/' === location.url.pathname

  return (
    <Link
      href={link}
      class={`px-3 relative rounded-md text-sm font-medium py-1.5 w-full duration-150 ${
        active
          ? "text-[#E2C16B]"
          : "hover:text-white text-[#958AB2] hover:bg-[#1E1536]"
      }`}
    >
      <span class={`flex w-max items-center relative pr-8 ${active && "bg-[#160e27]"}`}>
        {/* @ts-ignore */}
        <Icon class="w-6 h-6 stroke-2 mr-3" />
        {label}
      </span>
    </Link>
  );
});

export default LinkSidebarItem;
