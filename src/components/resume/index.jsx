import React from "react";

// Data untuk pengalaman kerja (tidak ada perubahan di sini)
const experiences = [
  {
    role: "Tim Desainer (Magang)",
    company: "CV Sekain Sebaju (__sekain)",
    period: "2024 – 2025",
    description:
      "Magang di subunit Teman Thrifty sebagai tim desainer produksi model pakaian. Belajar QC (quality control) sebelum produksi agar produk layak jual.",
    isRight: true,
  },
  {
    role: "Departemen Media Sosial",
    company: "Forum Organisasi Kuningan (FOK)",
    period: "2020 – 2021",
    description:
      "Mengoperasikan media sosial Instagram untuk interaksi dengan pengikut, mengedit video, dan mengunggah foto kegiatan.",
    isRight: false,
  },
  {
    role: "Departemen Wirausaha & Departemen Agama",
    company: "Himpunan Mahasiswa (HIMA) Kriya Tekstil dan Fashion",
    period: "2022 – 2024",
    description:
      "Di Dept. Wirausaha: mempromosikan produk perlengkapan kuliah. Di Dept. Agama: menjalankan program kajian, pengajian umum, dan acara buka bersama prodi.",
    isRight: true,
  },
  {
    role: "Ketua Departemen Media Sosial",
    company: "UKM Fotografi Kampus",
    period: "2021 – 2024",
    description:
      "Memimpin pengelolaan media sosial dan dokumentasi kegiatan UKM Fotografi.",
    isRight: false,
  },
  {
    role: "Tim Logistik",
    company: "Pameran Upangga Artista (TPB Kampus)",
    period: "2022",
    description:
      "Menyelenggarakan pameran seni mata kuliah. Berperan sebagai kurator karya, menyiapkan logistik, dan memastikan acara berjalan lancar.",
    isRight: true,
  },
  {
    role: "Tim Konsumsi",
    company: "Pameran Sefoka (Fotografi Fashion)",
    period: "2023",
    description:
      "Menyediakan konsumsi untuk panitia, tamu, dan pengunjung pameran fotografi fashion bertema batik di Bandung Creative Hub.",
    isRight: false,
  },
  {
    role: "Tim Art Galeri",
    company: "Artlinc Cultural Heritage Threads (Malaysia)",
    period: "2024",
    description:
      "Berkolaborasi dengan mahasiswa ISBI & Universiti Malaysia Kelantan. Mengorganisir penempatan karya dan memantau kelancaran pameran bertema permainan tradisional.",
    isRight: true,
  },
];

// Data untuk pendidikan (tidak ada perubahan di sini)
const education = [
  {
    degree: "Madrasah Aliyah (MIPA)",
    university: "Pembangunan Al Muawanah, Kab. Kuningan, Jawa Barat",
    period: "2018 – 2021",
    description:
      "Mengambil jurusan MIPA di Madrasah Aliyah Pembangunan Al Muawanah. Menjadi dasar akademik sebelum melanjutkan ke perguruan tinggi.",
    isRight: true,
  },
  {
    degree: "Bachelor's Degree in Kriya Tekstil dan Fashion",
    university:
      "Universitas Muhammadiyah Bandung, Fakultas Sosial dan Humaniora",
    period: "2021 – 2025",
    description:
      "Mempelajari desain, kriya tekstil, dan fashion. Mengikuti berbagai kegiatan kampus seperti HIMA, UKM Fotografi, dan pameran seni.",
    isRight: false,
  },
];

// ===== Komponen TimelineItem yang sudah diperbaiki untuk Mobile =====
const TimelineItem = ({ data }) => (
  // Logika baru: Di layar mobile (md:), item akan ditumpuk, di desktop (md:) akan kiri-kanan
  <div
    className={`mb-8 flex md:justify-between md:items-center w-full ${
      !data.isRight ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* Spacer kosong untuk desktop, disembunyikan di mobile */}
    <div className="hidden md:block w-5/12"></div>

    {/* Lingkaran di Tengah (tetap sama) */}
    <div className="z-10 flex items-center bg-gray-300 w-6 h-6 rounded-full shadow-xl">
      <div
        className={`mx-auto w-3 h-3 rounded-full ${
          data.highlight ? "bg-pink-500" : "bg-gray-500"
        }`}
      ></div>
    </div>

    {/* Konten Card (lebar diubah untuk mobile) */}
    <div className="w-full md:w-5/12">
      <div
        className={`p-4 rounded-lg shadow-lg ${
          data.highlight ? "bg-white" : "bg-gray-50"
        } ${!data.isRight ? "md:text-right" : "md:text-left"}`}
      >
        <h3 className="text-xl font-bold text-gray-800">
          {data.role || data.degree}
        </h3>
        <p className="text-sm font-semibold text-gray-600">
          {data.company || data.university} • {data.period}
        </p>
        <p className="text-sm text-gray-500 mt-2">{data.description}</p>
      </div>
    </div>
  </div>
);

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Judul Utama */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 uppercase">Resume</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4"></div>
        </div>

        {/* Timeline Experiences */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-700 uppercase px-4 py-2 inline-block border-2 border-gray-300 rounded-md">
              Experiences
            </h3>
          </div>
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div
              className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
              style={{ left: "50%" }}
            ></div>
            {experiences.map((exp, index) => (
              <TimelineItem data={exp} key={index} />
            ))}
          </div>
        </div>

        {/* Timeline Education */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-700 uppercase px-4 py-2 inline-block border-2 border-gray-300 rounded-md">
              Education
            </h3>
          </div>
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div
              className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
              style={{ left: "50%" }}
            ></div>
            {education.map((edu, index) => (
              <TimelineItem data={edu} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
