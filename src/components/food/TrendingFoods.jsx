// import React, { useRef } from "react";
// import FoodCard from "./FoodCard";
// import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
// import allFoods from "../../data/foodData";

// const TrendingFoods = () => {
//   const scrollRef = useRef(null);
//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth } = scrollRef.current;
//       const scrollTo =
//         direction === "left"
//           ? scrollLeft - clientWidth
//           : scrollLeft + clientWidth;
//       scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
//     }
//   };

//   const trendingFoods = allFoods.filter((food) => food.rating > 4.6);
//   return (
//     <div className="relative mx-4 md:mx-20">
//       <h1 className=" text-4xl font-bold mt-12 text-center">Trending Foods</h1>
//       {/* Left Arrow (hidden on small screens) */}
//       <button
//         className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 rounded-full p-2 hover:bg-gray-500"
//         onClick={() => scroll("left")}
//       >
//         <IoIosArrowDropleft size={24} />
//       </button>

//       {/* Scrollable Grid */}
//       <div
//         ref={scrollRef}
//         className="grid grid-flow-row justify-center md:justify-start md:grid-flow-col overflow-x-scroll gap-4 scroll-smooth"
//       >
//         {trendingFoods.map((foodItem, index) => (
//           <FoodCard foodItem={foodItem} key={index} />
//         ))}
//       </div>

//       {/* Right Arrow (hidden on small screens) */}
//       <button
//         className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 rounded-full p-2 hover:bg-gray-500"
//         onClick={() => scroll("right")}
//       >
//         <IoIosArrowDropright size={24} />
//       </button>
//     </div>
//   );
// };

// export default TrendingFoods;


import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import FoodCard from "./FoodCard";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import allFoods from "../../data/foodData";

const TrendingFoods = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with 1-second animation duration
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const trendingFoods = allFoods.filter((food) => food.rating > 4.6);
  return (
    <div
      className="relative mx-4 md:mx-20"
      data-aos="fade-up" // AOS fade-up animation for the whole section
    >
      <h1 className="text-4xl font-bold mt-12 text-center">Trending Foods</h1>

      {/* Left Arrow (hidden on small screens) */}
      <button
        className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 rounded-full p-2 hover:bg-gray-500 hover:scale-110 transition-transform duration-300 ease-in-out"
        onClick={() => scroll("left")}
      >
        <IoIosArrowDropleft size={24} />
      </button>

      {/* Scrollable Grid */}
      <div
        ref={scrollRef}
        className="grid grid-flow-row justify-center md:justify-start md:grid-flow-col overflow-x-scroll gap-4 scroll-smooth"
      >
        {trendingFoods.map((foodItem, index) => (
          <div
            className="transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
            key={index}
          >
            <FoodCard foodItem={foodItem} />
          </div>
        ))}
      </div>

      {/* Right Arrow (hidden on small screens) */}
      <button
        className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 rounded-full p-2 hover:bg-gray-500 hover:scale-110 transition-transform duration-300 ease-in-out"
        onClick={() => scroll("right")}
      >
        <IoIosArrowDropright size={24} />
      </button>
    </div>
  );
};

export default TrendingFoods;
