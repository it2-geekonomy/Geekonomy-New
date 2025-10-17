import { CaseStudy } from "../types";




interface ContentItem {
  type: string;
  text: string;
  className?: string;
}

const contentToHTML = (contentArray: ContentItem[]): string => {
  return contentArray.map(item => {
    if (item.type === 'heading') {
      return `<h2 class="${item.className || ''}">${item.text}</h2>`;
    } else if (item.type === 'paragraph') {
      return `<p>${item.text}</p>`;
    } else if (item.type === 'list') {
      return item.text;
    }
    return '';
  }).join('\n');
};

const TechStartContent = [
  { type: 'paragraph', text: "In today's rapidly evolving digital-marketing landscape, agencies are also constantly looking for ways to optimize the results of their marketing campaigns, increase their ROI and expand the services they can offer online-marketing capabilities, without overloading their in-house marketer teams." },
  { type: 'paragraph', text: "White-label PPC (Pay-Per-Click) stands out as a strategic solution, enabling agencies to provide high performance PPC campaigns, conversion rate optimization and search engine marketing under their own brand - while expert partners run the work behind-the-scenes." },
  { type: 'heading', text: 'What are White Label PPC Services?', className: 'mt-4 mb-3' },
  { type: 'paragraph', text: "White-label PPC services allow digital marketing and branding agencies to provide expert PPC management such as AdWords, paid search and display network under their own marketing platform branding. Instead of hiring new talents or investing in hours of PPC training, agencies work with specialized departments who deal with everything from landing pages and ad copy to keyword planner and bid management. This efficient model provides you with access to top-notch campaign optimization, conversion tracking and analytics top-notch, all customized to keep you with consistent agency identity." },
  { type: 'heading', text: 'Why White-Label PPC is a Must for Agencies?', className: 'mt-4 mb-3' },
  { type: 'paragraph', text: "Digital agencies are faced with the challenge of balancing client growth, ad group performance, and resource allocation." },
  { type: 'paragraph', text: "<strong>White-label PPC provides:</strong>" },
  { type: 'paragraph', text: "<strong>Scalability:</strong> Onboard more B2B and ecommerce clients, provide more marketing solutions, manage more AdWords campaigns/funnel strategies without having to increase your internal team." },
  { type: 'paragraph', text: "<strong>Expertise:</strong> Engage with content-marketing, messaging and PPC professionals who are well-versed in Google Ads, funnel strategies, and search engine optimization (SEO)." },
  { type: 'paragraph', text: "<strong>Time Efficiency:</strong> Free internal resources from ongoing campaigns, click-through, and optimization to focus on CRM, marketing strategy, client development and getting new business." },
  { type: 'paragraph', text: "<strong>Consistent Branding:</strong> Present branded dashboards, advertising campaigns, and marketing plans that reinforce the image of your agency with each client interaction." },
  { type: 'heading', text: 'Benefits Provided to Your Customers:', className: 'mt-4 mb-3' },
  { type: 'paragraph', text: "Increased ROI and conversion - Smarter targeting, segmentation and negative keywords." },
  { type: 'paragraph', text: "Advanced engine optimization, keyword research, and demographic targeting of audience for better ad copy performance." },
  { type: 'paragraph', text: "Trend and data analytics-based responsive campaign management and bid adjustments." },
  { type: 'paragraph', text: "Constant, transparent reporting and attribution, in line with the expectations of an \"in-house\" PPC team" },
  { type: 'heading', text: 'Selecting the Best White-Label PPC Partner', className: 'mt-4 mb-3' },
  { type: 'paragraph', text: "Choosing a partner is very important. Look for:" },
  { type: 'paragraph', text: "Proven track record on marketing campaigns, paid search and AdWords account management." },
  { type: 'paragraph', text: "Open, effective communication and subscriber service with effective feedback loops." },
  { type: 'paragraph', text: "Customisable solutions for unique marketing strategies, B2b marketing needs and different conversion goals." },
  { type: 'paragraph', text: "Superior tools for online presence, campaign segmentation, digital marketing services." },
  { type: 'heading', text: 'Conclusion:', className: 'mt-4 mb-3' },
  { type: 'paragraph', text: "White-label PPC is a strategic growth driver and cost-effective service for today's digital marketing agencies. It allows for scalability, quality assurance and seamless client experiences – from inbound marketing to remarketing, ad copywriting to campaign optimization, marketing analytics to influencer marketing." },
  { type: 'paragraph', text: "As an established leader in the digital space, agencies can concentrate on more creative strategies, branding and relationship building - resulting in profitable outcomes, improved marketing campaigns, and steady business growth in a competitive environment." },
  { type: 'paragraph', text: "Unlock the full potential of your agency with white label PPC, using the latest in marketing automation, data-driven attribution and ROI-driven strategies to win new customers and grow your marketing agency's reputation as a leader in the digital marketing world." },
];

