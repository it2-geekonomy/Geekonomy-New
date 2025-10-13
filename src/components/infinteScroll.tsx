"use client";
import Image from "next/image";

export default function InfiniteScroll() {
  // Row 1 logos (scrolling left)
  const logosRow1 = [
    "/client.webp",
    "/client1.webp",
    "/client2.webp",
    "/client3.webp",
    "/client4.webp",
    "/client5.webp",
    "/client6.webp",
    //"/client7.webp",
    "/client8.webp",
    "/client9.webp",
    "/client10.webp",
    "/client11.webp",
    "/client12.webp",
    "/client13.webp",
    "/client14.webp",
    "/client15.webp",
    "/client16.webp",
    "/client17.webp",
    "/client18.webp",
    "/client19.webp",
    "/client20.webp",
    "/client21.webp",
    "/client22.webp",
    "/client23.webp",
    "/client24.webp",
    "/client25.webp",
    "/client26.webp",
    "/client27.webp",
    "/client28.webp",
    
  ];

  // Row 2 logos (scrolling right)
  const logosRow2 = [
    "/client.webp",
    "/client1.webp",
    "/client2.webp",
    "/client3.webp",
    "/client4.webp",
    "/client5.webp",
    "/client6.webp",
    //"/client7.webp",
    "/client8.webp",
    "/client9.webp",
    "/client10.webp",
    "/client11.webp",
    "/client12.webp",
    "/client13.webp",
    "/client14.webp",
    "/client15.webp",
    "/client16.webp",
    "/client17.webp",
    "/client18.webp",
    "/client19.webp",
    "/client20.webp",
    "/client21.webp",
    "/client22.webp",
    "/client23.webp",
    "/client24.webp",
    "/client25.webp",
    "/client26.webp",
    "/client27.webp",
    "/client28.webp",
  ];

  return (
    <div className="space-y-8 bg-black"> 
    <h2 className="text-[1.7rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] font-bold text-white mb-12 ml-10 sm:ml-20 md:ml-30 lg:ml-40">
          Our Experience Through Time
          </h2>
      {/* First Row - Left Direction */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll">
          {logosRow1.map((logo, i) => (
            <li key={`row1-${i}`}>
              <Image src={logo} alt={`Logo-${i}`} width={100} height={100} />
            </li>
          ))}
        </ul>

        {/* Duplicate for seamless loop */}
        <ul
  className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll"
  aria-hidden="true"
>
          {logosRow1.map((logo, i) => (
            <li key={`row1-dup-${i}`}>
              <Image src={logo} alt={`Logo-${i}`} width={100} height={100} />
            </li>
          ))}
        </ul>
      </div>

      {/* Second Row - Right Direction */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll-reverse">
          {logosRow2.map((logo, i) => (
            <li key={`row2-${i}`}>
              <Image src={logo} alt={`Logo-${i}`} width={100} height={100} />
            </li>
          ))}
        </ul>

        {/* Duplicate for seamless loop */}
       <ul
  className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll-reverse"
  aria-hidden="true"
>
          {logosRow2.map((logo, i) => (
            <li key={`row2-dup-${i}`}>
              <Image src={logo} alt={`Logo-${i}`} width={100} height={100} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
