import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="py-12 bg-gradient-to-tr from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a0a] text-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
      <p className="mb-8 text-sm sm:text-base font-semibold text-[#d1c4d6] tracking-wide select-none">
        © 2025 <span className="text-[#ff00cc] font-extrabold">DiNeSh</span>. All rights reserved.
      </p>
      <div className="flex justify-center gap-10">
        {[{
          href: "https://www.linkedin.com/in/dinesh-suthar-037069257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          label: "LinkedIn",
          icon: FaLinkedin,
          gradient: "from-blue-500 via-blue-600 to-blue-700"
        }, {
          href: "https://github.com/Dino7354",
          label: "GitHub",
          icon: FaGithub,
          gradient: "from-gray-500 via-gray-600 to-gray-700"
        }, {
          href: "https://www.instagram.com/_stroke_boy_?igsh=OXJmMm1xdXdoeDYw",
          label: "Instagram",
          icon: FaInstagram,
          gradient: "from-pink-500 via-pink-600 to-pink-700"
        }].map(({ href, label, icon: Icon, gradient }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`
              group flex items-center space-x-3
              text-[#b0b0b0] hover:text-transparent
              bg-clip-text bg-gradient-to-r ${gradient}
              transition-all duration-400 ease-in-out
              font-semibold select-none
              focus:outline-none focus:ring-2 focus:ring-[#ff00cc] rounded
            `}
          >
            <Icon
              size={26}
              className="group-hover:scale-110 transform transition-transform duration-300"
            />
            <span className="hidden sm:inline">{label}</span>
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
