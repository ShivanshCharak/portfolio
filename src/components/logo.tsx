import React from "react";
import "./RotatingLogo.css"; // Add this for custom animation

const RotatingLogo = () => {
  return (
    <div className="w-32 h-32 relative flex items-center justify-center">
      <svg
        className="absolute w-full h-full spin-slow"
        viewBox="0 0 200 200"
      >
        <defs>
          <path
            id="circlePath"
            d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
          />
        </defs>
        <text>
          <textPath
            href="#circlePath"
            startOffset="0%"
            spacing="auto"
            letterSpacing="1.2"
            className="fill-white uppercase text-[16px] font-bold"
          >
            Shivansh Charak · Developer  · Shivansh Charak 
          </textPath>
        </text>
      </svg>
      <span className="text-white text-2xl z-10">✦</span>
    </div>
  );
};

export default RotatingLogo;
