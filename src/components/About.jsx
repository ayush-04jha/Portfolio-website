import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-row    justify-between">
      {/* image */}
      <div>
        <img
          src="/about-image.png"
          alt=""
          className="w-[500px] h-[500px] ml-28"
        />
      </div>
      {/* content */}
      <div className="  w-[40%] flex flex-col items-center justify-between  mr-20  relative  ">
        <h1 className="font-bold text-4xl place-content-start absolute top-0 left-7 ">
          About Me
        </h1>
        <p className="  mt-14 text-lg absolute left-7 top-5">
          I am a dedicated Frontend Developer with expertise in HTML, CSS,
          JavaScript, and frameworks like Tailwind CSS and React. Currently
          upskilling in Backend development to expand my skillset, I bring a
          passion for crafting seamless user interfaces and efficient code.
          Competitive programming drives my problem-solving abilities, helping
          me refine my logical and analytical skills. I am committed to building
          innovative and impactful web solutions.
        </p>
        {/* education and certificate */}
        <div className=" absolute bottom-32 flex left-8 flex-col gap-5">
          <nav className="flex gap-5">
            <div className="flex flex-col items-center">
              <NavLink>Education</NavLink>
              <div className="w-[70px] h-[4px] bg-purple-500"></div>
            </div>
            <div className="flex flex-col items-center">
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
