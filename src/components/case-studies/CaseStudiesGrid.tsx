"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies"; 

const CaseStudiesGrid: React.FC = () => {
  return (
    <section className="w-full py-[clamp(2rem,6vw,4rem)] px-[clamp(1rem,4vw,2rem)] max-w-[clamp(20rem,90vw,80rem)] mx-auto ">
      {/* Section Title + Subtitle */}
      <div className="text-center mb-[clamp(2.2rem,4vw,3rem)]">
        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-white">
          Success Stories
        </h2>
        <p className="mt-2 text-[clamp(0.9rem,2vw,1.35rem)] sm:max-w-[85%] lg:max-w-[65%] text-gray-300 text-justify-center mx-auto">
          Explore how we&apos;ve helped businesses across industries achieve their digital transformation goals
        </p>
      </div>

      {/* 2x3 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[clamp(1rem,2vw,2rem)]  ">
        {caseStudies.map((item) => (
          <Link
            key={item.id}
             href={`/case-studies/${item.slug}`}

            className="group block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-400">
          
            <div className="relative w-full h-[clamp(12rem,25vh,16rem)]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            <div className=" p-[clamp(1rem,2vw,1.25rem)]  sm:h-[clamp(22rem,28vh,70rem)]">
              <h3 className="text-[clamp(1.2rem,2vw,1.35rem)] sm:max-w-[75%] font-medium text-white">
                {item.title}
              </h3>
              <p className="text-[clamp(0.9rem,2vw,1rem)] md:text-[clamp(0.5rem,1.8vw,1rem)] font-extralight text-gray-300 mt-1">
                {item.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
