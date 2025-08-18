import React, { useState, useEffect } from "react";

// Logo yang sama dari sebelumnya (SVG Data URI)
const svgLogo =
  "data:image/svg+xml,%3csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='50' cy='50' r='50' fill='white'/%3e%3cpath d='M25 70L50 30L75 70L62.5 50L50 70L37.5 50L25 70Z' fill='%23EF4444'/%3e%3c/svg%3e";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      // Jika posisi scroll lebih dari 50px, ubah state
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Tambahkan event listener saat komponen dimuat
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen dibongkar
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
    "Works",
    "Contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={svgLogo}
            alt="Logo"
            className={`w-12 h-12 transition-all duration-300 ${
              isScrolled ? "w-10 h-10" : "w-12 h-12"
            }`}
          />
        </div>

        {/* Menu Navigasi */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`uppercase font-semibold text-sm transition-colors duration-300 ${
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

        {/* Tombol Hamburger untuk Mobile (Opsional) */}
        <div className="md:hidden">
          <button className={`${isScrolled ? "text-gray-800" : "text-white"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
