import React from "react";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div className="flex flex-col justify-center pb-[5rem] border bg-black items-center md:flex-row mb-[5rem] md:mb-[10rem] h-screen px-4 md:px-8">
    {/* Greeting and all */}
    <div className="w-full border md:w-[60%] flex  md:pt-[6rem] mb-[3rem] md:mb-0 flex-col items-center md:items-start justify-center gap-8">
      <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold text-center md:text-start">
        <span className="text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-primary-400 to-secondary-600">
          Hello, I'm
        </span>
        <br />
        <div className="text-center md:text-start">
          <TypeAnimation
            sequence={[
              "Ayush",
              1000,
              "Web Developer",
              1000,
              "CP Enthusiast",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </h1>
  
      <p className="text-[#ADB7BE] text-center md:text-start text-lg md:text-xl">
        Empowering Ideas through Technology
      </p>
  
      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
        <button className="w-[16rem] md:w-32 h-10 md:h-12 border border-black bg-gradient-to-r from-primary-400 to-secondary-600 rounded-full text-white">
          Hire Me
        </button>
        <button className="w-[16rem] md:w-36 h-10 md:h-12 rounded-full border-4 bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-border text-white">
          Download CV
        </button>
      </div>
    </div>
  
    {/* Image */}
    <div className="flex items-center justify-center">
      <img
        src="/myimage.jpg"
        alt="Profile"
        className="h-[200px] w-[200px] md:h-[320px] md:w-[360px] border-black rounded-full"
      />
    </div>
  </div>
  
  );
}

export default Home;
