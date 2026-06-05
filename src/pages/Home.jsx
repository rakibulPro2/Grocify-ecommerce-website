import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import Values from "../components/Values/Values";
import Products from "../components/Products/Products";
import Discount from "../components/Discount/Discount";
import Testomonials from "../components/Testomonials/Testomonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Testomonials />
    </>
  );
};

export default Home;
