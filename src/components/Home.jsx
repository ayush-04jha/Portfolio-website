import React from "react";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div className="flex flex-col  justify-center items-center md:flex-row mb-[20rem] sm:mb-[5rem] h-screen">
      {/* greeting and all */}
      <div className=" w-[60%] flex pt-[6rem] sm:pt-[1rem] mb-[5rem] flex-col items-start self-center justify-center gap-8 pl-10 sm:pl-0 ">
        <h1 className="text-white   text-4xl sm:text-8xl font-extrabold ">
          <span className="text-transparent pl-[2.6rem] sm:pl-[0rem] bg-clip-text font-extrabold bg-gradient-to-r from-primary-400 to-secondary-600">
            Hello, I'm
          </span>
          <br />
          <div className="text-center sm:text-start">
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

        <p className="text-[#ADB7BE] mb-6 text-center text-xl">
          Empowering Ideas through Technology
        </p>
        {/* buttons */}
        <div className="flex gap-5 flex-col items-center self-center sm:self-start sm:flex-row">
          <button className="border w-[25rem] h-[2.5rem] sm:w-24 sm:h-12  border-black bg-gradient-to-r from-primary-400 to-secondary-600 rounded-full">
            Hire Me
          </button>
          <button className=" w-[25rem] h-[2.5rem] sm:w-36 sm:h-12  rounded-full border-4 bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-border ">
            Download CV
          </button>
        </div>
      </div>
      {/* image png */}
      <div className=" flex items-center justify-center">
        <img
          src="/myimage.jpg"
          alt=""
          className="h-[320px] w-[360px] border-black rounded-full"
        />
      </div>
    </div>
  );
}

export default Home;
