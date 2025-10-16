
"use client";
import Link from "next/link";
import { useState } from "react";

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
    link: "#",
  },
  {
    image: "/images/is2.webp",
    title:
      "UX Design Trends for 2025: Geekonomys Guide to Creating User-Centric Experiences",
    description:
      "User experience (UX) design is a critical aspect of creating a successful digital product. In 2025, several trends are shaping the field of UX design, and staying ahead of these trends is essential for creating user-centric experiences that drive engagement and conversions.",
    link: "#",
  },
  {
    image: "/images/is3.webp",
    title:
      "Content Marketing in 2025: Geekonomys Tips for Creating Engaging Content",
    description:
      "Content marketing continues to be a powerful tool for brands looking to engage with their audience and drive traffic to their website. In 2025, several trends are shaping the world of content marketing, and staying ahead of these trends is essential for creating content that resonates with your target audience.",
    link: "#",
  },
  {
    image: "/images/is4.webp",
    title:
      "Why Responsive Web Design is Essential: Geekonomys Approach to Mobile Optimization",
    description:
      "With the increasing use of mobile devices to access the Internet, having a responsive web design is essential for ensuring that your website is accessible and user-friendly on all devices.",
    link: "#",
  },
  {
    image: "/images/is5.webp",
    title: "The Future of E-Commerce: Geekonomys Strategies for Online Success",
    description:
      "E-commerce has undergone significant changes in recent years, driven by advancements in technology and changing consumer behavior. As we look ahead to the future of e-commerce, several trends are shaping the industry and presenting new opportunities for online retailers.",
    link: "#",
  },
];

export default function InspirationStation() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <section className="bg-black text-white py-8 px-12 md:px-12 flex flex-col items-center ">
      <h2 className="text-3xl sm:text-4xl font-medium mb-8 text-center ">
        Inspiration Station
      </h2>

      {/* Main Container */}
      <div className="w-full max-w-[clamp(120px,90%,1340px)] md:max-w-none  xl:max-w-[clamp(320px,92%,1340px)]  mx-auto flex lg:justify-between lg:items-center">
        {/* Left Arrow */}
        <button onClick={prevSlide} className=" hidden md:block p-3 rounded-md transition   ">
          <img src="/images/la.webp" alt="Arrow Left" className="w-5 h-5 sm:w-10 sm:h-10 top-3.5 md:w-10 md:h-10 lg:w-14 lg:h-12" />
        </button>

        {/* Content Wrapper (Flex instead of Grid) */}
        <div className="w-full  lg:mx-6 flex flex-col  md:flex-row gap-6 items-center  ">
          {/* Image Section - 50% */}
         
          {/* Image Section - 50% */}
<div className="relative flex items-center justify-center gap-4 w-full md:w-1/2">

  {/* Left Arrow (outside image) - only visible below md */}
  <button
    onClick={prevSlide}
    className="md:hidden absolute left-[-2.5rem] top-1/2 -translate-y-1/2"
  >
    <img src="/images/la.webp" alt="Left Arrow" className="w-6 h-6" />
  </button>

  {/* Image */}
  <img
    src={slide.image}
    alt={slide.title}
    className="w-full h-auto md:h-[clamp(300px,40vh,380px)] xl:h-[clamp(290px,30vh,320px)] object-cover"
  />

  {/* Right Arrow (outside image) - only visible below md */}
  <button
    onClick={nextSlide}
    className="md:hidden absolute right-[-2.5rem] top-1/2 -translate-y-1/2"
  >
    <img src="/images/ra.webp" alt="Right Arrow" className="w-6 h-6" />
  </button>

</div>

        

          
         {/* Text Section - 50%  md:h-[clamp(290px,16vh,250px)] */}
<div className="w-full md:w-1/2 flex flex-col justify-between h-auto md:h-[clamp(300px,40vh,380px)] xl:h-[clamp(290px,30vh,320px)]  text-left md:pl-0">
  <div>
    <h3 className="text-[clamp(1rem,2vw,1.9rem)]
     sm:text-[clamp(1rem,2vw,1.9rem)]   
     md:text-[clamp(1rem,2vw,1.9rem)] 
    lg:text-[clamp(1rem,2.1vw,2.2rem)]
    xl:text-[clamp(1rem,2vw,1.9rem)]   
    leading-[1.4] font-light mb-2   ">
      {slide.title}
    </h3>
    <p className="text-white 
     text-[clamp(0.9rem,1vw,1rem)]
     sm:text-[clamp(0.9rem,1vw,1.1rem)]
     md:text-[clamp(0.9rem,0.8vw,1rem)]
     lg:text-[clamp(0.6rem,1.5vw,1.9rem)]
    xl:text-[clamp(0.6rem,1.2vw,1rem)]
     2xl:text-[clamp(0.9rem,2.2vw,1.1rem)]
     
     
     leading-[1.2] mb-2 font-light text-justify">
      {slide.description}
    </p>
  </div>

  <Link
    href={slide.link}
    className="text-white font-medium inline-flex items-center 
    text-[clamp(0.9rem,1vw,1rem)]
     sm:text-[clamp(0.9rem,1vw,1.1rem)]
     md:text-[clamp(0.9rem,1vw,1.1rem)]
     lg:text-[clamp(0.6rem,1.3vw,1.3rem)]
    xl:text-[clamp(0.6rem,1.2vw,1.1rem)]
     2xl:text-[clamp(0.9rem,2.2vw,1.1rem)]
      hover:underline
      mt-4 md:mt-0"
  >
    Read more
    <img
      src="/images/ar.webp"
      alt="Arrow Right"
      className="w-10 h-6 ml-1 text-yellow-300 "
    />
  </Link>
</div>

        </div>

        {/* Right Arrow */}
        <button onClick={nextSlide} className="  hidden md:block p-3 rounded-md transition   ">
          <img src="/images/ra.webp" alt="Arrow Right" className="  w-5 h-5 sm:w-10 sm:h-10  md:w-10 md:h-10 lg:w-14 lg:h-12" />
        </button>
      </div>
    </section>
  );
}




