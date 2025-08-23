import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaChevronDown,
} from "react-icons/fa";

const HomePage = () => {
  // URL gambar dummy untuk latar belakang (dari Unsplash)
  const dummyBackgroundImage =
    "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  // URL logo dummy (dari Logoipsum)
  const dummyLogo =
    "data:image/svg+xml,%3csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='50' cy='50' r='50' fill='white'/%3e%3cpath d='M25 70L50 30L75 70L62.5 50L50 70L37.5 50L25 70Z' fill='%23EF4444'/%3e%3c/svg%3e";

  return (
    <div
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${dummyBackgroundImage})` }}
    >
      {/* Overlay Gelap */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Konten Utama */}
      <div className="relative z-10 flex flex-col items-center text-center text-white">
        {/* Logo */}
        <img
          src={dummyLogo}
          alt="Logo"
          className="w-20 h-20 mb-6 bg-white rounded-full p-2" // Menambahkan background putih agar logo SVG terlihat
        />

        {/* Nama */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-wider uppercase">
          Shyfa Safana
        </h1>

        {/* Jabatan */}
        <p className="mt-4 text-lg md:text-xl font-light tracking-widest uppercase">
          Designer + Kreator Produk
        </p>

        {/* Ikon Media Sosial */}
        <div className="flex space-x-4 mt-8">
          <a
            href="#"
            className="p-2 border-2 border-gray-400 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="p-2 border-2 border-gray-400 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="p-2 border-2 border-gray-400 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="p-2 border-2 border-gray-400 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="p-2 border-2 border-gray-400 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Indikator Scroll Bawah */}
      <div className="absolute bottom-10 z-10">
        <FaChevronDown className="text-white text-3xl animate-bounce" />
      </div>
    </div>
  );
};

export default HomePage;
