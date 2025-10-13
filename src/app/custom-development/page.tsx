import ExpertisePhases from "@/components/sections/ExpertisePhase";
import { customDevelopment} from "../../app/../components/data/expertiseSections ";
import ExpertiseData from "@/components/sections/ExpertiseData";
export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold flex justify-center items-center h-screen">Home</h1>
       <ExpertiseData sections={customDevelopment} />
       <ExpertisePhases/>
    </div>
  );
}