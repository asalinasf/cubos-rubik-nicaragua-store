

import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";


export default function Home() {



  return (
    

      <div className="min-h-screen bg-white flex flex-col font-sans">
        <Header />

        {/* Hero */}
        <LandingPage />
        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 text-center py-4 text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Cubos Rubik Nicaragua
        </footer>
      </div>
    
  );
}
