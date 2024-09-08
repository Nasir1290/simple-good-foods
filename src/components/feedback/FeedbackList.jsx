import React, { useRef } from "react";
import FeedbackCard from "./FeedbackCard";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const FeedbackList = () => {
  const scrollRef = useRef(null); // Ref for the scrollable div

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

  return (
    <div className="relative mx-4 md:mx-20">
      <h1 className=" text-4xl font-bold mt-12 text-center mb-8">Feedbacks</h1>
      {/* Left Arrow (hidden on small screens) */}
      <button
        className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 rounded-full p-2 hover:bg-gray-500"
        onClick={() => scroll("left")}
      >
        <IoIosArrowDropleft size={24} />
      </button>

      {/* Scrollable Grid */}
      <div
        ref={scrollRef}
        className="grid grid-flow-row justify-center md:justify-start md:grid-flow-col overflow-x-scroll gap-4 scroll-smooth"
      >
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
      </div>

      {/* Right Arrow (hidden on small screens) */}
      <button
        className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 rounded-full p-2 hover:bg-gray-500"
        onClick={() => scroll("right")}
      >
        <IoIosArrowDropright size={24} />
      </button>
    </div>
  );
};

export default FeedbackList;
