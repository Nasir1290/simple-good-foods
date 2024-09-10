import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import allFoods from "../../data/foodData";
import RelatedFood from "./RelatedFood";
import Loading from "../general/Loading";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import useCart from "../../hooks/useCart";

function FoodDetail() {
  const { user, loading } = useAuth();
  const { id } = useParams();
  const [foodItem, setFoodItem] = useState(null);

  const toastValue = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  };
  const { cartData, setCartData, addToCart, removeFromCart } = useCart();

  const handleAddToCart = (event) => {
    event.preventDefault();
    const isProductInCart = cartData.some((item) => item.id === foodItem.id);
    if (isProductInCart) {
      toast.error("Product already in cart!", toastValue);
    } else {
      addToCart(foodItem);
      toast.success("Added to cart successfully!", toastValue);
    }
  };

  useEffect(() => {
    const particularFoodItem = allFoods.find(
      (food) => food.id === parseInt(id)
    );
    setFoodItem(particularFoodItem);
  }, [id]);

  if (!foodItem || loading) {
    return <Loading />; // Or a more sophisticated loading indicator
  }

  return (
    <>
      <section className="pt-4 pb-8">
        <h1 className=" text-center text-3xl font-bold mb-3 md:mb-6 ">Food Details</h1>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="slider-box w-full h-full max-lg:mx-auto mx-0">
              <div className="swiper main-slide-carousel swiper-container relative mb-6">
                {/* main Image */}
                <div className="swiper-wrapper transition-all">
                  <div className="h-auto w-auto cursor-pointer">
                    <div className=" block">
                      {/* food image */}
                      <img
                        src={foodItem.image}
                        alt="food image"
                        className="max-lg:mx-auto rounded-[5rem] border-8 border-gray-200 w-full mx-1 h-[20rem] sm:w-[40rem] sm:h-[27rem] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* main Image */}
            </div>

            {/* Details */}
            <div className="flex justify-center mt-6">
              <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-6 xl:pl-6 max-lg:mx-auto max-lg:mt-8">
                <div className="flex items-center justify-between gap-6 mb-6">
                  <div className="text">
                    {/* food name */}
                    <h2 className="font-manrope font-bold text-2xl leading-5 text-gray-500 mb-2">
                      {foodItem.title}
                    </h2>
                    {/* food category */}
                    {/* <p className="font-semibold text-base text-gray-500">
                    {foodItem.category}
                  </p> */}
                    <div className="text-[#fdb64e] text-medium mt-4">
                      ⭐ {foodItem?.rating}/5
                    </div>

                    <div className="flex justify-between items-center ml-1 font-medium text-small text-[#bf757b] mt-3">
                      <span>{foodItem?.element?.[0]}</span>
                      <span className="text-black">/</span>
                      <span>{foodItem?.element?.[1]}</span>
                      <span className="text-black">/</span>
                      <span>{foodItem?.element?.[2]}</span>
                    </div>
                  </div>

                </div>
                {/* pricing and ratings */}
                <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-2 gap-y-3">
                  <div className="flex items-center">
                    {/* food price */}
                    <h5 className="font-manrope font-bold text-2xl leading-2 ml-1 text-[#605858] ">
                      $ {foodItem.price}
                    </h5>
                    {/* food percentage */}
                  </div>
                </div>
                <div className="font-medium ml-1 mb-3 text-base md:w-1/2 text-gray-500">
                  {foodItem.description}
                </div>
                {/* pricing and ratings */}
                {/* buy now button */}
                <button onClick={handleAddToCart} className="text-center mt-3 w-full px-3 py-2 rounded-lg bg-[#6ea963] flex items-center justify-center font-semibold text-lg text-white shadow-sm shadow-transparent transition-all duration-200 hover:bg-[#7ceb69] hover:shadow-indigo-300">
                  Add To Cart
                </button>
              </div>
            </div>

            {/* Details */}
          </div>
        </div>
      </section>

      {/* related Food */}
      <RelatedFood category={foodItem.category} />
    </>
  );
}

export default FoodDetail;
