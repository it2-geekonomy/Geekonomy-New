export default function Solutionize() {
    return (
      <section className="w-full bg-black text-white py-24 lg:py-32">
        <div className="px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8 lg:gap-12 items-center">
            
            {/* Left Column - 3D Ribbon Image - Centered (30%) */}
            <div className="flex justify-center items-center">
              <div className="w-72 h-72 lg:w-80 lg:h-80">
                <img 
                  src="/home/aboutUs_logo.webp" 
                  alt="About Us Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
    
            {/* Right Column - Content - Aligned to start (70%) */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                We Solutionize.
              </h1>
              
              <div className="space-y-6">
                <p className="text-lg text-white leading-relaxed">
                  Geekonomy is a team of driven and innovative individuals, blending passion with curiosity to deliver exceptional value through design.
                </p>
                
                <p className="text-lg text-white leading-relaxed">
                  In today's world, we embrace marketing as an integral part of life, crafting captivating experiences that seamlessly bridge the online and offline realms. Our expertise lies in empowering brands to share their unique narratives, fueling transformative growth.
                </p>
              </div>
              
              <div className="pt-2">
                <button className="px-8 py-3 border-2 border-[#FFC700] text-white rounded-lg hover:bg-[#FFC700] hover:text-black transition-all duration-300 font-medium text-base">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  