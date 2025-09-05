import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTiktok,
  FaChevronDown,
} from "react-icons/fa";

const HomePage = () => {
  return (
    <div
      id="home"
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/images/background.jpg')` }}
    >
      {/* Overlay Gelap */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Konten Utama */}
      <div className="relative z-10 flex flex-col items-center text-center text-white">
        {/* Nama */}
        <h1
          className="text-5xl md:text-5xl font-bold tracking-wider"
          style={{ fontFamily: "The Seasons, serif" }}
        >
          Hello, this is Annisa Shyfa Safana Portofolio
        </h1>

        {/* Jabatan */}
        <p
          className="mt-4 text-lg md:text-xl font-light tracking-widest uppercase"
          style={{ fontFamily: "Times New Roman" }}
        >
          Desainer Mode + Perancang Busana + Desainer Kriya + Ilustrasi Fashion
          + Fotografer
        </p>

        {/* Ikon Media Sosial */}
        <div className="flex space-x-4 mt-8">
          <a
            href="https://wa.me/6281122864888"
            target="_blank"
            className="p-2 border-2 border-gray-400 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.tiktok.com/@shyfasafana6"
            target="_blank"
            className="p-2 border-2 border-gray-400 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.instagram.com/shyfasfna?igsh=MWswcGVkcjh1bXpneQ=="
            target="_blank"
            className="p-2 border-2 border-gray-400 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/shyfa-safana-5630b72ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="p-2 border-2 border-gray-400 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            <FaLinkedinIn />
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
