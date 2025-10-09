import Link from 'next/link';
import { COMPANY_INFO } from '@/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-gray-400 mb-4">
              {COMPANY_INFO.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="text-gray-400 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="/expertise" className="text-gray-400 hover:text-yellow-400 transition-colors">Expertise</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-yellow-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact-us" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">{COMPANY_INFO.email}</li>
              <li className="text-gray-400">{COMPANY_INFO.phone}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}