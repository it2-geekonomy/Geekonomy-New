import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/constants/blog';

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
      <section className="py-20">
  <div className="max-w-full mx-auto px-16 lg:px-24 xl:px-32">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {BLOG_POSTS.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`}>
          <div className="relative aspect-[10/7] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="text-sm text-blue-600 font-semibold mb-2">
                {post.category}
              </div>
              <h3 className="text-xl font-bold text-black mb-3 hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>{post.author}</span>
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="bg-black py-20">
        <div className="max-w-full mx-auto px-12 lg:px-14 xl:px-18">
          <div className="flex flex-col items-center">
            <div className="text-center mb-8">
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
