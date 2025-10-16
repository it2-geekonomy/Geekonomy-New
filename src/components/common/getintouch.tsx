// components/HeroSection.tsx
import Link from "next/link";

interface HeroSectionProps {
  text: string; // The text for the h3
  buttonText?: string; // Optional button text
  buttonLink?: string; // Optional button link
}

const HeroSection: React.FC<HeroSectionProps> = ({
  text,
  buttonText = "Get In Touch",
  buttonLink = "/contact-us",
}) => {
  return (
    <div className="pt-12 sm:pt-14 md:pt-16 pb-0 bg-black text-center">
  <h3 className="text-white text-[0.9rem] sm:text-[1rem] md:text-[1.3rem] lg:text-[2.1rem] max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto leading-relaxed px-4">
    {text}
  </h3>

  <div className="flex justify-center mt-6 sm:mt-8">
    <Link href={buttonLink}>
      <button className="bg-yellow-400 text-gray-950 px-8 sm:px-12 md:px-20 lg:px-48 py-2 sm:py-2 md:py-2 rounded-full text-sm sm:text-base hover:bg-yellow-300 transition-colors duration-300">
        {buttonText}
      </button>
    </Link>
  </div>
</div>

  );
};

export default HeroSection;
