import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Wajib impor CSS-nya

// Data untuk setiap skill
const skillsData = [
  {
    name: "HTML5/CSS3",
    percentage: 87,
    description:
      "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
  },
  {
    name: "JavaScript",
    percentage: 75,
    description:
      "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
  },
  {
    name: "WordPress",
    percentage: 83,
    description:
      "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
  },
  {
    name: "Joomla",
    percentage: 69,
    description:
      "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
  },
  {
    name: "Photoshop",
    percentage: 100,
    description:
      "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
  },
  {
    name: "Illustrator",
    percentage: 73,
    description:
      "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
  },
  {
    name: "InDesign",
    percentage: 85,
    description:
      "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
  },
  {
    name: "3D Max",
    percentage: 55,
    description:
      "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
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
