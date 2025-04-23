import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Head from "next/head";

export const metadata = {
  title: "Cubos Rubik Nicaragua",
  description: "Tienda oficial de Cubos Rubik en Nicaragua. Envíos a todo el país. Cubos 3x3, 2x2, 4x4 y accesorios profesionales.",
  keywords:"cubos rubik, nicaragua, comprar cubo rubik, speedcubing, managua",
  icons:{
    icon:"/favicon.png"
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="es">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
