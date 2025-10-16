import React from "react";
import { motion } from "framer-motion";
import { Brain, FunctionSquare, Zap } from "lucide-react";

const features = [
  {
    icon: <Brain className="text-blue-500 w-8 h-8" />,
    title: "AI-Powered Suggestions",
    text: "ClearMath anticipates your next move, offering intelligent function suggestions and formula corrections."
  },
  {
    icon: <FunctionSquare className="text-blue-500 w-8 h-8" />,
    title: "Advanced Functionality",
    text: "From basic arithmetic to complex scientific equations and graphing, ClearMath has you covered."
  },
  {
    icon: <Zap className="text-blue-500 w-8 h-8" />,
    title: "Lightning Fast",
    text: "Built for performance, our calculator delivers instant results with a seamless, lag-free experience."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};

const Features = () => {
  return (
    <section id="features" className="bg-[#121317] text-white py-24">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Everything You Need, and More
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-12 max-w-2xl mx-auto text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Discover a new era of calculation with features designed for
          efficiency, intelligence, and power.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#1a1b20] p-8 rounded-xl border border-gray-800 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-[1.03]"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
