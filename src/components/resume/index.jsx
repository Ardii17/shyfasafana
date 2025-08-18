import React from "react";

// Data untuk pengalaman kerja (tidak ada perubahan di sini)
const experiences = [
  {
    role: "Senior Developer",
    company: "Company Name",
    period: "2012 - Current",
    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
    isRight: true,
  },
  {
    role: "Junior Developer",
    company: "Company Name",
    period: "2010 - 2008",
    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
    isRight: false,
  },
  {
    role: "Senior UI Designer",
    company: "Company Name",
    period: "2008 - 2006",
    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
    isRight: true,
    highlight: true,
  },
  {
    role: "Junior UI Designer",
    company: "Company Name",
    period: "2006 - 2004",
    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
    isRight: false,
  },
];

// Data untuk pendidikan (tidak ada perubahan di sini)
const education = [
  {
    degree: "Masters Degree",
    university: "University Name",
    period: "2012 - 2010",
    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
    isRight: true,
  },
  {
    degree: "Bachelors Degree",
    university: "University Name",
    period: "2008 - 2005",
    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
    isRight: false,
  },
  {
    degree: "Graduation",
    university: "College Name",
    period: "2005 - 2003",
    description:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.",
    isRight: true,
  },
];

// ===== Komponen TimelineItem yang sudah diperbaiki =====
const TimelineItem = ({ data }) => (
  // Logika baru: Gunakan flex-row-reverse untuk membalik item kiri
  <div
    className={`mb-8 flex justify-between items-center w-full ${
      !data.isRight ? "flex-row-reverse" : ""
    }`}
  >
    {/* Spacer kosong. Posisinya akan ditukar oleh flex-row-reverse */}
    <div className="w-5/12"></div>

    {/* Lingkaran di Tengah */}
    <div className="z-10 flex items-center bg-gray-300 w-6 h-6 rounded-full shadow-xl">
      <div
        className={`mx-auto w-3 h-3 rounded-full ${
          data.highlight ? "bg-pink-500" : "bg-gray-500"
        }`}
      ></div>
    </div>

    {/* Konten Card */}
    <div className="w-5/12">
      <div
        className={`p-4 rounded-lg shadow-lg ${
          data.highlight ? "bg-white" : "bg-gray-50"
        } ${!data.isRight ? "text-right" : "text-left"}`}
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
