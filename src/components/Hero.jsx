import React from "react";
import grocery from "../assets/grocery.png";
import Button from "./Button/Button";

const Hero = () => {
  return (
    <section>
      <div className="min-h-screen max-w-[1300px] px-10 mx-auto ">
        <div className="flex md:flex-row flex-col items-center mt-5">
          {/* hero left content */}
          <div className="flex-1 mt-5">
            <span className="bg-orange-200 text-orange-500 text-sm px-5 py-2 mt-10 rounded-full">Export best Quality...</span>
            <h2 className="md:text-6xl text-4xl font-bold my-5">Testy Organic <span className="text-orange-500">Fruits</span> & <span className="text-orange-500">Veggies</span> In Your City</h2>

            <p className="text-zinc-600 md:text-lg text-sm md:mb-10 mb-4">Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
            <Button content="Shop Now" />

          </div>

          {/* hero right img */}
          <div className="flex-1">
            <img src={grocery} alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
