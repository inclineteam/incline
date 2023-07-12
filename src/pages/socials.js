import LinkSidebar from "@/components/link-sidebar";
import MainLayout from "@/layouts/main";
import { FacebookLogo, TwitterLogo, GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";

export default function Socials() {
  return (
    <MainLayout title="Socials">
      <p className="text-[#958AB2] font-light max-w-[64ch] text-base/relaxed">
        Follow, and message us on our official social media accounts!
      </p>
      <div className="border-t mt-6 pt-12 border-[#B08FFF]/10">
        <div className="space-y-4 md:space-y-4 md:gap-4 md:flex-wrap md:flex">
          <div className="p-4 w-full md:w-max rounded-xl text-white bg-gradient-to-br shadow-[inset_0_0_0_1px] shadow-white/[0.05] from-sky-500/30 to-purple-500/10">
           <div className="flex items-center justify-between">
              <p className="text-sm text-sky-400 font-semibold">Facebook</p>
              <ArrowSquareOut size={24} className="text-white/30" />
           </div>
            <div className="flex font-medium items-center space-x-2 mt-2">
              <FacebookLogo size={24} className="text-sky-400" />
              <p>/inclineteam</p>
            </div>
          </div>

          <div className="p-4 w-full md:w-max rounded-xl text-white bg-gradient-to-br shadow-[inset_0_0_0_1px] shadow-white/[0.05] from-slate-500/30 to-purple-500/10">
           <div className="flex items-center justify-between">
              <p className="text-sm text-slate-300 font-semibold">Github</p>
              <ArrowSquareOut size={24} className="text-white/30" />
           </div>
            <div className="flex font-medium items-center space-x-2 mt-2">
              <GithubLogo size={24} className="text-slate-300" />
              <p>/inclineteam</p>
            </div>
          </div>

          <div className="p-4 w-full md:w-max rounded-xl text-white bg-gradient-to-br shadow-[inset_0_0_0_1px] shadow-white/[0.05] from-sky-500/30 to-purple-500/10">
           <div className="flex items-center justify-between">
            <p className="text-sm text-cyan-400 font-semibold">Twitter</p>
              <ArrowSquareOut size={24} className="text-white/30" />
           </div>
            <div className="flex font-medium items-center space-x-2 mt-2">
              <TwitterLogo size={24} className="text-cyan-400" />
              <p>/@inclinedevs</p>
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}
