'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [click, setClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleClick = () => setClick(!click);

  const handleNavLinkClick = () => {
    if (click) {
      setClick(false);
    }
    setMobileExpertiseOpen(false);
    window.scrollTo(0, 0);
  };

  const toggleMobileExpertise = () => {
    setMobileExpertiseOpen(!mobileExpertiseOpen);
  };

  const isExpertiseActive = pathname.startsWith('/branding-solutions') || 
                           pathname.startsWith('/digital-marketing') || 
                           pathname.startsWith('/custom-development') || 
                           pathname.startsWith('/customer-retention');

  return (
    <nav className="bg-black/80 h-[90px] flex justify-center items-center fixed top-0 left-0 right-0 z-[60] backdrop-blur-2xl">
      <div className="flex justify-between items-center w-full max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo - Left Side */}
        <Link 
          href="/" 
          className="flex items-center"
          onClick={handleNavLinkClick}
        >
          <Image 
            src="/logo2.png" 
            alt="Geekonomy Logo" 
            width={200}
            height={48}
            className="w-auto h-8"
          />
        </Link>

        {/* Desktop Navigation - Center */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-16 2xl:gap-32 list-none">

          <li className="relative group">
            <Link
              href="/"
              className={`text-xl font-light no-underline inline-block pb-2 ${
                pathname === '/' ? 'text-[#FFC700]' : 'text-white hover:text-[#FFC700]'
              }`}
              onClick={handleNavLinkClick}
            >
              Home
            </Link>
            <span className="absolute -bottom-3 left-0 h-[3px] w-0 bg-[#FFC700] transition-all duration-700 ease-in-out group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link
              href="/about-us"
              className={`text-xl font-light no-underline inline-block pb-2 ${
                pathname === '/about-us' ? 'text-[#FFC700]' : 'text-white hover:text-[#FFC700]'
              }`}
              onClick={handleNavLinkClick}
            >
              About Us
            </Link>
            <span className="absolute -bottom-3 left-0 h-[3px] w-0 bg-[#FFC700] transition-all duration-700 ease-in-out group-hover:w-full"></span>
          </li>

          <li 
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className={`cursor-pointer text-xl font-light no-underline inline-block pb-2 ${
                isExpertiseActive ? 'text-[#FFC700]' : 'text-white hover:text-[#FFC700]'
              }`}
            >
              Expertise
            </span>
            <span className="absolute -bottom-3 left-0 h-[3px] w-0 bg-[#FFC700] transition-all duration-700 ease-in-out group-hover:w-full"></span>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-0 bg-[#040509] w-[200px] rounded-lg shadow-2xl border transition-all duration-300 ease-in-out origin-top ${
              dropdownOpen ? 'opacity-100 scale-y-100 translate-y-0 ' : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none border-gray-800'
            }`}>
                <div className="py-4 flex flex-col gap-2">
                  <Link
                    href="/branding-solutions"
                    className="text-white px-6 py-3 whitespace-nowrap no-underline hover:bg-[#FFC700] hover:text-black transition-all duration-200 text-base font-light rounded-lg mx-2 text-center flex items-center justify-center"
                    onClick={handleNavLinkClick}
                  >
                    Branding Solutions
                  </Link>
                  <Link
                    href="/custom-development"
                    className="text-white px-6 py-3 whitespace-nowrap no-underline hover:bg-[#FFC700] hover:text-black transition-all duration-200 text-base font-light rounded-lg mx-2 text-center flex items-center justify-center"
                    onClick={handleNavLinkClick}
                  >
                    Custom Development
                  </Link>
                  <Link
                    href="/digital-marketing"
                    className="text-white px-6 py-3 whitespace-nowrap no-underline hover:bg-[#FFC700] hover:text-black transition-all duration-200 text-base font-light rounded-lg mx-2 text-center flex items-center justify-center"
                    onClick={handleNavLinkClick}
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    href="/customer-retention"
                    className="text-white px-6 py-3 whitespace-nowrap no-underline hover:bg-[#FFC700] hover:text-black transition-all duration-200 text-base font-light rounded-lg mx-2 text-center flex items-center justify-center"
                    onClick={handleNavLinkClick}
                  >
                    Customer Retention
                  </Link>
                </div>
            </div>
          </li>

          <li className="relative group">
            <Link
              href="/blog"
              className={`text-xl font-light no-underline inline-block pb-2 ${
                pathname === '/blog' ? 'text-[#FFC700]' : 'text-white hover:text-[#FFC700]'
              }`}
              onClick={handleNavLinkClick}
            >
              Blog
            </Link>
            <span className="absolute -bottom-3 left-0 h-[3px] w-0 bg-[#FFC700] transition-all duration-700 ease-in-out group-hover:w-full"></span>
          </li>
        </ul>

        {/* Contact Button - Right Side */}
        <Link
          href="/contact-us"
          className="hidden lg:flex bg-black border border-white text-white w-[120px] xl:w-[140px] h-[32px] xl:h-[36px] rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm xl:text-base font-medium no-underline shadow-[0_0_10px_rgba(255,255,255,0.3)] items-center justify-center"

          onClick={handleNavLinkClick}
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={handleClick}
          className="lg:hidden text-white hover:text-[#FFC700] transition-colors text-3xl"
        >
          {click ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`absolute top-full left-0 w-full bg-black/80 backdrop-blur-2xl lg:hidden transition-all duration-300 ease-in-out transform origin-top shadow-[0_10px_30px_rgba(0,0,0,0.8)] ${
        click ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'
      }`}>
          <div className="px-4 py-6 flex flex-col gap-6 text-center items-center">
            <div className={`transition-all duration-300 ease-in-out ${
              mobileExpertiseOpen ? 'opacity-30' : 'opacity-100'
            }`}>
              <Link
                href="/"
                className={`text-lg no-underline ${pathname === '/' ? 'text-[#FFC700]' : 'text-white'} hover:text-[#FFC700] transition-colors`}
                onClick={handleNavLinkClick}
              >
                Home
              </Link>
            </div>

            <div className={`transition-all duration-300 ease-in-out ${
              mobileExpertiseOpen ? 'opacity-30' : 'opacity-100'
            }`}>
              <Link
                href="/about-us"
                className={`text-lg no-underline ${pathname === '/about-us' ? 'text-[#FFC700]' : 'text-white'} hover:text-[#FFC700] transition-colors`}
                onClick={handleNavLinkClick}
              >
                About Us
              </Link>
            </div>

            <div className="space-y-4">
              <button
                onClick={toggleMobileExpertise}
                className={`text-lg ${isExpertiseActive ? 'text-[#FFC700]' : 'text-white'} hover:text-[#FFC700] transition-colors cursor-pointer`}
              >
                Expertise <span className="text-sm">{mobileExpertiseOpen ? '▲' : '▼'}</span>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                mobileExpertiseOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="space-y-4 pt-2">
                  <Link
                    href="/branding-solutions"
                    className="block text-gray-300 hover:text-[#FFC700] transition-colors no-underline py-2"
                    onClick={handleNavLinkClick}
                  >
                    Branding Solutions
                  </Link>
                  <Link
                    href="/custom-development"
                    className="block text-gray-300 hover:text-[#FFC700] transition-colors no-underline py-2"
                    onClick={handleNavLinkClick}
                  >
                    Custom Development
                  </Link>
                  <Link
                    href="/digital-marketing"
                    className="block text-gray-300 hover:text-[#FFC700] transition-colors no-underline py-2"
                    onClick={handleNavLinkClick}
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    href="/customer-retention"
                    className="block text-gray-300 hover:text-[#FFC700] transition-colors no-underline py-2"
                    onClick={handleNavLinkClick}
                  >
                    Customer Retention
                  </Link>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-300 ease-in-out ${
              mobileExpertiseOpen ? 'opacity-30' : 'opacity-100'
            }`}>
              <Link
                href="/blog"
                className={`text-lg no-underline ${pathname === '/blog' ? 'text-[#FFC700]' : 'text-white'} hover:text-[#FFC700] transition-colors`}
                onClick={handleNavLinkClick}
              >
                Blog
              </Link>
            </div>


            <div className={`transition-all duration-300 ease-in-out ${
              mobileExpertiseOpen ? 'opacity-30' : 'opacity-100'
            }`}>
              <Link
                href="/contact-us"
                className="text-white px-6 py-2 rounded-full hover:bg-[#FFC700] hover:text-black transition-all duration-300 text-center mt-4 no-underline inline-block mx-auto"
                onClick={handleNavLinkClick}
              >
                Contact Us
              </Link>
            </div>
          </div>
      </div>
    </nav>
  );
}
