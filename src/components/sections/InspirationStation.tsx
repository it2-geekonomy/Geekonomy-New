// "use client";
// import { useState } from "react";


// interface Slide {
//   image: string;
//   title: string;
//   description: string;
//   link: string;
// }

// const slides: Slide[] = [
//   {
//     image: "/images/is1.webp",
//     title:
//       "The Power of Brand Storytelling: How Geekonomy Helps Brands Connect with Customers",
//     description:
//       "Brand storytelling is a powerful tool that can help businesses connect with their audience on a deeper level. In today's competitive market, where consumers are bombarded with advertisements and marketing messages, storytelling allows brands to stand out by creating a memorable and emotional connection with their customers.",
//     link: "#",
//   },
//   {
//     image: "/images/is2.webp",
//     title:
//       "UX Design Trends for 2025: Geekonomys Guide to Creating User-Centric Experiences",
//     description:
//       "User experience (UX) design is a critical aspect of creating a successful digital product. In 2025,several trends are shaping the field of UX design, and staying ahead of these trends is essential for creating user-centric experiences that drive engagement and conversions.One of the key trends in UX design for 2025 is the continued focus on accessibility",
//     link: "#",
//   },
//   {
//     image: "/images/is3.webp",
//     title:
//       "Content Marketing in 2025: Geekonomys Tips for Creating Engaging Content",
//     description:
//       "Content marketing continues to be a powerful tool for brands looking to engage with their audience and drive traffic to their website. In 2025, several trends are shaping the world of content marketing, and staying ahead of these trends is essential for creating content that resonates with your target audience",
//     link: "#",
//   },
//   {
//     image: "/images/is4.webp",
//     title:
//       "Why Responsive Web Design is Essential: Geekonomys Approach to Mobile Optimization",
//     description:
//       "With the increasing use of mobile devices to access the Internet, having a responsive web design is essential for ensuring that your website is accessible and user-friendly on all devices. Responsive web design is a design approach that ensures that a website adapts to the screen size and device type of the user, providing an optimal viewing experience",
//     link: "#",
//   },
//   {
//     image: "/images/is5.webp",
//     title:
//       "The Future of E-Commerce: Geekonomys Strategies for Online Success",
//     description:
//       "E-commerce has undergone significant changes in recent years, driven by advancements in technology and changing consumer behavior. As we look ahead to the future of e-commerce, several trends are shaping the industry and presenting new opportunities for online retailers. One of the key trends in e-commerce is the rise of omni-channel shopping experiences.",
//     link: "#",
//   },
// ];

// export default function InspirationStation() {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const slide = slides[current];

//   return (
//     <section className="bg-black text-white  py-16 px-4 flex flex-col items-center relative">
//       <h2 className="text-3xl sm:text-4xl font-medium mb-10 text-center">
//         Inspiration Station
//       </h2>

//       {/* Arrows Outside */}
//       <div className="w-full max-w-[clamp(320px,92%,1340px)] h-auto flex justify-between items-center ">
//         {/* Left Arrow */}
//         <button
//           onClick={prevSlide}
//           className=" p-3 rounded-md transition"
//         >
//          <img 
//   src="/images/la.webp" 
//   alt="Arrow Left" 
//   className="w-14 h-12"
// />
//         </button>

//         {/* Content Grid */}
//         <div className="w-full  aspect-auto h-auto   mx-6 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
//           {/* Image */}
        
//           <div className="flex justify-center h-[400px] ">
//   <img
//     src={slide.image}
//     alt={slide.title}
//     className="w-full  object-cover"
//   />
// </div>

//           {/* Text Section */}
//           <div className="flex flex-col  justify-center h-[50px]">
//             <h3 className="text-xl font-light mb-4">{slide.title}</h3>
//             <p className="text-white mb-6 font-light text-justify leading-relaxed">
//               {slide.description}
//             </p>
//             <a
//               href={slide.link}
//               className="text-white font-medium inline-flex items-center hover:underline"
//             >
//               Read more
//               <img 
//   src="/images/ar.webp" 
//   alt="Arrow Right" 
//   className="w-10 h-6 ml-1 text-yellow-300"
// />

//             </a>
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={nextSlide}
//           className=" p-3 rounded-md transition"
//         >
//         <img 
//   src="/images/ra.webp" 
//   alt="Arrow Left" 
//   className="w-14 h-12"
// />
//         </button>
//       </div>
//     </section>
//   );
// }



"use client";
import { useState } from "react";

interface Slide {
  image: string;
  title: string;
  description: string;
  link: string;
}

