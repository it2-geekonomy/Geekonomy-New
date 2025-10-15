import Link from 'next/link';

interface CTASectionProps {
  extraSpacing?: boolean;
}

export default function CTASection({ extraSpacing = false }: CTASectionProps) {
  return (
    <section className={`bg-black ${extraSpacing ? 'pt-16 md:pt-24 lg:pt-32' : 'pt-4 md:pt-6 lg:pt-8'} pb-16 md:pb-32 lg:pb-60`}>
      <div className="max-w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        <div className="flex flex-col items-center">
          <div className="text-center mb-6 md:mb-10 lg:mb-8">
            <h2 className="hero-headline">
              <span className="hero-text-yellow">Shaping Brands,</span>
              <span className="hero-text-outline">Building Solutions.</span>
            </h2>
          </div>
          <div className="flex flex-col items-center">
             <Link href="/contact-us">
               <button className="bg-yellow-400 text-gray-950 px-32 md:px-40 lg:px-48 py-1 md:py-1 lg:py-1 rounded-full text-sm md:text-base lg:text-base font-light hover:bg-yellow-300 transition-colors duration-300">
                 Get In Touch
               </button>
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
