import BlogSearchBar from "@/components/blog-search-bar";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { getAllBlogs, getBlogBySlug } from "@/utils/blogs";
import { ArrowLeft, List, MagnifyingGlass } from "@phosphor-icons/react";
import Markdown from "markdown-to-jsx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ blog, blogs }) {
  const seoTitle = `Blog ${blog.title ? `| "${blog.title}"` : ""}`;

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
      </Head>
      <div className="">
        <nav className="px-6 md:px-0 border-b border-slate-100 max-w-[48rem] mx-auto pt-10 pb-4">
          <Link href="/blogs" className="w-max flex items-center space-x-2">
            <ArrowLeft size={24} />
            <p>Back</p>
          </Link>
        </nav>
        <header className="px-6 md:px-0 pt-6">
          <div className="max-w-[48rem] flex justify-between items-center mx-auto">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo-light.svg" alt="" height={30} width={30} />
              <div className="hidden md:flex items-center space-x-2">
                <h1 className="text-2xl text-[#150E27] tracking-tight font-medium">
                  Incline
                </h1>
                <small className="bg-violet-600 text-white rounded text-[#150E27] font-medium px-1.5 py-0.5">
                  Blogs
                </small>
              </div>
            </Link>

            {/* <nav className="space-x-10 flex items-center">
              <Link
                href="/about"
                className="text-sm text-slate-700 font-medium hover:text-violet-500"
              >
                About
              </Link>
              <Link
                href="/"
                className="text-sm text-slate-700 font-medium hover:text-violet-500"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-sm text-slate-700 font-medium hover:text-violet-500"
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className="text-sm text-slate-700 font-medium hover:text-violet-500"
              >
                Blogs
              </Link>
            </nav> */}

            <BlogSearchBar blogs={blogs} />
          </div>
        </header>
        <main className="relative px-6 md:px-0 py-10 md:py-16 max-w-[48rem] w-full mx-auto">
          <h1 className="max-w-[24ch] text-slate-800 text-left text-2xl sm:text-3xl md:text-4xl leading-snug tracking-tighter font-bold">
            {blog.title}
          </h1>
          <p className="text-sm md:text-base text-slate-700 mt-1 mb-4">
            By {blog.author}, {blog.date}
          </p>
          <article className="blog">
            <Markdown>{blog.content}</Markdown>
          </article>

          <ScrollToTopButton />
        </main>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const blogs = getAllBlogs();

  const paths = blogs.map((blog) => {
    return {
      params: { slug: blog.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const blog = getBlogBySlug(params.slug);
  const blogs = getAllBlogs();

  return {
    props: {
      blog,
      blogs,
    },
  };
};
