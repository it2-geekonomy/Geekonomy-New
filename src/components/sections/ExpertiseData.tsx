



// import React from "react";

// const ExpertiseData = () => {
//     return (
//         <div className="bg-black text-gray-200 font-thin w-full flex justify-center">
//             <div className="max-w-[clamp(300px,86%,1300px)] mx-auto px-6 text-left  ">
//                 <div className="space-y-20">
//                     <p className="text-[clamp(1rem,2.5vw,1.2rem)] leading-loose !mb-5">
//                         Transform vision to reality, break barriers with Geekonomy's bespoke digital craftsmanship.
//                     </p>
//                     <p className="text-[clamp(1rem,2.3vw,1.2rem)] leading-loose">
//                         Embark on a journey of limitless possibility with Geekonomy's bespoke development solutions. Powered by our boundless imagination and technical expertise, we breathe life into your ideas, transforming them
//                         into digital realities that defy expectation. Whether you seek a dynamic website that dances with interactivity, an app that seamlessly integrates into users' lives, or software that empowers your enterprise to soar, our team stands ready to sculpt the future of your vision with precision and flair.
//                     </p>
//                 </div>
//                 <div className="border-b !mt-4 border-white/20"></div>


//             </div>
//         </div>
//     );
// };

//  export default ExpertiseData;






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
    <div className="bg-black text-gray-200 font-thin w-full flex justify-center">
      <div className="max-w-[clamp(300px,86%,1300px)] mx-auto px-6 text-left">
        {sections?.map((section, index) => (
          <div key={index} className="space-y-5">
            <p className="text-[clamp(1rem,2.5vw,1.2rem)] leading-loose !mb-5">
              {section.text1}
            </p>
            <p className="text-[clamp(1rem,2.3vw,1.2rem)] leading-loose">
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
