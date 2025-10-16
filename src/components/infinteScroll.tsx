"use client";
import Image from "next/image";

export default function InfiniteScroll() {
  // Row 1 logos (scrolling left) - all logos have FIXED size
  const logosRow1 = [
    { src: "/client.webp" },
    { src: "/client1.webp" },
    { src: "/client2.webp" },
    { src: "/client3.webp" },
    { src: "/client4.webp" },
    { src: "/client5.webp" },
    { src: "/client6.webp" },
    //{ src: "/client7.webp" },
    { src: "/client8.webp" },
    { src: "/client9.webp" },
    { src: "/client10.webp" },
    { src: "/client11.webp" },
    { src: "/client12.webp" },
    { src: "/client13.webp" },
    { src: "/client14.webp" },
    { src: "/client15.webp" },
    { src: "/client16.webp" },
    { src: "/client17.webp" },
    { src: "/client18.webp" },
    { src: "/client19.webp" },
    { src: "/client20.webp" },
    { src: "/client21.webp" },
    { src: "/client22.webp" },
    { src: "/client23.webp" },
    { src: "/client24.webp" },
    { src: "/client25.webp" },
    { src: "/client26.webp" },
    { src: "/client27.webp" },
    { src: "/client28.webp" },
  ];

  // Row 2 logos (scrolling right) - all logos have FIXED size
  const logosRow2 = [
    { src: "/client.webp" },
    { src: "/client1.webp" },
    { src: "/client2.webp" },
    { src: "/client3.webp" },
    { src: "/client4.webp" },
    { src: "/client5.webp" },
    { src: "/client6.webp" },
    //{ src: "/client7.webp" },
    { src: "/client8.webp" },
    { src: "/client9.webp" },
    { src: "/client10.webp" },
    { src: "/client11.webp" },
    { src: "/client12.webp" },
    { src: "/client13.webp" },
    { src: "/client14.webp" },
    { src: "/client15.webp" },
    { src: "/client16.webp" },
    { src: "/client17.webp" },
    { src: "/client18.webp" },
    { src: "/client19.webp" },
    { src: "/client20.webp" },
    { src: "/client21.webp" },
    { src: "/client22.webp" },
    { src: "/client23.webp" },
    { src: "/client24.webp" },
    { src: "/client25.webp" },
    { src: "/client26.webp" },
    { src: "/client27.webp" },
    { src: "/client28.webp" },
  ];



  return (
    <div className="space-y-8 bg-black"> 
    <h2 className="text-[1.5rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] font-[450] text-white mb-8 sm:mb-12 px-4 sm:px-6 md:px-8 lg:px-12 text-center md:text-left ml-0 sm:ml-0 md:ml-10 lg:ml-15 xl:ml-20">
          Our Experience Through Time
          </h2>
      {/* First Row - Left Direction */}
      <div className="scroll-container w-full inline-flex flex-nowrap overflow-hidden ">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-6 md:[&_li]:mx-8 lg:[&_li]:mx-12
 [&_img]:max-w-none animate-infinite-scroll">
          {logosRow1.map((logo, i) => (
            // outer is fixed to keep spacing consistent; only inner controls logo size
            <li key={`row1-${i}`} className="relative w-36 h-28 flex-shrink-0 flex items-center justify-center">
              <div className="relative w-32 h-20">
                <Image src={logo.src} alt={`Logo-${i}`} fill style={{ objectFit: 'contain' }} />
              </div>
            </li>
          ))}
        </ul>

        {/* Duplicate for seamless loop */}
        <ul
  className="flex items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-6 md:[&_li]:mx-8 lg:[&_li]:mx-12
 [&_img]:max-w-none animate-infinite-scroll"
  aria-hidden="true"
>
          {logosRow1.map((logo, i) => (
            <li key={`row1-dup-${i}`} className="relative w-36 h-28 flex-shrink-0 flex items-center justify-center">
              <div className="relative w-32 h-20">
                <Image src={logo.src} alt={`Logo-${i}`} fill style={{ objectFit: 'contain' }} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Second Row - Right Direction */}
      <div className="scroll-container w-full inline-flex flex-nowrap overflow-hidden">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-6 md:[&_li]:mx-8 lg:[&_li]:mx-12
 [&_img]:max-w-none animate-infinite-scroll-reverse">
          {logosRow2.map((logo, i) => (
            <li key={`row2-${i}`} className="relative w-36 h-28 flex-shrink-0 flex items-center justify-center">
              <div className="relative w-32 h-20">
                <Image src={logo.src} alt={`Logo-${i}`} fill style={{ objectFit: 'contain' }} />
              </div>
            </li>
          ))}
        </ul>

        {/* Duplicate for seamless loop */}
       <ul
  className="flex items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-6 md:[&_li]:mx-8 lg:[&_li]:mx-12
 [&_img]:max-w-none animate-infinite-scroll-reverse"
  aria-hidden="true"
>
          {logosRow2.map((logo, i) => (
            <li key={`row2-dup-${i}`} className="relative w-36 h-28 flex-shrink-0 flex items-center justify-center">
              <div className="relative w-32 h-20">
                <Image src={logo.src} alt={`Logo-${i}`} fill style={{ objectFit: 'contain' }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
