import React from "react";
import { Download } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="download"
      className="bg-[#121317] text-center text-white py-20 relative overflow-hidden"
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Download <span className="text-blue-400 font-medium">ClearMath</span>{" "}
          today and experience a powerful, modern, and intelligent calculator —
          free forever.
        </p>
        <a href="/ClearMath.exe" download>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md flex items-center justify-center gap-2 mx-auto font-medium transition-all duration-300 shadow-md shadow-blue-600/30 hover:scale-[1.05] cursor-pointer">
            Download for Free <Download className="w-4 h-4" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default CTA;
