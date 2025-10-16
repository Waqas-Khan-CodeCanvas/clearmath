import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[#0b0c10] min-h-screen text-white pt-30 md:pt-52 pb-45 text-center relative overflow-hidden flex flex-col justify-center">
      {/* Soft gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight relative z-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet <span className="text-blue-500">ClearMath</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base md:text-lg relative z-10 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        The future of calculation is here — sleek, powerful, and intuitive.
        Designed for professionals and students alike.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a href="https://github.com/Waqas-Khan-CodeCanvas/clearmath/releases/download/v1.0/ClearMath.exe" download>
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 md:px-6 py-3 rounded-md flex items-center justify-center gap-2 font-medium shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.05]">
            Download Now <Download className="w-4 h-4" />
          </button>
        </a>
        <a href="#demo"
              >
        <button
          className="w-full sm:w-auto border border-gray-700 px-6 py-3 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-[1.05]"
        >
          Learn More →
        </button></a>
      </motion.div>
    </section>
  );
};

export default Hero;
