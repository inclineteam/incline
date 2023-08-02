import MainLayout from "~/components/main-layout";
import { routeLoader$, type DocumentHead, Link } from "@builder.io/qwik-city";
import { metaDefaults } from "~/data/meta-defaults";
import { Blog, getAllBlogs } from "~/utils/blogs";
import LucideAlarmClock from '~icons/lucide/alarm-clock'
import { Fragment, component$ } from "@builder.io/qwik";

const metaTitle = 'Blogs | Incline - Software Development: Web & Mobile apps'
const description = 'Read stuffs relevant to our agency! We write about our journey, and experiences, and current projects here.'

export const useBlogs = routeLoader$(async() => {
  const blogs = getAllBlogs()

  return blogs as Blog[]
})

export default component$(() => {
  const { value: blogs } = useBlogs()

  return (
    <MainLayout title="Blogs" subtitle={description}>
      <div class="border-t mt-6 pt-12 border-[#B08FFF]/10">
        {blogs.length > 0  ? (
          <Fragment>
           <p class="mb-4 text-[#E2C16B] text-sm font-medium">Latest blogs</p>
                {
                  blogs.map((blog) => (
                  <div
                    key={blog.slug}
                    class="border-b mb-6 last:border-transparent border-[#B08FFF]/10 pb-6"
                  >
                    <Link
                      href={`/blog/${blog.slug}`}
                      class="hover:underline text-white"
                    >
                      {blog.title}
                    </Link>
                    <div class="mt-2">
                      <p class="text-sm/relaxed text-[#958AB2] max-w-[64ch] font-light">
                        {blog.description}
                      </p>
                    </div>
                    <div class="flex items-center space-x-4 mt-4 text-[#958AB2] text-xs">
                      <span>By {blog.author}</span>
                      <div class="h-0.5 w-0.5 rounded-full bg-[#958AB2]"></div>{" "}
                      <p>{blog.date}</p>
                      <div class="h-0.5 w-0.5 rounded-full bg-[#958AB2]"></div>{" "}
                      <span class="flex items-center">
                        <LucideAlarmClock class="mr-2 w-5 h-5 stroke-2" />{" "}
                        {blog.readingTime} {blog.readingTime > 1 ? "mins" : "min"}
                      </span>
                    </div>
                  </div>
                ))}
        </Fragment>)
        : <div class="flex flex-col items-center text-white text-xl pt-8"><h1>No blogs yet. Stay tuned!</h1></div>
              
              }
      </div>
    </MainLayout>
  );
})

export const head: DocumentHead = {
  title: metaTitle,
  meta: [
    ...metaDefaults,
    {
      name: "description",
      content: description,
    },
    {
      property: "og:title",
      content: metaTitle,
    },
    {
      property: "og:description",
      content:
        description,
    },
    {
      property: "twitter:title",
      content: metaTitle,
    },
    {
      property: "twitter:description",
      content: description,
    },
  ],
};
