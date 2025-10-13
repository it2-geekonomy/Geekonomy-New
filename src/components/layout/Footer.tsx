import Link from 'next/link';
import { COMPANY_INFO, EXPERTISE_LINKS } from '@/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white w-full flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 py-12 w-full">
        {/* Main Footer Content */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 w-full max-w-6xl">
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center mb-4">
              {/* Logo Icon - Using a colorful knot-like design */}
              <div className="w-8 h-8 mr-3 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded transform rotate-45"></div>
              </div>
              <h3 className="text-white text-xl font-bold uppercase">
                {COMPANY_INFO.name}
              </h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Geekonomy is a team of driven and innovative individuals, blending passion with curiosity to deliver exceptional value through design.
            </p>
            <p className="text-gray-300 text-sm">
              In today's world, we embrace marketing as an integral part of life, crafting captivating experiences that seamlessly bridge the online and offline realms. Our expertise lies in empowering brands to share their unique narratives, fueling transformative growth.
            </p>
          </div>

          {/* Column 2: Services and Partners */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 mb-6">
              {EXPERTISE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white text-lg font-bold mb-4">Partners</h3>
            <div className="flex space-x-2">
              {/* Cloud Service Icon */}
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">🌐</span>
              </div>
              {/* Trello Icon */}
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">t</span>
              </div>
              {/* Google Icon */}
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-blue-600 text-xs font-bold">G</span>
              </div>
              {/* AWS Icon */}
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">aws</span>
              </div>
              {/* Adobe Icon */}
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">A</span>
              </div>
            </div>
          </div>

          {/* Column 3: Company and Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              <li><Link href="/about-us" className="text-gray-300 hover:text-white transition-colors text-sm">About us</Link></li>
              <li><Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors text-sm">Contact us</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="text-gray-300 hover:text-white transition-colors text-sm">Term & conditions</Link></li>
            </ul>

            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">{COMPANY_INFO.phone}</li>
              <li className="text-gray-300 text-sm">{COMPANY_INFO.email}</li>
            </ul>
          </div>

          {/* Column 4: Address and Map */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Address</h3>
            <div className="text-gray-300 text-sm mb-4">
              <p>No. 1357, Ground Floor, 9th Cross, ITI Layout,</p>
              <p>JP Nagar 1st Phase, Bengaluru, Karnataka -</p>
              <p>560 078.</p>
            </div>
            
            {/* Google Maps Embed */}
            <div className="w-full h-40 bg-gray-800 rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890123!2d77.5845!3d12.9063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c5f5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sITI%20Layout%2C%20JP%20Nagar%201st%20Phase%2C%20Bengaluru%2C%20Karnataka%20560078!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Geekonomy Location"
              ></iframe>
            </div>
          </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-col items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-gray-300 text-sm">
                © {currentYear} Geekonomy. All rights reserved
              </p>
              <div className="bg-black border border-gray-600 px-2 py-1 rounded text-xs text-white font-bold uppercase">
                DMCA PROTECTED
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4 md:mt-0">
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-black text-xs font-bold">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-black text-xs font-bold">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-black text-xs">📷</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}