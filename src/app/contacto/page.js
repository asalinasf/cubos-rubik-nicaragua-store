"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ContactLandingPage = () => {
  return (
    <>
        <main className="relative flex-grow bg-gradient-to-br from-[#f0f4ff] to-[#eaf3ff] overflow-hidden px-4 sm:px-6 py-24 sm:py-32">
      {/* Fondos decorativos */}



      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#0066b3] mb-6"
        >
          ¡Conectá con nosotros!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 mb-12 text-lg sm:text-xl max-w-2xl mx-auto"
        >
          Escribinos por cualquiera de nuestras redes o dale un vistazo a nuestros contenidos y catálogo. ¡Te respondemos al instante!
        </motion.p>

        {/* Redes */}

        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-20">
          <motion.a
            href="https://wa.link/30ga1t"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            className="flex flex-col items-center text-[#25D366] hover:drop-shadow-lg"
          >
            <FaWhatsapp size={40} />
            <span className="mt-1 text-sm font-medium">WhatsApp</span>
          </motion.a>
          <motion.a
            href="https://instagram.com/cubos_rubik_nicaragua"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            className="flex flex-col items-center text-[#E1306C] hover:drop-shadow-lg"
          >
            <FaInstagram size={40} />
            <span className="mt-1 text-sm font-medium">Instagram</span>
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/@cubosrubiknicaragua?lang=es-419"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            className="flex flex-col items-center text-black hover:drop-shadow-lg"
          >
            <FaTiktok size={40} />
            <span className="mt-1 text-sm font-medium">TikTok</span>
          </motion.a>
        </div>

        <div className="text-left sm:text-center text-gray-700 space-y-8 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-[#0066b3] mb-2">¿Quiénes somos?</h2>
            <p>
              Somos <strong>Cubos Rubik Nicaragua</strong>, apasionados por los rompecabezas. Ofrecemos cubos de calidad, asesoría personalizada y tutoriales para cada nivel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#0066b3] mb-2">Horarios de atención</h2>
            <p>
              Atendemos de <strong>Lunes a Sábado</strong> de 9:00am a 6:00pm. ¡Tus mensajes no se quedan sin respuesta!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-[#0066b3] mb-2">¿Dónde estamos?</h2>
            <p>
              Realizamos entregas en <strong>todo Nicaragua</strong> y envíos express en <strong>Managua</strong>. ¡Consultá disponibilidad al instante!
            </p>
          </motion.div>
        </div>

        
      </div>
    </main>
    </>

  );
};

export default ContactLandingPage;