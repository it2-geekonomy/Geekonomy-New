"use client";
import Image from "next/image";

export default function InfiniteScroll() {
  // Row 1 logos (scrolling left) - each item can include per-logo outer/inner size classes
  const logosRow1 = [
    { src: "/client.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client1.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client2.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client3.webp", outer: 'w-44 h-28', inner: 'w-40 h-20' },
  { src: "/client4.webp", outer: 'w-36 h-28', inner: 'w-44 h-22' },
  { src: "/client5.webp", outer: 'w-36 h-28', inner: 'w-44 h-22' },
    { src: "/client6.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    //{ src: "/client7.webp" },
    { src: "/client8.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client9.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client10.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client11.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client12.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client13.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client14.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client15.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client16.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client17.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client18.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client19.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client20.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client21.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client22.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client23.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client24.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client25.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client26.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client27.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client28.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
  ];

  // Row 2 logos (scrolling right)
  const logosRow2 = [
    { src: "/client.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client1.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client2.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client3.webp", outer: 'w-44 h-28', inner: 'w-40 h-20' },
  { src: "/client4.webp", outer: 'w-36 h-28', inner: 'w-44 h-22' },
  { src: "/client5.webp", outer: 'w-36 h-28', inner: 'w-44 h-22' },
    { src: "/client6.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    //{ src: "/client7.webp" },
    { src: "/client8.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client9.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client10.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client11.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client12.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client13.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client14.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client15.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client16.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client17.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client18.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client19.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client20.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client21.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client22.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client23.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client24.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client25.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client26.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client27.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
    { src: "/client28.webp", outer: 'w-36 h-28', inner: 'w-32 h-20' },
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
            // outer is fixed to keep spacing consistent; only inner controls logo size
            <li key={`row1-${i}`} className={`relative w-36 h-28 flex-shrink-0 flex items-center justify-center`}>
              <div className={`relative ${logo.inner ?? 'w-32 h-20'}`}>
                <Image src={logo.src} alt={`Logo-${i}`} fill style={{ objectFit: 'contain' }} />
              </div>
            </li>
          ))}
        </ul>

        {/* Duplicate for seamless loop */}
        <ul
  className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll"
  aria-hidden="true"
>
          {logosRow1.map((logo, i) => (
            <li key={`row1-dup-${i}`} className={`relative w-36 h-28 flex-shrink-0 flex items-center justify-center`}>
              <div className={`relative ${logo.inner ?? 'w-32 h-20'}`}>
                <Image src={logo.src} alt={`Logo-${i}`} fill style={{ objectFit: 'contain' }} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Second Row - Right Direction */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll-reverse">
          {logosRow2.map((logo, i) => (
            <li key={`row2-${i}`} className={`relative w-36 h-28 flex-shrink-0 flex items-center justify-center`}>
              <div className={`relative ${logo.inner ?? 'w-32 h-20'}`}>
                <Image src={logo.src} alt={`Logo-${i}`} fill style={{ objectFit: 'contain' }} />
              </div>
            </li>
          ))}
        </ul>

        {/* Duplicate for seamless loop */}
       <ul
  className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll-reverse"
  aria-hidden="true"
>
          {logosRow2.map((logo, i) => (
            <li key={`row2-dup-${i}`} className={`relative w-36 h-28 flex-shrink-0 flex items-center justify-center`}>
              <div className={`relative ${logo.inner ?? 'w-32 h-20'}`}>
                <Image src={logo.src} alt={`Logo-${i}`} fill style={{ objectFit: 'contain' }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
