import InfiniteScroll from "@/components/infinteScroll";


export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold flex justify-center items-center h-screen">Home</h1>
      <section className="py-20 bg-black">
              <div>
                <InfiniteScroll/>
              </div>
            </section>

    </div>
  );
}