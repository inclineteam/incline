import LinkSidebar from "@/components/link-sidebar";
import { getAllBlogs } from "@/utils/blogs";
import { ArrowRight, List, Timer } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import MainLayout from "@/layouts/main";

export default function Blogs({ blogs }) {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <MainLayout title="Blogs">
      <p className="text-[#958AB2] max-w-[64ch] font-light text-base/relaxed">
        Read stuffs relevant to our agency! We are going to be posting articles
        about our journey, and experiences, and current projects here.
      </p>

      <div className="border-t mt-6 pt-8 border-[#B08FFF]/10">
        <p className="mb-4 text-[#E2C16B] text-sm font-medium">Latest blogs</p>
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="border-b mb-6 last:border-transparent border-[#B08FFF]/10 pb-6"
          >
            <Link
              href={`/blog/${blog.slug}`}
              className="hover:underline text-white"
            >
              {blog.title}
            </Link>
            <div className="mt-2">
              <p className="text-sm/relaxed text-[#958AB2] max-w-[64ch] font-light">
                {blog.description}
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 text-[#958AB2] text-xs">
              <span>By {blog.author}</span>
              <div className="h-0.5 w-0.5 rounded-full bg-[#958AB2]"></div>{" "}
              <p>{blog.date}</p>
              <div className="h-0.5 w-0.5 rounded-full bg-[#958AB2]"></div>{" "}
              <span className="flex items-center">
                <Timer className="mr-2" weight="bold" size={16} />{" "}
                {blog.readingTime} {blog.readingTime > 1 ? "mins" : "min"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const blogs = getAllBlogs();

  return {
    props: {
      blogs,
    },
  };
};
