import MainLayout from "~/components/main-layout";
import type { DocumentHead } from "@builder.io/qwik-city";
import { metaDefaults } from "~/data/meta-defaults";
import { component$ } from "@builder.io/qwik";
import LucideMailCheck from "~icons/lucide/mail-check";

const metaTitle = "Contact | Incline - Software Development: Web & Mobile apps";
const description =
  "You can email us on inclinedevs@gmail.com. Alternatively, you can directly write it here with our own composer.";

export default component$(() => {
  return (
    <MainLayout title="Contact" subtitle={description}>
      <div class="border-t mt-6 pt-12 border-[#B08FFF]/10">
        <h1 class="mb-4 text-[#E2C16B]">Compose Email</h1>
        <form action="mailto:inclinedevs@gmail.com">
          <div class="mb-6 group">
            <label
              html-for="subject"
              class="text-sm font-medium text-[#958AB2] group-focus-within:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              class="mt-2 py-1.5 px-3 text-white/70 focus:text-white outline-none block w-full bg-[#160e27]/60 focus:bg-[#160e27] text-sm border border-[#B08FFF]/20 focus:border-[#B08FFF] duration-150 rounded-md"
            />
          </div>

          <div class="mb-6 group">
            <label
              html-for="body"
              class="text-sm font-medium text-[#958AB2] group-focus-within:text-white"
            >
              Body
            </label>
            <textarea
              name="body"
              id="body"
              cols={5}
              rows={5}
              class="mt-2 p-3 text-white/70 focus:text-white outline-none block w-full bg-[#160e27]/60 text-sm  border border-[#B08FFF]/20 focus:border-[#B08FFF] focus:bg-[#160e27] duration-150 rounded-md"
            ></textarea>
          </div>

          <div class="items-start lg:items-center space-x-2 md:space-x-4 flex rounded-lg text-sm bg-violet-500/10 py-2 md:py-3 px-3 md:px-5 text-violet-500">
            <div>
              <LucideMailCheck class="w-6 h-6 stroke-2" />
            </div>
            <span>
              Clicking <b>Write</b> button will open the client of your email
              for you to send it.
            </span>
          </div>
          <button
            type="submit"
            class="font-semibold mt-6 bg-[#E2C16B] px-3.5 py-2 rounded-md text-[#160e27]"
          >
            Write
          </button>
        </form>
      </div>
    </MainLayout>
  );
});

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
      content: description,
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
