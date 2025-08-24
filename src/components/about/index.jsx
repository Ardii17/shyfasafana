import React from "react";
import {
  FaDownload,
  FaGamepad,
  FaFilm,
  FaMusic,
  FaCoffee,
  FaBriefcase,
  FaCar,
  FaApple,
  FaMoneyBillWave,
} from "react-icons/fa";

// URL gambar profil dummy
const profileImage =
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";

const AboutMe = () => {
  const hobbies = [
    { icon: <FaGamepad />, name: "Games" },
    { icon: <FaFilm />, name: "Cinema" },
    { icon: <FaMusic />, name: "Music" },
    { icon: <FaCoffee />, name: "Coffee" },
    { icon: <FaBriefcase />, name: "Travel" },
    { icon: <FaCar />, name: "Cars" },
    { icon: <FaApple />, name: "Mac OS" },
    { icon: <FaMoneyBillWave />, name: "Money" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 uppercase">
            About Me
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4"></div>
        </div>

        {/* Konten About Me */}
        <div className="text-gray-600 text-center mb-12 max-w-4xl mx-auto">
          <p className="mb-4">
            Perkenalan Diri Singkat : Perkenalkan, nama saya Annisa Shyfa
            Safana. Saya merupakan mahasiswa program studi Kriya Tekstil dan
            Fashion yang saat ini telah menyelesaikan Pendidikan di Universitas
            Muhammadiyah Bandung dengan gelar Sarjana Seni (S,Sn.) serta IPK
            3,64. Saya dapat bekerja sama dalam tim, beradaptasi dengan baik,
            menyelesaikan tanggung jawab dengan baik, dapat dipercaya, jujur,
            dan konsisten. Saya memiliki keterampilan untuk menggambar, melukis,
            memotret, dan menganalisa sesuatu yang baru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Kolom Kiri: Foto */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={profileImage}
              alt="Marshall Doe"
              className="rounded-lg shadow-xl w-64 h-64 md:w-80 md:h-80 object-cover"
            />
          </div>

          {/* Kolom Tengah: Detail & Tombol */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <p className="font-serif text-3xl mt-6">Annisa Shyfa Safana</p>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong className="w-24 inline-block">Birthday:</strong>{" "}
                  Balikpapan, 6 Febuari 2003
                </li>
                <li>
                  <strong className="w-24 inline-block">Phone:</strong>{" "}
                  +6281122864888
                </li>
                <li>
                  <strong className="w-24 inline-block">Email:</strong>{" "}
                  shyfa.safana@gmail.com
                </li>
                <li>
                  <strong className="w-24 inline-block">Jenis Kelamin:</strong>{" "}
                  perempuan
                </li>
                <li>
                  <strong className="w-24 inline-block">Address:</strong> Perum
                  Korpri Tapis Blok A8 no. 15, Kec. Tanah Grogot, Kab. Paser,
                  Kalimantan Timur
                </li>
              </ul>
              <button className="self-start mt-6 bg-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors duration-300 flex items-center space-x-2">
                <FaDownload />
                <span>DOWNLOAD CV</span>
              </button>
            </div>

            {/* Kolom Kanan: Hobi */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Hobbies & Interests
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.name}
                    className="flex flex-col items-center justify-center p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="text-3xl text-pink-500 mb-2">
                      {hobby.icon}
                    </div>
                    <span className="text-sm text-gray-600">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
