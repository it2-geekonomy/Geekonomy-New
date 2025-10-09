import type { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { EXPERTISE_SERVICES } from '@/constants';

const service = EXPERTISE_SERVICES[1]; // Custom Development

export const metadata: Metadata = {
  title: 'Custom Development - Geekonomy',
  description: 'Tailored software solutions built specifically for your business needs using cutting-edge technologies',
};

export default function CustomDevelopmentPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/expertise" className="text-blue-200 hover:text-white mb-4 inline-block">
              ← Back to Expertise
            </Link>
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-blue-100">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Overview
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Features */}
              <Card>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What We Offer
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl font-bold">•</span>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Benefits */}
              <Card>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Technologies We Use
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'GraphQL'].map((tech) => (
                <div key={tech} className="px-6 py-3 bg-blue-50 rounded-full text-blue-700 font-semibold">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Planning', desc: 'Requirements gathering and architecture design' },
                { step: '02', title: 'Development', desc: 'Agile development with regular updates' },
                { step: '03', title: 'Testing', desc: 'Comprehensive QA and user testing' },
                { step: '04', title: 'Deployment', desc: 'Launch and ongoing support' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-3">{item.step}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a custom solution that fits your needs
          </p>
          <Link href="/contact-us">
            <Button size="lg" variant="primary" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}


