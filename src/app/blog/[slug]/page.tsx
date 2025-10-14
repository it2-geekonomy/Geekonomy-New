import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { BLOG_POSTS } from '@/lib/blog';

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
      <section className="w-full px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <div className="relative aspect-[2/1] md:aspect-[2/1] lg:aspect-[2/1] overflow-hidden rounded-lg max-w-[110rem] mx-auto">
          <Image 
            src={post.image} 
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Content */}
      <section className="w-full px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12 md:py-16 lg:py-20">
        <div className="max-w-[110rem] mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {post.title} {post.category}
            </h1>
          </div>
          
          <article className="w-full">
            <div 
              className="text-lg md:text-xl lg:text-2xl leading-relaxed space-y-6 prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Next Button */}
          <div className="text-center mt-12 md:mt-16 lg:mt-20">
            <Link href={`/blog/${nextPost.slug}`}>
              <button className="bg-[#facc15] text-black px-12 md:px-16 lg:px-20 py-4 md:py-5 lg:py-6 rounded-full text-lg md:text-xl lg:text-2xl font-bold hover:bg-[#eab308] transition-colors duration-300">
                Next
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// Generate static params for all blog posts (optional, for static generation)
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}
