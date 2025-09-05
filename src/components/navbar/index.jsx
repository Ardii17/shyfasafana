import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // ===== FUNGSI BARU UNTUK SMOOTH SCROLL =====
  const handleScrollTo = (e, targetId) => {
    // 1. Mencegah perilaku default dari tag <a>
    e.preventDefault();

    // 2. Mendapatkan elemen tujuan berdasarkan ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // 3. Menggulir ke elemen dengan animasi smooth
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Jika drawer terbuka, tutup drawer-nya (untuk mobile)
    if (isDrawerOpen) {
      toggleDrawer();
    }
  };

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            {/* Pastikan ada elemen dengan id="home" di halaman Anda */}
            <a href="#home" onClick={(e) => handleScrollTo(e, "home")}>
              <p
                className={`uppercase font-bold text-2xl transition-colors duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Shyfa's porto
              </p>
            </a>
          </div>

          {/* Menu Navigasi Desktop */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const targetId = link.toLowerCase();
              return (
                <li key={link}>
                  <a
                    href={`#${targetId}`}
                    // ===== UBAH BAGIAN INI =====
                    onClick={(e) => handleScrollTo(e, targetId)}
                    className={`uppercase font-bold text-sm transition-colors duration-300 ${
                      isScrolled
                        ? "text-gray-800 hover:text-pink-500"
                        : "text-white hover:text-gray-300"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              );
            })}
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

      {/* Drawer Menu Mobile */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => {
            const targetId = link.toLowerCase();
            return (
              <li key={link}>
                <a
                  href={`#${targetId}`}
                  // ===== UBAH BAGIAN INI JUGA =====
                  onClick={(e) => handleScrollTo(e, targetId)}
                  className="text-2xl text-gray-800 uppercase font-bold hover:text-pink-500"
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
