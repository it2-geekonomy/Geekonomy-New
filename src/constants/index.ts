export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Blog', href: '/blog' },
];

export const EXPERTISE_LINKS: NavLink[] = [
  { label: 'Branding Solutions', href: '/branding-solutions' },
  { label: 'Custom Development', href: '/custom-development' },
  { label: 'Digital Marketing', href: '/digital-marketing' },
  { label: 'Customer Retention', href: '/customer-retention' },
];

export const COMPANY_INFO = {

  name: 'Geekonomy',
  description: 'Transforming businesses through cutting-edge technology and innovative solutions.',
  email: 'info@geekonomytech.com',
  phone: '+1 (555) 123-4567',
  address: '123 Tech Street, Innovation City, IC 12345',
  website: 'https://geekonomytech.com',
  social: {
    linkedin: 'https://linkedin.com/company/geekonomy',
    twitter: 'https://twitter.com/geekonomy',
    facebook: 'https://facebook.com/geekonomy',
    instagram: 'https://instagram.com/geekonomy',
    github: 'https://github.com/geekonomy',
  },
};

export const COMPANY_STATS = [
  { icon: '🚀', value: '500+', label: 'Projects Completed' },
  { icon: '😊', value: '200+', label: 'Happy Clients' },
  { icon: '👥', value: '50+', label: 'Team Members' },
  { icon: '⭐', value: '10+', label: 'Years Experience' },
];

export const SERVICES = [
  {
    title: 'Branding Solutions',
    description: 'Create a powerful brand identity that resonates with your target audience and sets you apart from the competition.',
    icon: '🎨',
    features: [
      'Logo Design & Brand Identity',
      'Brand Strategy & Positioning',
      'Visual Identity Guidelines',
      'Brand Collateral Design',
    ],
  },
  {
    title: 'Custom Development',
    description: 'Tailored software solutions built specifically for your business needs using cutting-edge technologies.',
    icon: '💻',
    features: [
      'Web Application Development',
      'Mobile App Development',
      'API Development & Integration',
      'Database Design & Optimization',
    ],
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven digital marketing strategies that increase visibility, engagement, and conversions.',
    icon: '📈',
    features: [
      'SEO & Content Marketing',
      'Social Media Management',
      'PPC & Paid Advertising',
      'Analytics & Performance Tracking',
    ],
  },
  {
    title: 'Customer Retention',
    description: 'Strategic solutions to keep customers engaged, satisfied, and coming back for more.',
    icon: '🤝',
    features: [
      'Customer Journey Mapping',
      'Loyalty Program Development',
      'Customer Support Optimization',
      'Retention Analytics & Insights',
    ],
  },
];

export const FEATURES = [
  {
    icon: '⚡',
    title: 'Fast & Efficient',
    description: 'Lightning-fast performance and optimized solutions for your business needs.',
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime guarantee.',
  },
  {
    icon: '🎯',
    title: 'Goal-Oriented',
    description: 'Focused on delivering results that matter to your business.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Support',
    description: '24/7 customer support to ensure your success.',
  },
  {
    icon: '💡',
    title: 'Innovative Solutions',
    description: 'Cutting-edge technology and creative problem-solving.',
  },
  {
    icon: '📈',
    title: 'Scalable Growth',
    description: 'Solutions that grow with your business.',
  },
];

export const TECHNOLOGIES = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'MongoDB', icon: '🍃' },
];

export const TESTIMONIALS = [
  {
    name: 'John Smith',
    company: 'TechCorp',
    role: 'CEO',
    content: 'Geekonomy transformed our digital presence and helped us achieve 300% growth in just 6 months.',
    avatar: '👨‍💼',
  },
  {
    name: 'Sarah Johnson',
    company: 'InnovateLab',
    role: 'CTO',
    content: 'Their technical expertise and attention to detail is unmatched. Highly recommended!',
    avatar: '👩‍💻',
  },
  {
    name: 'Mike Chen',
    company: 'StartupXYZ',
    role: 'Founder',
    content: 'Professional, reliable, and innovative. They delivered exactly what we needed.',
    avatar: '👨‍🚀',
  },
];

export const BLOG_CATEGORIES = [
  { name: 'Technology', slug: 'technology' },
  { name: 'Business', slug: 'business' },
  { name: 'Design', slug: 'design' },
  { name: 'Marketing', slug: 'marketing' },
  { name: 'Development', slug: 'development' },
];

