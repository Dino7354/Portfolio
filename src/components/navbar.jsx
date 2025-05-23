import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHome, FiUser, FiBookOpen, FiFolder, FiFileText } from "react-icons/fi";
import Resume from "../assets/LatestResume.pdf";

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        document.documentElement.classList.contains("dark") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    return false;
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const navItems = [
    { href: "#home", label: "Home", icon: <FiHome /> },
    { href: "#about", label: "About", icon: <FiUser /> },
    { href: "#skills", label: "Skills", icon: <FiBookOpen /> },
    { href: "#projects", label: "Projects", icon: <FiFolder /> },
    { href: Resume, label: "Resume", icon: <FiFileText />, download: true },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#f7e92e]">Dino.io</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) =>
              item.download ? (
                <a
                  key={item.label}
                  href={item.href}
                  download="Dinesh_Suthar_Resume.pdf"
                  className="text-[#0a0a0a] dark:text-white hover:text-[#ff00cc]"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#0a0a0a] dark:text-white hover:text-[#ff00cc]"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-[#0a0a0a] dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            className="fixed top-0 left-0 h-full w-64 bg-[#f8f9fa] dark:bg-[#111] z-50 p-6 shadow-lg"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col space-y-6 mt-20">
              {navItems.map((item) =>
                item.download ? (
                  <a
                    key={item.label}
                    href={item.href}
                    download="Dinesh_Suthar_Resume.pdf"
                    className="flex items-center space-x-3 text-lg text-[#0a0a0a] dark:text-white hover:text-[#ff00cc]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 text-lg text-[#0a0a0a] dark:text-white hover:text-[#ff00cc]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                )
              )}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
