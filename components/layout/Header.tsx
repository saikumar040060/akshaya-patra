"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiPhone, FiShoppingCart, FiTruck } from "react-icons/fi";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const isHomeOrAbout = pathname === '/' || pathname === '/about';

  // Check if mobile on mount and on resize
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Menu", href: "/menu" },
  ];

  const deliveryServices = [
    { name: "DoorDash", href: "https://www.doordash.com/store/akshaya-patra-indian-cuisine-farmington-hills-24906900/56934546/" },
    { name: "Uber Eats", href: "https://www.ubereats.com/store/akshaya-patra-indian-cuisine/84kNAyC-VTOAnzfH8ncymg" },
    { name: "Grubhub", href: "https://www.grubhub.com/restaurant/akshaya-patra-indian-cuisine-30701-w-12-mile-rd-farmington-hills/6065032" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled || !isHomeOrAbout 
        ? "bg-white shadow-md py-3" 
        : "bg-transparent py-5"
    }`} aria-label="Main navigation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Adjusted for better mobile visibility */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group" aria-label="Home">
            <Image
              src="/images/logo.webp"
              alt="Akshaya Patra Logo"
              width={isMobile ? 40 : 50}
              height={isMobile ? 40 : 50}
              priority
              className="transition-transform duration-200 group-hover:scale-105"
            />
            <h1 className={`text-xl sm:text-2xl font-bold transition-colors duration-200 ${
              isScrolled || !isHomeOrAbout 
                ? "text-orange-500" 
                : "text-orange-400"
            } group-hover:text-orange-600`}>
              Akshaya Patra
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4" aria-label="Desktop navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 sm:px-4 py-2 rounded-lg text-base sm:text-lg font-medium transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                  isScrolled || !isHomeOrAbout
                    ? "text-gray-700 hover:text-orange-500"
                    : "text-white hover:text-orange-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Delivery Services */}
            <div className="flex items-center gap-3 ml-2 border-l border-gray-200 pl-4">
              {deliveryServices.map((service) => (
                <a
                  key={service.href}
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs sm:text-sm font-medium hover:text-orange-500 transition-colors ${
                    !isScrolled && isHomeOrAbout ? "text-white" : "text-gray-700"
                  }`}
                >
                  {service.name}
                </a>
              ))}
            </div>
            
            {/* Order Online Button */}
            <a
              href="https://order.toasttab.com/online/akshayapatra-30701-west-12-mile-road"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2 flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                isScrolled || !isHomeOrAbout
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <FiShoppingCart className="text-lg sm:text-xl" />
              <span className="hidden sm:inline">Order Online</span>
              <span className="sm:hidden">Order</span>
            </a>

            {/* Phone Number */}
            <a
              href="tel:2489876382"
              className={`ml-2 flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                isScrolled || !isHomeOrAbout
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <FiPhone className="text-lg sm:text-xl" />
              <span className="sr-only md:not-sr-only">248-987-6382</span>
            </a>
          </nav>

          {/* Mobile Navigation Toggle - Enhanced touch targets */}
          <div className="flex md:hidden items-center gap-3 sm:gap-4">
            <a
              href="tel:2489876382"
              className={`p-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                isScrolled || !isHomeOrAbout 
                  ? "text-orange-500" 
                  : "text-white"
              } hover:text-orange-300`}
              aria-label="Call us"
            >
              <FiPhone size={20} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <FiX size={24} className={isScrolled || !isHomeOrAbout ? "text-orange-500" : "text-white"} />
              ) : (
                <FiMenu size={24} className={isScrolled || !isHomeOrAbout ? "text-orange-500" : "text-white"} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Improved animation and spacing */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-40 mt-16 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
        
        <div className={`md:hidden transition-all duration-300 ease-in-out fixed top-16 left-0 right-0 bg-white shadow-lg z-50 max-h-[calc(100vh-4rem)] overflow-y-auto ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}>
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-4 text-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition-colors border-b border-gray-100 active:bg-orange-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Order Online Button (Mobile) */}
            <div className="p-4 border-b border-gray-100">
              <a
                href="https://order.toasttab.com/online/akshayapatra-30701-west-12-mile-road"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 active:bg-orange-700 transition-colors"
              >
                <FiShoppingCart size={20} />
                Order Online
              </a>
            </div>

            {/* Delivery Services (Mobile) */}
            <div className="p-4 border-b border-gray-100">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-500 mb-3">
                <FiTruck className="text-orange-500" />
                DELIVERY SERVICES
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {deliveryServices.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 hover:bg-orange-50 active:bg-orange-100 text-gray-700 font-medium transition-colors"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Phone Button (Mobile) */}
            <a
              href="tel:2489876382"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-orange-500 text-white font-semibold hover:bg-orange-600 active:bg-orange-700 transition-colors"
            >
              <FiPhone size={20} />
              Call Us: 248-987-6382
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}