const mobileFirstContent = [
  { type: 'paragraph', text: "E-commerce has undergone significant changes in recent years, driven by advancements in technology and changing consumer behavior. As we look ahead to 2025, several trends are shaping the industry and presenting new opportunities for online retailers. One of the key trends in e-commerce is the rise of omni-channel shopping experiences." },
  { type: 'paragraph', text: "Consumers today expect a seamless shopping experience across all channels, including online, mobile, and in-store. Retailers that can provide a cohesive omni-channel experience are more likely to succeed in the future e-commerce landscape. Another trend in e-commerce is the increasing use of AI and machine learning to personalize the shopping experience." },
  { type: 'paragraph', text: "By analyzing customer data and behavior, retailers can create personalized product recommendations and marketing messages that resonate with individual customers, driving engagement and sales. Additionally, the rise of social commerce is changing the way consumers shop online. Social media platforms are increasingly becoming shopping destinations in their own right, with features that allow users to discover and purchase products without leaving the platform." },
  { type: 'paragraph', text: "Retailers that can leverage social commerce effectively are well-positioned to capitalize on this trend. At Geekonomy, we understand the importance of staying ahead of the latest e-commerce trends and work closely with our clients to develop strategies that drive online success." },
  { type: 'paragraph', text: "From creating engaging online storefronts to implementing personalized marketing campaigns, we help our clients navigate the evolving e-commerce landscape and achieve their business goals." },
];

const eCommerceContent = [
  { type: 'paragraph', text: "A logo is a critical aspect of branding, as it serves as the visual representation of a brand and helps to create a memorable and recognizable identity. In today's crowded market, where consumers are bombarded with advertisements and marketing messages, having a standout logo is essential for setting your brand apart from the competition." },
  { type: 'paragraph', text: "At Geekonomy, we understand the importance of logo design and work closely with our clients to create stunning logos that capture the essence of their brand. Our logo design process begins with a thorough understanding of our client's brand Identity, values, and target audience, allowing us to create a logo that is not only visually appealing but also meaningful and impactful." },
  { type: 'paragraph', text: "One of the key aspects of our logo design process is simplicity. We believe that a logo should be simple and easily recognizable, making it easy for consumers to remember and associate with your brand. By focusing on simplicity, we are able to create logos that are timeless and effective, standing the test of time and remaining relevant for years to come." },
  { type: 'paragraph', text: "Additionally, we understand the importance of versatility in logo design. A logo should be able to be used across a variety of applications, from business cards to websites to social media profiles. That's why we create logos that are scalable and adaptable, ensuring that they look great no matter where they are used." },
  { type: 'paragraph', text: "In conclusion, logo design is a critical aspect of branding, and having a standout logo is essential for setting your brand apart from the competition. At Geekonomy, we specialize in creating stunning logos that capture the essence of our client's brand and help them stand out in a crowded market." },
];

const dataDashContent = [
  { type: 'paragraph', text: "Brand storytelling is a powerful tool that can help businesses connect with their audience on a deeper level. In today's competitive market, where consumers are bombarded with advertisements and marketing messages, storytelling allows brands to stand out by creating a memorable and emotional connection with their customers." },
  { type: 'paragraph', text: "At Geekonomy, we understand the importance of brand storytelling and help our clients craft compelling narratives that resonate with their target audience. Whether it's through a brand's origin story, its mission and values, or the stories of its customers, we work to create a cohesive and engaging brand narrative that sets our clients apart from their competitors." },
  { type: 'paragraph', text: "One of the key aspects of effective brand storytelling is authenticity. Customers today are more discerning than ever and can easily spot a brand that is being inauthentic or insincere. That's why we work closely with our clients to uncover the true essence of their brand and tell their story in a way that is genuine and relatable." },
  { type: 'paragraph', text: "Another important element of brand storytelling is consistency. A brand's story should be consistent across all touch points, from its website and social media channels to its advertising and customer service. This consistency helps to reinforce the brand's narrative and build trust with its audience over time." },
  { type: 'paragraph', text: "In conclusion, brand storytelling is a powerful tool that can help businesses connect with their audience in a meaningful way. At Geekonomy, we help our clients harness the power of storytelling to create compelling brand narratives that resonate with their customers and set them apart from their competitors." },
];

