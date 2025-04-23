'use client'
import Image from "next/image";
import Head from 'next/head';
import Link from "next/link";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import CatalogoContent from "@/components/Catalogo";

export default function Catalogo() {

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Head>
        <title>Catálogo | Cubos Rubik Nicaragua</title>
        <meta name="description" content="Explora nuestro catálogo de cubos Rubik profesionales y accesorios" />
      </Head>
      <Header/> 

      {/* Contenido principal del catálogo */}
      <CatalogoContent />

      <Footer />
    </div>
  );
}