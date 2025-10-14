import Banner from "@/components//branding/banner";
import ExpertiseData from "@/components/sections/ExpertiseData";
import { brandingSolutions } from "../../app/../components/data/expertiseSections ";
import VideoSection from "@/components/branding/vedio";
export default function Home() {
  return (  
       <div className="flex flex-col">
       <Banner />
       <ExpertiseData sections={brandingSolutions} />
       <VideoSection
        src="/expertise/Branding page V4.mp4"
        poster="/images/video-poster.webp"
      />
    </div>
  );
}