import React, { useState } from "react";
import { Calculator, Download, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#0e0f13]/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-screen-2xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-[#0e0f13]/80 rounded p-1">
            <Calculator className="w-5 h-5 text-blue-600" />
          </div>
          <a href="/">
          <span className="text-white font-bold text-lg cursor-pointer tracking-wide">
            ClearMath
          </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
          <a
            href="#features"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#demo"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Demo
          </a>
          <a
            href="#download"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Download
          </a>
        </div>

        {/* Download Button */}
       <a href="https://github.com/Waqas-Khan-CodeCanvas/clearmath/releases/download/v1.0/ClearMath.exe"
              download>
        <button className="hidden md:flex bg-blue-600 text-white px-4 py-2 rounded-md items-center gap-1 hover:bg-blue-700 transition-all duration-300 cursor-pointer shadow-md hover:shadow-blue-500/20">
          Download <Download className="w-4 h-4" />
        </button>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-[#0e0f13]/95 border-t border-gray-800">
          <div className="flex flex-col items-center gap-4 py-4 text-gray-300 text-sm">
            <a
              href="#features"
              className="hover:text-blue-400 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#demo"
              className="hover:text-blue-400 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Demo
            </a>
            <a
              href="#download"
              className="hover:text-blue-400 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Download
            </a>
            <a
              href="https://github.com/Waqas-Khan-CodeCanvas/clearmath/releases/download/v1.0/ClearMath.exe"
              download
              className="bg-blue-600 text-white px-4 py-2 rounded-md items-center gap-1 hover:bg-blue-700 transition-all duration-300 cursor-pointer inline-flex"
            >
              Download <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
