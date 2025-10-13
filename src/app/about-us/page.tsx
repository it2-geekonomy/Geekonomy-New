import type { Metadata } from 'next';
import Image from 'next/image'; // Import Image for the logo
import Card from '@/components/ui/Card';
import { COMPANY_INFO, COMPANY_STATS } from '@/constants';
import InfiniteScroll from '@/components/infinteScroll';


export const metadata: Metadata = {
  title: 'About Us - Geekonomy',
  description: 'Learn more about Geekonomy and our mission to transform businesses through innovative technology solutions',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section - UPDATED for Background Image */}
      <section 
        className="relative h-[40vh] md:h-[80vh] text-white flex items-center justify-center overflow-hidden"
      >
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/about_us_banner.webp')" }}
        >
           {/* Optional: Add a subtle overlay to ensure text is readable */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero Text Content */}
        <div className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.8rem] font-[650] text-white text-center relative z-10 p-4">
          A 360° Service Agency.
        </div>
      </section>

      {/* Stats/About Content Section */}
      <section className="relative py-16 h-[40vh] md:h-[90vh] bg-black text-white">
        
        {/* Background Image Container (positioned absolutely to take up the right side) - MODIFIED STYLE */}
<div 
  className="absolute top-0 right-0 w-[0%] sm:w-[0%] md:w-[42%] lg:w-[40%] xl:w-[30%] h-full bg-no-repeat" 
  style={{ 
    backgroundImage: "url('/about_us_circle.webp')",
    // Key Change: Use a vertical percentage to scale the image based on container height.
    backgroundSize: 'auto 100%', 
    backgroundPosition: 'right center',
    filter: 'brightness(2)',
  }}
>
    {/* Optional: Add a dark overlay gradient to blend the content better */}
    <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent"></div>
</div>

        {/* Content Wrapper (fixed max-width and centered for desktop, full width for mobile) */}
        <div className="container ml-10 sm:ml-15 md:ml-20 lg:ml-25 relative z-10">
          
          {/* Main Content Grid/Layout */}
          <div className="flex flex-col gap-12 md:gap-20 md:w-3/5 lg:w-10/10 xl:w-12/12">
            
            {/* 1. We are A to Z */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We are A to Z.</h2>
              <p className="text-base md:text-[1.2rem] leading-relaxed mb-4">
                As seasoned branding, marketing and development experts, we provide a comprehensive suite of services tailored for your brand's success.
              </p>
              <p className="text-base md:text-[1.2rem] leading-relaxed">
                From strategic product promotion to cultivating an enduring brand image, we are dedicated to delivering excellence at every turn. Rest assured, we will be your steadfast partner, ensuring your customers' needs are not just met but exceeded, just as we exceed your expectations.
              </p>
            </div>
            
            {/* 2. Our Vision */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-base md:text-[1.2rem] leading-relaxed">
                Geekonomy's vision is to be a customer-centric 360-degree solution provider, leading through advanced technologies and innovation across all service verticals.
              </p>
            </div>
            
            {/* 3. Our Mission */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-base md:text-[1.2rem] leading-relaxed">
                Our mission is to deliver unparalleled value by empowering businesses with data-driven insights and cutting-edge solutions, fostering sustainable growth and success.
              </p>
            </div>

          </div>
        </div>

      </section>
      {/* Values */}
      <section className="py-20 bg-black">
        <div>
          <InfiniteScroll/>
        </div>
      </section>
    </main>
  );
}