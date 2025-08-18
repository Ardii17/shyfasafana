import React from "react";
// Ikon meta info sudah dihapus karena tidak digunakan lagi

// ===== DATA DENGAN SUBTITLE BARU =====
// Saya menggabungkan issuer, date, dan category menjadi satu field 'subtitle'
const certificatesData = [
  {
    title: "Certified React Developer",
    subtitle: "Issued by Coursera • Web Development",
    date: "April 2024",
    image: "https://picsum.photos/seed/cert1/600/400",
  },
  {
    title: "Tailwind CSS Mastery",
    subtitle: "Issued by Udemy • Frontend",
    date: "Januari 2024",
    image: "https://picsum.photos/seed/cert2/600/400",
  },
  {
    title: "Advanced JavaScript",
    subtitle: "Issued by Dicoding • Programming",
    date: "Oktober 2023",
    image: "https://picsum.photos/seed/cert3/600/400",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 uppercase">
            Certificates
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4"></div>
        </div>

        {/* Grid untuk Card Sertifikat */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              {/* Gambar Sertifikat */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                {/* Judul Sertifikat */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {cert.title}
                </h3>

                {/* ===== BAGIAN YANG DIUBAH ===== */}
                {/* Meta Info diganti dengan Subtitle */}
                <p className="text-sm font-semibold text-gray-600 mb-4">
                  {cert.subtitle}
                </p>

                {/* Deskripsi (opsional, jika diperlukan) */}
              </div>
            </div>
          ))}
        </div>

        {/* Tombol View All */}
        <div className="text-center mt-16">
          <button className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-700 transition-colors duration-300">
            VIEW ALL CERTIFICATES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
