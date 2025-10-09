import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss how we can help you achieve your goals with innovative technology solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact-us">
            <Button size="lg" variant="primary" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Us Today
            </Button>
          </Link>
          <Link href="/expertise">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              View Our Expertise
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
