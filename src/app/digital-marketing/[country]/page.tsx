import { Metadata } from 'next';
import ExpertiseData from "@/components/sections/ExpertiseData";
import { digitalMarketing } from "@/components/data/expertiseSections ";
import VideoSection from "@/components/digital marketing/vedio";
import Banner from "@/components/digital marketing/banner";
import GetInTouch from "@/components/common/getintouch";
import { notFound } from 'next/navigation';

type Props = {
  params: { country: string }
}

const countryData = {
  usa: {
    title: "Best Digital Marketing Services in USA | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    keywords: "digital marketing USA, SEO USA, PPC USA, social media marketing USA, content marketing USA, digital advertising USA, online marketing USA, geekonomy",
    locale: "en-US",
    countryName: "USA"
  },
  uk: {
    title: "Best Digital Marketing Services in UK | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    keywords: "digital marketing UK, SEO UK, PPC UK, social media marketing UK, content marketing UK, digital advertising UK, online marketing UK, geekonomy",
    locale: "en-GB",
    countryName: "UK"
  },
  ca: {
    title: "Best Digital Marketing Services in Canada | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    keywords: "digital marketing Canada, SEO Canada, PPC Canada, social media marketing Canada, content marketing Canada, digital advertising Canada, online marketing Canada, geekonomy",
    locale: "en-CA",
    countryName: "Canada"
  }
};

export async function generateStaticParams() {
  return [
    { country: 'usa' },
    { country: 'uk' },
    { country: 'ca' },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = params.country.toLowerCase();
  const data = countryData[country as keyof typeof countryData];

  if (!data) {
    return {};
  }

  const url = `https://geekonomytech.com/digital-marketing/${country}`;

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
      languages: {
        [data.locale]: url,
      },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: url,
      siteName: 'Geekonomy Technology',
      locale: data.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
    },
    other: {
      'language': data.locale,
    },
  };
}

export default function DigitalMarketingCountry({ params }: Props) {
  const country = params.country.toLowerCase();
  
  if (!countryData[country as keyof typeof countryData]) {
    notFound();
  }

  return (
    <div>
      <Banner/>
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
    </div>
  );
}

