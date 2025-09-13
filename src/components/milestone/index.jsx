import React from "react";
import CountUp from "react-countup";
import {
  FaPaintBrush,
  FaBriefcase,
  FaPencilRuler,
  FaUsers,
  FaTrophy,
  FaCamera,
  FaPalette,
  FaCertificate,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

// URL gambar latar dummy yang relevan
const backgroundImage =
  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

// Data untuk setiap milestone

const milestoneData = [
  { icon: <FaPaintBrush />, count: 38, label: "Design Digital" }, // ikon desain
  { icon: <FaBriefcase />, count: 22, label: "Analisis Tren Fashion" }, // ikon kerja/analisis
  { icon: <FaPencilRuler />, count: 16, label: "Design Manual" }, // ikon manual/alat
  { icon: <FaUsers />, count: 23, label: "Hasil Karya Kriya" }, // ikon komunitas
  { icon: <FaTrophy />, count: 21, label: "Pengalaman" }, // ikon prestasi
  { icon: <FaCamera />, count: 15, label: "Fotografi" }, // ikon kamera
  { icon: <FaPalette />, count: 48, label: "Ilustrasi Fashion" }, // ikon palet warna
  { icon: <FaCertificate />, count: 10, label: "Sertifikat" }, // ikon sertifikat
];

const Milestones = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya berjalan sekali
    threshold: 0.1, // Picu saat 10% elemen terlihat
  });

  return (
    <section
      id="milestones"
      ref={ref}
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay Gelap */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75"></div>

      <div className="relative container mx-auto px-6 text-white text-center">
        {/* Judul Section */}
        <h2 className="text-4xl font-bold uppercase tracking-wider">
          Milestones Achieved
        </h2>

        {/* Grid untuk item milestone */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {milestoneData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Lingkaran Ikon */}
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 border-4 border-gray-300">
                <span className="text-4xl text-pink-500">{item.icon}</span>
              </div>

              {/* Angka (dengan animasi) */}
              <div className="text-5xl font-bold">
                {inView && (
                  <CountUp
                    start={0}
                    end={item.count}
                    duration={2.5}
                    separator=","
                  />
                )}
              </div>

              {/* Label */}
              <p className="mt-2 text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
