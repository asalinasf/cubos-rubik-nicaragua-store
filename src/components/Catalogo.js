import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import productos from "@/db/productos";
const CatalogoContent = () => {
  const [activeType, setActiveType] = useState("todos");

  const [cubos, setCubos] = useState(productos);
  function findCubos() {
    setCubos(productos);
    setActiveType("todos");
  }
  function find2x2(e) {
    const newCubes = [...productos];
    const resultcubes = newCubes.filter((cubo) => "2x2" === cubo.tipo);
    setCubos(resultcubes);
    setActiveType("2x2");
    console.log(cubos);
  }
  function find3x3() {
    const newCubes = [...productos];
    const resultcubes = newCubes.filter((cubo) => "3x3" === cubo.tipo);
    setCubos(resultcubes);
    setActiveType("3x3");
    console.log(cubos);
  }
  function find4x4() {
    const newCubes = [...productos];
    const resultcubes = newCubes.filter((cubo) => "4x4" === cubo.tipo);
    setCubos(resultcubes);
    setActiveType("4x4");
    console.log(cubos);
  }
  function findMegaminx() {
    const newCubes = [...productos];
    const resultcubes = newCubes.filter((cubo) => "megaminx" === cubo.tipo);
    setActiveType("megaminx");
    setCubos(resultcubes);
    console.log(cubos);
  }

  return (
    <main className="flex-grow bg-[#f7f9fc] py-8">
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0066b3] mb-8 text-center">
          Nuestro Catálogo
        </h1>

        {/* Filtros (opcional) */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-3 mb-8">
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold transition text-[#0066b3] ${
              activeType === "todos"
                ? "bg-[#0066b3] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={findCubos}
          >
            Todos
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold transition text-[#0066b3] ${
              activeType === "2x2"
                ? "bg-[#0066b3] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={find2x2}
          >
            2x2
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold transition text-[#0066b3] ${
              activeType === "3x3"
                ? "bg-[#0066b3] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={find3x3}
          >
            3x3
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold transition text-[#0066b3] ${
              activeType === "4x4"
                ? "bg-[#0066b3] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={find4x4}
          >
            4x4
          </button>
          <button
            onClick={findMegaminx}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition text-[#0066b3] ${
              activeType === "megaminx"
                ? "bg-[#0066b3] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Especiales
          </button>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cubos.map((producto) => (
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
                <h3 className="font-bold text-lg mb-1 text-gray-800">
                  {producto.nombre}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {producto.descripcion}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#0066b3]">
                    {producto.precio}
                  </span>
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
  );
};

export default CatalogoContent;
