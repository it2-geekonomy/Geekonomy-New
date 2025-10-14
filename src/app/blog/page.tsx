import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog - Geekonomy',
  description: 'Read our latest articles on technology, development, branding, and industry insights',
};

export default function BlogPage() {
  return (
    <main>
      {/* Hero Section */}
     

      {/* Categories */}
      

      {/* Blog Posts Grid */}
      <section className="pt-4 md:pt-6 lg:pt-0 pb-8 md:pb-12 lg:pb-1">
  <div className="w-full mx-auto px-6 sm:px-8 md:px-10 lg:px-24 xl:px-32">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-3">
      {BLOG_POSTS.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`} className="w-full">
          <div className="relative aspect-[10/7] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full scale-95 md:scale-100 group">
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-transparent group-hover:bg-black/40 transition-all duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-4 md:p-6 lg:p-6">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-normal text-gray-100 mb-2 md:mb-2 lg:mb-3">
                {post.title}
              </h3>
              <div className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 font-normal leading-relaxed">
                {post.category}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>



      {/* CTA Section */}
      <section className="bg-black py-16 md:py-32 lg:py-60">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-14 xl:px-18">
          <div className="flex flex-col items-center">
            <div className="text-center mb-6 md:mb-10 lg:mb-8">
              <h2 className="hero-headline">
                <span className="hero-text-yellow">Shaping Brands,</span>
                <span className="hero-text-outline">Building Solutions.</span>
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <Link href="/contact-us">
                <button className="hero-button">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>



    </main>
  );
}
