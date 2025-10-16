"use client";
import Image from "next/image";
import Link from "next/link";

export default function ExpertiseSection() {
  return (
    <section className="bg-black text-white py-16">
      {/* Title */}
      <div className="px-4 sm:px-6 lg:px-8 text-center">
  {/* Heading */}
  <div className="flex justify-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
      Our Expertise
    </h2>
  </div>

  {/* Subtitle */}
  <div className="mt-4 mb-8">
    <p className="text-gray-300 max-w-7xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
      Our expertise in international and local markets pivot us as a powerful mixture
      of strategists and pragmatists with an extensive network all across India, UAE, London, and USA.
    </p>
  </div>
</div>


      {/* Expertise Grid */}
      <div className="mt-10 mb-10 flex flex-wrap justify-center gap-6">
        {/* Branding */}
        <Link href="/branding-solutions" className="relative group w-[170px] sm:w-[200px] md:w-[220px]">
          <Image
            src="/Geek-Services-01.webp"
            alt="Branding"
            width={300}
            height={400}
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded-md text-sm font-semibold text-white">
            Branding
          </div>
        </Link>

        {/* Custom Development */}
        <Link href="/custom-development" className="relative group w-[170px] sm:w-[200px] md:w-[220px]">
          <Image
            src="/Geek-Services-02.webp"
            alt="Custom Development"
            width={300}
            height={400}
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded-md text-sm font-semibold text-white text-center">
            Custom Development
          </div>
        </Link>

        {/* Digital Marketing */}
        <Link href="/digital-marketing" className="relative group w-[170px] sm:w-[200px] md:w-[220px]">
          <Image
            src="/Geek-Services-04.webp"
            alt="Digital Marketing"
            width={300}
            height={400}
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded-md text-sm font-semibold text-white text-center">
            Digital Marketing
          </div>
        </Link>

        {/* Customer Retention */}
        <Link href="/customer-retention" className="relative group w-[170px] sm:w-[200px] md:w-[220px]">
          <Image
            src="/Geek-Services-05.webp"
            alt="Customer Retention"
            width={300}
            height={400}
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded-md text-sm font-semibold text-white text-center">
            Customer Retention
          </div>
        </Link>
      </div>

     
    </section>
  );
}
