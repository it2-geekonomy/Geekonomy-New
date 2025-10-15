

import Banner from "@/components/custom/banner";
import ExpertisePhases from "@/components/sections/ExpertisePhase";
import ExpertiseData from "@/components/sections/ExpertiseData";
import { customDevelopment} from "../../app/../components/data/expertiseSections ";

export default function Home() {
  return (
    <div> 
      <Banner/>    
      <ExpertiseData sections={customDevelopment} />
      <ExpertisePhases />
    </div>
  );
}
