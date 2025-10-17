// SEO Constants for Geekonomy Technology
// This file contains all SEO-related constants for easy maintenance and updates

export const SITE_CONFIG = {
  name: 'Geekonomy Technology',
  url: 'https://geekonomytech.com',
  defaultTitle: 'Geekonomy | Full-Service Branding, Marketing & Development',
  defaultDescription: 'Transforming businesses through cutting-edge technology and innovative solutions.',
  defaultKeywords: 'branding, digital marketing, web development, custom software, geekonomy',
  logo: '/logo2.png',
  favicon: '/favicon.ico',
} as const;

export const COUNTRIES = {
  usa: {
    name: 'USA',
    locale: 'en-US',
    currency: 'USD',
  },
  uk: {
    name: 'UK',
    locale: 'en-GB',
    currency: 'GBP',
  },
  ca: {
    name: 'Canada',
    locale: 'en-CA',
    currency: 'CAD',
  },
} as const;

export type CountryCode = keyof typeof COUNTRIES;

// Base description used across all pages
export const BASE_DESCRIPTION = 'From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.';

// Service configurations
export const SERVICES = {
  branding: {
    slug: 'branding-solutions',
    name: 'Branding Solutions',
    baseKeywords: ['branding solutions', 'brand identity', 'logo design', 'brand strategy', 'brand development', 'visual identity', 'brand positioning', 'geekonomy'],
  },
  digitalMarketing: {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    baseKeywords: ['digital marketing', 'SEO', 'PPC', 'social media marketing', 'content marketing', 'digital advertising', 'online marketing', 'geekonomy'],
  },
  customDevelopment: {
    slug: 'custom-development',
    name: 'Custom Development',
    baseKeywords: ['custom development', 'web development', 'app development', 'software development', 'full-stack development', 'custom software', 'geekonomy'],
  },
  customerRetention: {
    slug: 'customer-retention',
    name: 'Customer Retention',
    baseKeywords: ['customer retention', 'customer loyalty', 'retention strategies', 'customer engagement', 'customer success', 'geekonomy'],
  },
} as const;

export type ServiceKey = keyof typeof SERVICES;

/**
 * Generate country-specific keywords for a service
 * @param serviceKey - The service key from SERVICES
 * @param countryCode - The country code from COUNTRIES
 * @returns Comma-separated keyword string
 */
export function generateCountryKeywords(serviceKey: ServiceKey, countryCode: CountryCode): string {
  const service = SERVICES[serviceKey];
  const country = COUNTRIES[countryCode];
  
  // Remove 'geekonomy' from base keywords to add it at the end
  const baseKeywords = service.baseKeywords.filter(k => k !== 'geekonomy');
  
  // Add country to each keyword
  const countryKeywords = baseKeywords.map(keyword => `${keyword} ${country.name}`);
  
  // Add 'geekonomy' at the end
  return [...countryKeywords, 'geekonomy'].join(', ');
}

/**
 * Generate country-specific title for a service
 * @param serviceKey - The service key from SERVICES
 * @param countryCode - The country code from COUNTRIES
 * @returns SEO-optimized title string
 */
export function generateCountryTitle(serviceKey: ServiceKey, countryCode: CountryCode): string {
  const service = SERVICES[serviceKey];
  const country = COUNTRIES[countryCode];
  
  return `Best ${service.name} in ${country.name} | ${SITE_CONFIG.name}`;
}

/**
 * Generate canonical URL for a service and country
 * @param serviceKey - The service key from SERVICES
 * @param countryCode - The country code from COUNTRIES (optional)
 * @returns Full canonical URL
 */
export function generateCanonicalUrl(serviceKey: ServiceKey, countryCode?: CountryCode): string {
  const service = SERVICES[serviceKey];
  const basePath = `${SITE_CONFIG.url}/${service.slug}`;
  
  if (countryCode) {
    return `${basePath}/${countryCode}`;
  }
  
  return basePath;
}

/**
 * Validate if a country code is supported
 * @param country - The country code to validate
 * @returns Boolean indicating if the country is supported
 */
export function isValidCountry(country: string): country is CountryCode {
  return country in COUNTRIES;
}

/**
 * Get all supported country codes
 * @returns Array of country codes
 */
export function getSupportedCountries(): CountryCode[] {
  return Object.keys(COUNTRIES) as CountryCode[];
}

/**
 * Generate structured data for organization (JSON-LD)
 * @returns JSON-LD object for organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    description: SITE_CONFIG.defaultDescription,
    sameAs: [
      // Add your social media links here
      'https://www.facebook.com/geekonomy',
      'https://www.twitter.com/geekonomy',
      'https://www.linkedin.com/company/geekonomy',
      'https://www.instagram.com/geekonomy',
    ],
  };
}

/**
 * Generate structured data for a service page (JSON-LD)
 * @param serviceKey - The service key from SERVICES
 * @param countryCode - The country code from COUNTRIES (optional)
 * @returns JSON-LD object for service
 */
export function generateServiceSchema(serviceKey: ServiceKey, countryCode?: CountryCode) {
  const service = SERVICES[serviceKey];
  const url = generateCanonicalUrl(serviceKey, countryCode);
  const country = countryCode ? COUNTRIES[countryCode] : null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: country ? `${service.name} in ${country.name}` : service.name,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    description: BASE_DESCRIPTION,
    url: url,
    ...(country && {
      areaServed: {
        '@type': 'Country',
        name: country.name,
      },
    }),
  };
}

// Default robots configuration
export const DEFAULT_ROBOTS = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
} as const;

// Open Graph default configuration
export const DEFAULT_OG_CONFIG = {
  siteName: SITE_CONFIG.name,
  type: 'website' as const,
};

// Twitter Card default configuration
export const DEFAULT_TWITTER_CONFIG = {
  card: 'summary_large_image' as const,
};

