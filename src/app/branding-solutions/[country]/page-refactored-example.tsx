/**
 * EXAMPLE: Refactored version using SEO constants
 * 
 * This is an example showing how to use the seoConstants.ts utility functions.
 * You can optionally refactor your existing pages to use this approach for better maintainability.
 * 
 * Benefits:
 * - Centralized SEO configuration
 * - Type-safe country and service keys
 * - Easier to maintain and update
 * - Reusable utility functions
 * - Consistent SEO across all pages
 */

import { Metadata } from 'next';
import Banner from "@/components/branding/banner";
import ExpertiseData from "@/components/sections/ExpertiseData";
import { brandingSolutions } from "@/components/data/expertiseSections ";
import VideoSection from "@/components/branding/vedio";
import GetInTouch from "@/components/common/getintouch";
import { notFound } from 'next/navigation';
import {
  COUNTRIES,
  SERVICES,
  BASE_DESCRIPTION,
  CountryCode,
  generateCountryKeywords,
  generateCountryTitle,
  generateCanonicalUrl,
  isValidCountry,
  getSupportedCountries,
  generateServiceSchema,
  DEFAULT_ROBOTS,
  SITE_CONFIG,
} from '@/constants/seoConstants';

type Props = {
  params: { country: string }
}

export async function generateStaticParams() {
  return getSupportedCountries().map(country => ({ country }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = params.country.toLowerCase();
  
  // Validate country
  if (!isValidCountry(country)) {
    return {};
  }

  const countryData = COUNTRIES[country];
  const serviceKey = 'branding';
  const url = generateCanonicalUrl(serviceKey, country);
  const title = generateCountryTitle(serviceKey, country);
  const keywords = generateCountryKeywords(serviceKey, country);

  return {
    title,
    description: BASE_DESCRIPTION,
    keywords,
    robots: DEFAULT_ROBOTS,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: BASE_DESCRIPTION,
      url,
      siteName: SITE_CONFIG.name,
      locale: countryData.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: BASE_DESCRIPTION,
    },
    // Optional: Add structured data (JSON-LD)
    other: {
      'application/ld+json': JSON.stringify(generateServiceSchema(serviceKey, country)),
    },
  };
}

export default function BrandingSolutionsCountry({ params }: Props) {
  const country = params.country.toLowerCase();
  
  if (!isValidCountry(country)) {
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

