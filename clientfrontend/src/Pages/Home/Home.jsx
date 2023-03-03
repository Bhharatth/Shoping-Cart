import React from "react";
import Categories from "../../components/Categories/Categories";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import HeroImage from "../../components/HeroImage/HeroImage";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage /> 
      <Categories/>
      <div className="featuredProducts">
        <span className="featuredTitle">Featrured Products</span>
      </div>
       <FeaturedProducts /> 
    </div>
  );
};

export default Home;