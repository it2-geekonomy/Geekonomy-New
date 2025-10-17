export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Case Studies', href: '/case-studies' },
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
  phone: '+91- 76248 18717',
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

// Note: Blog data has been moved to @/lib/blog
// Import blog posts and categories from there: import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/blog';
