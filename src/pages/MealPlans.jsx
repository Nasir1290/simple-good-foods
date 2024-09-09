import React from "react";
import allFoods from "../data/foodData";

const MealPlans = () => {
  const trendingFoods = allFoods.filter((food) => food.rating > 4.6);
  return (
    <div className="bg-[#f7f7f7] py-8">
      <h1 className=" text-center text-3xl font-semibold mb-8">
        Select Your Meal Plans
      </h1>
      <div className="md:flex md:flex-row gap-8 md:px-[12rem]">
        {/* left wrapper */}
        <div className="flex flex-col gap-2 md:w-1/2 items-center bg-white shadow-md border rounded-md p-4">
          <div className="flex gap-2 justify-center items-center">
            <button className="py-3 text-small px-2 bg-yellow-400 justify-center text-white rounded-lg inline-flex">
              Small Meal
            </button>
            <button className="px-4 py-2 bg-gray-400 text-white rounded-lg inline-flex">
              - 1 +
            </button>
          </div>
          <button className="py-3 w-full md:w-[65%] text-small px-2 bg-gray-100 shadow border justify-center rounded-lg inline-flex">
            Small Paleo Meal
          </button>
          <button className="py-3 w-full md:w-[65%] text-small px-2 bg-gray-100 shadow border justify-center rounded-lg inline-flex">
            Medium Meal
          </button>
          <button className="py-3 w-full md:w-[65%] text-small px-2 bg-gray-100 shadow border justify-center rounded-lg inline-flex">
            Medium Paleo Meal
          </button>
          <button className="py-3 w-full md:w-[65%] text-small px-2 bg-gray-100 shadow border justify-center rounded-lg inline-flex">
            Large Meal
          </button>
          <button className="py-3 w-full md:w-[65%] text-small px-2 bg-gray-100 shadow border justify-center rounded-lg inline-flex">
            Large Paleo Meal
          </button>
        </div>
        {/* right wrapper */}
        <div className=" bg-white p-4 rounded-md shadow-md border h-full md:w-1/2">
          {/* upper site */}
          <div className="flex flex-col justify-center">
            <div className=" bg-gray-200 px-4 py-2 rounded-lg flex justify-between">
              <p className=" text-red-500">Subtotal :</p>
              <p className=" text-red-500">$150.00</p>
            </div>
            <button className=" uppercase px-[6.5rem] py-2 mb-3 text-white bg-[#6ea963] rounded-lg mt-3">
              confirm meals
            </button>
          </div>
          <hr />
          {/* downside */}
          <div>
            <h3 className=" text-2xl font-semibold mb-3 text-center">
              meal details
            </h3>
            <div className=" flex flex-col gap-y-8">
              {/* each item */}
              {trendingFoods.map((foodItem, index) => (
                <div key={index} className=" flex gap-4 items-center">
                  {/* image */}
                  <div>
                    <img
                      className=" w-12 h-12 object-cover rounded-md"
                      src={foodItem.image}
                      alt="meal"
                    />
                  </div>
                  {/* about info */}
                  <div>
                    <div className=" flex gap-4 items-center justify-between">
                      <h3 className=" text-lg font-semibold">
                        {foodItem.title}
                      </h3>
                      <div className="text-[#fdb64e] text-small">
                        ⭐ &nbsp;{foodItem?.rating}&nbsp;/&nbsp;5
                      </div>
                    </div>
                    {/* element */}
                    <div className="flex justify-between mt-1 items-center text-small text-[#bf757b]">
                      <span>{foodItem?.element?.[0]}</span>
                      <span className="text-black mx-1"> / </span>
                      <span>{foodItem?.element?.[1]}</span>
                      <span className="text-black mx-1"> /</span>
                      <span>{foodItem?.element?.[2]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlans;
