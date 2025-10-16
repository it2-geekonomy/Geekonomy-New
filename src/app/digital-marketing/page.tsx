import ExpertiseData from "@/components/sections/ExpertiseData";
import { digitalMarketing} from "../../app/../components/data/expertiseSections ";
import VideoSection from "@/components/digital marketing/vedio";
import Banner from "@/components/digital marketing/banner";
import GetInTouch from "@/components/common/getintouch";
export default function Home() {
  return (
    <div>
      <Banner/>
    <ExpertiseData sections={digitalMarketing} />
    <VideoSection
        src="/expertise/Digital marketing V4.mp4"
        poster="/images/video-poster.webp"
      />
      <GetInTouch
      text="With our specialised digital marketing solutions, you can maximise the potential of your online presence. We are here to help you advance your company in the digital sphere, from compelling campaigns to strategic branding."
      buttonText="Contact Us"
      buttonLink="/contact-us"
    />
    </div>
  );
}