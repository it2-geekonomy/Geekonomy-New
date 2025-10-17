// src/app/branding-solutions/page.tsx
import type { Metadata } from "next";
import Banner from "@/components/branding/banner";
import ExpertiseData from "@/components/sections/ExpertiseData";
import { brandingSolutions } from "../../app/../components/data/expertiseSections ";
import VideoSection from "@/components/branding/vedio";
import GetInTouch from "@/components/common/getintouch";
import SEOData from "@/seoData";

// Get SEO data for branding solutions
const data = SEOData["branding-solutions"];

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  alternates: {
    canonical: data.canonical,
  },
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    siteName: "Geekonomy",
    type: "website",
    images: data.image ? [{ url: data.image }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: data.title,
    description: data.description,
    creator: data.twitterHandle || "@GeekonomyTech",
    images: data.image ? [data.image] : undefined,
  },
};

export default function BrandingSolutionsPage() {
  return (
    <main className="flex flex-col">
      {/* Banner Section */}
      <Banner />

      {/* Expertise / Services Section */}
      <ExpertiseData sections={brandingSolutions} />

      {/* Video Section */}
      <VideoSection
        src="/expertise/Branding page V4.mp4"
        poster="/images/video-poster.webp"
      />

      {/* Contact / CTA Section */}
      <GetInTouch
        text="We specialize in creating cohesive brand identities that resonate with your audience. From logo design to brand strategy, we work closely with you to bring your vision to life."
        buttonText="Contact Us"
        buttonLink="/contact-us"
      />
    </main>
  );
}
