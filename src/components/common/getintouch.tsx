// components/common/getintouch.tsx
import Link from "next/link";

interface GetInTouchProps {
  text: string; // The text for the h3
  buttonText?: string; // Optional button text
  buttonLink?: string; // Optional button link
}

const GetInTouch: React.FC<GetInTouchProps> = ({
  text,
  buttonText = "Get In Touch",
  buttonLink = "/contact-us",
}) => {
  return (
    <div className="text-center py-16 bg-black">
      <h3 className="text-white text-[1rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.7rem] max-w-6xl mx-auto leading-relaxed text-center">
        {text}
      </h3>

      <div className="flex flex-col items-center mt-8">
        <Link href={buttonLink}>
          <button className="bg-yellow-400 text-gray-950 px-20 sm:px-30 md:px-40 lg:px-48 py-1 md:py-1 lg:py-1 rounded-full text-sm md:text-base lg:text-base hover:bg-yellow-300 transition-colors duration-300">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetInTouch;
