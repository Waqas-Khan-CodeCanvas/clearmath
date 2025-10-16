import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[#0b0c10] min-h-screen text-white flex flex-col justify-center items-center text-center px-5 relative overflow-hidden">
      {/* Soft gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet <span className="text-blue-500">ClearMath</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-gray-400 max-w-md sm:max-w-lg md:max-w-xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        The future of calculation is here — sleek, powerful, and intuitive.
        Designed for professionals and students alike.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10 w-full sm:w-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="https://github.com/Waqas-Khan-CodeCanvas/clearmath/releases/download/v1.0/ClearMath.exe"
          download
          className="w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-8 py-4 sm:px-6 sm:py-3 rounded-lg flex items-center justify-center gap-2 font-semibold text-lg sm:text-base shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98]">
            Download Now <Download className="w-5 h-5 sm:w-4 sm:h-4" />
          </button>
        </a>

        <a href="#demo" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto border border-gray-700 px-8 py-4 sm:px-6 sm:py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white text-lg sm:text-base transition-all duration-300 hover:scale-[1.05] active:scale-[0.98]">
            Learn More →
          </button>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
