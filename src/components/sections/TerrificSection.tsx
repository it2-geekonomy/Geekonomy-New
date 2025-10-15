"use client";
import Image from "next/image";


const clientImages = [
  { id: "client1", src: "/terrific/1.webp" },
  { id: "client2", src: "/terrific/2.webp" },
  { id: "client3", src: "/terrific/3.webp" },
  { id: "client4", src: "/terrific/4.webp" },
  { id: "client5", src: "/terrific/5.webp" },
  { id: "client6", src: "/terrific/6.webp" },
  { id: "client7", src: "/terrific/7.webp" },
  { id: "client8", src: "/terrific/8.webp" },
  { id: "client9", src: "/terrific/9.webp" },
  { id: "client10", src: "/terrific/10.webp" },
  { id: "client11", src: "/terrific/11.webp" },
];

export default function TerrificSection() {
  return (
    <section className="py-16 bg-black">
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-6 md:mb-24">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4">
          5x Social Commerce ROI
        </h2>
        <p className="text-lg md:text-2xl  text-gray-300 font-light">
          Leveraging actionable intelligence
        </p>
      </div>

      {/* Scrolling Images with Mobile Overlay */}
      <div className="relative">
        {/* First Row - Left Scroll */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden mb-4">
          <ul className="flex items-center [&_li]:mx-4 animate-terrific-scroll">
            {clientImages.map((client) => (
              <li key={`row1-${client.id}`} className="relative w-[350px] h-[200px] flex-shrink-0">
                <Image
                  src={client.src}
                  alt={client.id}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </li>
            ))}
          </ul>
          {/* Duplicate for seamless loop */}
          <ul className="flex items-center [&_li]:mx-4 animate-terrific-scroll" aria-hidden="true">
            {clientImages.map((client) => (
              <li key={`row1-dup-${client.id}`} className="relative w-[350px] h-[200px] flex-shrink-0">
                <Image
                  src={client.src}
                  alt={client.id}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Second Row - Right Scroll */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <ul className="flex items-center [&_li]:mx-4 animate-terrific-scroll-reverse">
            {clientImages.map((client) => (
              <li key={`row2-${client.id}`} className="relative w-[350px] h-[200px] flex-shrink-0">
                <Image
                  src={client.src}
                  alt={client.id}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </li>
            ))}
          </ul>
          {/* Duplicate for seamless loop */}
          <ul className="flex items-center [&_li]:mx-4 animate-terrific-scroll-reverse" aria-hidden="true">
            {clientImages.map((client) => (
              <li key={`row2-dup-${client.id}`} className="relative w-[350px] h-[200px] flex-shrink-0">
                <Image
                  src={client.src}
                  alt={client.id}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Image Overlay - Centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[250px] h-[500px] md:w-[350px] md:h-[700px] ">
          <Image
            src="/terrific/12.webp"
            alt="Mobile Phone"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}

