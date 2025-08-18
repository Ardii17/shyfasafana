import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

// ===== DATA DENGAN LINK GAMBAR BARU YANG STABIL =====
const portfolioItems = [
  {
    id: 1,
    title: "Abstract Art",
    category: "Branding",
    image: "https://picsum.photos/seed/project1/400/400",
  },
  {
    id: 2,
    title: "Workspace Design",
    category: "Webdesign",
    image: "https://picsum.photos/seed/project2/400/400",
  },
  {
    id: 3,
    title: "Digital Painting",
    category: "Illustration",
    image: "https://picsum.photos/seed/project3/400/400",
  },
  {
    id: 4,
    title: "Nature Clip",
    category: "Video",
    image: "https://picsum.photos/seed/project4/400/400",
  },
  {
    id: 5,
    title: "Corporate Identity",
    category: "Branding",
    image: "https://picsum.photos/seed/project5/400/400",
  },
  {
    id: 6,
    title: "Minimalist Website",
    category: "Webdesign",
    image: "https://picsum.photos/seed/project6/400/400",
  },
  {
    id: 7,
    title: "Character Sketch",
    category: "Illustration",
    image: "https://picsum.photos/seed/project7/400/400",
  },
  {
    id: 8,
    title: "Landing Page Code",
    category: "Webdesign",
    image: "https://picsum.photos/seed/project8/400/400",
  },
];
// =======================================================

// Daftar kategori unik dari data di atas
const categories = [
  "All",
  ...new Set(portfolioItems.map((item) => item.category)),
];

const MyWorks = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(portfolioItems);
    } else {
      const newFilteredItems = portfolioItems.filter(
        (item) => item.category === activeFilter
      );
      setFilteredItems(newFilteredItems);
    }
  }, [activeFilter]);

  return (
    <section id="works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 uppercase">
            My Design
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4"></div>
        </div>

        {/* Tombol Filter Kategori */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 text-sm font-semibold uppercase rounded-md transition-colors duration-300 ${
                activeFilter === category
                  ? "bg-pink-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-pink-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Portofolio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative group overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay saat hover */}
              <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100">
                <FaPlus className="text-4xl mb-2" />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