const finTechSecurityContent = [
  { type: 'paragraph', text: "Content marketing continues to be a powerful tool for brands looking to engage with their audience and drive traffic to their website. In 2025, several trends are shaping the world of content marketing, and staying ahead of these trends is essential for creating content that resonates with your target audience." },
  { type: 'paragraph', text: "One of the key trends in content marketing is the rise of video content. Video has become increasingly popular with consumers, and brands that can create engaging and shareable video content are more likely to capture the attention of their audience. Whether it's through how-to videos, product demonstrations, or behind-the-scenes content, video can be a powerful tool for telling your brand's story and connecting with your audience." },
  { type: 'paragraph', text: "Another trend in content marketing is the use of interactive content. Interactive content, such as quizzes, polls, and interactive info-graphics, can help to increase engagement and encourage users to spend more time on your website. By creating content that is interactive and engaging, you can create a more memorable experience for your audience and drive greater brand awareness." },
  { type: 'paragraph', text: "Additionally, the rise of voice search is changing the way that people search for and consume content online. Brands that can optimize their content for voice search are more likely to appear in search results and reach a larger audience. This includes creating content that answers common questions and is formatted in a way that is easy for voice assistants to read aloud." },
  { type: 'paragraph', text: "In conclusion, content marketing continues to be a powerful tool for brands looking to engage with their audience and drive traffic to their website. At Geekonomy, we help our clients create engaging content that resonates with their audience and drives results." },
  { type: 'paragraph', text: "From blog posts to videos to interactive content, we work closely with our clients to develop content marketing strategies that deliver real value and help them achieve their business goals." },
];

const healthTechConnectContent = [
  { type: 'paragraph', text: "Digital advertising is a powerful tool for reaching a targeted audience and driving conversions. In today's digital landscape, where consumers are spending more time online than ever before, having an effective digital advertising strategy is essential for businesses looking to succeed online." },
  { type: 'paragraph', text: "One of the key aspects of a successful digital advertising strategy is targeting the right audience. By understanding your target audience's demographics, interests, and online behavior, you can create ads that are more relevant and engaging, increasing the likelihood of conversions." },
  { type: 'paragraph', text: "Another important aspect of digital advertising is choosing the right platforms. With so many digital advertising platforms available, it's important to select the ones that are most likely to reach your target audience." },
  { type: 'paragraph', text: "Whether it's through social media advertising, search engine marketing, or display advertising, choosing the right platforms can help you maximize your ROI and drive results." },
  { type: 'paragraph', text: "Additionally, it's important to track and measure the performance of your digital advertising campaigns. By analyzing key metrics such as click-through rates, conversion rates, and return on ad spend, you can identify areas for improvement and optimize your campaigns for better results." },
  { type: 'paragraph', text: "At Geekonomy, we understand the importance of a well-executed digital advertising strategy and work closely with our clients to develop campaigns that drive results. From ad creative to targeting to campaign optimization, we use a data-driven approach to digital advertising to help our clients maximize their ROI and achieve their business goals." },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "TechStart Pro: Complete Digital Transformation",
    subtitle: "Revolutionized a traditional startup's digital presence with modern web applications and seamless user experience design.",
    image: "/case-studies/1.webp",
    slug: "techstart-pro",
    content: contentToHTML(TechStartContent),
  },
  {
    id: 2,
    title: "MobileFirst: Cross-Platform App Excellence",
    subtitle: "Designed and developed a cutting-edge mobile application that seamlessly works across iOS and Android platforms.",
    image: "/case-studies/2.webp",
    slug: "mobilefirst",
    content: contentToHTML(mobileFirstContent),
  },
  {
    id: 3,
    title: "EcommerceMax: Sales Platform Revolution",
    subtitle: "Built a comprehensive e-commerce solution that streamlined operations and enhanced customer shopping experience.",
    image: "/case-studies/3.webp",
    slug: "ecommercemax",
    content: contentToHTML(eCommerceContent),
  },
  {
    id: 4,
    title: "DataDash: Analytics Platform Redesign",
    subtitle: "Transformed complex data into intuitive visualizations with a comprehensive dashboard solution for marketing teams.",
    image: "/case-studies/4.webp",
    slug: "datadash",
    content: contentToHTML(dataDashContent),
  },
  {
    id: 5,
    title: "FinTech Security: Banking App Innovation",
    subtitle: "Created a secure, user-friendly fintech application with advanced security features and intuitive financial management tools.",
    image: "/case-studies/5.webp",
    slug: "fintech-security",
    content: contentToHTML(finTechSecurityContent),
  },
  {
    id: 6,
    title: "HealthTech Connect: Medical Platform Integration",
    subtitle: "Developed an integrated healthcare technology solution connecting patients, providers, and medical data seamlessly.",
    image: "/case-studies/6.webp",
    slug: "healthtech-connect",
    content: contentToHTML(healthTechConnectContent),
  },
];
