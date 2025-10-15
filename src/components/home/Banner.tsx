'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

  const imageLinks = [
    "/branding-solutions",
    "/custom-development",
    "/digital-marketing",
    "/digital-marketing",
    "/customer-retention"
  ];

  const backgroundImages = [
    "/home/background1.webp",
    "/home/background2.webp", 
    "/home/background4.webp",
    "/home/background5.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleImageClick = () => {
    const link = imageLinks[currentImageIndex];
    if (link) {
      router.push(link);
    }
  };

  return (

      <div className="relative w-full h-[clamp(195px,60vw,600px)] xl:h-[85vh]">
        {backgroundImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`bg${index + 1}`}
            className={`w-full h-full absolute object-cover cursor-pointer transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleImageClick}
          />
        ))}
        
        {/* Text overlay */}
        <p className="absolute bottom-10 sm:bottom-20 md:bottom-24 lg:bottom-[clamp(100px,15vh,300px)] left-1/2 -translate-x-1/2 text-white text-sm sm:text-xl md:text-2xl lg:text-[clamp(2rem,3vw,3rem)] text-center font-thin opacity-100 transition-opacity duration-[2000ms] ease-in-out z-20">
          Navigating to the Digital <br /> Universe
        </p>
        
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[20px] sm:h-[50px] md:h-[100px] lg:h-[120px] xl:h-[110px] 2xl:h-[100px] bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default Banner;
