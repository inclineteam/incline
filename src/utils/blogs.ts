 import { type Entry, createClient } from "contentful";
import type { RequestEvent, RequestEventLoader } from "@builder.io/qwik-city";
import dayjs from 'dayjs'

export interface Blog {
  content: string;
  title: string;
  date: Date;
  author: string;
  description: string;
}


const getClient = (requestEvent: RequestEvent | RequestEventLoader<QwikCityPlatform>) => createClient({
  space: requestEvent.env.get('CONTENTFUL_SPACE_ID')!,
  accessToken: requestEvent.env.get('CONTENTFUL_ACCESS_TOKEN')!
})

const determineReadingTime = (article: string) => {
  const wpm = 225;
  const words = article.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time;
};

export const getAllBlogs = async (requestEvent: RequestEvent | RequestEventLoader<QwikCityPlatform>) => {
  const contentful = getClient(requestEvent)
  const blogEntry = await contentful.getEntries({ content_type: 'blog' })
  const blogs = blogEntry.items.length > 0 ? blogEntry.items.map((entry) => convertToBlog(entry)) : []

  return blogs
};

const convertToBlog = (entry: Entry) => {
  return {
    title: entry.fields.title as string,
    author: entry.fields.author as string,
    date: dayjs(entry.fields.date as string).format('MMMM D, YYYY'),
    tags:  entry.fields.tags as string[],
    content:  entry.fields.content as string,
    slug: (entry.fields.title as string).toLowerCase().replace(' ', '-'),
    description:  entry.fields.description as string,
    readingTime: determineReadingTime(entry.fields.title as string)
  }
}

// export const getBlogBySlug = (slug: string): Blog => {
//   const fileContents = fs.readFileSync(`${blogsDir}/${slug}.md`, "utf-8");
//   const blogData = matter(fileContents);
//   const readingTime = determineReadingTime(blogData.content);

//   return {
//     content: blogData.content,
//     title: blogData.data.title,
//     date: blogData.data.date,
//     author: blogData.data.author,
//     description: blogData.data.description,
//     slug,
//     readingTime,
//   };
// };
