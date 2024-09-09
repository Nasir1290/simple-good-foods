import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ foodItem }) => {
  return (
    <div className="w-[354px] bg-[#f7f7f7] p-2 flex flex-col justify-center mt-4 rounded-md shadow-lg border">
      <div className="relative w-full cursor-pointer">
        <Link to={`/food-details/${foodItem?.id}`}>
          <img
            className="h-56 w-full object-cover rounded-md"
            src={foodItem?.image}
            alt={foodItem?.title}
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-200 rounded-md"></div>
        </Link>
      </div>

      <div className="flex flex-col mt-2">
        <Link className=" " to={`/food-details/${foodItem?.id}`}>
          <div className="text-[#fdb64e] text-medium">
            ⭐ {foodItem?.rating}/5
          </div>
          <div className="mt-2 font-bold text-xl text-[#5c5c5c] hover:text-indigo-600 duration-200">
            {foodItem?.title}
          </div>
          <div className="text-[#8d758c] font-bold mt-2">
            ${foodItem?.price}
          </div>
        </Link>
        <button className="bg-[#6ea963] text-white py-2 text-center rounded-lg font-semibold mt-3">
          Add To Cart
        </button>
        <div className="flex justify-between items-center mx-4 text-small text-[#bf757b] mt-3">
          <span>{foodItem?.element?.[0]}</span>
          <span className="text-black">/</span>
          <span>{foodItem?.element?.[1]}</span>
          <span className="text-black">/</span>
          <span>{foodItem?.element?.[2]}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
