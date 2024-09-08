import React from "react";
import NavBar from "../shared/navbar/NavBar";
import TopNavbar from "../shared/navbar/TopNavbar";
import HeroSection from "../components/home/HeroSection";
import WhySimpleGoodFood from "../components/home/WhySimpleGoodFood";
import TrendingFoods from "../components/food/TrendingFoods";
import SubHeroSection from "../components/home/SubHeroSection";
import Faq from "../components/home/Faq";
import FeedbackList from "../components/feedback/FeedbackList";
import Footer from "../shared/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <TopNavbar />
      <NavBar />
      <HeroSection />
      <WhySimpleGoodFood />
      <TrendingFoods />
      <SubHeroSection />
      <Faq/>
      <FeedbackList/>
      <Footer/>
    </div>
  );
};

export default HomePage;
