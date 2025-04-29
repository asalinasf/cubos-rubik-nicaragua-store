import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Cubos Rubik Nicaragua',
  description: 'Tienda de cubos Rubik en Nicaragua: variedad, envíos y tutoriales.',
  keywords: ['cubos rubik', 'nicaragua', 'tienda', 'tutoriales'],
  icons:{
    icon:"/favicon.png"
  },
  openGraph: {
    title: 'Cubos Rubik Nicaragua',
    description: 'Explora los mejores cubos Rubik del país.',
    type: 'website',
    locale: 'es_NI',
    url: 'https://tusitio.com',
    siteName: 'Cubos Rubik Nicaragua',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="es">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>

        {children}
        <Footer />
      </body>
    </html>
  );
}
