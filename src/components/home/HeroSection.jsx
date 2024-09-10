// import React from "react";

// import HeroImage from "../../assets/herosideimage.png";
// import HeroBgImage from "../../assets/herobg.png";
// import { MdOutlineArrowOutward } from "react-icons/md";
// import { Link } from "react-router-dom";

// const HeroSection = () => {
//   return (
//     // main div
//     <div
//       className={` md:flex-row flex flex-col justify-center md:mx-16  lg:mx-24 mx-8 mt-4 bg-cover bg-center md:gap-16 lg:gap-24`}
//       style={{ backgroundImage: `url(${HeroBgImage})` }}
//     >
//       {/* text content div */}
//       <div className=" flex flex-col justify-center md:items-start items-center mb-12 md:mb-0">
//         <div className=" text-3xl font-semibold md:text-4xl lg:text-5xl md:font-bold">
//           {" "}
//           Keep track Of
//         </div>
//         <div className=" text-3xl font-semibold md:text-4xl lg:text-5xl md:font-bold text-[#6ea963]">
//           Fitness Goal
//         </div>
//         <div className=" font-medium text-xl mt-4">
//           Order on Simply Good Food
//         </div>
//         <div>
//           <Link to="/ourmenus">
//             <button className=" flex justify-center items-center gap-2 px-3 py-2 hover:bg-[#ffc772] bg-[#fdb64e] md:mt-8 mt-4 rounded-lg">
//               Explore Menu <MdOutlineArrowOutward className=" inline" />{" "}
//             </button>
//           </Link>
//         </div>
//       </div>
//       {/* image content div */}
//       <div className=" flex justify-center items-center">
//         <div className=" border-[1.5rem] md:border-[2rem] p-5 md:p-8 border-[#6ea963] rounded-full">
//           <img
//             className=" w-48 md:w-52 lg:w-60 h-48 md:h-52 lg:h-60"
//             src={HeroImage}
//             alt="herosection image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;




import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import HeroImage from "../../assets/herosideimage.png";
import HeroBgImage from "../../assets/herobg.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with duration and once animation
  }, []);

  return (
    // main div
    <div
      className={`md:flex-row flex flex-col justify-center md:mx-16 lg:mx-24 mx-8 mt-4 bg-cover bg-center md:gap-16 lg:gap-24`}
      style={{ backgroundImage: `url(${HeroBgImage})` }}
      data-aos="fade-up" // AOS animation type
    >
      {/* text content div */}
      <div className="flex flex-col justify-center md:items-start items-center mb-12 md:mb-0">
        <div
          className="text-3xl font-semibold md:text-4xl lg:text-5xl md:font-bold"
          data-aos="fade-right" // AOS animation for text
        >
          Keep track Of
        </div>
        <div
          className="text-3xl font-semibold md:text-4xl lg:text-5xl md:font-bold text-[#6ea963]"
          data-aos="fade-right" // AOS animation for text
        >
          Fitness Goal
        </div>
        <div className="font-medium text-xl mt-4" data-aos="fade-right">
          Order on Simply Good Food
        </div>
        <div data-aos="fade-right">
          <Link to="/ourmenus">
            <button className="flex justify-center items-center gap-2 px-3 py-2 hover:bg-[#ffc772] bg-[#fdb64e] md:mt-8 mt-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out shadow-md hover:shadow-lg">
              Explore Menu <MdOutlineArrowOutward className="inline" />{" "}
            </button>
          </Link>
        </div>
      </div>
      {/* image content div */}
      <div className="flex justify-center items-center" data-aos="zoom-in">
        <div className="border-[1.5rem] md:border-[2rem] p-5 md:p-8 border-[#6ea963] rounded-full hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
          <img
            className="w-48 md:w-52 lg:w-60 h-48 md:h-52 lg:h-60"
            src={HeroImage}
            alt="herosection image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
