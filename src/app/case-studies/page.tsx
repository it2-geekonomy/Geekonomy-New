import Banner from "@/components/case-studies/banner";
import Section from "@/components/case-studies/TextSection";
import CaseStudiesGrid from "@/components/case-studies/CaseStudiesGrid";
import LastSection from "@/components/case-studies/LastSection";

export default function Home() {
  return (
    <div>
<Banner />

{/* Section + Grid with shared background */}
<section className="relative">
  {/* Background Image */}
  <img
    src="/case-studies/Geekonomy Case Studies Page sample.webp"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover object-center z-0"
  />

  {/* Optional overlay for better readability */}
  {/* <div className="absolute inset-0 bg-black/30 z-10"></div> */}

  {/* Content container */}
  <div className="relative z-10  mx-auto px-4  ">
    <Section />
    <CaseStudiesGrid />
  </div>
</section>

<LastSection />


    </div>
  );
}