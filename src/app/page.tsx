import Banner from "@/components/home/Banner";
import Solutionize from "@/components/home/Solutionize";
import InfiniteScroll from "@/components/infinteScroll";
import ExpertiseData from "@/components/home/Expertise";
import InspirationStation from "@/components/sections/InspirationStation";
import TerrificSection from "@/components/sections/TerrificSection";
import { digitalMarketing } from "@/components/data/expertiseSections ";
import ExpertiseSection from "@/components/home/Expertise";


export default function Home() {
  return (
    <div>
      <Banner />
      <Solutionize />
      <section className="py-20 bg-black">
              <div>
                <InfiniteScroll/>
              </div>
            </section>
            <ExpertiseSection />
            <TerrificSection />

    <InspirationStation/>
    </div>
  );
}
