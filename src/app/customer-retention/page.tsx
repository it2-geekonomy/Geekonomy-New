import { Metadata } from 'next';
import Banner from "@/components/customer Retension/banner";

export const metadata: Metadata = {
  title: "Best Customer Retention Solutions | Geekonomy Technology",
  description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
  keywords: "customer retention, customer loyalty, retention strategies, customer engagement, customer success, geekonomy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://geekonomytech.com/customer-retention',
  },
  openGraph: {
    title: "Best Customer Retention Solutions | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: 'https://geekonomytech.com/customer-retention',
    siteName: 'Geekonomy Technology',
    locale: 'en',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div>
      <Banner/>
    </div>
  );
}