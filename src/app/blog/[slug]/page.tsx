import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { formatDate } from '@/lib/utils';
import { BLOG_POSTS } from '@/constants/blog';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // In a real application, fetch the post data
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  
  return {
    title: post ? `${post.title} - Geekonomy Blog` : 'Blog Post - Geekonomy',
    description: post?.excerpt || 'Read our latest article',
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

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm text-blue-200 mb-4">
              <Link href="/blog" className="hover:text-white">← Back to Blog</Link>
            </div>
            <div className="text-sm text-blue-200 font-semibold mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-blue-100">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-8xl mb-8">{post.image}</div>
            </div>
            
            <article className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }} 
                className="text-gray-700 leading-relaxed space-y-6"
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.75rem'
                }}
              />
            </article>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Share this article
              </h3>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Share on Twitter
                </Button>
                <Button variant="outline" size="sm">
                  Share on LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  Copy Link
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <Card hover className="h-full flex flex-col">
                    <div className="text-5xl mb-4 text-center">{relatedPost.image}</div>
                    <div className="text-sm text-blue-600 font-semibold mb-2">
                      {relatedPost.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow">
                      {relatedPost.excerpt}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/blog">
                <Button variant="primary">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

// Generate static params for all blog posts (optional, for static generation)
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}
