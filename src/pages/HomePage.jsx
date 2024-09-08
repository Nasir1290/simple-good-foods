import React from "react";
import NavBar from "../shared/navbar/NavBar";
import TopNavbar from "../shared/navbar/TopNavbar";
import HeroSection from "../components/home/HeroSection";
import WhySimpleGoodFood from "../components/home/WhySimpleGoodFood";
import FoodList from "../components/food/FoodList";

const HomePage = () => {
  return (
    <div>
      <TopNavbar />
      <NavBar />
      <HeroSection/>
      <WhySimpleGoodFood/>
      <FoodList/>
    </div>
  );
};

export default HomePage;
