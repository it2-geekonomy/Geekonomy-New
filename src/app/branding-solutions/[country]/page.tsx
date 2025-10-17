import { Metadata } from 'next';
import Banner from "@/components/branding/banner";
import ExpertiseData from "@/components/sections/ExpertiseData";
import { brandingSolutions } from "@/components/data/expertiseSections ";
import VideoSection from "@/components/branding/vedio";
import GetInTouch from "@/components/common/getintouch";
import { notFound } from 'next/navigation';

type Props = {
  params: { country: string }
}

const countryData = {
  usa: {
    title: "Best Branding Solutions in USA | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    keywords: "branding solutions USA, brand identity USA, logo design USA, brand strategy USA, brand development USA, visual identity USA, brand positioning USA, geekonomy",
    locale: "en-US",
    countryName: "USA"
  },
  uk: {
    title: "Best Branding Solutions in UK | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    keywords: "branding solutions UK, brand identity UK, logo design UK, brand strategy UK, brand development UK, visual identity UK, brand positioning UK, geekonomy",
    locale: "en-GB",
    countryName: "UK"
  },
  ca: {
    title: "Best Branding Solutions in Canada | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    keywords: "branding solutions Canada, brand identity Canada, logo design Canada, brand strategy Canada, brand development Canada, visual identity Canada, brand positioning Canada, geekonomy",
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

  const url = `https://geekonomytech.com/branding-solutions/${country}`;

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

export default function BrandingSolutionsCountry({ params }: Props) {
  const country = params.country.toLowerCase();
  
  if (!countryData[country as keyof typeof countryData]) {
    notFound();
  }

  return (  
    <div className="flex flex-col">
      <Banner />
      <ExpertiseData sections={brandingSolutions} />
      <VideoSection
        src="/expertise/Branding page V4.mp4"
        poster="/images/video-poster.webp"
      />
      <GetInTouch
        text="We specialize in creating cohesive brand identities that resonate with your audience. From logo design to brand strategy, we work closely with you to bring your vision to life."
        buttonText="Contact Us"
        buttonLink="/contact-us"
      />
    </div>
  );
}

