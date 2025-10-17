import { BlogPost } from '@/types';

// Helper function to convert content array to HTML string
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

const whitelabelPPCContent = [
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

const eCommerceContent = [
  { type: 'paragraph', text: "E-commerce has undergone significant changes in recent years, driven by advancements in technology and changing consumer behavior. As we look ahead to 2025, several trends are shaping the industry and presenting new opportunities for online retailers. One of the key trends in e-commerce is the rise of omni-channel shopping experiences." },
  { type: 'paragraph', text: "Consumers today expect a seamless shopping experience across all channels, including online, mobile, and in-store. Retailers that can provide a cohesive omni-channel experience are more likely to succeed in the future e-commerce landscape. Another trend in e-commerce is the increasing use of AI and machine learning to personalize the shopping experience." },
  { type: 'paragraph', text: "By analyzing customer data and behavior, retailers can create personalized product recommendations and marketing messages that resonate with individual customers, driving engagement and sales. Additionally, the rise of social commerce is changing the way consumers shop online. Social media platforms are increasingly becoming shopping destinations in their own right, with features that allow users to discover and purchase products without leaving the platform." },
  { type: 'paragraph', text: "Retailers that can leverage social commerce effectively are well-positioned to capitalize on this trend. At Geekonomy, we understand the importance of staying ahead of the latest e-commerce trends and work closely with our clients to develop strategies that drive online success." },
  { type: 'paragraph', text: "From creating engaging online storefronts to implementing personalized marketing campaigns, we help our clients navigate the evolving e-commerce landscape and achieve their business goals." },
];

const logoDesignContent = [
  { type: 'paragraph', text: "A logo is a critical aspect of branding, as it serves as the visual representation of a brand and helps to create a memorable and recognizable identity. In today's crowded market, where consumers are bombarded with advertisements and marketing messages, having a standout logo is essential for setting your brand apart from the competition." },
  { type: 'paragraph', text: "At Geekonomy, we understand the importance of logo design and work closely with our clients to create stunning logos that capture the essence of their brand. Our logo design process begins with a thorough understanding of our client's brand Identity, values, and target audience, allowing us to create a logo that is not only visually appealing but also meaningful and impactful." },
  { type: 'paragraph', text: "One of the key aspects of our logo design process is simplicity. We believe that a logo should be simple and easily recognizable, making it easy for consumers to remember and associate with your brand. By focusing on simplicity, we are able to create logos that are timeless and effective, standing the test of time and remaining relevant for years to come." },
  { type: 'paragraph', text: "Additionally, we understand the importance of versatility in logo design. A logo should be able to be used across a variety of applications, from business cards to websites to social media profiles. That's why we create logos that are scalable and adaptable, ensuring that they look great no matter where they are used." },
  { type: 'paragraph', text: "In conclusion, logo design is a critical aspect of branding, and having a standout logo is essential for setting your brand apart from the competition. At Geekonomy, we specialize in creating stunning logos that capture the essence of our client's brand and help them stand out in a crowded market." },
];

const brandStorytellingContent = [
  { type: 'paragraph', text: "Brand storytelling is a powerful tool that can help businesses connect with their audience on a deeper level. In today's competitive market, where consumers are bombarded with advertisements and marketing messages, storytelling allows brands to stand out by creating a memorable and emotional connection with their customers." },
  { type: 'paragraph', text: "At Geekonomy, we understand the importance of brand storytelling and help our clients craft compelling narratives that resonate with their target audience. Whether it's through a brand's origin story, its mission and values, or the stories of its customers, we work to create a cohesive and engaging brand narrative that sets our clients apart from their competitors." },
  { type: 'paragraph', text: "One of the key aspects of effective brand storytelling is authenticity. Customers today are more discerning than ever and can easily spot a brand that is being inauthentic or insincere. That's why we work closely with our clients to uncover the true essence of their brand and tell their story in a way that is genuine and relatable." },
  { type: 'paragraph', text: "Another important element of brand storytelling is consistency. A brand's story should be consistent across all touch points, from its website and social media channels to its advertising and customer service. This consistency helps to reinforce the brand's narrative and build trust with its audience over time." },
  { type: 'paragraph', text: "In conclusion, brand storytelling is a powerful tool that can help businesses connect with their audience in a meaningful way. At Geekonomy, we help our clients harness the power of storytelling to create compelling brand narratives that resonate with their customers and set them apart from their competitors." },
];

const contentMarketingContent = [
  { type: 'paragraph', text: "Content marketing continues to be a powerful tool for brands looking to engage with their audience and drive traffic to their website. In 2025, several trends are shaping the world of content marketing, and staying ahead of these trends is essential for creating content that resonates with your target audience." },
  { type: 'paragraph', text: "One of the key trends in content marketing is the rise of video content. Video has become increasingly popular with consumers, and brands that can create engaging and shareable video content are more likely to capture the attention of their audience. Whether it's through how-to videos, product demonstrations, or behind-the-scenes content, video can be a powerful tool for telling your brand's story and connecting with your audience." },
  { type: 'paragraph', text: "Another trend in content marketing is the use of interactive content. Interactive content, such as quizzes, polls, and interactive info-graphics, can help to increase engagement and encourage users to spend more time on your website. By creating content that is interactive and engaging, you can create a more memorable experience for your audience and drive greater brand awareness." },
  { type: 'paragraph', text: "Additionally, the rise of voice search is changing the way that people search for and consume content online. Brands that can optimize their content for voice search are more likely to appear in search results and reach a larger audience. This includes creating content that answers common questions and is formatted in a way that is easy for voice assistants to read aloud." },
  { type: 'paragraph', text: "In conclusion, content marketing continues to be a powerful tool for brands looking to engage with their audience and drive traffic to their website. At Geekonomy, we help our clients create engaging content that resonates with their audience and drives results." },
  { type: 'paragraph', text: "From blog posts to videos to interactive content, we work closely with our clients to develop content marketing strategies that deliver real value and help them achieve their business goals." },
];

const digitalMarketingContent = [
  { type: 'paragraph', text: "Digital advertising is a powerful tool for reaching a targeted audience and driving conversions. In today's digital landscape, where consumers are spending more time online than ever before, having an effective digital advertising strategy is essential for businesses looking to succeed online." },
  { type: 'paragraph', text: "One of the key aspects of a successful digital advertising strategy is targeting the right audience. By understanding your target audience's demographics, interests, and online behavior, you can create ads that are more relevant and engaging, increasing the likelihood of conversions." },
  { type: 'paragraph', text: "Another important aspect of digital advertising is choosing the right platforms. With so many digital advertising platforms available, it's important to select the ones that are most likely to reach your target audience." },
  { type: 'paragraph', text: "Whether it's through social media advertising, search engine marketing, or display advertising, choosing the right platforms can help you maximize your ROI and drive results." },
  { type: 'paragraph', text: "Additionally, it's important to track and measure the performance of your digital advertising campaigns. By analyzing key metrics such as click-through rates, conversion rates, and return on ad spend, you can identify areas for improvement and optimize your campaigns for better results." },
  { type: 'paragraph', text: "At Geekonomy, we understand the importance of a well-executed digital advertising strategy and work closely with our clients to develop campaigns that drive results. From ad creative to targeting to campaign optimization, we use a data-driven approach to digital advertising to help our clients maximize their ROI and achieve their business goals." },
];

const uxDesignContent = [
  { type: 'paragraph', text: "User experience (UX) design is a critical aspect of creating a successful digital product. In 2025, several trends are shaping the field of UX design, and staying ahead of these trends is essential for creating user-centric experiences that drive engagement and conversions. One of the key trends in UX design for 2025 is the continued focus on accessibility." },
  { type: 'paragraph', text: "With an increasing number of users accessing digital products on mobile devices and a growing awareness of the importance of accessibility, designers are placing a greater emphasis on creating interfaces that are easy to use for all users, including those with disabilities." },
  { type: 'paragraph', text: "Another trend in UX design is the use of artificial intelligence (AI) and machine learning to create more personalized and adaptive user experiences. By leveraging AI, designers can create interfaces that adapt to the user's behavior and preferences, providing a more tailored experience that enhances user satisfaction and engagement." },
  { type: 'paragraph', text: "Additionally, designers are increasingly using data-driven design principles to inform their decision-making process. By analyzing user data and feedback, designers can gain valuable insights into how users interact with a product and use this information to make informed design decisions that improve the overall user experience." },
  { type: 'paragraph', text: "In conclusion, staying ahead of the latest UX design trends is essential for creating user-centric experiences that drive engagement and conversions. At Geekonomy, we stay at the forefront of UX design trends to ensure that our clients' digital products deliver a seamless and engaging user experience." },
];

const socialMediaMarketingContent = [
  { type: 'paragraph', text: "Social media marketing is a constantly evolving field, with new trends and technologies shaping the way that brands engage with their audience. In 2025, several trends are shaping the world of social media marketing, and staying ahead of these trends is essential for creating effective campaigns that drive engagement and conversions." },
  { type: 'paragraph', text: "One of the key trends in social media marketing is the rise of ephemeral content. Ephemeral content, such as Instagram Stories and Snapchat Snaps, is content that is only available for a short period of time before disappearing. This type of content can create a sense of urgency and encourage users to engage with your brand in real-time." },
  { type: 'paragraph', text: "Another trend in social media marketing is the use of social commerce. Social media platforms are increasingly becoming shopping destinations in their own right, with features that allow users to discover and purchase products without leaving the platform. Brands that can leverage social commerce effectively are well-positioned to capitalize on this trend and drive sales through social media." },
  { type: 'paragraph', text: "Additionally, the rise of social media influencers is changing the way that brands reach their audience. Influencers have the ability to reach a large and engaged audience and can help to amplify your brand's message." },
  { type: 'paragraph', text: "By partnering with influencers who align with your brand values, you can reach new audiences and build credibility with your existing audience. In conclusion, social media marketing continues to be a powerful tool for brands looking to engage with their audience and drive sales." },
  { type: 'paragraph', text: "At Geekonomy, we help our clients navigate the ever-changing world of social media marketing and develop campaigns that deliver real results. From influencer partnerships to ephemeral content to social commerce, we work closely with our clients to create campaigns that resonate with their audience and drive engagement." },
];

const aiMarketingContent = [
  { type: 'paragraph', text: "Artificial intelligence (AI) is transforming the field of marketing, enabling businesses to analyze data, automate tasks, and personalize customer experiences at scale. In today's competitive market, where consumers expect personalized and relevant interactions with brands, AI has become an indispensable tool for marketers looking to succeed." },
  { type: 'paragraph', text: "One of the key ways that AI is being used in marketing is through data analysis. By analyzing large amounts of data, AI can help marketers identify patterns and trends that would be difficult or impossible to detect manually." },
  { type: 'paragraph', text: "This can help businesses make more informed decisions and create more effective marketing campaigns. Another important use of AI in marketing is in automation. AI-powered tools can automate repetitive tasks such as email marketing, social media posting, and customer service, freeing up marketers to focus on more strategic initiatives." },
  { type: 'paragraph', text: "This can help businesses save time and money while improving efficiency and productivity. Additionally, AI is enabling businesses to personalize customer experiences at scale. By analyzing customer data and behavior, AI can help businesses create personalized marketing messages and offers that resonate with individual customers, increasing engagement and driving conversions." },
  { type: 'paragraph', text: "In conclusion, AI is playing an increasingly important role in marketing, enabling businesses to analyze data, automate tasks, and personalize customer experiences at scale. At Geekonomy, we understand the power of AI in marketing and work closely with our clients to leverage this technology for success. From data analysis to automation to personalization, we help our clients harness the power of AI to achieve their marketing goals and drive business growth." },
];

const responsiveWebDesignContent = [
  { type: 'paragraph', text: "With the increasing use of mobile devices to access the Internet, having a responsive web design is essential for ensuring that your website is accessible and user-friendly on all devices. Responsive web design is a design approach that ensures that a website adapts to the screen size and device type of the user, providing an optimal viewing experience." },
  { type: 'paragraph', text: "One of the key benefits of responsive web design is improved user experience. By ensuring that your website is responsive, you can provide users with a seamless browsing experience across all devices, which can help to increase engagement and reduce bounce rates." },
  { type: 'paragraph', text: "Additionally, responsive web design can also have a positive impact on your website's SEO performance. Google has stated that responsive design is its recommended design pattern, and websites that are mobile-friendly are more likely to rank higher in search engine results pages. At Geekonomy, we understand the importance of responsive web design and work closely with our clients to ensure that their websites are optimized for mobile devices." },
  { type: 'paragraph', text: "Our approach to mobile optimization includes designing flexible layouts, optimizing images and videos for mobile viewing, and ensuring fast loading times on mobile devices. In conclusion, responsive web design is essential for ensuring that your website is accessible and user-friendly on all devices." },
  { type: 'paragraph', text: "At Geekonomy, we specialize in creating responsive websites that provide an optimal browsing experience for users on mobile devices, helping our clients to reach a wider audience and achieve their business goals. Web design is essential for ensuring that your website is accessible and user-friendly on all devices." },
  { type: 'paragraph', text: "At Geekonomy, we specialize in creating responsive websites that provide an optimal browsing experience for users on mobile devices, helping our clients to reach a wider audience and achieve their business goals." },
];

const seoContent = [
  { type: 'paragraph', text: "Search engine optimization (SEO) is a critical component of any digital marketing strategy, as it helps to improve a website's visibility in search engine results pages (SERP's) and drive organic traffic. In today's digital landscape, where consumers are increasingly turning to search engines to find products and services, having a strong SEO strategy is essential for businesses looking to succeed online." },
  { type: 'paragraph', text: "One of the key benefits of SEO is that it can help to increase organic traffic to your website. By optimizing your website for relevant keywords and creating high-quality, informative content, you can improve your chances of appearing in search results for relevant queries, driving more traffic to your site and increasing brand awareness." },
  { type: 'paragraph', text: "Additionally, SEO can help to improve the user experience on your website. By optimizing your site's navigation, improving page load times, and ensuring that your content is easy to read and navigate, you can create a better experience for your users and encourage them to spend more time on your site." },
  { type: 'paragraph', text: "At Geekonomy, we understand the importance of SEO in today's digital landscape and work closely with our clients to develop SEO strategies that drive results. From keyword research to on-page optimization to link building, we use a holistic approach to SEO to help our clients improve their search engine rankings and drive organic traffic to their website." },
];

const omnichannelMarketingContent = [
  { type: 'paragraph', text: "Consumers can move easily between online and offline interactions with businesses. Brands today are tasked with building integrated and seamless experiences. In 2025, it will be essential to tap into every interaction – be it digital, social, physical, or inbound – to create a cohesive and memorable customer experience." },
  { type: 'heading', text: 'What is Omnichannel Marketing?', className: 'mt-4 mb-3' },
  { type: 'paragraph', text: "Omnichannel marketing refers to creating a seamless and consistent brand experience across all channels and devices. You want to make sure every interaction the consumer, customer, or shopper has – digital or not – is aligned with the brand's identity, values, and promise – to create an intuitive and seamless transition between online and in-store experiences." },
  { type: 'heading', text: 'Why Omnichannel Marketing Will Matter in 2025?', className: 'mt-4 mb-3' },
  { type: 'paragraph', text: "Today, consumers expect effortless personalization and an engaging experience with the brands they choose to interact with. Brands and organizations that embrace an omnichannel approach enjoy higher customer retention rates, increased revenue per transaction, and stronger brand loyalty. Building a complete and connected experience makes it easier for consumers to buy, while also developing an opportunity for deeper emotional engagement that results in more returns and advocacy." },
  { type: 'heading', text: 'Creating an Effective Omnichannel Strategy', className: 'mt-4 mb-3' },
  { type: 'paragraph', text: "To maintain an advantage, brands must move beyond channel-specific tactics and create a fully unified customer journey. Steps include:" },
  { type: 'list', text: '<ul><li>Leverage a single brand voice and message across all channels.</li><li>Invest in Customer Relationship Management (CRM) platforms and analytics for a complete 360° customer view.</li><li>Allow customers to move seamlessly between channels – for example, retrieve a shopping cart started on mobile when switching to desktop.</li><li>Prepare teams to personalize and provide consistent cross-channel support.</li><li>Use data-driven insights to design customer journeys that clarify needs and reduce friction.</li></ul>' },
  { type: 'heading', text: 'The Bottom Line', className: 'mt-4 mb-3' },
  { type: 'paragraph', text: "A connected world in 2025 means omnichannel strategies are no longer optional – they are essential to building meaningful relationships with customers. Brands that unite technology, storytelling, and data to produce a unified experience will build loyalty, trust, and long-term growth." },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Customer Experience:',
    slug: 'omnichannel-marketing-2025',
    image: '/images/omni-channel-technology-online-retail-business-approach.045aab5fc2e885466ac3.webp',
    category: 'How Geekonomy Helps Brands Connect with Customers in an Omnichannel World',
    detailPageCategory: 'Omnichannel Marketing in 2025',
    excerpt: 'Discover how omnichannel marketing creates seamless customer experiences across all channels and drives brand loyalty in 2025.',
    content: contentToHTML(omnichannelMarketingContent),
    author: 'Geekonomy Team',
    date: '2025-02-18',
    tags: ['Omnichannel', 'Customer Experience', 'Digital Marketing'],
  },
  {
    id: '2',
    title: 'White-Label PPC: ',
    slug: 'white-label-ppc-digital-marketing',
    image: '/images/ppc.webp',
    category: 'Promoting Agencies to Be Smarter in Digital Marketing',
    excerpt: 'Discover how white-label PPC services enable agencies to provide high-performance campaigns, optimize ROI, and expand their digital marketing capabilities without overloading in-house teams.',
    content: contentToHTML(whitelabelPPCContent),
    author: 'Geekonomy Team',
    date: '2025-03-20',
    tags: ['Digital Marketing', 'PPC', 'White-Label', 'Agency Growth'],
  },
  {
    id: '3',
    title: 'The Future of E-Commerce:',
    slug: 'ecommerce-trends-shaping-2025',
    image: '/images/E_Commerce.webp',
    category: ' Geekonomy\'s Strategies for Online Success',
    excerpt: 'Explore the latest e-commerce trends and strategies that will shape online business success in 2025 and beyond.',
    content: contentToHTML(eCommerceContent),
    author: 'Geekonomy Team',
    date: '2025-03-18',
    tags: ['E-Commerce', 'Online Business', 'Digital Strategy'],
  },
  {
    id: '4',
    title: 'How Geekonomy Designs Stunning Logos that Stand Out in Crowded market.',
    slug: 'stunning-logos-design-guide',
    image: '/images/Stunning_Logos.webp',
    category: 'Geekonomy\'s Distinctive Logo Design',
    excerpt: 'Learn the principles and processes behind creating memorable logos that make brands stand out in Crowded markets.',
    content: contentToHTML(logoDesignContent),
    author: 'Geekonomy Team',
    date: '2025-03-15',
    tags: ['Branding', 'Logo Design', 'Visual Identity'],
  },
  {
    id: '5',
    title: 'The Power of Brand Storytelling',
    slug: 'the-power-of-brand-storytelling',
    image: '/images/Brand_Storytelling.webp',
    category: 'How Geekonomy Helps Brands Connect with Customers',
    excerpt: 'Discover how compelling brand narratives create emotional connections and help brands connect meaningfully with their customers.',
    content: contentToHTML(brandStorytellingContent),
    author: 'Geekonomy Team',
    date: '2025-03-12',
    tags: ['Branding', 'Storytelling', 'Marketing'],
  },
  {
    id: '6',
    title: 'Content Marketing in 2025:',
    slug: 'content-marketing-2025',
    image: '/images/Content_Marketing.webp',
    category: ' Geekonomy\'s Tips for Creating Engaging Content',
    excerpt: 'Master the art of creating engaging content that resonates with your audience and drives meaningful results.',
    content: contentToHTML(contentMarketingContent),
    author: 'Geekonomy Team',
    date: '2025-03-10',
    tags: ['Content Marketing', 'Digital Marketing', 'Strategy'],
  },
  {
    id: '7',
    title: 'Digital Marketing Strategies:',
    slug: 'digital-marketing-strategies-that-convert',
    image: '/images/Digital_Advertising_Strategies.webp',
    category: 'Geekonomy\'s Approach to Maximizing ROI',
    excerpt: 'Learn proven digital marketing strategies that maximize ROI and drive sustainable business growth.',
    content: contentToHTML(digitalMarketingContent),
    author: 'Geekonomy Team',
    date: '2025-03-08',
    tags: ['Digital Marketing', 'ROI', 'Strategy'],
  },
  {
    id: '8',
    title: 'UX Design Trends for 2025:',
    slug: 'ux-design-principles-higher-conversions',
    image: '/images/UX_Design.webp',
    category: 'Geekonomy\'s Guide to Creating User-Centric Experiences',
    excerpt: 'Stay ahead with the latest UX design trends and principles for creating exceptional user experiences.',
    content: contentToHTML(uxDesignContent),
    author: 'Geekonomy Team',
    date: '2025-03-05',
    tags: ['UX Design', 'User Experience', 'Design Trends'],
  },
  {
    id: '9',
    title: 'Social Media Marketing Trends to Watch:',
    slug: 'customer-retention-building-loyalty',
    image: '/images/Social_Media_Marketing.webp',
    category: 'Geekonomy shares insights on the latest social media marketing trends to watch, offering strategies for crafting',
    detailPageCategory: 'Geekonomy\'s Insights for Effective Campaigns',
    excerpt: 'Discover effective social media strategies for building engaged communities and fostering brand loyalty.',
    content: contentToHTML(socialMediaMarketingContent),
    author: 'Geekonomy Team',
    date: '2025-03-02',
    tags: ['Social Media', 'Marketing', 'Community'],
  },
  {
    id: '10',
    title: 'The Role of AI in Marketing:',
    slug: 'future-of-ai-in-business',
    image: '/images/AI_Marketing.webp',
    category: 'Geekonomy\'s Guide to Leveraging Technology for Success',
    excerpt: 'Explore how artificial intelligence is transforming marketing and enabling data-driven business decisions.',
    content: contentToHTML(aiMarketingContent),
    author: 'Geekonomy Team',
    date: '2025-02-28',
    tags: ['AI', 'Marketing', 'Technology'],
  },
  {
    id: '11',
    title: 'Why Responsive Web Design is Essential:',
    slug: 'mobile-first-development-2025',
    image: '/images/Responsive_Web_Design.webp',
    category: 'Geekonomy\'s Approach to Mobile Optimization',
    excerpt: 'Learn why responsive web design is critical for success in today\'s mobile-first digital landscape.',
    content: contentToHTML(responsiveWebDesignContent),
    author: 'Geekonomy Team',
    date: '2025-02-25',
    tags: ['Web Development', 'Responsive Design', 'Mobile'],
  },
  {
    id: '12',
    title: 'The Importance of SEO in Today\'s Digital Landscape:',
    slug: 'data-analytics-turning-information-into-insights',
    image: '/images/Importance_of_SEO.webp',
    category: 'Geekonomy\'s Best Practices',
    excerpt: 'Understand how SEO and data analytics work together to drive organic traffic and business growth.',
    content: contentToHTML(seoContent),
    author: 'Geekonomy Team',
    date: '2025-02-20',
    tags: ['SEO', 'Data Analytics', 'Digital Marketing'],
  },
];

export const BLOG_CATEGORIES = [
  'All',
  'Branding',
  'AI & Technology',
  'Cloud Computing',
  'Mobile Development',
  'Digital Marketing',
  'Customer Success',
  'UX Design',
  'E-Commerce',
  'Data Analytics',
  'Cybersecurity',
  'Web Development',
];
