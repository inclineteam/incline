import LinkSidebar from "@/components/link-sidebar";
import MainLayout from "@/layouts/main";
import {
  ArrowUpRight,
  GithubLogo,
  Globe,
  GlobeSimple,
} from "@phosphor-icons/react";
import Image from "next/image";

export default function About() {
  return (
    <MainLayout title="Projects">
      <p className="text-[#958AB2] font-light max-w-[64ch] text-base/relaxed">
        We do also do team projects to help us collaborate with each other,
        making the team in sync when doing tasks.
      </p>

      <div className="border-t mt-4 pt-12 border-[#B08FFF]/10">
        {data.map((project) => (
          <div className="border-b mb-6 last:border-transparent border-[#B08FFF]/10 pb-6">
            <Image
              src={project.icon}
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="mt-4 mb-1 text-white">{project.name}</div>
            <div>
              <p className="text-sm/relaxed text-[#958AB2] max-w-[64ch] font-light">
                {project.description}
              </p>
            </div>

            <div className="flex-col lg:flex-row flex lg:items-center gap-4 mt-4 text-[#958AB2] text-xs">
              <div className="flex items-center space-x-4">
                {project.link ? (
                  <>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="pb-1 -mb-1 hover:text-white border-b border-transparent hover:border-[#958AB2] flex items-center">
                        <GlobeSimple className="mr-2" weight="bold" size={16} />
                        Website
                        <ArrowUpRight className="ml-1" size={16} />
                      </span>
                    </a>
                    <div className="h-0.5 w-0.5 rounded-full bg-[#958AB2]"></div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="pb-1 -mb-1 hover:text-white border-b border-transparent hover:border-[#958AB2] flex items-center">
                        <GithubLogo className="mr-2" weight="bold" size={16} />
                        Github
                        <ArrowUpRight className="ml-1" size={16} />
                      </span>
                    </a>
                  </>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="pb-1 -mb-1 hover:text-white border-b border-transparent hover:border-[#958AB2] flex items-center">
                      <GithubLogo className="mr-2" weight="bold" size={16} />
                      Github
                      <ArrowUpRight className="ml-1" size={16} />
                    </span>
                  </a>
                )}
              </div>
              <div className="text-xs font-medium text-white lg:hidden">
                Tech used
              </div>
              <div className="gap-4 flex items-center flex-wrap">
                {project.techs.map((tech, i) => (
                  <div key={i} className="w-max flex items-center space-x-4">
                    <div className="h-0.5 w-0.5 rounded-full bg-[#958AB2]"></div>{" "}
                    <p>{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

const data = [
  {
    name: "QuikkDesign",
    description: "A simple HTML, CSS, and JS code editor for web.",
    link: "https://quikkdesign.vercel.app",
    github: "https://github.com/inclineteam/quikkdesign",
    icon: "/quikk-icon.svg",
    techs: ["React", "Tailwind CSS", "Zustand", "Codemirror"],
  },
  {
    name: "Incognito Confessions",
    description:
      "A confession board for those who want to vent out their feelings.",
    link: null,
    github: "https://github.com/inclineteam/incognitoconfessions",
    icon: "/incognito-icon.svg",
    techs: ["Laravel", "Tailwind CSS", "Alpine.js"],
  },
];
