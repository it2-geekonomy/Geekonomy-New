// src/app/customer-retention/page.tsx
import type { Metadata } from "next";
import Banner from "@/components/customer Retension/banner";
import seoData from "@/seoData";

const data = seoData["customer-retention"];

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

export default function CustomerRetentionPage() {
  return (
    <main className="flex flex-col">
      <Banner />
    </main>
  );
}
