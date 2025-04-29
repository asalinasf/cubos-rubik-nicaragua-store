"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";

 const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled (window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
           
            <header
            className={`bg-white ${
              isScrolled ? "shadow-md" : ""
            } sticky top-0 z-50 transition-shadow duration-300`}
          >
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Link href='/'>
                
                                  <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-12 h-12 sm:w-16 sm:h-16"
                  priority
                />
                </Link>

                <h1 className="text-xl sm:text-2xl font-extrabold text-[#0066b3] uppercase tracking-wide">
                  Cubos Rubik{" "}
                  <span className="block text-xs sm:text-sm tracking-widest">
                    Nicaragua
                  </span>
                </h1>
              </div>
  
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-4 lg:space-x-6 text-sm font-semibold text-gray-700 uppercase">
                <Link
                  href="/catalogo"
                  className="hover:text-[#0066b3] transition px-2 py-1"
                >
                  Catálogo
                </Link>

                <Link
                  href="/contacto"
                  className="hover:text-[#0066b3] transition px-2 py-1"
                >
                  Contacto
                </Link>
              </nav>
  
              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-700 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
  
            {/* Mobile Menu */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden bg-white py-2 px-4 shadow-lg"
              >
                <nav className="flex flex-col space-y-3 text-sm font-semibold text-gray-700 uppercase">
                  <Link
                    href="/catalogo"
                    className="hover:text-[#0066b3] transition py-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Catálogo
                  </Link>

                  <Link
                    href="/contacto"
                    className="hover:text-[#0066b3] transition py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contacto
                  </Link>
                </nav>
              </motion.div>
            )}
          </header>
  )
}

export default Header