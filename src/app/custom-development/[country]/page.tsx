import { Metadata } from 'next';
import Banner from "@/components/custom/banner";
import ExpertisePhases from "@/components/sections/ExpertisePhase";
import ExpertiseData from "@/components/sections/ExpertiseData";
import { customDevelopment } from "@/components/data/expertiseSections ";
import GetInTouch from "@/components/common/getintouch";
import { notFound } from 'next/navigation';

type Props = {
  params: { country: string }
}

const countryData = {
  usa: {
    title: "Best Custom Development Services in USA | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    keywords: "custom development USA, web development USA, app development USA, software development USA, full-stack development USA, custom software USA, geekonomy",
    locale: "en-US",
    countryName: "USA"
  },
  uk: {
    title: "Best Custom Development Services in UK | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    keywords: "custom development UK, web development UK, app development UK, software development UK, full-stack development UK, custom software UK, geekonomy",
    locale: "en-GB",
    countryName: "UK"
  },
  ca: {
    title: "Best Custom Development Services in Canada | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    keywords: "custom development Canada, web development Canada, app development Canada, software development Canada, full-stack development Canada, custom software Canada, geekonomy",
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

  const url = `https://geekonomytech.com/custom-development/${country}`;

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

export default function CustomDevelopmentCountry({ params }: Props) {
  const country = params.country.toLowerCase();
  
  if (!countryData[country as keyof typeof countryData]) {
    notFound();
  }

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

