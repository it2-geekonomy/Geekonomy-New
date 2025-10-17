// src/app/digital-marketing/page.tsx
import type { Metadata } from "next";
import ExpertiseData from "@/components/sections/ExpertiseData";
import { digitalMarketing} from "../../app/../components/data/expertiseSections ";
import VideoSection from "@/components/digital marketing/vedio";
import Banner from "@/components/digital marketing/banner";
import GetInTouch from "@/components/common/getintouch";
import seoData from "@/seoData";

const data = seoData["digital-marketing"];

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: data.canonical },
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    siteName: "Geekonomy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: data.title,
    description: data.description,
    creator: "@GeekonomyTech",
  },
};

export default function DigitalMarketingPage() {
  return (
    <main className="flex flex-col">
      <Banner />
      <ExpertiseData sections={digitalMarketing} />
      <VideoSection
        src="/expertise/Digital marketing V4.mp4"
        poster="/images/video-poster.webp"
      />
      <GetInTouch
        text="With our specialised digital marketing solutions, you can maximise the potential of your online presence. We are here to help you advance your company in the digital sphere, from compelling campaigns to strategic branding."
        buttonText="Contact Us"
        buttonLink="/contact-us"
      />
    </main>
  );
}
