"use client";
import productos from "../../../../db/productos";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductoPage({ params }) {
  const producto = productos.find((p) => p.id.toString() === params.id);

  if (!producto) {
    return (
      <div className="text-center text-red-600 mt-20 text-xl font-semibold">
        Producto no encontrado
      </div>
    );
  }

  return (
    <motion.div
      className="relative flex-grow bg-gradient-to-br from-[#f0f4ff] to-[#eaf3ff] overflow-hidden px-4 sm:px-6 py-24 sm:py-32"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-6">
        <Link
          href="/catalogo"
          className="inline-block bg-[#0066b3] text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-8  00 transition"
        >
          ← Volver al catálogo
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            width={500}
            height={500}
            className="rounded-xl shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {producto.nombre}
          </h1>
          <p className="text-gray-600">{producto.descripcion}</p>
          <p className="text-xl font-semibold text-[#0066b3]">
            Precio: {producto.precio}
          </p>
          <p className="text-gray-500">
            <span className="font-semibold">Tipo:</span> {producto.tipo}
          </p>
          <Link
            href={`https://wa.me/50558739352?text=${encodeURIComponent(
              `Hola, estoy interesado en el producto: ${producto.nombre} (${producto.tipo}) por C$${producto.precio}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0066b3] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-800 transition"
          >
            Comprar por WhatsApp
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
