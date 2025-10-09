import Link from 'next/link';
import Card from '@/components/ui/Card';
import { EXPERTISE_SERVICES } from '@/constants';

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERTISE_SERVICES.map((service) => (
            <Card key={service.id} hover className="flex flex-col">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {service.description}
              </p>
              <Link
                href={`/${service.slug}`}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More →
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
