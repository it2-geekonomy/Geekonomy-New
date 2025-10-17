// Common Types
export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ExpertiseService {
  id: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  detailPageCategory?: string; // Optional: Different category for individual post page
  tags: string[];
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface CompanyStats {
  label: string;
  value: string;
  icon: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  slug: string; 
  content: string;
}