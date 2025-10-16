import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO, EXPERTISE_LINKS } from '@/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white w-full flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="w-full border-t border-gray-500 mb-4 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-8"></div>


        {/* Main Footer Content */}
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 mb-8 w-full">
          {/* Column 1: Company Info */}
          <div className="flex-1">
            <div className="flex items-center mb-4">
              {/* Footer logo (replace decorative knot and text) */}
              <div className="w-64 h-10 mr-3 relative">
                <Image src="/logo2.png" alt="Geekonomy logo" fill style={{ objectFit: 'contain' }} />
              </div>
            </div>
            <p className="text-gray-300 text-sm lg:text-base mb-3 text-justify">
              Geekonomy is a team of driven and innovative individuals, blending passion with curiosity to deliver exceptional value through design.
            </p>
            <p className="text-gray-300 text-sm lg:text-base text-justify">
              In today&apos;s world, we embrace marketing as an integral part of life, crafting captivating experiences that seamlessly bridge the online and offline realms. Our expertise lies in empowering brands to share their unique narratives, fueling transformative growth.
            </p>
          </div>
          {/* Outer Container for Columns 2 & 3 */}
          <div className="flex-1 flex flex-row gap-0">
            {/* Column 2: Services and Partners */}
            <div className="flex-1 flex flex-col gap-8 px-1 sm:px-2 md:px-5 lg:px-20 xl:px-20
">
              {/* Services Section */}
              <div className="w-full flex flex-col items-start">
                <h3 className="text-white text-[1.3rem] mb-4 text-left">
  Services
</h3>

                <ul className="space-y-2 text-left">
                  {EXPERTISE_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm lg:text-base whitespace-nowrap"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Partners Section */}
              <div className="w-full flex flex-col items-start">
                <h3 className="text-white text-[1.3rem] mb-4 text-left">Partners</h3>
                <div className="flex flex-nowrap gap-1 sm:gap-2 justify-start">
                  {/* Cloud Service Icon */}
                  {/* Partner logos from /public/images - swap filenames as needed */}
                  <div className="w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 relative">
                    <Image src="/images/leadspotting.f44ee491ee208bf68bba.webp" alt="partner-1" fill style={{ objectFit: 'contain' }} />
                  </div>
                  <div className="w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 relative">
                    <Image src="/images/teraffic.1280028d6e80727f7c3b.webp" alt="partner-2" fill style={{ objectFit: 'contain' }} />
                  </div>
                  <div className="w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 relative">
                    <Image src="/images/google.9d3d6c7cde3f1f4a5591.webp" alt="partner-3" fill style={{ objectFit: 'contain' }} />
                  </div>
                  <div className="w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 relative">
                    <Image src="/images/amazon.af965e29b6fcd290c2e6.webp" alt="partner-4" fill style={{ objectFit: 'contain' }} />
                  </div>
                  <div className="w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 relative">
                    <Image src="/images/adobe.dedd8b5de418b59824b5.webp" alt="partner-5" fill style={{ objectFit: 'contain' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Company and Contact */}
            <div className="flex-1 flex flex-col gap-10 px-10 2xl:px-10">
              {/* Company Section */}
              <div className="w-full flex flex-col items-start">
                <h3 className="text-white text-[1.3rem] mb-4 text-left">Company</h3>
                <ul className="flex flex-col space-y-2 text-left">
                  <li><Link href="/about-us" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm lg:text-base whitespace-nowrap">About us</Link></li>
                  <li><Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm lg:text-base whitespace-nowrap">Contact us</Link></li>
                  <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm lg:text-base whitespace-nowrap">Privacy Policy</Link></li>
                  <li><Link href="/terms-conditions" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm lg:text-base whitespace-nowrap">Term & conditions</Link></li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="w-full flex flex-col items-start">
                <h3 className="text-white text-[1.3rem] mb-4 text-left">Contact</h3>
                <ul className="space-y-2 text-left">
                  <li className="text-gray-300 text-xs sm:text-sm lg:text-base whitespace-nowrap">{COMPANY_INFO.phone}</li>
                  <li className="text-gray-300 text-xs sm:text-sm lg:text-base whitespace-nowrap">{COMPANY_INFO.email}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 4: Address and Map */}
          <div className="flex-1">
            <h3 className="text-white text-[1.3rem] font-bold mb-4">Address</h3>
            <div className="text-gray-300 text-sm lg:text-base mb-4">
              <p className="lg:hidden">No. 1357, Ground Floor, 9th Cross, ITI Layout, JP Nagar 1st Phase, Bengaluru, Karnataka - 560 078.</p>
              <div className="hidden lg:block">
                <p>No. 1357, Ground Floor, 9th Cross, ITI Layout,</p>
                <p>JP Nagar 1st Phase, Bengaluru, Karnataka -</p>
                <p>560 078.</p>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="w-[80%] sm:w-[50%] lg:w-[100%] 2xl:w-[100%] h-60 lg:h-50 xl:h-60 bg-gray-800 rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18452.258377573722!2d77.580541!3d12.910924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1681f9dec0e9%3A0xdaec705c2f2ff0ed!2sGeekonomy%20Technology%20Private%20Limited.!5e1!3m2!1sen!2sin!4v1760522719324!5m2!1sen!2sin"
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
          <div className="flex flex-nowrap lg:flex-row justify-between items-start lg:items-center">
            {/* Left Side - Copyright and DMCA */}
            <div className="flex flex-col items-start space-y-2 lg:space-y-0 lg:space-x-4">
              <p className="text-gray-300 text-[0.7rem] sm:text-[1rem] lg:text-base">
                © {currentYear} Geekonomy. All rights reserved
              </p>
                  <a href="//www.dmca.com/Protection/Status.aspx?ID=eea71184-71ee-4c73-a959-5852051246f6" title="DMCA.com Protection Status" className="dmca-badge"> <img src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=eea71184-71ee-4c73-a959-5852051246f6" alt="DMCA.com Protection Status" /></a> <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
            </div>
            
            {/* Right Side - Social Media Icons */}
<div className="flex space-x-3 lg:mt-0">
  <a
    href="https://www.facebook.com/geekonomytechpvtltd"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/facebook.webp"
      alt="facebook"
      className="social-icon"
      style={{ width: '24px', height: '24px', borderRadius: '4px' }}
    />
  </a>

  <a
    href="https://www.linkedin.com/company/geekonomy-technology-private-limited/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/linkedin.webp"
      alt="linkedin"
      className="social-icon"
      style={{ width: '24px', height: '24px' }}
    />
  </a>

  <a
    href="https://www.instagram.com/geekonomy_tech"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/instagram.webp"
      alt="instagram"
      className="social-icon"
      style={{ width: '24px', height: '24px', borderRadius: '4px' }}
    />
  </a>
</div>

          </div>
        </div>
      </div>
    </footer>
  );
}