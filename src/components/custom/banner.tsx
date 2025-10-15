
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
        src="/expertise/Custom_bg.webp"
        alt="Background"
        className="w-full h-auto object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 via-transparent to-transparent pointer-events-none" />

      {/* Marquee text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center overflow-hidden z-10">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap text-white font-semibold"
          style={{ fontSize: "clamp(1.8rem, 4vw, 4.5rem)" }}
        >
          <span className="mx-8">You Dream it,</span>
          <span className="mx-8">We build it.</span>
          <span className="mx-8">You Dream it,</span>
          <span className="mx-8">We build it.</span>
        </div>
      </div>

      {/* Overlay image */}
      <div className="absolute top-0 right-0 h-full w-auto max-w-[65%] z-10">
        <img
          src="/expertise/Custom_girl.webp"
          alt="Overlay"
          className="h-full w-auto object-cover object-right"
        />
      </div>
    </section>
  );
};

export default Banner;


