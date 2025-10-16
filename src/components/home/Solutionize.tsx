import Link from "next/link";
export default function Solutionize() {
    return (
      <section className="w-full bg-black text-white pt-12 sm:pt-20 lg:py-32">
        <div className="px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Column - 3D Ribbon Image - Centered (30%) */}
            <div className="flex justify-center items-center">
              <div className="w-36 h-36 sm:w-42 sm:h-42 md:w-72 md:h-72 lg:w-86 lg:h-86">
                <img 
                  src="/home/aboutUs_logo.webp" 
                  alt="About Us Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
    
            {/* Right Column - Content - Aligned to start (70%) */}
            <div className="space-y-4 sm:space-y-6  lg:mr-24 2xl:mr-52 ">
              <h1 className="text-3xl sm:text-4xl md:text-5xl  font-medium   text-white leading-tight flex justify-center lg:justify-start">
                We Solutionize.
              </h1>
              
              <div className="space-y-6  text-justify font-extralight flex flex-col">
                <p className="text-[1.1rem] sm:text-lg xl:text-[clamp(5px,4vh,22px)] text-white leading-relaxed">
                  Geekonomy is a team of driven and innovative individuals, blending passion with curiosity to deliver exceptional value through design.
                </p>
                
                <p className="text-[1.1rem] sm:text-lg xl:text-[clamp(5px,4vh,22px)] text-white leading-relaxed text-justify">
                  In today&apos;s world, we embrace marketing as an integral part of life, crafting captivating experiences that seamlessly bridge the online and offline realms. Our expertise lies in empowering brands to share their unique narratives, fueling transformative growth.
                </p>
              </div>
              
              <div className="pt-2 flex justify-center lg:justify-start">
                <Link href="/about-us">
                <button className="px-8 py-3 border-2 border-[#FFC700] text-white rounded-lg hover:bg-[#FFC700] hover:text-black transition-all duration-300 font-normal text-base  xl:text-[clamp(5px,4vh,20px)] ">
                  Learn More
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  