import React from "react";
import HeadinLine from "../HeadinLine/HeadinLine";
import FruitsCatImg from "../../assets/fruits-and-veggies.png";
import DairyEggsCatImg from "../../assets/dairy-and-eggs.png";
import MeatSeafoodCatImg from "../../assets/meat-and-seafood.png";
import { Link } from "react-router-dom";

const Category = () => {
  const renderCard = categories.map((cat) => {
    return (
      <div key={cat.id} className="flex-1 shadow-xl rounded-xl">
        <div>
          <img src={cat.image} alt="" />
        </div>
        <div className="bg-zinc-100  pt-16 p-8">
          <h4 className="text-zinc-800 text-xl font-semibold text-center mb-4">
            {cat.title}
          </h4>
          <p className="text-zinc-800 md:text-md text-sm mb-4">
            {cat.description}
          </p>
          <div className="text-center">
            <Link
              to={cat.path}
              className="bg-gradient-to-b from-orange-400 to-orange-500 text-white md:px-6 px-4 py-2 rounded-sm hover:scale-105 hover:from-orange-600 transition-all duration-300 cursor-pointer"
            >
              See All Products
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1300px] mx-auto md:px-10 md:py-20 px-7 py-10">
        <HeadinLine highlight="Shop" heading="by Category" />

        {/* Category cards */}
        <div className="flex md:flex-row flex-col items-center justify-center gap-12">
          {renderCard}
        </div>
      </div>
    </section>
  );
};

export default Category;

const categories = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCatImg,
    path: '/fruits'
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyEggsCatImg,
    path: '/dairy'
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: MeatSeafoodCatImg,
    path: '/seafood'
  },
];
