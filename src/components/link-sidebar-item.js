import Link from "next/link";
import { useRouter } from "next/router";

const LinkSidebarItem = ({ link, label }) => {
  const router = useRouter();
  const active = link === router.pathname;

  return (
    <Link
      href={link}
      className={`px-3 relative rounded-md text-sm font-medium py-1.5 w-full duration-150 ${
        active
          ? "text-[#E2C16B]"
          : "hover:text-white text-[#958AB2] hover:bg-[#1E1536]"
      }`}
    >
      {active && (
        <div className="absolute bg-[#E2C16B] w-[70%] right-0 top-1/2 -translate-y-1/2 h-0.5"></div>
      )}
      <span className={`relative pr-3 ${active && "bg-[#160e27]"}`}>
        {label}
      </span>
    </Link>
  );
};

export default LinkSidebarItem;
