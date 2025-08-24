import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Menggunakan react-icons untuk ikon

// Logo yang sama dari sebelumnya
const svgLogo =
  "data:image/svg+xml,%3csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='50' cy='50' r='50' fill='white'/%3e%3cpath d='M25 70L50 30L75 70L62.5 50L50 70L37.5 50L25 70Z' fill='%23EF4444'/%3e%3c/svg%3e";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // ===== STATE BARU UNTUK DRAWER MOBILE =====
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Services",
    "Resume",
    "Skills",
    "Design",
    "Certificates",
    "Contact",
  ];

  // Fungsi untuk toggle drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    // ===== Gunakan <header> untuk semantic HTML yang lebih baik =====
    <header>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home">
              <img
                src={svgLogo}
                alt="Logo"
                className={`w-12 h-12 transition-all duration-300 ${
                  isScrolled ? "w-10 h-10" : "w-12 h-12"
                }`}
              />
            </a>
          </div>

          {/* Menu Navigasi Desktop */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`uppercase font-bold text-sm transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-800 hover:text-pink-500"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Tombol Hamburger untuk Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleDrawer}
              className={`text-2xl ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isDrawerOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* ===== DRAWER MENU MOBILE BARU ===== */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={toggleDrawer} // Menutup drawer saat link di-klik
                className="text-2xl text-gray-800 uppercase font-bold hover:text-pink-500"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
