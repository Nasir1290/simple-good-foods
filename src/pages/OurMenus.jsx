// import React, { useState } from "react";
// import FoodList from "../components/food/FoodList";
// import allFoods from "../data/foodData";

// const OurMenus = () => {
//   const [allProducts,setAllProducts] = useState([...allFoods]);

//   const filterProducts = (event,category)=> {
//     event.preventDefault();
//     const newFilteredProducts = allFoods.filter((food) => food.category === category)
//     setAllProducts(newFilteredProducts)
//   }
  
//   return (
//     <div>
//       <div>
//         <div className=" flex gap-2 md:gap-7 justify-center items-center mt-4">
//           <button
//             className=" px-3 py-2 rounded-lg text-center bg-yellow-400 text-small text-white"
//             onClick={() => setAllProducts(allFoods)}
//           >
//             Full Menus
//           </button>
//           <button
//             className=" px-3 py-2 rounded-lg text-center bg-indigo-400 text-small text-white"
//             onClick={(e) => filterProducts(e, "entree")}
//           >
//             Enteree
//           </button>
//           <button
//             className=" px-3 py-2 rounded-lg text-center bg-purple-400 text-small text-white"
//             onClick={(e) => filterProducts(e, "breakfast")}
//           >
//             Breakfast
//           </button>
//           <button
//             className=" px-3 py-2 rounded-lg text-center bg-cyan-400 text-small text-white"
//             onClick={(e) => filterProducts(e, "snacks")}
//           >
//             Snacks
//           </button>
//         </div>
//       </div>
//       <FoodList products={allProducts} />
//     </div>
//   );
// };

// export default OurMenus;












import React, { useState, useEffect } from "react";
import FoodList from "../components/food/FoodList";
import allFoods from "../data/foodData";
import "aos/dist/aos.css";
import AOS from "aos";

const OurMenus = () => {
  const [allProducts, setAllProducts] = useState([...allFoods]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const filterProducts = (event, category) => {
    event.preventDefault();
    const newFilteredProducts = allFoods.filter(
      (food) => food.category === category
    );
    setAllProducts(newFilteredProducts);
  };

  return (
    <div>
      <div className="mt-4" data-aos="fade-in">
        <div className="flex gap-2 md:gap-7 justify-center items-center">
          <button
            className="px-3 py-2 rounded-lg text-center bg-yellow-400 text-small text-white hover:bg-yellow-500 transition"
            onClick={() => setAllProducts(allFoods)}
          >
            Full Menus
          </button>
          <button
            className="px-3 py-2 rounded-lg text-center bg-indigo-400 text-small text-white hover:bg-indigo-500 transition"
            onClick={(e) => filterProducts(e, "entree")}
          >
            Entree
          </button>
          <button
            className="px-3 py-2 rounded-lg text-center bg-purple-400 text-small text-white hover:bg-purple-500 transition"
            onClick={(e) => filterProducts(e, "breakfast")}
          >
            Breakfast
          </button>
          <button
            className="px-3 py-2 rounded-lg text-center bg-cyan-400 text-small text-white hover:bg-cyan-500 transition"
            onClick={(e) => filterProducts(e, "snacks")}
          >
            Snacks
          </button>
        </div>
      </div>
      <FoodList data-aos="fade-in" products={allProducts} />
    </div>
  );
};

export default OurMenus;
