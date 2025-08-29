import React, { useState } from "react";

// (Data array 'certificatesData' tidak berubah, tetap sama)
const certificatesData = [
  {
    title: "Sertifikat Kompetensi Pembatik Tulis",
    subtitle:
      "Issued by Badan Nasional Sertifikasi Profesi (BNSP) • Industri Batik",
    date: "Juni 2024",
    image: "./images/certificates/Sertifikat BNSP.jpeg",
  },
  {
    title: "Asian International Art Culture Exchange Exhibition",
    subtitle: "Issued by Universiti Malaysia Kelantan (UMK) • Pameran Seni",
    date: "Desember 2024",
    image: "./images/certificates/Sertifikat pameran malaysia.jpg",
  },
  {
    title: "Sertifikat Penghargaan: Pink Party Curves 2024",
    subtitle: "Issued by Curves Indonesia • Breast Cancer Awareness",
    date: "2024",
    image: "./images/certificates/Sertifikat penghargaan.jpeg",
  },
  {
    title: "Intensifikasi Kemampuan Baca Tulis Al-Qur'an",
    subtitle: "Issued by Kementerian Agama Kuningan • Pendidikan Agama",
    date: "Mei 2021",
    image: "./images/certificates/Sertifikat MA.jpeg",
  },
  {
    title: "Ijazah Madrasah Aliyah (Peminatan MIPA)",
    subtitle: "Issued by Kementerian Agama RI • Pendidikan Formal",
    date: "Mei 2021",
    image: "./images/certificates/Ijazah MA.jpeg",
  },
  {
    title: "Sertifikat Kegiatan Pemimpin Satuan (DIANPINSAT)",
    subtitle: "Issued by Kwartir Ranting Pramuka Mandirancan • Kepramukaan",
    date: "Februari 2020",
    image: "./images/certificates/Sertifikat Dianpinsat.jpeg",
  },
  {
    title: "Seminar Nasional: Winning in Industry 4.0",
    subtitle: "Issued by Wirausaha Muda Nusantara (WIMNUS) • Seminar",
    date: "November 2019",
    image: "./images/certificates/Sertifikat nasional.jpeg",
  },
  {
    title: "Surat Keterangan Penegak Laksana",
    subtitle: "Issued by Gugus Depan Pramuka 14037/14038 • Kepramukaan",
    date: "September 2019",
    image: "./images/certificates/Sertifikat Laksana Pramuka.jpeg",
  },
  {
    title: "Fun Brewing Certificate",
    subtitle: "Issued by PT Maxx Coffee Prima • Pelatihan Kopi",
    date: "", // Tidak ada tanggal yang tertera di sertifikat
    image: "./images/certificates/Fun Breawing Certificate.jpeg",
  },
];

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certificatesToShow = showAll
    ? certificatesData
    : certificatesData.slice(0, 3);

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 uppercase">
            Certificates
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4"></div>
        </div>

        {/* Pada div grid, tambahkan 'items-stretch' jika diperlukan, tapi fokus utamanya ada di dalam card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesToShow.map((cert, index) => (
            // ===== PERUBAHAN DI SINI =====
            <div
              key={index}
              // 1. Tambahkan 'flex' dan 'flex-col' untuk mengaktifkan layout flexbox
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 cursor-pointer transform hover:scale-105 hover:shadow-xl transition-transform duration-300 flex flex-col"
              onClick={() => openModal(cert)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              {/* 2. Tambahkan 'flex-grow' agar div ini mengisi sisa ruang vertikal */}
              <div className="p-6 flex flex-col flex-grow">
                {/* 3. Tambahkan 'flex-grow' pada judul agar mendorong subtitle ke bawah */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex-grow">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-gray-600">
                  {cert.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {certificatesData.length > 3 && !showAll && (
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll(true)}
              className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-700 transition-colors duration-300"
            >
              VIEW ALL CERTIFICATES
            </button>
          </div>
        )}
      </div>

      {/* Modal tidak perlu diubah */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="bg-white p-5 rounded-lg shadow-xl max-w-3xl w-11/12 relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedCert.title}
            </h3>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto object-contain max-h-[70vh] rounded-md mb-4"
            />
            <p className="text-md text-gray-700">{selectedCert.subtitle}</p>
            {selectedCert.date && (
              <p className="text-sm text-gray-500 mt-1">
                Date: {selectedCert.date}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
