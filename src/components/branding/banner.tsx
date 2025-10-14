
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Banner: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      repeat: -1,
      ease: "linear",
      duration: 10,
    });
  }, []);

  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden  flex justify-center items-start" >
      {/* Banner container to fix overlay and marquee positions */}
      <div className="relative w-full  h-full flex flex-col justify-end items-center">
        {/* Background image */}
        <img
          src="/expertise/brading background image.webp"
          alt="Banner Background"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Marquee */}
        <div className="absolute top-[50%] left-0 w-full overflow-hidden z-10">
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap text-white font-medium justify-center"
            style={{ fontSize: "clamp(1.9rem, 4vw, 5rem)" }}
          >
            <span className="mx-8">Unforgettable brands</span>
            <span className="mx-8">=</span>
            <span className="mx-8">Desirable</span>
            <span className="mx-8">+</span>
            <span className="mx-8">Distinct</span>
            <span className="mx-8">Unforgettable brands</span>
            <span className="mx-8">=</span>
            <span className="mx-8">Desirable</span>
            <span className="mx-8">+</span>
            <span className="mx-8">Distinct</span>
          </div>
        </div>

        {/* Overlay image fixed inside container */}
        <div className="relative w-full flex justify-center z-10 mb-4 lg:mb-8">
          <img
            src="/expertise/branding man image.webp"
            alt="Overlay"
            className="
              object-cover
              w-[clamp(300px,45vw,900px)]
              h-[clamp(400px,50vw,700px)]
              md:w-[clamp(400px,50vw,700px)]
              md:h-[clamp(500px,55vw,1000px)]
              lg:w-[clamp(600px,50vw,1200px)]
              lg:h-[clamp(600px,55vw,1300px)]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
