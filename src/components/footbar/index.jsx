import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
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
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            <FaFacebookF size="1.5em" />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            <FaTwitter size="1.5em" />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            <FaInstagram size="1.5em" />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            <FaLinkedinIn size="1.5em" />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            <FaGithub size="1.5em" />
          </a>
        </div>

        {/* Teks Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Marshall Doe. All Rights Reserved.
        </p>
        <p className="text-xs mt-2">Designed with React & Tailwind CSS</p>
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
