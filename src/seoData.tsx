export interface SEOData {
  title: string;
  description: string;
  url: string;
  canonical: string;
  image?: string;
  twitterHandle?: string;
}

const seoData: Record<string, SEOData> = {
  home: {
    title: "Geekonomy | Full-Service Branding, Marketing & Development",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com",         // production URL here
    canonical: "https://geekonomytech.com",   // production URL here
    image: "https://geekonomytech.com/assets/og-home.jpg",
    twitterHandle: "@GeekonomyTech",
  },

  about: {
    title: "Our Story | Branding | Web development | Customer Retention",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/about-us",
    canonical: "https://geekonomytech.com/about-us",
    image: "https://geekonomytech.com/assets/og-about.jpg",
    twitterHandle: "@GeekonomyTech",
  },

  blog: {
    title: "Blogs | Geekonomy Technology",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog",
    canonical: "https://geekonomytech.com/blog",
    image: "https://geekonomytech.com/assets/og-blog.jpg",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/omnichannel-marketing-2025": {
    title: "The Future of Customer Experience: Omnichannel Marketing in 2025",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/omnichannel-marketing-2025",
    canonical:
      "https://geekonomytech.com/blog/omnichannel-marketing-2025",
    image: "https://geekonomytech.com/images/omni-channel-technology-online-retail-business-approach.045aab5fc2e885466ac3.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/white-label-ppc-digital-marketing": {
    title: "White-Label PPC: Promoting Agencies to Be Smarter in Digital Marketing",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/white-label-ppc-digital-marketing",
    canonical: "https://geekonomytech.com/blog/white-label-ppc-digital-marketing",
    image: "https://geekonomytech.com/images/ppc.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/the-power-of-brand-storytelling": {
    title: "The Power of Brand Storytelling",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/the-power-of-brand-storytelling",
    canonical:
      "https://geekonomytech.com/blog/the-power-of-brand-storytelling",
    image: "https://geekonomytech.com/images/Brand_Storytelling.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/ux-design-principles-higher-conversions": {
    title: "UX Design Trends for 2025",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/ux-design-principles-higher-conversions",
    canonical:
      "https://geekonomytech.com/blog/ux-design-principles-higher-conversions",
    image: "https://geekonomytech.com/images/UX_Design.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/mobile-first-development-2025": {
    title: "Why Responsive Web Design is Essential",
    description:
      "Learn why responsive web design is critical for success in today's mobile-first digital landscape.",
    url: "https://geekonomytech.com/blog/mobile-first-development-2025",
    canonical:
      "https://geekonomytech.com/blog/mobile-first-development-2025",
    image: "https://geekonomytech.com/images/Responsive_Web_Design.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/ecommerce-trends-shaping-2025": {
    title: "The Future of E-Commerce",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/ecommerce-trends-shaping-2025",
    canonical: "https://geekonomytech.com/blog/ecommerce-trends-shaping-2025",
    image: "https://geekonomytech.com/images/E_Commerce.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/content-marketing-2025": {
    title: "Content Marketing in 2025",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/content-marketing-2025",
    canonical:
      "https://geekonomytech.com/blog/content-marketing-2025",
    image: "https://geekonomytech.com/images/Content_Marketing.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/customer-retention-building-loyalty": {
    title: "Social Media Marketing Trends to Watch",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/customer-retention-building-loyalty",
    canonical:
      "https://geekonomytech.com/blog/social-media-marketing-trends-to-watch",
    image: "https://geekonomytech.com/images/Social_Media_Marketing.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/data-analytics-turning-information-into-insights": {
    title: "The Importance of SEO in Today's Digital Landscape",
    description:
      "Understand how SEO and data analytics work together to drive organic traffic and business growth.",
    url: "https://geekonomytech.com/blog/data-analytics-turning-information-into-insights",
    canonical:
      "https://geekonomytech.com/blog/data-analytics-turning-information-into-insights",
    image: "https://geekonomytech.com/images/Importance_of_SEO.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/stunning-logos-design-guide": {
    title: "How Geekonomy Designs Stunning Logos that Stand Out",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/stunning-logos-design-guide",
    canonical: "https://geekonomytech.com/blog/stunning-logos-design-guide",
    image: "https://geekonomytech.com/images/Stunning_Logos.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/digital-marketing-strategies-that-convert": {
    title: "How Geekonomy Designs Stunning Logos that Stand Out",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/digital-marketing-strategies-that-convert",
    canonical:
      "https://geekonomytech.com/blog/digital-marketing-strategies-that-convert",
    image: "https://geekonomytech.com/images/Digital_Advertising_Strategies.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/future-of-ai-in-business": {
    title: "The Role of AI in Marketing",
    description:
      "Explore how artificial intelligence is transforming marketing and enabling data-driven business decisions.",
    url: "https://geekonomytech.com/blog/future-of-ai-in-business",
    canonical: "https://geekonomytech.com/blog/future-of-ai-in-business",
    image: "https://geekonomytech.com/images/AI_Marketing.webp",
    twitterHandle: "@GeekonomyTech",
  },

   "branding-solutions": {
    title: "Best Branding Solutions | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/branding-solutions",
    canonical: "https://geekonomytech.com/branding-solutions",
  },

  "custom-development": {
    title: "Best Custom Development Services | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/custom-development",
    canonical: "https://geekonomytech.com/custom-development",
  },

  "digital-marketing": {
    title: "Best Digital Marketing Company | Geekonomy Technology",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/digital-marketing",
    canonical: "https://geekonomytech.com/digital-marketing",
  },

  "customer-retention": {
    title: "Geekonomy | Full-Service Branding, Marketing & Development",
    description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/customer-retention",
    canonical: "https://geekonomytech.com/customer-retention",
  },
};

export default seoData;
