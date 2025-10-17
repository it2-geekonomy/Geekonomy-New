import React from "react";
import Link from "next/link";

const Section: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-10 md:pt-20 px-6 ">
      {/* Title */}
      <div className=" sm:max-w-[clamp(10rem,60vw,40rem)]">
      <h1 className="text-[clamp(1.6rem,4vw,3rem)] font-medium  text-white">
        Our Impact: Case Studies
      </h1>

      {/* Subtitle */}
      <p className="text-[clamp(1.1rem,2.5vw,1.5rem)] text-gray-300 dark:text-gray-300 mt-3">
        Navigating to the Digital Universe - Discover how Geekonomy transforms brands through design, technology, and strategy.
      </p>
      </div>

      {/* Button */}
      <Link href="/case-studies">
      <button className="mt-6 px-6 py-3 text-[clamp(0.9rem,2.5vw,1.1rem)] bg-amber-400 text-black rounded-xl shadow-md hover:bg-amber-200 transition">
        Explore Our Success Stories
      </button>
      </Link>

      {/* Supporting text */}
      <p className="mt-8 text-gray-100  sm:px-2 sm:max-w-[clamp(55rem,90%,80rem)] text-[clamp(0.9rem,2.5vw,1.07rem)] text-justify md:text-center leading-relaxed">
       At Geekonomy, we believe that exceptional results come from the perfect blend of creative innovation and cutting-edge technology.
Our approach focuses on understanding your unique challenges and crafting strategic solutions that not only meet your immediate
 needs but also position your brand for long term success in an ever-evolving digital landscape.
      </p>

      {/* Text with clickable link */}
      <div className="text-center  flex mt-4 sm:mt-6">
        <Link
          href="/case-studies"
          className="
            text-[clamp(0.7rem,3vw,1rem)]
            font-extralight
            text-amber-400
            underline underline-offset-4
            hover:text-amber-300
            transition
          "
        >
          Explore Case Studies
        
        </Link>
        <img
          src="/case-studies/Vector.webp" 
          alt="Case Studies"
          className="object-contain   ml-1 w-5 h-5 sm:mt-1"

        />
      </div>


    </section>
  );
};

export default Section;
