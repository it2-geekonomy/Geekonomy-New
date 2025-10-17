// src/app/custom-development/page.tsx
import type { Metadata } from "next";
import Banner from "@/components/custom/banner";
import ExpertisePhases from "@/components/sections/ExpertisePhase";
import ExpertiseData from "@/components/sections/ExpertiseData";
import { customDevelopment} from "../../app/../components/data/expertiseSections ";
import GetInTouch from "@/components/common/getintouch";
import seoData from "@/seoData";

const data = seoData["custom-development"];

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
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
  alternates: { canonical: data.canonical },
};

export default function CustomDevelopmentPage() {
  return (
    <main className="flex flex-col">
      <Banner />
      <ExpertiseData sections={customDevelopment} />
      <ExpertisePhases />
      <GetInTouch
        text="We merge simplicity with sophistication to craft intuitive solutions. Our commitment to user-centric design ensures seamless experiences that elevate your digital presence with elegance and efficiency."
        buttonText="Contact Us"
        buttonLink="/contact-us"
      />
    </main>
  );
}
