"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  image: string;
  title: string;
  description: string;
  link: string;
}

const slides: Slide[] = [
  {
    image: "/images/is1.webp",
    title:
      "The Power of Brand Storytelling: How Geekonomy Helps Brands Connect with Customers",
    description:
      "Brand storytelling is a powerful tool that can help businesses connect with their audience on a deeper level. In today's competitive market, where consumers are bombarded with advertisements and marketing messages, storytelling allows brands to stand out by creating a memorable and emotional connection with their customers.",
    link: "/blog/the-power-of-brand-storytelling",
  },
  {
    image: "/images/is2.webp",
    title:
      "UX Design Trends for 2025: Geekonomys Guide to Creating User-Centric Experiences",
    description:
      "User experience (UX) design is a critical aspect of creating a successful digital product. In 2025, several trends are shaping the field of UX design, and staying ahead of these trends is essential for creating user-centric experiences that drive engagement and conversions.",
    link: "/blog/ux-design-principles-higher-conversions",
  },
  {
    image: "/images/is3.webp",
    title:
      "Why Responsive Web Design is Essential: Geekonomys Approach to Mobile Optimization",
    description:
      "With the increasing use of mobile devices to access the Internet, having a responsive web design is essential for ensuring that your website is accessible and user-friendly on all devices.",
    link: "/blog/mobile-first-development-2025",
  },
  {
    image: "/images/is4.webp",
    title: "The Future of E-Commerce: Geekonomys Strategies for Online Success",
    description:
      "E-commerce has undergone significant changes in recent years, driven by advancements in technology and changing consumer behavior. As we look ahead to the future of e-commerce, several trends are shaping the industry and presenting new opportunities for online retailers.",
    link: "/blog/ecommerce-trends-shaping-2025",
  },
  {
    image: "/images/is5.webp",
    title:
      "Content Marketing in 2025: Geekonomys Tips for Creating Engaging Content",
    description:
      "Content marketing continues to be a powerful tool for brands looking to engage with their audience and drive traffic to their website. In 2025, several trends are shaping the world of content marketing, and staying ahead of these trends is essential for creating content that resonates with your target audience.",
    link: "/blog/content-marketing-2025",
  },


  {
    image: "/images/is6.webp",
    title: "Social Media Marketing Trends to Watch: Geekonomys Insights for Effective Campaigns",
    description:
      "Social media marketing is a constantly evolving field, with new trends and technologies shaping the way that brands engage with their audience. In 2025, several trends are shaping the world of social media marketing, and staying ahead of these trends is essential for creating effective campaigns that drive engagement and conversions",
    link: "/blog/customer-retention-building-loyalty",
  },

  {
    image: "/images/is7.webp",
    title: "The Importance of SEO in Todays Digital Landscape: Geekonomys Best Practices",
    description:
      "Search engine optimization (SEO) is a critical component of any digital marketing strategy, as it helps to improve a websites visibility in search engine results pages (SERP’s) and drive organic traffic. In todays digital landscape, where consumers are increasingly turning to search engines to find products and services, having a strong SEO strategy is essential for businesses looking to succeed online",
    link: "/blog/data-analytics-turning-information-into-insights",
  },
  {
    image: "/images/is8.webp",
    title: " How Geekonomy Designs Stunning Logos that Stand Out in a Crowded Market",
    description:
      "A logo is a critical aspect of branding, as it serves as the visual representation of a brand and helps to create a memorable and recognizable identity. In todays crowded market, where consumers are bombarded with advertisements and marketing messages, having a standout logo is essential for setting your brand apart from the competition",
    link: "/blog/stunning-logos-design-guide",
  },
  {
    image: "/images/is9.webp",
    title: "Digital Advertising Strategies: Geekonomys Approach to Maximizing ROI",
    description:
      "Digital advertising is a powerful tool for reaching a targeted audience and driving conversions. In todays digital landscape, where consumers are spending more time online than ever before, having an effective digital advertising strategy is essential for businesses looking to succeed online",
    link: "/blog/digital-marketing-strategies-that-convert",
  },
  {
    image: "/images/is10.webp",
    title: "The Role of AI in Marketing: Geekonomys Guide to Leveraging Technology for Success",
    description:
      "Artificial intelligence (AI) is transforming the field of marketing, enabling businesses to analyze data, automate tasks, and personalize customer experiences at scale. In todays competitive market, where consumers expect personalized and relevant interactions with brands, AI has become an indispensable tool for marketers looking to succeed",
    link: "/blog/future-of-ai-in-business",
  },
];


