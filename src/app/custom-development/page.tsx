import { Metadata } from 'next';
import Banner from "@/components/custom/banner";
import ExpertisePhases from "@/components/sections/ExpertisePhase";
import ExpertiseData from "@/components/sections/ExpertiseData";
import { customDevelopment} from "../../app/../components/data/expertiseSections ";
import GetInTouch from "@/components/common/getintouch";

export const metadata: Metadata = {
  title: "Best Custom Development Services | Geekonomy Technology",
  description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
  keywords: "custom development, web development, app development, software development, full-stack development, custom software, geekonomy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://geekonomytech.com/custom-development',
  },
  openGraph: {
    title: "Best Custom Development Services | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: 'https://geekonomytech.com/custom-development',
    siteName: 'Geekonomy Technology',
    locale: 'en',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div> 
      <Banner/>    
      <ExpertiseData sections={customDevelopment} />
      <ExpertisePhases />
      <GetInTouch
      text="We merge simplicity with sophistication to craft intuitive solutions. Our commitment to user-centric design ensures seamless experiences that elevate your digital presence with elegance and efficiency."
      buttonText="Contact Us"
      buttonLink="/contact-us"
    />
    </div>
  );
}
