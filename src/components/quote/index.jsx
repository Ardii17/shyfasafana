import React from "react";

// URL gambar latar dummy yang relevan
const backgroundImage =
  "https://images.pexels.com/photos/159844/cellular-phone-mobile-phone-notebook-pen-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const Quote = () => {
  return (
    <section
      id="quote"
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay Gelap */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

      {/* Konten */}
      <div className="relative container mx-auto px-6 py-28 text-white text-center">
        {/* Teks Kutipan */}
        <blockquote className="text-2xl md:text-4xl font-serif italic leading-relaxed tracking-wider max-w-4xl mx-auto">
          "Design is not just what it & feels like. Design is how it works"
        </blockquote>

        {/* Divider */}
        <div className="w-20 h-px bg-white opacity-50 mx-auto my-8"></div>

        {/* Penulis Kutipan */}
        <cite className="text-sm font-semibold tracking-widest uppercase not-italic">
          Steve Jobs
        </cite>
      </div>
    </section>
  );
};

export default Quote;
