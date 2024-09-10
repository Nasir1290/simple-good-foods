// import React from "react";
// import HealthAwarnessImage from "../../assets/health-awareness.png";
// import MoreProteinImage from "../../assets/more-protein.png";
// import UnEndingVarietyImage from "../../assets/unending-variety.png";

// const WhySimpleGoodFood = () => {
//   return (
//     <div className=" flex flex-col justify-center items-center mt-12">
//       <div className=" text-3xl font-bold">Why Simply Good Food </div>
//       {/* benefit wrapper */}
//       <div className=" mt-6 md:flex md:flex-row flex-col gap-9">
//         <div className=" flex flex-col justify-center items-center mt-6 shadow-md w-[345px] p-2 border">
//           <img
//             src={HealthAwarnessImage}
//             alt="health-awarness"
//             className=" h-16 w-16 mb-6"
//           />
//           <h1 className=" text-2xl font-semibold text-gray-700 mb-2">
//             Health awareness
//           </h1>
//           <p className="text-center text-small text-gray-400">
//             Our portions are bigger. Meals designed to fill you up with the
//             nutrients you need to perform at your best.
//           </p>
//         </div>

//         <div className=" flex flex-col justify-center items-center mt-6 shadow-md w-[345px] p-2 border">
//           <img
//             src={MoreProteinImage}
//             alt="more-protein"
//             className=" h-16 w-16 mb-6"
//           />
//           <h1 className=" text-2xl font-semibold text-gray-700 mb-2">
//             More Protein
//           </h1>
//           <p className="text-center text-small text-gray-400">
//             Protein-rich meals to FUEL your workouts, improve recuperation, and
//             increase outcomes.
//           </p>
//         </div>

//         <div className=" flex flex-col justify-center items-center mt-6 shadow-md w-[345px] p-2 border">
//           <img
//             src={UnEndingVarietyImage}
//             alt="unending-variety"
//             className=" h-16 w-16 mb-6"
//           />
//           <h1 className=" text-2xl font-semibold text-gray-700 mb-2">
//             Unending Variety
//           </h1>
//           <p className="text-center text-small text-gray-400">
//             Select breakfasts, snacks, and bulk proteins/sides. You can change
//             it up at any moment or stick with the same routine.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhySimpleGoodFood;



import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import HealthAwarnessImage from "../../assets/health-awareness.png";
import MoreProteinImage from "../../assets/more-protein.png";
import UnEndingVarietyImage from "../../assets/unending-variety.png";

const WhySimpleGoodFood = () => {
  useEffect(() => {
    AOS.init({ duration: 1000,}); // Initialize AOS with 1-second animation duration
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <div className="text-3xl font-bold">Why Simply Good Food </div>

      {/* benefit wrapper */}
      <div className="mt-6 md:flex md:flex-row flex-col gap-9">
        {/* Health Awareness */}
        <div
          className="flex flex-col justify-center items-center mt-6 shadow-md w-[345px] p-2 border transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
          data-aos="fade-up"
        >
          <img
            src={HealthAwarnessImage}
            alt="health-awareness"
            className="h-16 w-16 mb-6"
          />
          <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            Health awareness
          </h1>
          <p className="text-center text-small text-gray-400">
            Our portions are bigger. Meals designed to fill you up with the
            nutrients you need to perform at your best.
          </p>
        </div>

        {/* More Protein */}
        <div
          className="flex flex-col justify-center items-center mt-6 shadow-md w-[345px] p-2 border transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="200" // Delay for staggered animation
        >
          <img
            src={MoreProteinImage}
            alt="more-protein"
            className="h-16 w-16 mb-6"
          />
          <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            More Protein
          </h1>
          <p className="text-center text-small text-gray-400">
            Protein-rich meals to FUEL your workouts, improve recuperation, and
            increase outcomes.
          </p>
        </div>

        {/* Unending Variety */}
        <div
          className="flex flex-col justify-center items-center mt-6 shadow-md w-[345px] p-2 border transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="400" // Delay for staggered animation
        >
          <img
            src={UnEndingVarietyImage}
            alt="unending-variety"
            className="h-16 w-16 mb-6"
          />
          <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            Unending Variety
          </h1>
          <p className="text-center text-small text-gray-400">
            Select breakfasts, snacks, and bulk proteins/sides. You can change
            it up at any moment or stick with the same routine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhySimpleGoodFood;
