

import Banner from "@/components/custom/banner";
import ExpertisePhases from "@/components/sections/ExpertisePhase";
import ExpertiseData from "@/components/sections/ExpertiseData";
import { customDevelopment} from "../../app/../components/data/expertiseSections ";
import GetInTouch from "@/components/common/getintouch";

export default function Home() {
  return (
    <div> 
      <Banner/>    
      <ExpertiseData sections={customDevelopment} />
      <ExpertisePhases />
      <GetInTouch
      text="We merge simplicity with sophistication to craft intuitive solutions. Our commitment to user-centric design ensures seamless experiences that elevate your digital presence with elegance and efficiency."
      buttonText="Contact Us"
      buttonLink="/contact-us"
    />
    </div>
  );
}
