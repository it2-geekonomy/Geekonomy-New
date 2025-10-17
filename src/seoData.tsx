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
      "Discover how omnichannel marketing creates seamless customer experiences across all channels and drives brand loyalty in 2025.",
    url: "https://geekonomytech.com/blog/omnichannel-marketing-in-2025",
    canonical:
      "https://geekonomytech.com/blog/omnichannel-marketing-in-2025",
    image: "https://geekonomytech.com/images/omni-channel-technology-online-retail-business-approach.045aab5fc2e885466ac3.webp",
    twitterHandle: "@GeekonomyTech",
  },
 // === Your White-Label PPC Blog ===
  "blog/white-label-ppc": {
    title: "White Label PPC Services | Boost Your Agency's ROI",
    description:
      "Learn how white-label PPC can help digital agencies scale faster, deliver better ROI, and strengthen their brand without extra overhead.",
    url: "https://geekonomy.in/blog/white-label-ppc",
    canonical: "https://geekonomy.in/blog/white-label-ppc",
    image: "https://geekonomy.in/images/blog/white-label-ppc.webp",
    twitterHandle: "@geekonomy",
  },

  "blog/white-label-ppc-digital-marketing": {
    title: "White-Label PPC: Promoting Agencies to Be Smarter in Digital Marketing",
    description:
      "Discover how white-ldsdsabel PPC services enable agencies to provide high-performance campaigns, optimize ROI, and expand their digital marketing capabilities without overloading in-house teams.",
    url: "https://geekonomytech.com/blog/white-label-ppc-digital-marketing",
    canonical: "https://geekonomytech.com/blog/white-label-ppc-digital-marketing",
    image: "https://geekonomytech.com/images/ppc.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/the-power-of-brand-storytelling": {
    title: "The Power of Brand Storytelling",
    description:
      "Discover how compelling brand narratives create emotional connections and help brands connect meaningfully with their customers.",
    url: "https://geekonomytech.com/blog/the-power-of-brand-storytelling",
    canonical:
      "https://geekonomytech.com/blog/the-power-of-brand-storytelling",
    image: "https://geekonomytech.com/images/Brand_Storytelling.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/ux-design-trends-for-creating-user-centric-experiences": {
    title: "UX Design Trends for 2025",
    description:
      "Stay ahead with the latest UX design trends and principles for creating exceptional user experiences.",
    url: "https://geekonomytech.com/blog/ux-design-trends-for-creating-user-centric-experiences",
    canonical:
      "https://geekonomytech.com/blog/ux-design-trends-for-creating-user-centric-experiences",
    image: "https://geekonomytech.com/images/UX_Design.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/why-responsive-web-design-is-essential": {
    title: "Why Responsive Web Design is Essential",
    description:
      "Learn why responsive web design is critical for success in today's mobile-first digital landscape.",
    url: "https://geekonomytech.com/blog/why-responsive-web-design-is-essential",
    canonical:
      "https://geekonomytech.com/blog/why-responsive-web-design-is-essential",
    image: "https://geekonomytech.com/images/Responsive_Web_Design.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/geekonomy-ecommerce-strategies": {
    title: "The Future of E-Commerce",
    description:
      "Explore the latest e-commerce trends and strategies that will shape online business success in 2025 and beyond.",
    url: "https://geekonomytech.com/blog/geekonomy-ecommerce-strategies",
    canonical: "https://geekonomytech.com/blog/geekonomy-ecommerce-strategies",
    image: "https://geekonomytech.com/images/E_Commerce.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/content-marketing-tips-for-engaging-content": {
    title: "Content Marketing in 2025",
    description:
      "Master the art of creating engaging content that resonates with your audience and drives meaningful results.",
    url: "https://geekonomytech.com/blog/content-marketing-tips-for-engaging-content",
    canonical:
      "https://geekonomytech.com/blog/content-marketing-tips-for-engaging-content",
    image: "https://geekonomytech.com/images/Content_Marketing.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/social-media-marketing-trends-to-watch": {
    title: "Social Media Marketing Trends to Watch",
    description:
      "Discover effective social media strategies for building engaged communities and fostering brand loyalty.",
    url: "https://geekonomytech.com/blog/social-media-marketing-trends-to-watch",
    canonical:
      "https://geekonomytech.com/blog/social-media-marketing-trends-to-watch",
    image: "https://geekonomytech.com/images/Social_Media_Marketing.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/the-importance-of-seo-in-todays-digital-landscape": {
    title: "The Importance of SEO in Today's Digital Landscape",
    description:
      "Understand how SEO and data analytics work together to drive organic traffic and business growth.",
    url: "https://geekonomytech.com/blog/the-importance-of-seo-in-todays-digital-landscape",
    canonical:
      "https://geekonomytech.com/blog/the-importance-of-seo-in-todays-digital-landscape",
    image: "https://geekonomytech.com/images/Importance_of_SEO.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/geekonomy-logo-strategies": {
    title: "How Geekonomy Designs Stunning Logos that Stand Out",
    description:
      "Learn the principles and processes behind creating memorable logos that make brands stand out in crowded markets.",
    url: "https://geekonomytech.com/blog/geekonomy-logo-strategies",
    canonical: "https://geekonomytech.com/blog/geekonomy-logo-strategies",
    image: "https://geekonomytech.com/images/Stunning_Logos.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/digital-advertising-strategies-to-maximizing-roi": {
    title: "Digital Marketing Strategies: Geekonomy's Approach to Maximizing ROI",
    description:
      "Learn proven digital marketing strategies that maximize ROI and drive sustainable business growth.",
    url: "https://geekonomytech.com/blog/digital-advertising-strategies-to-maximizing-roi",
    canonical:
      "https://geekonomytech.com/blog/digital-advertising-strategies-to-maximizing-roi",
    image: "https://geekonomytech.com/images/Digital_Advertising_Strategies.webp",
    twitterHandle: "@GeekonomyTech",
  },

  "blog/ai-marketing-role": {
    title: "The Role of AI in Marketing",
    description:
      "Explore how artificial intelligence is transforming marketing and enabling data-driven business decisions.",
    url: "https://geekonomytech.com/blog/ai-marketing-role",
    canonical: "https://geekonomytech.com/blog/ai-marketing-role",
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
