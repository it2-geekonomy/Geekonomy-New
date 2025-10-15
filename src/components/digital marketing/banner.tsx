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
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/expertise/Digital_bg.webp"
        alt="Background"
        className="w-full h-auto object-cover"
      />

      {/* Marquee overlay */}
      <div className="absolute top-5 sm:top-10 md:top-15 xl:top-25 left-0 w-full h-full flex items-center overflow-hidden z-10 pointer-events-none">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap text-white font-semibold"
          style={{ fontSize: "clamp(1.4rem, 4vw, 6rem)" }}
        >
          <span className="mx-8">Empowering Brands,</span>
          <span className="mx-8">Fueling Growth.</span>
          <span className="mx-8">You Dream it,</span>
          <span className="mx-8">We build it.</span>
        </div>
      </div>

      {/* Center overlay image (full bg height) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full z-30">
        <img
          src="/expertise/Digital_frame.png"
          alt="Center Overlay"
          className="h-full w-auto object-cover"
        />
      </div>

      {/* Bottom center small image (25% of bg height) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[100%] w-auto z-30">
        <img
          src="/expertise/Digital_man.webp"
          alt="Small Overlay"
          className="h-full w-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;
