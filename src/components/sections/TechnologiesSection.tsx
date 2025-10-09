import { TECHNOLOGIES } from '@/constants';

export default function TechnologiesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technologies We Master
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We work with cutting-edge technologies to deliver the best solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {TECHNOLOGIES.map((tech, index) => (
            <div
              key={index}
              className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow font-medium text-gray-700"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


