import ExpertiseData from "@/components/sections/ExpertiseData";
import { digitalMarketing} from "../../app/../components/data/expertiseSections ";
import VideoSection from "@/components/digital marketing/vedio";
import Banner from "@/components/digital marketing/banner";
export default function Home() {
  return (
    <div>
      <Banner/>
    <ExpertiseData sections={digitalMarketing} />
    <VideoSection
        src="/expertise/Digital marketing V4.mp4"
        poster="/images/video-poster.webp"
      />
    </div>
  );
}