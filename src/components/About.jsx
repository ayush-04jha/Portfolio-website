import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-col md:flex-row mt-[-8rem]   sm:justify-between">
      {/* image */}
      <div>
        <img
          src="/about-image.png"
          alt=""
          className="w-[30rem] h-[30rem] ml-28 hidden sm:block"
        />
      </div>
      {/* content */}
      <div className="  w-[36rem] flex flex-col  mr-20 gap-[2rem]  ">
        {/* heading para div */}
        <div className=" flex flex-col items-center sm:items-start  ">
        <h1 className="font-bold text-4xl   w-fit  ">
          About Me
        </h1>
        <br />
        <p className="  text-lg   px-[1.5rem] sm:px-[0rem] ">
          I am a dedicated Frontend Developer with expertise in HTML, CSS,
          JavaScript, and frameworks like Tailwind CSS and React. Currently
          upskilling in Backend development to expand my skillset, I bring a
          passion for crafting seamless user interfaces and efficient code.
          Competitive programming drives my problem-solving abilities, helping
          me refine my logical and analytical skills. I am committed to building
          innovative and impactful web solutions.
        </p>
        </div>
        
        {/* education and certificate */}
        <div className="  flex pl-[1.3rem] sm:pl-[0rem] flex-col gap-5">
          <nav className="flex gap-5  ">
            <div className="flex flex-col  items-center">
              <NavLink>Education</NavLink>
              <div className="w-[70px] h-[4px] bg-purple-500"></div>
            </div>
            <div className="flex flex-col  items-center">
              <NavLink>Certification</NavLink>
              <div className="w-[85px] h-[4px] bg-purple-500"></div>
            </div>
          </nav>
          
            <ul className="list-disc ml-5">
                <li>(B.tech) JSS Academy of Technical Education, Noida</li>
            </ul>
          
        </div>
      </div>
    </div>
  );
}

export default About;
