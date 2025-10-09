import type { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/ui/Card';
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
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-blue-100">
              Insights, tutorials, and updates from the world of technology
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card hover className="h-full flex flex-col">
                  <div className="text-6xl mb-4 text-center">{post.image}</div>
                  <div className="text-sm text-blue-600 font-semibold mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="border-t pt-4 flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest articles and insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
