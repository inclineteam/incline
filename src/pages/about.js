import LinkSidebar from "@/components/link-sidebar";
import MainLayout from "@/layouts/main";

export default function About() {
  return (
    <MainLayout title="About">
      <p className="text-[#958AB2] font-light max-w-[64ch] text-base/relaxed">
        Learn about Incline, and check out our wonderful team.
      </p>
      <div className="border-t mt-6 pt-12 border-[#B08FFF]/10">
        <h1 className="text-2xl text-white tracking-tight font-semibold">
          Incline
        </h1>
        <p className="text-[#958AB2] font-light max-w-[64ch] mt-2 text-base/relaxed">
          A dynamic startup agency that unifies freelancers, open-source
          developers, and an agency environment, creating a powerful synergy.
          Our exceptional ecosystem thrives on fostering collaboration and
          growth by seamlessly connecting experienced mentors, ambitious
          students, and clients.
        </p>
      </div>

      <div className="mt-10">
        <h1 className="text-2xl text-white tracking-tight font-semibold">
          Our Team
        </h1>
        <p className="text-[#958AB2] font-light max-w-[64ch] mt-2 text-base/relaxed">
         We are a passionate and enthusiastic group of tech enthusiasts who thrive on turning ideas into reality. Our team is driven by a collective commitment to excellence, fueled by the love of technology, and empowered by the joy of creating innovative solutions that make a positive impact.
        </p>
      </div>
    </MainLayout>
  );
}
