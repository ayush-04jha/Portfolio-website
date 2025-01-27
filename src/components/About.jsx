import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="flex bg-black flex-col md:flex-row mt-[-4rem] sm:justify-between">
  {/* Image */}
  <div className="hidden sm:block">
    <img
      src="/about-image.png"
      alt="About Me"
      className="w-[30rem] h-[30rem] ml-28"
    />
  </div>

  {/* Content */}
  <div className="w-full sm:w-[36rem] flex flex-col gap-8 px-4 sm:px-0">
    {/* Heading and Paragraph */}
    <div className="flex flex-col items-center sm:items-start">
      <h1 className="font-bold text-white text-4xl">About Me</h1>
      <br />
      <p className="text-lg text-white text-center sm:text-start">
        I am a dedicated Frontend Developer with expertise in HTML, CSS,
        JavaScript, and frameworks like Tailwind CSS and React. Currently
        upskilling in Backend development to expand my skillset, I bring a
        passion for crafting seamless user interfaces and efficient code.
        Competitive programming drives my problem-solving abilities, helping me
        refine my logical and analytical skills. I am committed to building
        innovative and impactful web solutions.
      </p>
    </div>

    {/* Education and Certification */}
    <div className="flex flex-col gap-5">
      <nav className="flex gap-5 justify-center sm:justify-start">
        <div className="flex flex-col text-white items-center">
          <NavLink>Education</NavLink>
          <div className="w-[70px] text-white h-[4px] bg-purple-500"></div>
        </div>
        <div className="flex flex-col text-white items-center">
          <NavLink>Certification</NavLink>
          <div className="w-[85px] h-[4px] bg-purple-500"></div>
        </div>
      </nav>

      <ul className="list-disc ml-5 text-center sm:text-start">
        <li className="text-white">(B.Tech) JSS Academy of Technical Education, Noida</li>
      </ul>
    </div>
  </div>
</div>

  );
}

export default About;
