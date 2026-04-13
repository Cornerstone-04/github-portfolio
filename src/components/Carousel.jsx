import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { carouselSlideVariants } from "../utils/animations";

const Carousel = ({ items, renderItem, gap = 32 }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent((prevCurrent) => {
      let next = prevCurrent + newDirection;
      if (next < 0) {
        next = Math.max(0, items.length - itemsPerView);
      } else if (next > items.length - itemsPerView) {
        next = 0;
      }
      return next;
    });
  };

  const visibleItems = items.slice(current, current + itemsPerView);

  return (
    <div className="w-full">
      <div
        className="relative overflow-hidden"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${itemsPerView}, 1fr)`,
          gap: `${gap}px`,
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          {visibleItems.map((item, index) => (
            <motion.div
              key={`${current}-${index}`}
              custom={direction}
              variants={carouselSlideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {renderItem(item)}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center gap-8 mt-12">
        <button
          onClick={() => paginate(-1)}
          className="border border-white p-3 hover:bg-white hover:text-dark transition-all ease-linear duration-300"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => paginate(1)}
          className="border border-white p-3 hover:bg-white hover:text-dark transition-all ease-linear duration-300"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  gap: PropTypes.number,
};

export default Carousel;
