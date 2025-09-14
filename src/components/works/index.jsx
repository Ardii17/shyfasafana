import React, { useState, useEffect, useCallback } from "react";
import { FaPlus, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// Kategori sekarang menjadi sumber utama untuk memanggil API
const categories = [
  "Ilustrasi Fashion",
  "Analisis Tren Fashion",
  "Fotografi",
  "Hasil Karya Kriya",
  "Design Digital",
  "Pengalaman",
  "Design Manual",
];

const moreDesignDigitalImage = [
  {
    id: 1,
    title: "Party Skirt",
    category: "Design Digital",
    image: "/images/design_digital/party skirt 1.jpg",
  },
  {
    id: 2,
    title: "Party Skirt",
    category: "Design Digital",
    image: "/images/design_digital/party skirt 2.jpg",
  },
  {
    id: 3,
    title: "Long Skirt",
    category: "Design Digital",
    image: "/images/design_digital/long skirt 1.jpg",
  },
  {
    id: 4,
    title: "Long Skirt",
    category: "Design Digital",
    image: "/images/design_digital/long skirt 2.jpg",
  },
];

const moreIlustrasiFashionImage = [
  {
    id: 1,
    title: "Ilustrasi Fashion 1",
    category: "Ilustrasi Fashion",
    image: "/images/ilustrasi_fashion/Baju styling 1.jpeg",
  },
  {
    id: 2,
    title: "Ilustrasi Fashion 2",
    category: "Ilustrasi Fashion",
    image: "/images/ilustrasi_fashion/Baju styling 2.jpeg",
  },
  {
    id: 3,
    title: "Ilustrasi Fashion 3",
    category: "Ilustrasi Fashion",
    image: "/images/ilustrasi_fashion/Baju styling 3.jpeg",
  },
  {
    id: 4,
    title: "Ilustrasi Fashion 4",
    category: "Ilustrasi Fashion",
    image: "/images/ilustrasi_fashion/Baju styling 4.jpeg",
  },
  {
    id: 5,
    title: "Ilustrasi Fashion 5",
    category: "Ilustrasi Fashion",
    image: "/images/ilustrasi_fashion/Baju styling 5.jpeg",
  },
];

const allAnalisisTrenFashionImage = [
  {
    id: 1,
    title: "Analisis Tren Tokoh 1",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Analisis Tren Tokoh 1.jpg",
  },
  {
    id: 2,
    title: "Analisis Tren Tokoh 2",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Analisis Tren Tokoh 2.jpg",
  },
  {
    id: 3,
    title: "Analisis Tren Tokoh 3",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Analisis Tren Tokoh 3.jpg",
  },
  {
    id: 4,
    title: "Analisis Tren Tokoh 4",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Analisis Tren Tokoh 4.jpg",
  },
  {
    id: 5,
    title: "Analisis Tren Tokoh 5",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Analisis Tren Tokoh 5.jpg",
  },
  {
    id: 6,
    title: "Analisis Tren Tokoh 6",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Analisis Tren Tokoh 6.jpg",
  },
  {
    id: 7,
    title: "Analisis Tren Tokoh 7",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Analisis Tren Tokoh 7.jpg",
  },
  {
    id: 8,
    title: "Analisis Tren Tokoh 8",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Analisis Tren Tokoh 8.jpg",
  },
  {
    id: 9,
    title: "Analisis Tren Tokoh 9",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Analisis Tren Tokoh 9.jpg",
  },
  {
    id: 10,
    title: "Analisis Tren Tokoh 10",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Analisis Tren Tokoh 10.jpg",
  },
  {
    id: 11,
    title: "Analisis Tren Tokoh 11",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Analisis Tren Tokoh 11.jpg",
  },
  {
    id: 111,
    title: "Kriya Berkelanjutan 1",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Kriya Berkelanjutan 1.jpg",
  },
  {
    id: 12,
    title: "Kriya Berkelanjutan 2",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Kriya Berkelanjutan 2.jpg",
  },
  {
    id: 13,
    title: "Kriya Berkelanjutan 3",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Kriya Berkelanjutan 3.jpg",
  },
  {
    id: 14,
    title: "Kriya Berkelanjutan 4",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Kriya Berkelanjutan 4.jpg",
  },
  {
    id: 15,
    title: "Kriya Berkelanjutan 5",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Kriya Berkelanjutan 5.jpg",
  },
  {
    id: 16,
    title: "Kriya Berkelanjutan 6",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Kriya Berkelanjutan 6.jpg",
  },
  {
    id: 17,
    title: "Kriya Berkelanjutan 7",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Kriya Berkelanjutan 7.jpg",
  },
  {
    id: 18,
    title: "Kriya Berkelanjutan 8",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Kriya Berkelanjutan 8.jpg",
  },
  {
    id: 19,
    title: "Kriya Berkelanjutan 9",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Kriya Berkelanjutan 9.jpg",
  },
  {
    id: 110,
    title: "Kriya Berkelanjutan 10",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Kriya Berkelanjutan 10.jpg",
  },
  {
    id: 111,
    title: "Kriya Berkelanjutan 11",
    category: "Analisis Tren Fashion",
    image: "/images/analisis_fashion/Kriya Berkelanjutan 11.jpg",
  },
];

const MyWorks = () => {
  const [activeFilter, setActiveFilter] = useState(categories[0]);

  // State untuk menyimpan semua gambar dari Cloudinary
  const [allPortfolioItems, setAllPortfolioItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State untuk loading

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Fungsi untuk mengambil gambar dari API
  const fetchImages = useCallback(async () => {
    setIsLoading(true);
    try {
      // Panggil API untuk setiap kategori dan gabungkan hasilnya
      const promises = categories.map((category) =>
        fetch(`/api/get-images?folder=${encodeURIComponent(category)}`).then(
          (res) => res.json()
        )
      );

      const results = await Promise.all(promises);

      // Proses dan format data yang diterima dari Cloudinary
      const formattedItems = results.flatMap((result, index) => {
        const category = categories[index];
        if (!result || result.error) {
          console.error(
            `Error fetching images for ${category}:`,
            result?.error
          );
          return [];
        }

        // Format item dari Cloudinary
        const cloudinaryItems = result.map((item) => ({
          id: item.public_id,
          title: item.public_id.split("/").pop(), // Ambil nama file sebagai title
          category: category,
          image: item.secure_url, // URL gambar dari Cloudinary
        }));

        // --- PERUBAHAN DIMULAI DI SINI ---
        // Jika kategori saat ini adalah "Ilustrasi Fashion",
        // gabungkan data lokal (moreIlustrasiFashionImage) di bagian depan.
        if (category === "Design Digital") {
          return [...moreDesignDigitalImage, ...cloudinaryItems];
        }

        if (category === "Analisis Tren Fashion") {
          return [...allAnalisisTrenFashionImage, ...cloudinaryItems];
        }

        if (category === "Ilustrasi Fashion") {
          return [...moreIlustrasiFashionImage, ...cloudinaryItems];
        }
        // --- PERUBAHAN SELESAI DI SINI ---

        // Jika bukan, kembalikan hanya data dari Cloudinary
        return cloudinaryItems;
      });

      setAllPortfolioItems(formattedItems);
    } catch (error) {
      console.error("Failed to fetch portfolio items:", error);
    }
    setIsLoading(false);
  }, []);

  // Panggil API saat komponen pertama kali dimuat
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  // Logika filter yang berjalan setelah data dari API tersedia
  useEffect(() => {
    if (allPortfolioItems.length > 0) {
      const newFilteredItems = allPortfolioItems.filter(
        (item) => item.category === activeFilter
      );
      setFilteredItems(newFilteredItems);
      setCurrentPage(1);
    }
  }, [activeFilter, allPortfolioItems]);

  const openModal = (item) => {
    setSelectedImage(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="design" className="py-20 bg-white">
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
              className={`px-4 py-2 text-sm font-semibold uppercase rounded-md transition-colors duration-300 ${
                activeFilter === category
                  ? "bg-pink-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-pink-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tampilan Loading */}
        {isLoading ? (
          <div className="text-center lg:min-h-[520px] flex justify-center items-center">
            <p className="text-gray-500 text-lg">Loading designs...</p>
          </div>
        ) : (
          <>
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
                  <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 text-center p-2">
                    <FaPlus className="text-4xl mb-2" />
                    <h3 className="text-xl font-bold capitalize">
                      {item.title
                        .replace(/[-_]/g, " ") // ganti - dan _ jadi spasi
                        .split(" ") // pisah berdasarkan spasi
                        .slice(0, 2) // ambil 2 kata pertama
                        .join(" ")}{" "}
                    </h3>
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
          </>
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
              className="absolute -top-4 -right-4 bg-pink-500 cursor-pointer text-white w-10 h-10 rounded-full flex items-center justify-center text-xl z-10"
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain max-h-[85vh]"
            />
            <div className="text-center mt-2 p-2 bg-gray-100 rounded-b-lg">
              <h3 className="text-lg font-bold text-gray-800 capitalize">
                {selectedImage.title
                  .replace(/[-_]/g, " ") // ganti - dan _ jadi spasi
                  .split(" ") // pisah berdasarkan spasi
                  .slice(0, 2) // ambil 2 kata pertama
                  .join(" ")}{" "}
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
