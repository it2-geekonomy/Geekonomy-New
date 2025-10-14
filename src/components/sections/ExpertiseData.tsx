import React from "react";

type Section = {
  text1: string;
  text2: string;
};

type ExpertiseDataProps = {
  sections: Section[];
};

const ExpertiseData: React.FC<ExpertiseDataProps> = ({ sections }) => {
  return (
    <div className="bg-black text-gray-200 font-thin w-full flex !mt-8 md:!mt-12 justify-center">
      <div className="lg:max-w-[clamp(320px,88%,1397px)] px-6  sm:px-19 md:px-7 text-left">
        {sections?.map((section, index) => (
          <div key={index} className="space-y-5">
            <p className="text-[clamp(0.85rem,2.5vw,1.2rem)]  !mb-5 text-justify ">
              {section.text1}
            </p>
            <p className="text-[clamp(0.85rem,2.3vw,1.2rem)]  text-justify">
              {section.text2}
            </p>
            <div className="border-b !mt-2 border-white/20"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseData;
