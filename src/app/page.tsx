import Banner from "@/components/home/Banner";
import Solutionize from "@/components/home/Solutionize";
import InfiniteScroll from "@/components/infinteScroll";
import InspirationStation from "@/components/sections/InspirationStation";
import TerrificSection from "@/components/sections/TerrificSection";


export default function Home() {
  return (
    <div>
      <Banner />
      {/* <Solutionize /> */}
      <section className="py-20 bg-black">
              <div>
                <InfiniteScroll/>
              </div>
            </section>
            <TerrificSection />

    <InspirationStation/>
    </div>
  );
}
