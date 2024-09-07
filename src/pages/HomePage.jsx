import React from "react";
import NavBar from "../shared/navbar/NavBar";
import TopNavbar from "../shared/navbar/TopNavbar";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <div>
      <TopNavbar />
      <NavBar />
      <HeroSection/>
    </div>
  );
};

export default HomePage;
