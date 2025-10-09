'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [click, setClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
    window.scrollTo(0, 0);
  };

  const isExpertiseActive = pathname.startsWith('/branding-solutions') || 
                           pathname.startsWith('/digital-marketing') || 
                           pathname.startsWith('/custom-development') || 
                           pathname.startsWith('/customer-retention');

  return (
    <nav className="bg-transparent h-[90px] flex justify-center items-center sticky top-0 z-20 backdrop-blur-[10px]">
      <div className="flex justify-between items-center w-full">
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
        <ul className="hidden md:flex items-center gap-32 list-none">
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
            {dropdownOpen && (
              <div className="absolute top-full left-[-28px] mt-0 bg-[#040509] min-w-[220px]">
                <Link
                  href="/branding-solutions"
                  className="block text-white px-5 py-3 no-underline hover:text-[#FFC700] transition-colors text-base font-light"
                  onClick={handleNavLinkClick}
                >
                  Branding Solutions
                </Link>
                <Link
                  href="/custom-development"
                  className="block text-white px-5 py-3 no-underline hover:text-[#FFC700] transition-colors text-base font-light"
                  onClick={handleNavLinkClick}
                >
                  Custom Development
                </Link>
                <Link
                  href="/digital-marketing"
                  className="block text-white px-5 py-3 no-underline hover:text-[#FFC700] transition-colors text-base font-light"
                  onClick={handleNavLinkClick}
                >
                  Digital Marketing
                </Link>
                <Link
                  href="/customer-retention"
                  className="block text-white px-5 py-3 no-underline hover:text-[#FFC700] transition-colors text-base font-light"
                  onClick={handleNavLinkClick}
                >
                  Customer Retention
                </Link>
              </div>
            )}
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
          className="hidden md:inline-block border border-white text-white px-6 py-2 rounded-[43px] -mt-[5px] hover:bg-[#FFC700] hover:border-[#FFC700] hover:text-black transition-all duration-300 text-[20px] leading-[28.8px] font-[350] no-underline"
          onClick={handleNavLinkClick}
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={handleClick}
          className="md:hidden text-white hover:text-[#FFC700] transition-colors text-3xl"
        >
          {click ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {click && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 md:hidden">
          <div className="px-4 py-6 flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-lg no-underline ${pathname === '/' ? 'text-[#FFC700]' : 'text-white'} hover:text-[#FFC700] transition-colors`}
              onClick={handleNavLinkClick}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={`text-lg no-underline ${pathname === '/about-us' ? 'text-[#FFC700]' : 'text-white'} hover:text-[#FFC700] transition-colors`}
              onClick={handleNavLinkClick}
            >
              About Us
            </Link>

            <div className="space-y-2">
              <span className={`block text-lg ${isExpertiseActive ? 'text-[#FFC700]' : 'text-white'}`}>
                Expertise
              </span>
              <div className="ml-4 space-y-2">
                <Link
                  href="/branding-solutions"
                  className="block text-gray-300 hover:text-[#FFC700] transition-colors no-underline"
                  onClick={handleNavLinkClick}
                >
                  Branding Solutions
                </Link>
                <Link
                  href="/custom-development"
                  className="block text-gray-300 hover:text-[#FFC700] transition-colors no-underline"
                  onClick={handleNavLinkClick}
                >
                  Custom Development
                </Link>
                <Link
                  href="/digital-marketing"
                  className="block text-gray-300 hover:text-[#FFC700] transition-colors no-underline"
                  onClick={handleNavLinkClick}
                >
                  Digital Marketing
                </Link>
                <Link
                  href="/customer-retention"
                  className="block text-gray-300 hover:text-[#FFC700] transition-colors no-underline"
                  onClick={handleNavLinkClick}
                >
                  Customer Retention
                </Link>
              </div>
            </div>

            <Link
              href="/blog"
              className={`text-lg no-underline ${pathname === '/blog' ? 'text-[#FFC700]' : 'text-white'} hover:text-[#FFC700] transition-colors`}
              onClick={handleNavLinkClick}
            >
              Blog
            </Link>

            <Link
              href="/contact-us"
              className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-[#FFC700] hover:border-[#FFC700] hover:text-black transition-all duration-300 text-center mt-4 no-underline inline-block"
              onClick={handleNavLinkClick}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
