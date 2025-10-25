// eslint-disable-next-line no-unused-vars
import { motion , AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Banner = () => {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [slides]);

  if (!slides.length) return <p className="text-center">Loading...</p>;
  return (
    <div className="relative  h-[60vh] mx-auto overflow-hidden rounded">
      <AnimatePresence className="w-full">
        <motion.img
          key={slides[current].id}
          src={slides[current].image}
          alt={slides[current].title}
          className=" absolute inset-0 w-full h-full  object-fill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Text Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-6 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
          {slides[current].title}
        </h2>
        <p className="text-sm md:text-base mb-4 max-w-md font-serif">
          {slides[current].description}
        </p>
        <button className="bg-[#0A7C96] text-white px-5 py-2 rounded  font-semibold hover:bg-gray-200 hover:text-black transition">
          {slides[current].btn}
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        onClick={() =>
          setCurrent((current - 1 + slides.length) % slides.length)
        }
      >
        ‹
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        onClick={() => setCurrent((current + 1) % slides.length)}
      >
        ›
      </button>
    </div>
  );
};

export default Banner;
