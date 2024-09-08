import React from "react";
import FoodImage from "../../assets/FoodImage.png";

const FoodCard = () => {
  return (
    <div className=" w-[354px] bg-[#f7f7f7] p-2 flex flex-col justify-center mt-12 rounded-md">
      <div className=" w-full">
        <img className="w-full rounded-md" src={FoodImage} alt="" />
      </div>
      <div className=" flex flex-col mt-2">
        <div className=" text-[#fdb64e] text-medium">⭐ 4/5</div>
        <div className="mt-2 font-bold text-xl text-[#5c5c5c]">Food Name</div>
        <div className=" text-[#8d758c] font-bold mt-2">$123</div>
        <button className="bg-[#6ea963] text-white py-2 text-center rounded-lg font-semibold mt-3">
          Add To Cart
        </button>
        <div className="flex justify-between items-center mx-4 text-small text-[#bf757b] mt-3">
          <span>Protein 49g</span>
          <span className=" text-black">/</span> <span> Carbs 23g</span>
          <span className=" text-black">/</span>
          <span>Fat 23g</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
