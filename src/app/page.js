'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

        <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Header */}
      <header className={`bg-white ${isScrolled ? 'shadow-md' : ''} sticky top-0 z-50 transition-shadow duration-300`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-12 h-12 sm:w-16 sm:h-16"
              priority
            />
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#0066b3] uppercase tracking-wide">
              Cubos Rubik{" "}
              <span className="block text-xs sm:text-sm tracking-widest">Nicaragua</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6 text-sm font-semibold text-gray-700 uppercase">
            <Link href="/catalogo" className="hover:text-[#0066b3] transition px-2 py-1">
              Catálogo
            </Link>
            <Link href="#envios" className="hover:text-[#0066b3] transition px-2 py-1">
              Envíos
            </Link>
            <Link href="#tutoriales" className="hover:text-[#0066b3] transition px-2 py-1">
              Tutoriales
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
              <a 
                href="#catalogo" 
                className="hover:text-[#0066b3] transition py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Catálogo
              </a>
              <a 
                href="#envios" 
                className="hover:text-[#0066b3] transition py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Envíos
              </a>
              <a 
                href="#tutoriales" 
                className="hover:text-[#0066b3] transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tutoriales
              </a>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero */}
      <main className="flex-grow bg-[#f7f9fc]">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0066b3] mb-4 sm:mb-6 leading-tight">
            ¡Los mejores cubos Rubik en Nicaragua!
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            Tienda especializada en cubos, con envíos rápidos, asesoría y
            tutoriales para que te conviertas en un pro.
          </p>
          <motion.a
            href="#catalogo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#0066b3] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold tracking-wide shadow-md hover:bg-blue-800 transition"
          >
            Ver Catálogo
          </motion.a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 text-center py-4 text-xs sm:text-sm text-gray-500">
        © {new Date().getFullYear()} Cubos Rubik Nicaragua
      </footer>
    </div>
    

  );
}