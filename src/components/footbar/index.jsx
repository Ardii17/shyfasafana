import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTiktok,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  // Fungsi untuk scroll ke atas halaman
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-800 text-gray-400 py-8 relative">
      <div className="container mx-auto px-6 text-center">
        {/* Ikon Media Sosial */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://wa.me/6281122864888"
            className="hover:text-white transition-colors duration-300"
          >
            <FaWhatsapp size="1.5em" />
          </a>
          <a
            href="https://www.tiktok.com/@shyfasafana6"
            className="hover:text-white transition-colors duration-300"
          >
            <FaTiktok size="1.5em" />
          </a>
          <a
            href="https://www.instagram.com/shyfasfna?igsh=MWswcGVkcjh1bXpneQ=="
            className="hover:text-white transition-colors duration-300"
          >
            <FaInstagram size="1.5em" />
          </a>
          <a
            href="https://www.linkedin.com/in/shyfa-safana-5630b72ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="hover:text-white transition-colors duration-300"
          >
            <FaLinkedinIn size="1.5em" />
          </a>
        </div>

        {/* Teks Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Annisa Shyfa Safana. All Rights
          Reserved.
        </p>
      </div>

      {/* Tombol Back to Top */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300 shadow-lg"
        aria-label="Go to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
