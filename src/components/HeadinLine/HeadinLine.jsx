import React from "react";

const HeadinLine = (props) => {
  return (
    <div className="w-fit mx-auto mb-20">
      <h2 className="md:text-4xl text-2xl font-bold text-center">
        <span className="text-orange-500">{props.highlight}</span>{" "}
        {props.heading}
      </h2>
      <div className="w-25 h-1 bg-orange-300 mt-3 ml-auto"></div>
    </div>
  );
};

export default HeadinLine;
