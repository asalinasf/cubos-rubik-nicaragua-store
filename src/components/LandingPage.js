"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaTruck,
  FaChalkboardTeacher,
  FaVideo,
  FaUsers,
} from "react-icons/fa";

const FeatureItem = ({ icon: Icon, text, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay }}
    className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 mb-8 sm:mb-10 max-w-3xl mx-auto px-4"
  >
    <div className="bg-[#0066b3] text-white rounded-full p-4 shadow-md flex items-center justify-center text-3xl sm:text-4xl">
      <Icon />
    </div>
    <p className="text-gray-700 text-base sm:text-lg md:text-xl">{text}</p>
  </motion.div>
);

const LandingPage = () => {
  return (
    <main className="relative flex-grow bg-[#f7f9fc] overflow-hidden">
      {/* Fondo decorativo */}
      <motion.img
        src="/images/cube-bg1.jpg"
        alt="Decoración Cubo"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.08, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute top-0 left-0 w-40 sm:w-64 opacity-10 pointer-events-none"
      />
      <motion.img
        src="/images/cube-bg1.jpg"
        alt="Decoración Cubo"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.08, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-32 sm:w-52 opacity-10 pointer-events-none"
      />

      {/* Contenido principal */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center justify-center items-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0066b3] mb-4 sm:mb-6 leading-tight"
        >
          ¡Los mejores cubos Rubik en Nicaragua!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto px-2"
        >
          Bienvenido a Cubos Rubik Nicaragua, tu tienda especializada en cubos de Rubik y rompecabezas de velocidad. Ofrecemos una amplia selección de cubos para todos los niveles, desde principiantes hasta speedcubers avanzados.
        </motion.p>

        {/* Sección de beneficios */}
        <FeatureItem
          icon={FaTruck}
          delay={0.2}
          text="Envíos rápidos a todo el país – Recibe tus pedidos de forma segura y en tiempo récord."
        />
        <FeatureItem
          icon={FaChalkboardTeacher}
          delay={0.3}
          text="Asesoría personalizada – ¿No sabes por dónde empezar o qué cubo elegir? Nuestro equipo te guía paso a paso."
        />
        <FeatureItem
          icon={FaVideo}
          delay={0.4}
          text="Tutoriales en español – Aprende desde cero o mejora tus tiempos con nuestros videos y recursos exclusivos."
        />
        <FeatureItem
          icon={FaUsers}
          delay={0.5}
          text="Únete a nuestra comunidad de cuberos, participa en retos, descubre nuevos productos y conviértete en un verdadero pro."
        />

        {/* Botón de llamada a la acción */}
        <motion.a
          href="/catalogo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#0066b3] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold tracking-wide shadow-lg hover:bg-blue-800 transition"
        >
          Ver Catálogo
        </motion.a>
      </section>
    </main>
  );
};

export default LandingPage;