export default function InspirationStation() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextSlide = () => {
    setDirection("right");
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  const variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-black text-white sm:py-6 md:py-14 lg:py-16 px-4 flex flex-col items-center relative">
      <h2 className="text-3xl sm:text-4xl font-medium mb-8 text-center ">
        Inspiration Station
      </h2>

      <div className="w-full max-w-[clamp(120px,90%,1340px)] md:max-w-none xl:max-w-[clamp(320px,92%,1340px)] mx-auto flex lg:justify-between lg:items-center">
        {/* Left Arrow for large screen */}
        <button onClick={prevSlide} className="hidden md:block p-3 rounded-md transition">
          <img src="/images/la.webp" alt="Arrow Left" className="w-5 h-5 sm:w-10 sm:h-10 md:w-10 md:h-8 lg:w-14 lg:h-12" />
        </button>

        {/* Content Wrapper */}
        <div className="w-full lg:mx-6 flex flex-col md:flex-row gap-6 items-center overflow-hidden relative">
          {/* Image Section */}





          <div className="flex items-center justify-center w-full md:w-1/2">
            {/* Left arrow for mobile */}
            <button
              onClick={prevSlide}
              className="md:hidden flex items-center justify-center mr-2"
            >
              <img src="/images/la.webp" alt="Left Arrow" className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="flex-1">
              <AnimatePresence custom={direction} mode="wait">
                <motion.img
                  key={current}
                  src={slide.image}
                  alt={slide.title}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-auto md:h-[clamp(300px,40vh,380px)] xl:h-[clamp(290px,30vh,320px)] object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Right arrow for mobile */}
            <button
              onClick={nextSlide}
              className="md:hidden flex items-center justify-center ml-2"
            >
              <img src="/images/ra.webp" alt="Right Arrow" className="w-6 h-6" />
            </button>
          </div>




          {/* Text Section */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current + "-text"}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full md:w-1/2 flex flex-col justify-between h-auto md:h-[clamp(300px,40vh,380px)] xl:h-[clamp(290px,30vh,320px)] text-left md:pl-0"
            >
              <div>
                <h3 className="text-[clamp(1rem,2vw,1.9rem)]
               
  sm:text-[clamp(1rem,2vw,2rem)]    

  lg:text-[clamp(1rem,2.1vw,2.2rem)]
  xl:text-[clamp(1rem,2vw,1.75rem)]   
                
                leading-[1.3] font-normal mb-2">
                  {slide.title}
                </h3>
                <p className="text-white text-[clamp(0.9rem,1vw,1rem)] 
              
  sm:text-[clamp(0.9rem,1vw,1.2rem)]
     
    lg:text-[clamp(0.7rem,1.5vw,1.1rem)]
     xl:text-[clamp(1rem,1.2vw,1rem)]
     2xl:text-[clamp(0.9rem,2.2vw,1.02rem)]
                
                leading-[1.2] mb-2 font-light text-justify">
                  {slide.description}
                </p>
              </div>
              <a
                href={slide.link}
                className="text-white font-medium inline-flex items-center  mt-4 md:mt-0"
              >
                Read more
                <img src="/images/ar.webp" alt="Arrow Right" className=" w-7 h-5  ml-1 text-yellow-300" />
              </a>
          
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow for large screen */}
        <button onClick={nextSlide} className="hidden md:block p-3 rounded-md transition">
          <img src="/images/ra.webp" alt="Arrow Right" className="w-5 h-5 sm:w-10 sm:h-10 md:w-10 md:h-8 lg:w-14 lg:h-12" />
        </button>
      </div>
    </section>
  );
}

