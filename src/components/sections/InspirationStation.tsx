"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides, Slide } from "../../components/inspirationdata/inspirationSlides"; // <-- import here
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
                <h3 className="
                text-[clamp(1rem,2vw,1.9rem)]
               sm:text-[clamp(1rem,2vw,2rem)]    
              lg:text-[clamp(1rem,2.1vw,2.2rem)]
              xl:text-[clamp(1rem,2vw,1.75rem)]   
              leading-[1.3] font-normal mb-2">
                  {slide.title}
                </h3>
                <p className="text-white
                 text-[clamp(0.9rem,1vw,1rem)] 
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

