'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Head from 'next/head';
import Link from "next/link";

import { useState, useEffect } from "react";

export default function Catalogo() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  // Datos de los productos (puedes reemplazar esto con una API o CMS)
  const productos = [
    {
      id: 1,
      nombre: "Cubo Rubik 3x3 Profesional",
      precio: "C$ 450",
      imagen: "/images/cubo-3x3.jpg",
      descripcion: "Cubo de alta velocidad para competición, con mecanismo magnético"
    },
    {
      id: 2,
      nombre: "Cubo Rubik 2x2",
      precio: "C$ 300",
      imagen: "/images/cubo-2x2.jpg",
      descripcion: "Versión clásica 2x2, perfecta para principiantes"
    },
    {
      id: 3,
      nombre: "Cubo Rubik 4x4",
      precio: "C$ 600",
      imagen: "/images/cubo-4x4.jpg",
      descripcion: "Desafío intermedio para quienes dominan el 3x3"
    },
    {
      id: 4,
      nombre: "Cubo Rubik Megaminx",
      precio: "C$ 700",
      imagen: "/images/megaminx.jpg",
      descripcion: "Variante dodecaédrica del cubo clásico"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Head>
        <title>Catálogo | Cubos Rubik Nicaragua</title>
        <meta name="description" content="Explora nuestro catálogo de cubos Rubik profesionales y accesorios" />
      </Head>

      {/* Header (puedes reutilizar el mismo que en tu página principal) */}
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

      {/* Contenido principal del catálogo */}
      <main className="flex-grow bg-[#f7f9fc] py-8">
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0066b3] mb-8 text-center">
            Nuestro Catálogo
          </h1>
          
          {/* Filtros (opcional) */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-4 py-2 bg-[#0066b3] text-white rounded-full text-sm font-semibold">
              Todos
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold">
              2x2
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold">
              3x3
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold">
              4x4+
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold">
              Especiales
            </button>
          </div>
          
          {/* Grid de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productos.map((producto) => (
              <motion.div 
                key={producto.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{producto.nombre}</h3>
                  <p className="text-gray-600 text-sm mb-3">{producto.descripcion}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#0066b3]">{producto.precio}</span>
                    <button className="bg-[#0066b3] hover:bg-blue-800 text-white px-3 py-1 rounded text-sm font-semibold transition">
                      Comprar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer (puedes reutilizar el mismo que en tu página principal) */}
      <footer className="bg-white border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Cubos Rubik Nicaragua
      </footer>
    </div>
  );
}