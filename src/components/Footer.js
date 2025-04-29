import React from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#f0f4ff] border-t border-gray-200 text-gray-600 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        
        {/* Información */}
        <div>
          <h4 className="font-semibold text-[#0066b3] mb-2">Cubos Rubik Nicaragua</h4>
          <p>Tu tienda de confianza para cubos, tutoriales y asesoría personalizada.</p>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h4 className="font-semibold text-[#0066b3] mb-2">Enlaces</h4>
          <ul className="space-y-1">
            <li><Link href="/catalogo" className="hover:text-[#0066b3] transition">Catálogo</Link></li>
            <li><Link href="/contacto" className="hover:text-[#0066b3] transition">Contacto</Link></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="font-semibold text-[#0066b3] mb-2">Síguenos</h4>
          <div className="flex justify-center sm:justify-start gap-4 mt-2 text-2xl">
            <Link href="https://wa.link/30ga1t" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366]"><FaWhatsapp /></Link>
            <Link href="https://www.instagram.com/cubos_rubik_nicaragua/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1306C]"><FaInstagram /></Link>
            <Link href="https://www.tiktok.com/@cubosrubiknicaragua?lang=es-419" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaTiktok /></Link>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-200 text-xs text-gray-500">
        © {new Date().getFullYear()} Cubos Rubik Nicaragua. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
