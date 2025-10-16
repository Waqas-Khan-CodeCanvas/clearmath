import React from "react";
import { Github, Instagram, Linkedin, Twitter,Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0c10] text-gray-400 text-sm py-8 border-t border-gray-800 relative overflow-hidden">
      {/* Soft blue gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-transparent pointer-events-none"></div>

      {/* Top Section */}
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-gray-400 text-center md:text-left">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <span className="text-white font-medium">Waqas Khan</span>
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Waqas-Khan-CodeCanvas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all duration-300 hover:scale-110"
          >
            <abbr title="my GitHub">
            <Github className="w-5 h-5" />
            </abbr>
          </a>
          <a
            href="https://www.linkedin.com/in/waqas-khan-a68602343/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all duration-300 hover:scale-110"
          > <abbr title="my Linkedin">
            <Linkedin className="w-5 h-5" />
          </abbr>
          </a>
          <a
            href="https://www.instagram.com/waqas.khan623/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all duration-300 hover:scale-110"
          > <abbr title="my Instagram">
            <Instagram className="w-5 h-5" />
          </abbr>
          </a>
          <a
            href="https://twitter.com/waqaskhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all duration-300 hover:scale-110"
          > <abbr title="my Twitter">
            <Twitter className="w-5 h-5" />
          </abbr>
          </a>
          <a
            href="https://waqaskhan.netlify.app/" // ← your website URL here
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all duration-300 hover:scale-110"
          > <abbr title="visit my Website">
            <Globe className="w-5 h-5" />
          </abbr>
          </a>
        </div>
      </div>

      {/* Gradient Divider */}
      <hr className="w-1/2 mx-auto my-5 border-0 h-[2px] bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 opacity-80 rounded-full" />

      {/* Bottom Section */}
      <div className="text-center text-gray-500 relative z-10">
        <p>© {new Date().getFullYear()} ClearMath. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
