// src/app/about-us/page.tsx
import InfiniteScroll from '@/components/infinteScroll';
import GetInTouch from '@/components/common/getintouch';
import seoData from '@/seoData';
import type { Metadata } from 'next';

const data = seoData.about;

// ✅ Server-side SEO Metadata
export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  alternates: {
    canonical: data.canonical,
  },
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    siteName: "Geekonomy",
    images: data.image ? [{ url: data.image }] : [],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: data.title,
    description: data.description,
    images: data.image ? [data.image] : [],
    creator: data.twitterHandle,
  },
};

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section 
        className="relative h-[40vh] md:h-[90vh] text-white flex items-center justify-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/about_us_banner.webp')" }}
        ></div>
        
        <div className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.8rem] font-[450] text-white text-center relative z-10 p-4">
          A 360° Service Agency.
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-48 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      </section>

      {/* About Section */}
      <section 
        className="relative py-16 min-h-[40vh] md:min-h-[90vh] text-white overflow-hidden -mt-24 md:-mt-48 pt-24 md:pt-48" 
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #000000 100%)' }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between h-auto md:h-full">
          <div className="w-[90%] sm:w-[80%] md:w-[100%] px-4 sm:px-6 md:px-20 lg:px-25 xl:px-25 relative z-10 flex flex-col gap-8 sm:gap-12 md:gap-20">
            
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center md:text-left">
                We are A to Z.
              </h2>
              <p className="font-roc text-[#c5c4c3] text-sm sm:text-base md:text-[1.3rem] leading-relaxed mb-3 sm:mb-4 text-justify">
                As seasoned branding, marketing and development experts, we provide a comprehensive suite of services tailored for your brand&apos;s success.
                From strategic product promotion to cultivating an enduring brand image, we are dedicated to delivering excellence at every turn. Rest assured, we will be your steadfast partner, ensuring your customers&apos; needs are not just met but exceeded, just as we exceed your expectations.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center md:text-left">
                Our Vision
              </h2>
              <p className="font-roc text-[#c5c4c3] text-sm sm:text-base md:text-[1.3rem] leading-relaxed text-justify">
                Geekonomy&apos;s vision is to be a customer-centric 360-degree solution provider, leading through advanced technologies and innovation across all service verticals.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center md:text-left">
                Our Mission
              </h2>
              <p className="font-roc text-[#c5c4c3] text-sm sm:text-base md:text-[1.3rem] leading-relaxed text-justify">
                Our mission is to deliver unparalleled value by empowering businesses with data-driven insights and cutting-edge solutions, fostering sustainable growth and success.
              </p>
            </div>
          </div>

          <div 
            className="hidden md:block w-[42%] lg:w-[40%] xl:w-[30%] h-[80vh] bg-no-repeat bg-right bg-contain relative"
            style={{ 
              backgroundImage: "url('/about_us_circle.webp')",
              backgroundSize: 'contain',
              backgroundPosition: 'center right',
              filter: 'brightness(2)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 sm:py-5 md:py-12 lg:py-20 xl:py-20 bg-black">
        <InfiniteScroll/>
        <GetInTouch
          text="Together, let's embark on a journey of creating an unforgettable brand legacy through thorough research, design, marketing and code."
          buttonText="Contact Us"
          buttonLink="/contact-us"
        />
      </section>
    </main>
  );
}
