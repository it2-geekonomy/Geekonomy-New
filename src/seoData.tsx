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

  "blog/omnichannel-marketing-in-2025": {
    title: "The Future of Customer Experience: Omnichannel Marketing in 2025",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/omnichannel-marketing-in-2025",
    canonical:
      "https://geekonomytech.com/blog/the-future-of-customer-experience-omnichannel-marketing-2025",
    image: "https://geekonomytech.com/assets/og-omnichannel.jpg",
    twitterHandle: "@GeekonomyTech",
  },
 // === Your White-Label PPC Blog ===
  "blog/white-label-ppc": {
    title: "White Label PPC Services | Boost Your Agency’s ROI",
    description:
      "Learn how white-label PPC can help digital agencies scale faster, deliver better ROI, and strengthen their brand without extra overhead.",
    url: "https://geekonomy.in/blog/white-label-ppc",
    canonical: "https://geekonomy.in/blog/white-label-ppc",
    image: "https://geekonomy.in/images/blog/white-label-ppc.webp",
    twitterHandle: "@geekonomy",
  },

  "blog/the-power-of-brand-storytelling": {
    title: "The Power of Brand Storytelling",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/the-power-of-brand-storytelling",
    canonical:
      "https://geekonomytech.com/blog/the-power-of-brand-storytelling",
    image: "https://geekonomytech.com/assets/og-storytelling.jpg",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/ux-design-trends-for-creating-user-centric-experiences": {
    title: "UX Design Trends for 2025",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/ux-design-trends-for-creating-user-centric-experiences",
    canonical:
      "https://geekonomytech.com/blog/ux-design-trends-for-creating-user-centric-experiences",
    image: "https://geekonomytech.com/assets/og-ux.jpg",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/why-responsive-web-design-is-essential": {
    title: "Why Responsive Web Design is Essential",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/why-responsive-web-design-is-essential",
    canonical:
      "https://geekonomytech.com/blog/why-responsive-web-design-is-essential",
    image: "https://geekonomytech.com/assets/og-responsive.jpg",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/geekonomy-ecommerce-strategies": {
    title: "The Future of E-Commerce",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/geekonomy-ecommerce-strategies",
    canonical: "https://geekonomytech.com/blog/geekonomy-ecommerce-strategies",
    image: "https://geekonomytech.com/assets/og-ecommerce.jpg",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/content-marketing-tips-for-engaging-content": {
    title: "Content Marketing in 2025",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/content-marketing-tips-for-engaging-content",
    canonical:
      "https://geekonomytech.com/blog/content-marketing-tips-for-engaging-content",
    image: "https://geekonomytech.com/assets/og-content-marketing.jpg",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/social-media-marketing-trends-to-watch": {
    title: "Social Media Marketing Trends to Watch",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/social-media-marketing-trends-to-watch",
    canonical:
      "https://geekonomytech.com/blog/social-media-marketing-trends-to-watch",
    image: "https://geekonomytech.com/assets/og-social-media.jpg",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/the-importance-of-seo-in-todays-digital-landscape": {
    title: "SEO Guide",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/the-importance-of-seo-in-todays-digital-landscape",
    canonical:
      "https://geekonomytech.com/blog/the-importance-of-seo-in-todays-digital-landscape",
    image: "https://geekonomytech.com/assets/og-seo.jpg",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/geekonomy-logo-strategies": {
    title: "The Importance of SEO in Today's Digital Landscape",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/geekonomy-logo-strategies",
    canonical: "https://geekonomytech.com/blog/geekonomy-logo-strategies",
    image: "https://geekonomytech.com/assets/og-logo-strategies.jpg",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/digital-advertising-strategies-to-maximizing-roi": {
    title: "How Geekonomy Designs Stunning Logos that Stand Out",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/digital-advertising-strategies-to-maximizing-roi",
    canonical:
      "https://geekonomytech.com/blog/digital-advertising-strategies-to-maximizing-roi",
    image: "https://geekonomytech.com/assets/og-advertising.jpg",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/ai-marketing-role": {
    title: "The Role of AI in Marketing",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://geekonomytech.com/blog/ai-marketing-role",
    canonical: "https://geekonomytech.com/blog/ai-marketing-role",
    image: "https://geekonomytech.com/assets/og-ai-marketing.jpg",
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
