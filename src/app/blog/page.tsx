import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/blog';
import CTASection from '@/components/sections/CTASection';

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
      <section className="pt-[16px] md:pt-[24px] lg:pt-[0px] pb-[32px] md:pb-[48px] lg:pb-[4px]">
  <div className="w-full mx-auto px-6 sm:px-8 md:px-10 lg:px-24 xl:px-32">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-8">
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
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-3 sm:p-4 md:p-4 lg:p-5 xl:p-6">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-gray-100 mb-1.5 sm:mb-2 md:mb-2 lg:mb-2.5 xl:mb-3 line-clamp-2 leading-tight sm:leading-snug md:leading-snug lg:leading-normal px-1 md:px-2">
                {post.title}
              </h3>
              <div className="text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base text-gray-200 font-normal leading-tight md:leading-snug line-clamp-2 px-1 md:px-2">
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
      <CTASection extraSpacing={true} />



    </main>
  );
}
