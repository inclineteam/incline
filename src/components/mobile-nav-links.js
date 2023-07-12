import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/data/links";

const MobileNavLinks = () => {
  return (
    <>
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.to}
          className="text-white px-2 border-b border-white/[0.05] last:border-transparent pb-3.5 text-sm font-medium hover:text-[#e2c16b]"
        >
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.2, delay: 0.2 },
            }}
            className="block w-max"
          >
            {link.name}
          </motion.span>
        </Link>
      ))}
    </>
  );
};

export default MobileNavLinks;
