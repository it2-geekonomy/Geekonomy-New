import ExpertiseData from "@/components/sections/ExpertiseData";
import { digitalMarketing} from "../../app/../components/data/expertiseSections ";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold flex justify-center items-center h-screen">Home</h1>
    <ExpertiseData sections={digitalMarketing} />
    </div>
  );
}