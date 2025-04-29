'use client'

import CatalogoContent from "@/components/Catalogo";

export default function Catalogo() {

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">


      {/* Contenido principal del catálogo */}
      <CatalogoContent />

    </div>
  );
}