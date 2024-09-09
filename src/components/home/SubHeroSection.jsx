import React from "react";
import SubHeroSectionImage from "../../assets/subHeroImage.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const SubHeroSection = () => {
  return (
    <div className="flex-col md:flex md:flex-row mt-12">
      <div className="bg-[#c4c4c4] md:w-[50%] flex items-center">
        {/* text wrapper */}
        <div className=" bg-white my-4 md:my-0 py-4 md:py-8 pr-4 md:pr-12 rounded-r-full">
          <div className=" ml-2 md:ml-48">
            <h3 className=" font-bold text-3xl">Make Daily Meals</h3>
            <h3 className=" font-bold text-3xl">Healthy And Moderate</h3>
            <p className=" text-small">
              Ingredients are naturally rich and full of taste
            </p>
            <Link to="/mealplans">
              <button className=" flex justify-center items-center gap-2 px-3 py-2 bg-[#6ea963] transition-all hover:bg-[#7be768] md:mt-8 mt-4 rounded-lg">
                Meal Plans <MdOutlineArrowOutward className=" inline" />{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-yellow-300 m-1 md:m-0 md:w-[50%]">
        <img
          src={SubHeroSectionImage}
          alt="sub-image"
          className=" h-full w-auto object-contain rounded-md md:rounded-none "
        />
      </div>
    </div>
  );
};

export default SubHeroSection;
