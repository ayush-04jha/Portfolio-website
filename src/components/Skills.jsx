import React from "react";

function Skills() {
  return (
    <div className="border rounded-full border-gray-800 mt-14 mb-10">
  <h1 className="font-bold text-4xl text-center mb-5">Skills</h1>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 px-4 sm:px-8 pb-6">
    <img src="/html.png" alt="HTML" className="h-[90px] w-[90px] mx-auto" />
    <img src="/css.png" alt="CSS" className="h-[90px] w-[90px] mx-auto" />
    <img
      src="/javascript.png"
      alt="JavaScript"
      className="h-[90px] w-[90px] mx-auto"
    />
    <img src="/react.png" alt="React" className="h-[90px] w-[90px] mx-auto" />
    <img
      src="/tailwind.png"
      alt="Tailwind CSS"
      className="h-[90px] w-[90px] mx-auto"
    />
    <img src="/cpp.png" alt="C++" className="h-[90px] w-[90px] mx-auto" />
  </div>
</div>

  );
}

export default Skills;
