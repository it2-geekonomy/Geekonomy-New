# Geekonomy - Technology Solutions Website

A modern, professional website built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4. Redesigned to match the structure of [geekonomytech.com](https://geekonomytech.com).

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15.5.4, React 19, and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS 4
- **Professional Structure**: Clean, scalable architecture following best practices
- **SEO Optimized**: Proper metadata and semantic HTML
- **Type-Safe**: Full TypeScript implementation
- **Reusable Components**: Well-organized component library
- **Performance**: Optimized for speed and user experience

## 📁 Project Structure

```
geekonomy-latest/
├── src/
│   ├── app/                              # Next.js App Router
│   │   ├── about-us/                     # About Us page
│   │   ├── expertise/                    # Expertise overview page
│   │   ├── branding-solutions/           # Branding expertise page
│   │   ├── custom-development/           # Development expertise page
│   │   ├── digital-marketing/            # Marketing expertise page
│   │   ├── customer-retention/           # Retention expertise page
│   │   ├── blog/                         # Blog listing and posts
│   │   │   └── [slug]/                   # Individual blog post pages
│   │   ├── contact-us/                   # Contact page
│   │   ├── layout.tsx                    # Root layout with Header/Footer
│   │   ├── page.tsx                      # Homepage
│   │   └── globals.css                   # Global styles
│   │
│   ├── components/
│   │   ├── ui/                           # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   └── index.ts                  # Barrel export
│   │   ├── layout/                       # Layout components
│   │   │   ├── Header.tsx                # Navigation header
│   │   │   ├── Footer.tsx                # Footer with links
│   │   │   └── index.ts                  # Barrel export
│   │   ├── sections/                     # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── TechnologiesSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── index.ts                  # Barrel export
│   │   └── forms/                        # Form components
│   │       └── ContactForm.tsx           # Contact form with validation
│   │
│   ├── lib/                              # Utility functions
│   │   └── utils.ts                      # Helper functions
│   │
│   ├── types/                            # TypeScript type definitions
│   │   └── index.ts                      # All type definitions
│   │
│   └── constants/                        # App constants and config
│       └── index.ts                      # Company info, nav links, services
│
├── public/                               # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwindcss.config.mjs
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **UI Library**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Linting**: ESLint with Next.js config
- **Fonts**: Geist Sans & Geist Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd geekonomy-latest
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 Website Structure

### Homepage (/)
- Hero section with CTA
- Features overview
- Expertise showcase (4 services)
- Company statistics
- Technologies we use
- Call-to-action section

### About Us (/about-us)
- Company mission and vision
- Company statistics
- Our story
- Core values

### Expertise (/expertise)
- Overview of all expertise areas
- Links to detailed pages

### Expertise Pages
1. **Branding Solutions** (/branding-solutions)
   - Brand Strategy & Positioning
   - Logo & Visual Identity Design
   - Brand Guidelines Development
   - Brand Messaging & Voice

2. **Custom Development** (/custom-development)
   - Web Application Development
   - Mobile App Development
   - E-commerce Solutions
   - API Development & Integration

3. **Digital Marketing** (/digital-marketing)
   - Search Engine Optimization (SEO)
   - Pay-Per-Click (PPC) Advertising
   - Social Media Marketing
   - Content Marketing Strategy

4. **Customer Retention** (/customer-retention)
   - Customer Loyalty Programs
   - Retention Analytics & Insights
   - Personalization Strategies
   - Churn Prevention Solutions

### Blog (/blog)
- Blog post listings
- Category filters
- Newsletter signup
- Individual blog posts at `/blog/[slug]`
  - Example: `/blog/the-power-of-brand-storytelling`
  - Example: `/blog/future-of-ai-in-business`
  - Example: `/blog/digital-marketing-strategies-that-convert`

### Contact Us (/contact-us)
- Contact form with validation
- Company contact information
- Social media links
- Office hours

## 🎨 Design System

### Colors
- Primary: Blue (#2563eb)
- Secondary: Gray
- Success: Green
- Error: Red

### Typography
- Font Family: Geist Sans (body), Geist Mono (code)
- Responsive font sizes using Tailwind utilities

### Components
All components are built with:
- TypeScript for type safety
- Tailwind CSS for styling
- Accessibility in mind
- Responsive design
- Hover states and transitions

## 🔧 Customization

### Update Company Information
Edit `src/constants/index.ts` to update:
- Company name and tagline
- Contact information
- Social media links
- Expertise services
- Company statistics

### Update Content
- Homepage: `src/app/page.tsx`
- About Us: `src/app/about-us/page.tsx`
- Expertise: `src/app/expertise/page.tsx`
- Individual expertise pages: `src/app/[expertise-slug]/page.tsx`
- Blog: `src/app/blog/page.tsx`
- Contact: `src/app/contact-us/page.tsx`

### Styling
- Global styles: `src/app/globals.css`
- Component-specific styles: Inline with Tailwind classes
- Custom utilities: `src/lib/utils.ts`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Start the production server: `npm start`
3. Or deploy the `.next` folder to your hosting provider

## 📞 Support

For questions or issues, please contact:
- Email: info@geekonomytech.com
- Website: https://geekonomytech.com

## 📝 Key Features

### Navigation
- Sticky header with mobile menu
- Clean navigation: Home, About Us, Expertise, Blog, Contact Us
- Dropdown-ready for expertise sub-pages

### Forms
- Contact form with client-side validation
- Email validation
- Phone number validation
- Success/error state handling

### SEO
- Proper meta tags for all pages
- Semantic HTML structure
- Open Graph tags ready

### Performance
- Next.js App Router for optimal performance
- Server components by default
- Image optimization ready
- Font optimization with next/font

## 📄 License

Copyright © 2025 Geekonomy. All rights reserved.

---

Built with ❤️ using Next.js and React
