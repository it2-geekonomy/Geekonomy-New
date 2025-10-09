import Card from '@/components/ui/Card';

const features = [
  {
    icon: '⚡',
    title: 'Fast & Efficient',
    description: 'Lightning-fast performance and optimized solutions for your business needs',
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime guarantee',
  },
  {
    icon: '🎯',
    title: 'Goal-Oriented',
    description: 'Focused on delivering results that matter to your business',
  },
  {
    icon: '🤝',
    title: 'Dedicated Support',
    description: '24/7 customer support to ensure your success',
  },
  {
    icon: '💡',
    title: 'Innovative Solutions',
    description: 'Cutting-edge technology and creative problem-solving',
  },
  {
    icon: '📈',
    title: 'Scalable Growth',
    description: 'Solutions that grow with your business',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


