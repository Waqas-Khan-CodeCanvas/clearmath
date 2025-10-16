import React from "react";
import { motion } from "framer-motion";

const DemoSection = () => {
  return (
    <section id="demo" className="bg-[#1a1b20] text-white py-24 relative overflow-hidden">
      {/* Glow background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          See it in Action
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Experience the fluid interface and powerful features of ClearMath in this
          interactive demo preview.
        </motion.p>

        {/* Demo Image with Glow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8 }}
          className="inline-block relative rounded-2xl overflow-hidden group"
        >
          {/* Glow Border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-xl group-hover:opacity-100 transition duration-700"></div>

          {/* Image */}
          <img
            // src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            src="/demo.png"
            alt="ClearMath Demo"
            className="relative z-10 rounded-2xl shadow-2xl border border-gray-700 mx-auto"
          />
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium text-white transition duration-300 shadow-md hover:shadow-blue-600/30">
            Watch Full Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
