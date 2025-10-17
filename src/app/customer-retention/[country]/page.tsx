import { Metadata } from 'next';
import Banner from "@/components/customer Retension/banner";
import { notFound } from 'next/navigation';

type Props = {
  params: { country: string }
}

const countryData = {
  usa: {
    title: "Best Customer Retention Solutions in USA | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    keywords: "customer retention USA, customer loyalty USA, retention strategies USA, customer engagement USA, customer success USA, geekonomy",
    locale: "en-US",
    countryName: "USA"
  },
  uk: {
    title: "Best Customer Retention Solutions in UK | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    keywords: "customer retention UK, customer loyalty UK, retention strategies UK, customer engagement UK, customer success UK, geekonomy",
    locale: "en-GB",
    countryName: "UK"
  },
  ca: {
    title: "Best Customer Retention Solutions in Canada | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    keywords: "customer retention Canada, customer loyalty Canada, retention strategies Canada, customer engagement Canada, customer success Canada, geekonomy",
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

  const url = `https://geekonomytech.com/customer-retention/${country}`;

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

export default function CustomerRetentionCountry({ params }: Props) {
  const country = params.country.toLowerCase();
  
  if (!countryData[country as keyof typeof countryData]) {
    notFound();
  }

  return (
    <div>
      <Banner/>
    </div>
  );
}

