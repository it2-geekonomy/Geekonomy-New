import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { caseStudies } from "@/lib/caseStudies";
import { CaseStudy } from "@/types";

type Props = {
  params: Promise<{ slug: string }>;
};

// Metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = caseStudies.find((c) => c.slug === slug);

  return {
    title: post ? `${post.title} - Case Study` : "Case Study Not Found",
    description: post?.subtitle || "Explore our case studies",
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const post = caseStudies.find((c) => c.slug === slug);

  if (!post) {
    return (
      <main className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/case-studies">
            <Button variant="primary">Back to Case Studies</Button>
          </Link>
        </div>
      </main>
    );
  }

  // Next case study (loop around)
  const currentIndex = caseStudies.findIndex((c) => c.id === post.id);
  const nextPost =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : caseStudies[0];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Image */}
      <section className="w-full px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 pt-8 md:pt-10 lg:pt-14 xl:pt-16">
        <div className="relative aspect-[2/1] overflow-hidden max-w-[81rem] mx-auto">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
      </section>

      {/* Content */}
      <section className="w-full px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-8 md:py-10 lg:py-12">
        <div className="max-w-[81rem] mx-auto">
          <div className="text-left mb-8 md:mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-400 mt-2 text-lg md:text-xl">{post.subtitle}</p>
          </div>

          {/* Main content / description */}
          <article
  className="w-full text-[#C5C4C3] leading-relaxed [&_p]:mb-4 [&_p]:text-justify"
  dangerouslySetInnerHTML={{ __html: post.content }}
/>

          {/* Next Button */}
          <div className="text-center mt-12 md:mt-16 lg:mt-20 mb-0">
            
        <Link href={`/case-studies/${nextPost.slug}`}>



              <button className="bg-[#facc15] text-gray-950 px-8 md:px-10 lg:px-12 py-2.5 sm:py-2 md:py-2 lg:py-2 rounded-full text-base md:text-lg lg:text-xl hover:bg-[#eab308] transition-colors duration-300">
                Next
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}

// Optional: Static params generation
export async function generateStaticParams() {
  return caseStudies.map((c) => ({
    slug: c.slug,
  }));
}
