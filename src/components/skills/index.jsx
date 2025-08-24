import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Wajib impor CSS-nya

// Data untuk setiap skill
const skillsData = [
  {
    name: "Corel Draw",
    percentage: 80,
    description:
      "Menguasai penggunaan Corel Draw untuk desain grafis, pembuatan pola, dan ilustrasi digital.",
  },
  {
    name: "Ibis Paint X",
    percentage: 70,
    description:
      "Mampu membuat ilustrasi digital dengan Ibis Paint X untuk kebutuhan kreatif dan fashion.",
  },
  {
    name: "Microsoft Word",
    percentage: 80,
    description:
      "Terampil menggunakan Microsoft Word untuk penulisan, penyusunan laporan, dan administrasi.",
  },
  {
    name: "Fotografi",
    percentage: 75,
    description:
      "Memiliki kemampuan dalam fotografi, termasuk pengambilan gambar dan pengeditan dasar.",
  },
  {
    name: "Content Creator",
    percentage: 65,
    description:
      "Berpengalaman dalam membuat konten digital untuk media sosial, termasuk foto, video, dan caption.",
  },
  {
    name: "Copywriting",
    percentage: 70,
    description:
      "Mampu menulis teks promosi dan konten yang menarik untuk pemasaran dan branding.",
  },
  {
    name: "Ilustrasi Manual",
    percentage: 85,
    description:
      "Menguasai teknik ilustrasi manual seperti sketsa, menggambar bentuk, dan pewarnaan.",
  },
  {
    name: "Desain Produk Fashion",
    percentage: 85,
    description:
      "Mampu merancang produk fashion dengan memperhatikan tren, estetika, dan fungsi.",
  },
  {
    name: "Perancang Busana",
    percentage: 75,
    description:
      "Memiliki keterampilan dalam menjahit, menyulam, menganyam, hingga membatik untuk menghasilkan busana.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 uppercase">Skills</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4"></div>
        </div>

        {/* Grid untuk daftar skill */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Circular Progress Bar */}
              <div className="w-40 h-40 mb-4">
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    // Warna
                    textColor: "#333",
                    pathColor: "#EF4444", // Warna merah (sesuai tema)
                    trailColor: "#E5E7EB", // Warna abu-abu untuk sisa lingkaran

                    // Ukuran teks
                    textSize: "18px",
                  })}
                />
              </div>

              {/* Nama Skill */}
              <h3 className="text-xl font-semibold text-gray-800 uppercase mt-4">
                {skill.name}
              </h3>

              {/* Deskripsi Skill */}
              <p className="text-gray-500 mt-2 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
