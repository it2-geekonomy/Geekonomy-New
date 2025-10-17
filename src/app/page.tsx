// src/app/page.tsx (Home Page)
import Banner from "@/components/home/Banner";
import Solutionize from "@/components/home/Solutionize";
import InfiniteScroll from "@/components/infinteScroll";
import ExpertiseSection from "@/components/home/Expertise";
import InspirationStation from "@/components/sections/InspirationStation";
import TerrificSection from "@/components/sections/TerrificSection";
import CTASection from "@/components/sections/CTASection";
import SEOData from "@/seoData";
import type { Metadata } from "next";

const data = SEOData.home;

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
    images: data.image ? [{ url: data.image }] : [],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: data.title,
    description: data.description,
    images: data.image ? [data.image] : [],
    creator: data.twitterHandle,
  },
};

export default function Home() {
  return (
    <div>
      <Banner />
      <Solutionize />
      <section className="py-20 bg-black">
        <InfiniteScroll />
      </section>
      <ExpertiseSection />
      <TerrificSection />
      <InspirationStation />
      <CTASection />
    </div>
  );
}
