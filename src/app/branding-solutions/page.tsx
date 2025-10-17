import { Metadata } from 'next';
import Banner from "@/components//branding/banner";
import ExpertiseData from "@/components/sections/ExpertiseData";
import { brandingSolutions } from "../../app/../components/data/expertiseSections ";
import VideoSection from "@/components/branding/vedio";
import GetInTouch from "@/components/common/getintouch";

export const metadata: Metadata = {
  title: "Best Branding Solutions | Geekonomy Technology",
  description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
  keywords: "branding solutions, brand identity, logo design, brand strategy, brand development, visual identity, brand positioning, geekonomy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://geekonomytech.com/branding-solutions',
  },
  openGraph: {
    title: "Best Branding Solutions | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: 'https://geekonomytech.com/branding-solutions',
    siteName: 'Geekonomy Technology',
    locale: 'en',
    type: 'website',
  },
};

export default function Home() {
  return (  
       <div className="flex flex-col">
       <Banner />
       <ExpertiseData sections={brandingSolutions} />
       <VideoSection
        src="/expertise/Branding page V4.mp4"
        poster="/images/video-poster.webp"
      />
       <GetInTouch
      text="We specialize in creating cohesive brand identities that resonate with your audience. From
logo design to brand strategy, we work closely with you to bring your vision to life."
      buttonText="Contact Us"
      buttonLink="/contact-us"
    />
    </div>
  );
}