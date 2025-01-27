import React from "react";

function Skills() {
  return (
    <div className="border rounded-full  border-gray-800 mt-14 mb-10">
      <h1 className="font-bold text-4xl text-center mb-5">Skills</h1>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-6 pl-[8rem]  pb-6 ">
        <img src="/html.png" alt="" className="h-[90px] w-[90px]" />
        <img src="/css.png" alt="" className="h-[90px] w-[90px]" />
        <img src="/javascript.png" alt="" className="h-[90px] w-[90px]" />
        <img src="/react.png" alt="" className="h-[90px] w-[90px]" />
        <img src="/tailwind.png" alt="" className="h-[90px] w-[90px]" />
        <img src="/cpp.png" alt="" className="h-[90px] w-[90px]" />
      </div>
    </div>
  );
}

export default Skills;