export const BLOG_POSTS = [
  {
    slug: 'the-power-of-brand-storytelling',
    title: 'The Power of Brand Storytelling',
    excerpt: 'Learn how compelling brand stories can transform your business and connect with customers on a deeper level.',
    content: `
# The Power of Brand Storytelling

In today's competitive marketplace, having a great product or service isn't enough. You need to tell a story that resonates with your audience and creates an emotional connection. Brand storytelling is the art of using narrative techniques to communicate your brand's values, mission, and personality.

## Why Brand Storytelling Matters

### 1. Emotional Connection
Stories have the power to evoke emotions and create lasting memories. When customers feel emotionally connected to your brand, they're more likely to become loyal advocates.

### 2. Differentiation
In a crowded market, stories help you stand out from competitors. Your unique narrative becomes your competitive advantage.

### 3. Trust Building
Authentic stories build trust and credibility. Customers want to know the people behind the brand and what drives your business.

## Elements of Effective Brand Storytelling

### 1. Authenticity
Your story must be genuine and reflect your true values. Authenticity builds trust and credibility.

### 2. Relatability
Your audience should be able to see themselves in your story. Make it relatable to their experiences and challenges.

### 3. Consistency
Your story should be consistent across all touchpoints - website, social media, marketing materials, and customer interactions.

### 4. Purpose
Every story should have a clear purpose and message. What do you want your audience to feel, think, or do after hearing your story?

## How to Develop Your Brand Story

### 1. Define Your Origin Story
How did your company start? What problem were you trying to solve? What motivated you to begin this journey?

### 2. Identify Your Values
What principles guide your business decisions? What do you stand for beyond making a profit?

### 3. Know Your Audience
Who are you telling your story to? What are their needs, challenges, and aspirations?

### 4. Choose Your Medium
How will you tell your story? Through your website, videos, blog posts, social media, or a combination of channels?

## Examples of Great Brand Stories

### Nike: "Just Do It"
Nike's story isn't just about athletic wear - it's about overcoming obstacles, pushing boundaries, and achieving greatness.

### Apple: "Think Different"
Apple's story is about innovation, creativity, and challenging the status quo to create products that change the world.

### Patagonia: Environmental Activism
Patagonia's story centers around environmental responsibility and using business as a force for positive change.

## Measuring the Impact of Your Brand Story

### 1. Engagement Metrics
Track how your audience engages with your story across different channels.

### 2. Brand Awareness
Measure how well people recognize and remember your brand.

### 3. Customer Loyalty
Monitor repeat purchases and customer retention rates.

### 4. Word-of-Mouth
Track referrals and organic mentions of your brand.

## Conclusion

Brand storytelling is not just a marketing tactic - it's a fundamental way to connect with your audience and build a lasting relationship. By crafting authentic, relatable stories that reflect your values and purpose, you can create a brand that people love and remember.

Start by defining your origin story, identifying your core values, and understanding your audience. Then, consistently tell your story across all touchpoints to build trust, differentiation, and emotional connection with your customers.

Remember: every great brand has a great story. What's yours?
    `,
    author: 'Geekonomy Team',
    date: '2024-01-15',
    category: 'marketing',
    readTime: '5 min read',
    image: '/blog/brand-storytelling.jpg',
    tags: ['branding', 'marketing', 'storytelling', 'business'],
  },
  {
    slug: 'building-scalable-web-applications',
    title: 'Building Scalable Web Applications',
    excerpt: 'Learn the key principles and technologies for creating web applications that can grow with your business.',
    content: `
# Building Scalable Web Applications

In today's digital landscape, scalability is crucial for any web application. As your user base grows, your application must be able to handle increased traffic, data, and complexity without compromising performance.

## What is Scalability?

Scalability refers to a system's ability to handle increased load by adding resources (horizontal scaling) or improving existing resources (vertical scaling). A scalable application can grow seamlessly with your business needs.

## Types of Scaling

### 1. Vertical Scaling (Scale Up)
Adding more power to existing hardware - more CPU, RAM, or storage.

### 2. Horizontal Scaling (Scale Out)
Adding more servers or instances to distribute the load.

### 3. Database Scaling
Implementing read replicas, sharding, or using distributed databases.

## Key Principles for Scalable Applications

### 1. Stateless Design
Design your application to be stateless, meaning each request can be handled independently without relying on server-side session data.

### 2. Microservices Architecture
Break your application into smaller, independent services that can be scaled individually.

### 3. Caching Strategy
Implement multiple layers of caching to reduce database load and improve response times.

### 4. Load Balancing
Distribute incoming requests across multiple servers to prevent any single server from becoming overwhelmed.

### 5. Database Optimization
Use proper indexing, query optimization, and consider database sharding for large datasets.

## Technologies for Scalable Applications

### Frontend Technologies
- **React/Vue.js**: Component-based architecture for maintainable code
- **Next.js/Nuxt.js**: Server-side rendering and static generation
- **CDN**: Content delivery networks for global performance

### Backend Technologies
- **Node.js**: Event-driven, non-blocking I/O
- **Python/Django**: Rapid development with built-in scalability features
- **Go**: High performance and concurrency
- **Java/Spring**: Enterprise-grade scalability

### Database Technologies
- **PostgreSQL**: Robust relational database with advanced features
- **MongoDB**: Flexible NoSQL database for unstructured data
- **Redis**: In-memory data store for caching and sessions
- **Elasticsearch**: Search and analytics engine

### Cloud Platforms
- **AWS**: Comprehensive cloud services with auto-scaling
- **Google Cloud**: Advanced machine learning and analytics
- **Azure**: Enterprise-focused cloud platform
- **Vercel/Netlify**: Serverless deployment platforms

## Best Practices for Scalability

### 1. Design for Failure
Implement circuit breakers, retries, and graceful degradation.

### 2. Monitor Everything
Use application performance monitoring (APM) tools to track metrics and identify bottlenecks.

### 3. Implement Caching
Use Redis, Memcached, or CDN caching to reduce database load.

### 4. Optimize Database Queries
Use proper indexing, avoid N+1 queries, and implement database connection pooling.

### 5. Use Asynchronous Processing
Implement message queues and background job processing for heavy operations.

### 6. Implement Rate Limiting
Protect your application from abuse and ensure fair resource usage.

## Scalability Testing

### 1. Load Testing
Test your application under expected load conditions.

### 2. Stress Testing
Push your application beyond normal capacity to find breaking points.

### 3. Volume Testing
Test with large amounts of data to ensure performance doesn't degrade.

### 4. Spike Testing
Test how your application handles sudden traffic spikes.

## Monitoring and Maintenance

### 1. Performance Metrics
Track response times, throughput, and error rates.

### 2. Resource Utilization
Monitor CPU, memory, and disk usage.

### 3. Database Performance
Track query performance and database connection usage.

### 4. User Experience
Monitor real user metrics and user satisfaction.

## Conclusion

Building scalable web applications requires careful planning, proper architecture, and the right technologies. By following these principles and best practices, you can create applications that grow with your business and provide excellent user experiences even under heavy load.

Remember: scalability is not just about handling more users - it's about building a foundation that can adapt and evolve with your business needs.

Start with a solid architecture, implement proper monitoring, and always design with growth in mind. Your future self (and your users) will thank you!
    `,
    author: 'Geekonomy Team',
    date: '2024-01-10',
    category: 'technology',
    readTime: '8 min read',
    image: '/blog/scalable-applications.jpg',
    tags: ['development', 'scalability', 'architecture', 'performance'],
  },
  {
    slug: 'digital-marketing-trends-2024',
    title: 'Digital Marketing Trends for 2024',
    excerpt: 'Discover the latest digital marketing trends that will shape the industry in 2024 and beyond.',
    content: `
# Digital Marketing Trends for 2024

The digital marketing landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies. Here are the key trends that will shape digital marketing this year.

## 1. Artificial Intelligence and Machine Learning

### AI-Powered Personalization
AI is revolutionizing how brands personalize customer experiences. From recommendation engines to dynamic content, AI helps create more relevant and engaging interactions.

### Chatbots and Virtual Assistants
Advanced AI chatbots provide 24/7 customer support and can handle complex queries, improving customer satisfaction and reducing support costs.

### Predictive Analytics
AI-powered analytics help predict customer behavior, enabling more targeted marketing campaigns and better ROI.

## 2. Voice Search Optimization

### Voice-First Content
With the rise of smart speakers and voice assistants, optimizing for voice search is becoming crucial for SEO success.

### Conversational Keywords
Voice search queries are more natural and conversational, requiring a different approach to keyword research and content creation.

### Local Voice Search
Local businesses must optimize for voice search to capture "near me" queries and drive foot traffic.

## 3. Video Marketing Evolution

### Short-Form Video Content
Platforms like TikTok, Instagram Reels, and YouTube Shorts continue to dominate social media engagement.

### Live Streaming
Real-time video content creates authentic connections with audiences and drives immediate engagement.

### Interactive Video
Interactive elements in videos increase engagement and provide valuable data about viewer preferences.

## 4. Privacy-First Marketing

### Cookie-Less Tracking
With third-party cookies being phased out, marketers must find new ways to track and target audiences.

### First-Party Data
Building and leveraging first-party data becomes crucial for personalized marketing without privacy concerns.

### Privacy-Compliant Analytics
New analytics tools and methods that respect user privacy while providing valuable insights.

## 5. Social Commerce

### Shopping on Social Platforms
Social media platforms are becoming shopping destinations, with integrated e-commerce features.

### Influencer Commerce
Influencers are becoming direct sales channels, with shoppable content and affiliate partnerships.

### Community-Driven Sales
Building communities around brands drives organic sales and customer loyalty.

## 6. Sustainability Marketing

### Green Marketing
Consumers are increasingly conscious of environmental impact, driving demand for sustainable products and practices.

### Purpose-Driven Brands
Brands that align with social and environmental causes resonate better with modern consumers.

### Transparency and Authenticity
Honest communication about sustainability efforts builds trust and credibility.

## 7. Micro-Moments Marketing

### Real-Time Engagement
Capturing and engaging users during micro-moments when they're most receptive to marketing messages.

### Context-Aware Marketing
Delivering relevant content based on user context, location, and behavior.

### Instant Gratification
Providing immediate value and solutions to user needs in the moment.

## 8. Augmented Reality (AR) Marketing

### Virtual Try-Ons
AR allows customers to virtually try products before purchasing, reducing returns and increasing satisfaction.

### AR Advertising
Immersive AR experiences create memorable brand interactions and drive engagement.

### Location-Based AR
AR experiences tied to specific locations create unique marketing opportunities.

## 9. Community Marketing

### Brand Communities
Building and nurturing communities around brands creates loyal customers and advocates.

### User-Generated Content
Encouraging customers to create and share content about your brand amplifies reach and authenticity.

### Community-Driven Product Development
Involving communities in product development creates better products and stronger brand loyalty.

## 10. Data-Driven Marketing

### Advanced Analytics
Leveraging advanced analytics tools to gain deeper insights into customer behavior and campaign performance.

### Cross-Platform Attribution
Understanding how different touchpoints contribute to conversions across multiple platforms.

### Real-Time Optimization
Using real-time data to optimize campaigns and improve performance immediately.

## Implementing These Trends

### 1. Start Small
Begin with one or two trends that align with your business goals and resources.

### 2. Test and Learn
Experiment with new approaches and measure results to find what works for your audience.

### 3. Invest in Training
Ensure your team has the skills and knowledge to implement these trends effectively.

### 4. Focus on Your Audience
Always prioritize your audience's needs and preferences when adopting new trends.

### 5. Measure Success
Set clear KPIs and regularly measure the impact of your marketing efforts.

## Conclusion

The digital marketing landscape in 2024 is shaped by technology, privacy concerns, and changing consumer behaviors. By staying informed about these trends and strategically implementing them, you can create more effective marketing campaigns and build stronger connections with your audience.

Remember: trends come and go, but the fundamentals of good marketing - understanding your audience, providing value, and building relationships - remain constant. Use these trends as tools to enhance your existing marketing strategy, not replace it.

Stay curious, keep learning, and always put your customers first. The future of digital marketing is bright, and those who adapt will thrive!
    `,
    author: 'Geekonomy Team',
    date: '2024-01-05',
    category: 'marketing',
    readTime: '6 min read',
    image: '/blog/digital-marketing-trends.jpg',
    tags: ['marketing', 'trends', 'digital', '2024'],
  },
];