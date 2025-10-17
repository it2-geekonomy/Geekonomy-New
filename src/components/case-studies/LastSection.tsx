import React from "react";
import Link from "next/link";
const LastSection: React.FC = () => {
  return (
    <>
<div className="flex flex-col items-center text-center">
  <p className="text-[clamp(1.15rem,2.5vw,2.5rem)]  text-white font-bold mt-3">
    <span >Inspired by our work? Lets build your</span><br />
    <span>brand legacy together.</span>
  </p>

  {/* Button */}
  <Link href="/contact-us ">
  <button className="mt-6 px-6 py-3 text-[clamp(0.8rem,2vw,1rem)] border border-gray-300 text-white transition rounded-lg">
    Contact Us
  </button>
  </Link>
</div>

      </>
  );
};

export default LastSection;