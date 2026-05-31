import React from "react";
import grocery from "../assets/grocery.png";

const Hero = () => {
  return (
    <section>
      <div className="max-w-[1300px] px-10 mx-auto ">
        <div className="flex">
          {/* hero left content */}
          <div className="flex-1">
            <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">Export best Quality...</span>
            <h2 className="text-6xl font-bold mt-5">Testy Organic <span className="text-orange-500">Fruits</span> & <span className="text-orange-500">Veggies</span> In Your City</h2>

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
