import React, { useState, useEffect } from "react";
import { FaPlus, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// Saya tambahkan beberapa item lagi (total 16) agar pagination 8 item per halaman terlihat pas
const portfolioItems = [
  {
    id: 1,
    title: "Abstract Art",
    category: "Branding",
    image: "https://picsum.photos/seed/project1/600/600",
  },
  {
    id: 2,
    title: "Workspace Design",
    category: "Webdesign",
    image: "https://picsum.photos/seed/project2/600/600",
  },
  {
    id: 3,
    title: "Digital Painting",
    category: "Illustration",
    image: "https://picsum.photos/seed/project3/600/600",
  },
  {
    id: 4,
    title: "Nature Clip",
    category: "Video",
    image: "https://picsum.photos/seed/project4/600/600",
  },
  {
    id: 5,
    title: "Corporate Identity",
    category: "Branding",
    image: "https://picsum.photos/seed/project5/600/600",
  },
  {
    id: 6,
    title: "Minimalist Website",
    category: "Webdesign",
    image: "https://picsum.photos/seed/project6/600/600",
  },
  {
    id: 7,
    title: "Character Sketch",
    category: "Illustration",
    image: "https://picsum.photos/seed/project7/600/600",
  },
  {
    id: 8,
    title: "Landing Page Code",
    category: "Webdesign",
    image: "https://picsum.photos/seed/project8/600/600",
  },
  {
    id: 9,
    title: "Brand Guide",
    category: "Branding",
    image: "https://picsum.photos/seed/project9/600/600",
  },
  {
    id: 10,
    title: "Mobile App Design",
    category: "Webdesign",
    image: "https://picsum.photos/seed/project10/600/600",
  },
  {
    id: 11,
    title: "Vector Icons",
    category: "Illustration",
    image: "https://picsum.photos/seed/project11/600/600",
  },
  {
    id: 12,
    title: "Promotional Video",
    category: "Video",
    image: "https://picsum.photos/seed/project12/600/600",
  },
  {
    id: 13,
    title: "Product Photography",
    category: "Branding",
    image: "https://picsum.photos/seed/project13/600/600",
  },
  {
    id: 14,
    title: "E-commerce Site",
    category: "Webdesign",
    image: "https://picsum.photos/seed/project14/600/600",
  },
  {
    id: 15,
    title: "Infographic",
    category: "Illustration",
    image: "https://picsum.photos/seed/project15/600/600",
  },
  {
    id: 16,
    title: "Short Film",
    category: "Video",
    image: "https://picsum.photos/seed/project16/600/600",
  },
];

const categories = [
  "All",
  ...new Set(portfolioItems.map((item) => item.category)),
];

const MyWorks = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (item) => {
    setSelectedImage(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    let items;
    if (activeFilter === "All") {
      items = portfolioItems;
    } else {
      items = portfolioItems.filter((item) => item.category === activeFilter);
    }
    setFilteredItems(items);
    setCurrentPage(1);
  }, [activeFilter]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 uppercase">
            My Design
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4"></div>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
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

        {/* ===== UBAH min-h UNTUK MENAMPUNG 2 BARIS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:min-h-[520px]">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg cursor-pointer aspect-square"
              onClick={() => openModal(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100">
                <FaPlus className="text-4xl mb-2" />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 rounded-md hover:bg-pink-500 hover:text-white transition"
            >
              <FaChevronLeft />
            </button>
            <span className="text-gray-700 font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 rounded-md hover:bg-pink-500 hover:text-white transition"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>

      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-4 rounded-lg shadow-xl max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-4 cursor-pointer -right-4 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl z-10"
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain max-h-[85vh]"
            />
            <div className="text-center mt-2 p-2 bg-gray-100 rounded-b-lg">
              <h3 className="text-lg font-bold text-gray-800">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-gray-600">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyWorks;
