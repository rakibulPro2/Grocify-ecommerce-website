import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import Values from "../components/Values/Values";
import Products from "../components/Products/Products";
import Discount from "../components/Discount/Discount";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
    </>
  );
};

export default Home;
