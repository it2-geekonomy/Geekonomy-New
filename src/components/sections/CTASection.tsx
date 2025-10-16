'use client';

import Link from 'next/link';
import { useState } from 'react';

interface CTASectionProps {
  extraSpacing?: boolean;
}

export default function CTASection({ extraSpacing = false }: CTASectionProps) {
  const [activeText, setActiveText] = useState<'yellow' | 'outline' | null>(null);

  const handleYellowClick = () => {
    setActiveText(activeText === 'yellow' ? null : 'yellow');
  };

  const handleOutlineClick = () => {
    setActiveText(activeText === 'outline' ? null : 'outline');
  };

  return (
    <section className={`bg-black ${extraSpacing ? 'pt-16 md:pt-24 lg:pt-32' : 'pt-4 md:pt-6 lg:pt-8'} pb-10 md:pb-20 lg:pb-26`}>
      <div className="max-w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        <div className="flex flex-col items-center">
          <div className="text-center mb-6 md:mb-10 lg:mb-8">
            <h2 className="whitespace-nowrap font-extrabold leading-[1.1] mb-6 transition-all duration-300 ease-in-out md:mb-7 lg:mb-8 xl:mb-10 [&:has(.text-outline:hover)_.text-yellow]:text-black [&:has(.text-outline:hover)_.text-yellow]:[text-shadow:-1px_-1px_0_#ffffff,1px_-1px_0_#ffffff,-1px_1px_0_#ffffff,1px_1px_0_#ffffff] [&:has(.text-outline:hover)_.text-yellow]:brightness-100 [&:has(.text-outline:hover)_.text-yellow]:filter-none" style={{fontSize: 'clamp(1.2rem, 2.5vw, 3.5rem)'}}>
              <span 
                onClick={handleYellowClick}
                className={`text-yellow inline-block cursor-pointer transition-all duration-300 ease-in-out hover:text-[#eab308] hover:brightness-90 ${
                  activeText === 'yellow' 
                    ? 'text-[#eab308] brightness-90' 
                    : activeText === 'outline'
                    ? 'text-black [text-shadow:-1px_-1px_0_#ffffff,1px_-1px_0_#ffffff,-1px_1px_0_#ffffff,1px_1px_0_#ffffff] brightness-100'
                    : 'text-[#facc15]'
                }`}
              >
                Shaping Brands,
              </span>{' '}
              <span 
                onClick={handleOutlineClick}
                className={`text-outline inline-block cursor-pointer transition-all duration-300 ease-in-out hover:text-[#facc15] hover:[text-shadow:none] ${
                  activeText === 'outline'
                    ? 'text-[#facc15] [text-shadow:none]'
                    : 'text-black [text-shadow:-1px_-1px_0_#ffffff,1px_-1px_0_#ffffff,-1px_1px_0_#ffffff,1px_1px_0_#ffffff]'
                }`}
              >
                Building Solutions.
              </span>
            </h2>
          </div>
          <div className="flex flex-col items-center">
             <Link href="/contact-us">
               <button className="bg-yellow-400 text-gray-950 px-20 sm:px-28 md:px-40 lg:px-48 py-2 sm:py-1.5 md:py-1 lg:py-1 rounded-full text-xs sm:text-sm md:text-base lg:text-base hover:bg-yellow-300 transition-colors duration-300">
                 Get In Touch
               </button>
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