const slides: Slide[] = [
  {
    image: "/images/is1.webp",
    title:
      "The Power of Brand Storytelling: How Geekonomy Helps Brands Connect with Customers",
    description:
      "Brand storytelling is a powerful tool that can help businesses connect with their audience on a deeper level. In today's competitive market, where consumers are bombarded with advertisements and marketing messages, storytelling allows brands to stand out by creating a memorable and emotional connection with their customers.",
    link: "#",
  },
  {
    image: "/images/is2.webp",
    title:
      "UX Design Trends for 2025: Geekonomys Guide to Creating User-Centric Experiences",
    description:
      "User experience (UX) design is a critical aspect of creating a successful digital product. In 2025, several trends are shaping the field of UX design, and staying ahead of these trends is essential for creating user-centric experiences that drive engagement and conversions.",
    link: "#",
  },
  {
    image: "/images/is3.webp",
    title:
      "Content Marketing in 2025: Geekonomys Tips for Creating Engaging Content",
    description:
      "Content marketing continues to be a powerful tool for brands looking to engage with their audience and drive traffic to their website. In 2025, several trends are shaping the world of content marketing, and staying ahead of these trends is essential for creating content that resonates with your target audience.",
    link: "#",
  },
  {
    image: "/images/is4.webp",
    title:
      "Why Responsive Web Design is Essential: Geekonomys Approach to Mobile Optimization",
    description:
      "With the increasing use of mobile devices to access the Internet, having a responsive web design is essential for ensuring that your website is accessible and user-friendly on all devices.",
    link: "#",
  },
  {
    image: "/images/is5.webp",
    title: "The Future of E-Commerce: Geekonomys Strategies for Online Success",
    description:
      "E-commerce has undergone significant changes in recent years, driven by advancements in technology and changing consumer behavior. As we look ahead to the future of e-commerce, several trends are shaping the industry and presenting new opportunities for online retailers.",
    link: "#",
  },
];

export default function InspirationStation() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <section className="bg-black text-white sm:py-6 md:py-14 lg:py-16 px-4 flex flex-col items-center relative">
      <h2 className="text-3xl sm:text-4xl font-medium mb-8 text-center ">
        Inspiration Station
      </h2>

      {/* Main Container */}
      <div className="w-full lg:max-w-[clamp(320px,92%,1340px)] mx-auto flex justify-between items-center">
        {/* Left Arrow */}
        <button onClick={prevSlide} className="p-3 rounded-md transition">
          <img src="/images/la.webp" alt="Arrow Left" className="   w-5 h-5 sm:w-10 sm:h-10  md:w-10 md:h-10 lg:w-14 lg:h-12" />
        </button>

        {/* Content Wrapper (Flex instead of Grid) */}
        <div className="w-full lg:mx-6 flex flex-col    h-full  md:flex-row gap-6 items-center">
          {/* Image Section - 50% */}
          <div className="w-full md:w-1/2 flex  ">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[clamp(300px,45vh,450px)]  object-cover "
            />
          </div>

          {/* Text Section - 50% */}
          <div className="w-full md:w-1/2 flex flex-col  h-[clamp(300px,45vh,450px)] ">
            <h3 className="text-[clamp(1.2rem,2vw,1.2rem)]
             md:text-[clamp(1.2rem,2vw,3rem)] 
               lg:text-[clamp(1.8rem,2vw,1.2rem)]
                  leading-[1.2] font-medium mb-2">{slide.title}</h3>
            <p className="text-white
             text-[clamp(1rem,1vw,0.8rem)]
              md:text-[clamp(1rem,1vw,9rem)]
               lg:text-[clamp(0.9rem,1vw,0.77rem)]
             xl:text-[clamp(1rem,1vw,0.8rem)] 
             leading-[1] lg:leading-relaxed mb-6 font-light text-justify ">
              {slide.description}
            </p>
            <a
              href={slide.link}
              className="text-white font-medium inline-flex items-center text-[clamp(1rem,1vw,0.8rem)] hover:underline"
            >
              Read more
              <img
                src="/images/ar.webp"
                alt="Arrow Right"
                className="w-10 h-6 ml-1 text-yellow-300"
              />
            </a>
          </div>
        </div>

        {/* Right Arrow */}
        <button onClick={nextSlide} className="p-3 rounded-md transition">
          <img src="/images/ra.webp" alt="Arrow Right" className="  w-5 h-5 sm:w-10 sm:h-10  md:w-10 md:h-10 lg:w-14 lg:h-12" />
        </button>
      </div>
    </section>
  );
}
