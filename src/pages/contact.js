import LinkSidebar from "@/components/link-sidebar";
import MainLayout from "@/layouts/main";
import { Info } from "@phosphor-icons/react";

export default function EmailUs() {
  return (
    <MainLayout title="Contact">
      <p className="text-[#958AB2] font-light max-w-[64ch] text-base/relaxed">
        You can email us on{" "}
        <span className="font-medium">inclinedevs@gmail.com</span>. Or you can
        directly write it here with our own composer.
      </p>
      <div className="border-t mt-6 pt-12 border-[#B08FFF]/10">
        <h1 className="mb-4 text-[#E2C16B]">Compose Email</h1>
        <form
          action="mailto:inclinedevs@gmail.com"
          className="border border-[#B08FFF]/10 p-6 rounded-lg"
        >
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-sm font-medium text-[#958AB2]"
            >
              Your Name
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="mt-2 py-1.5 px-3 text-white outline-none block w-full bg-[#160e27]/60 text-sm border border-[#B08FFF]/20 focus:border-[#B08FFF] focus:shadow-[0_0_0_4px] focus:shadow-[#B08FFF]/10 duration-150 rounded-md"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="body"
              className="text-sm font-medium text-[#958AB2]"
            >
              Body
            </label>
            <textarea
              type="text"
              name="body"
              id="body"
              cols={5}
              rows={5}
              className="mt-2 p-3 text-white outline-none block w-full bg-[#160e27]/60 text-sm  border border-[#B08FFF]/20 focus:border-[#B08FFF] focus:shadow-[0_0_0_4px] focus:shadow-[#B08FFF]/10 duration-150 rounded-md"
            ></textarea>
          </div>

          {/* <div>
                <label
                  htmlFor="cc"
                  className="text-sm font-medium text-[#958AB2]"
                >
                  CC
                </label>
                <input
                  type="text"
                  name="cc"
                  id="cc"
                  className="bg-[#160e27]  mt-2 py-1 px-3 text-white outline-none block w-full border border-[#B08FFF]/20 focus:border-[#B08FFF] rounded"
                />
              </div> */}

          <div className="items-start space-x-2 md:space-x-4 flex rounded-lg text-sm bg-violet-500/10 py-2 md:py-3 px-3 md:px-5 text-violet-500">
            <div>
              <Info size={22} weight="bold" />
            </div>
            <span>
              Clicking <b>Write</b> button will open the client of your email
              for you to send it.
            </span>
          </div>
          <button
            type="submit"
            className="font-semibold mt-6 bg-[#E2C16B] px-3 py-2 rounded-md text-[#160e27]"
          >
            Write
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
