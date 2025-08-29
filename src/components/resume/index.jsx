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
      "Universitas Muhamadiyah Bandung, Fakultas Sosial dan Humaniora",
    period: "2021 – 2025",
    description:
      "Mempelajari desain, kriya tekstil, dan fashion. Mengikuti berbagai kegiatan kampus seperti HIMA, UKM Fotografi, dan pameran seni.",
    isRight: false,
  },
];

// ===== 1. PERUBAHAN UTAMA PADA KOMPONEN TIMELINEITEM =====
const TimelineItem = ({ data }) => {
  const { isRight } = data;

  // Tentukan kelas untuk posisi card di desktop
  const desktopClasses = isRight
    ? "md:ml-auto md:pl-16" // Card di kanan
    : "md:mr-auto md:pr-16 md:text-right"; // Card di kiri

  return (
    // Container untuk setiap item (card + dot)
    <div className="relative">
      {/* Lingkaran (Dot) di Garis Timeline */}
      <div className="absolute z-10 flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full top-0 left-2 md:left-1/2 md:-translate-x-1/2">
        <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
      </div>

      {/* Konten Card */}
      <div
        // Layout Mobile: selalu punya padding kiri untuk memberi ruang pada garis
        // Layout Desktop: lebar 50% dan posisi diatur oleh desktopClasses
        className={`w-full pl-12 pb-8 md:w-1/2 md:p-0 ${desktopClasses}`}
      >
        <div className="p-4 bg-white rounded-lg shadow-lg">
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
};

// ===== 2. PERUBAHAN KECIL PADA KOMPONEN RESUME =====
const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
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
          {/* Wrapper untuk timeline dengan garis vertikal */}
          <div className="relative">
            {/* Garis Vertikal yang Responsif */}
            <div
              className="absolute w-0.5 bg-gray-300 h-full top-0 left-5 md:left-1/2 md:-translate-x-1/2"
              aria-hidden="true"
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
          {/* Wrapper untuk timeline dengan garis vertikal */}
          <div className="relative">
            {/* Garis Vertikal yang Responsif */}
            <div
              className="absolute w-0.5 bg-gray-300 h-full top-0 left-5 md:left-1/2 md:-translate-x-1/2"
              aria-hidden="true"
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
