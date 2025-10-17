import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { BLOG_POSTS } from '@/lib/blog';
import CTASection from '@/components/sections/CTASection';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // In a real application, fetch the post data
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  
  return {
    title: post ? `${post.title} - Geekonomy Blog` : 'Blog Post - Geekonomy',
    description: post?.title || 'Read our latest article',
  };
}

export default async function BlogPostPage({ params }: Props) {
  // Find the blog post based on slug
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  // If post not found, show default content
  if (!post) {
    return (
      <main className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button variant="primary">Back to Blog</Button>
          </Link>
        </div>
      </main>
    );
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = BLOG_POSTS
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Find the next blog post in sequence
  const currentIndex = BLOG_POSTS.findIndex(p => p.id === post.id);
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : BLOG_POSTS[0];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Image */}
      <section className="w-full px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 pt-8 md:pt-10 lg:pt-14 xl:pt-16">
        <div className="relative aspect-[2/1] overflow-hidden max-w-[81rem] mx-auto">
          <Image 
            src={post.image} 
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Content */}
      <section className="w-full px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-8 md:py-10 lg:py-12">
        <div className="max-w-[81rem] mx-auto">
          <div className="text-left mb-8 md:mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold leading-tight">
              <span className="block md:inline">{post.title}</span>
              <span className="block md:inline md:ml-2">{post.detailPageCategory || post.category}</span>
            </h1>
          </div>
          
          <article className="w-full">
            <div 
              className="
                max-w-full text-[#C5C4C3] break-words overflow-wrap-break-word
                [&_p]:text-justify [&_p]:mb-4 [&_p]:leading-[1.7] [&_p]:text-[0.9375rem] [&_p]:text-[#C5C4C3] [&_p]:hyphens-auto [&_p]:tracking-[0.05em]
                [&_h2]:text-left [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:text-[#C5C4C3] [&_h2]:leading-[1.3] [&_h2]:text-[1.375rem]
                [&_ul]:mt-4 [&_ul]:mb-4 [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:list-outside
                [&_ol]:mt-4 [&_ol]:mb-4 [&_ol]:pl-5
                [&_li]:mb-[0.375rem] [&_li]:leading-[1.6] [&_li]:text-[#C5C4C3] [&_li]:text-[0.9375rem] [&_li]:marker:text-white [&_li]:text-left
                [&_strong]:text-[#C5C4C3] [&_strong]:font-bold
                md:[&_p]:text-justify md:[&_p]:mb-[1.125rem] md:[&_p]:leading-[1.75] md:[&_p]:text-base
                md:[&_h2]:mt-7 md:[&_h2]:mb-[0.875rem] md:[&_h2]:text-2xl
                md:[&_ul]:mb-5 md:[&_ul]:pl-6 md:[&_ul]:list-disc md:[&_ul]:list-outside
                md:[&_ol]:mb-5 md:[&_ol]:pl-6
                md:[&_li]:mb-2 md:[&_li]:leading-[1.65] md:[&_li]:text-base md:[&_li]:marker:text-white md:[&_li]:text-left
                lg:[&_p]:text-justify lg:[&_p]:mb-5 lg:[&_p]:leading-[1.8] lg:[&_p]:text-lg
                lg:[&_h2]:mt-8 lg:[&_h2]:mb-4 lg:[&_h2]:text-[1.75rem]
                lg:[&_ul]:mb-6 lg:[&_ul]:pl-7 lg:[&_ul]:list-disc lg:[&_ul]:list-outside
                lg:[&_ol]:mb-6 lg:[&_ol]:pl-7
                lg:[&_li]:mb-2 lg:[&_li]:leading-[1.7] lg:[&_li]:text-lg lg:[&_li]:marker:text-white lg:[&_li]:text-left
                xl:[&_p]:text-justify xl:[&_p]:mb-6 xl:[&_p]:leading-[1.85] xl:[&_p]:text-xl
                xl:[&_h2]:mt-10 xl:[&_h2]:mb-5 xl:[&_h2]:text-[2rem]
                xl:[&_ul]:mb-7 xl:[&_ul]:pl-8 xl:[&_ul]:list-disc xl:[&_ul]:list-outside
                xl:[&_ol]:mb-7 xl:[&_ol]:pl-8
                xl:[&_li]:mb-[0.625rem] xl:[&_li]:leading-[1.75] xl:[&_li]:text-xl xl:[&_li]:marker:text-white xl:[&_li]:text-left
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Next Button */}
          <div className="text-center mt-12 md:mt-16 lg:mt-20 mb-0">
            <Link href={`/blog/${nextPost.slug}`}>
              <button className="bg-[#facc15] text-gray-950 px-8 md:px-10 lg:px-12 py-2.5 sm:py-2 md:py-2 lg:py-2 rounded-full text-base md:text-lg lg:text-xlt hover:bg-[#eab308] transition-colors duration-300">
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

// Generate static params for all blog posts (optional, for static generation)
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}
