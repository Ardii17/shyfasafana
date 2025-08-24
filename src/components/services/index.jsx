import React from "react";
import {
  FaPencilRuler,
  FaPaintBrush,
  FaLightbulb,
  FaCamera,
  FaTshirt,
  FaShareAlt,
} from "react-icons/fa";

const servicesData = [
  {
    icon: <FaPencilRuler />,
    title: "Designing",
    description: "Mendesain dan merancang sebuah produk fashion.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Illustrating",
    description: "Ilustrasi produk dengan manual, Corel Draw, Ibis Paint X.",
  },
  {
    icon: <FaLightbulb />,
    title: "Exploring",
    description: "Mengeksplorasi hal – hal terbaru.",
  },
  {
    icon: <FaCamera />,
    title: "Photography",
    description:
      "Memotret (baik dengan kamera atau gawai) dan mengedit foto (dengan aplikasi gawai).",
  },
  {
    icon: <FaTshirt />,
    title: "Fashion Crafting",
    description:
      "Perancang Busana (Menjahit, menyulam, menganyam, dan membatik).",
  },
  {
    icon: <FaShareAlt />,
    title: "Social Media",
    description: "Operator Media Sosial.",
  },
];


const MyServices = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      {" "}
      {/* Latar belakang abu-abu */}
      <div className="container mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 uppercase">
            My Services
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4"></div>
        </div>

        {/* Grid untuk daftar layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {servicesData.map((service, index) => (
            <div key={index} className="flex items-start">
              {/* Konten Teks (Judul & Deskripsi) */}
              <div className="text-right flex-grow pr-6">
                <h3 className="text-xl font-bold text-gray-800 uppercase mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500">{service.description}</p>
              </div>

              {/* Ikon */}
              <div className="flex-shrink-0 w-16 h-16 bg-pink-500 text-white text-3xl flex items-center justify-center rounded-md shadow-lg">
                {service.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServices;
