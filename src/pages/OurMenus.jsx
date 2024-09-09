import React, { useState } from "react";
import FoodList from "../components/food/FoodList";
import allFoods from "../data/foodData";

const OurMenus = () => {
  const [allProducts,setAllProducts] = useState([...allFoods]);

  const filterProducts = (event,category)=> {
    event.preventDefault();
    const newFilteredProducts = allFoods.filter((food) => food.category === category)
    setAllProducts(newFilteredProducts)
  }
  
  return (
    <div>
      <div>
        <div className=" flex gap-2 md:gap-7 justify-center items-center mt-4">
          <button
            className=" px-3 py-2 rounded-lg text-center bg-yellow-400 text-small text-white"
            onClick={() => setAllProducts(allFoods)}
          >
            Full Menus
          </button>
          <button
            className=" px-3 py-2 rounded-lg text-center bg-indigo-400 text-small text-white"
            onClick={(e) => filterProducts(e, "entree")}
          >
            Enteree
          </button>
          <button
            className=" px-3 py-2 rounded-lg text-center bg-purple-400 text-small text-white"
            onClick={(e) => filterProducts(e, "breakfast")}
          >
            Breakfast
          </button>
          <button
            className=" px-3 py-2 rounded-lg text-center bg-cyan-400 text-small text-white"
            onClick={(e) => filterProducts(e, "snacks")}
          >
            Snacks
          </button>
        </div>
      </div>
      <FoodList products={allProducts} />
    </div>
  );
};

export default OurMenus;
