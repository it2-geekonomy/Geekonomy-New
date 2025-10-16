import React from "react";

const Banner: React.FC = () => {
  return (
    <section
      className="
        relative 
        w-full 
        min-h-[57vh] 
        sm:min-h-[70vh] 
        md:min-h-[80vh] 
        lg:min-h-[90vh] 
        xl:min-h-screen 
        overflow-hidden
      "
    >
      <picture>
        {/* Optional: responsive images for better quality on larger screens */}
        <source
          srcSet="/expertise/Coming soon banner.webp"
          media="(min-width: 1024px)"
        />
        <img
          src="/expertise/Coming soon banner.webp"
          alt="Banner Background"
          className="
            absolute inset-0 
            w-full h-full 
            object-cover 
            object-center 
            sm:object-[center_60%]
          "
        />
      </picture>

      {/* Optional: overlay for readability or branding */}
      {/* <div className="absolute inset-0 bg-black/30"></div> */}
    </section>
  );
};

export default Banner;
