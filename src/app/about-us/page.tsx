import type { Metadata } from 'next';
import Card from '@/components/ui/Card';
import { COMPANY_INFO, COMPANY_STATS } from '@/constants';

export const metadata: Metadata = {
  title: 'About Us - Geekonomy',
  description: 'Learn more about Geekonomy and our mission to transform businesses through innovative technology solutions',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Geekonomy
            </h1>
            <p className="text-xl text-blue-100">
              Pioneering technology solutions since 2014
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age. We believe in creating 
                technology that makes a real difference.
              </p>
            </Card>

            <Card>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the global leader in technology innovation, recognized for our exceptional 
                solutions, outstanding customer service, and commitment to excellence in everything 
                we do.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {COMPANY_STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2014, Geekonomy began with a simple yet powerful vision: to bridge 
                the gap between business needs and technology solutions. What started as a 
                small team of passionate developers has grown into a full-service technology 
                company serving clients worldwide.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Over the years, we&apos;ve had the privilege of working with startups, 
                enterprises, and everything in between. Each project has been an opportunity 
                to learn, innovate, and push the boundaries of what&apos;s possible with technology.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we&apos;re proud to be trusted partners to over 200 companies, helping 
                them navigate digital transformation, build innovative products, and achieve 
                their business goals through technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Excellence',
                description: 'We strive for excellence in every project, delivering quality that exceeds expectations',
              },
              {
                icon: '🤝',
                title: 'Integrity',
                description: 'We conduct business with honesty, transparency, and ethical practices',
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'We embrace change and continuously seek innovative solutions',
              },
              {
                icon: '👥',
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and strong partnerships',
              },
            ].map((value, index) => (
              <Card key={index} hover>
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


