import Image from "next/image";
import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full relative">
        <Image
          src="/case-studies/case-banner.webp"
          alt="Coming Soon Banner"
          width={1920}       
          height={1080}      
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default Banner;