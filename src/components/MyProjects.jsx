import React from "react";
import { NavLink } from "react-router-dom";

function MyProjects() {
  return (
    <div className="flex flex-col items-center justify-normal pt-5 mb-[8rem] sm:mb-[10rem]">
  <h1 className="font-bold text-4xl border pl-[4.5rem] sm:pl-[0rem] mb-10">Projects & CP Achievements</h1>
  
  {/* Buttons */}
  <div className="flex flex-wrap justify-center gap-5 sm:gap-20 mb-10">
    <button className="border-[0.2rem] rounded-full px-5 py-2 border-gray-800">
      Projects
    </button>
    <button className="border-[0.2rem] rounded-full px-5 py-2 border-gray-800">
      Competitive Programming
    </button>
  </div>
  
  {/* Projects Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
    {/* Project 1 */}
    <div className="rounded-t-3xl overflow-hidden max-w-[22rem] mx-auto">
      <img src="/Leet-metric.png" alt="Leet Metric App" className="h-[15rem] w-full object-cover" />
      <div className="mt-4 px-3">
        <h1 className="font-bold text-2xl mb-2">Leet Metric App</h1>
        <NavLink>
          <p className="text-[#ADB7BE]">Project 1 description</p>
        </NavLink>
      </div>
    </div>

    {/* Project 2 */}
    <div className="rounded-t-3xl overflow-hidden max-w-[22rem] mx-auto">
      <img src="/TicTacToe.png" alt="Tic-Tac-Toe Game" className="h-[15rem] w-full object-cover" />
      <div className="mt-4 px-3">
        <h1 className="font-bold text-2xl mb-2">Tic-Tac-Toe Game</h1>
        <NavLink>
          <p className="text-[#ADB7BE]">Project 2 description</p>
        </NavLink>
      </div>
    </div>

    {/* Project 3 */}
    <div className="rounded-t-3xl overflow-hidden max-w-[22rem] mx-auto">
      <img src="/Razorpay.png" alt="Razor Pay Clone" className="h-[15rem] w-full object-cover" />
      <div className="mt-4 px-3">
        <h1 className="font-bold text-2xl mb-2">Razor Pay Clone</h1>
        <NavLink>
          <p className="text-[#ADB7BE]">Project 3 description</p>
        </NavLink>
      </div>
    </div>

    {/* Project 4 */}
    <div className="rounded-t-3xl overflow-hidden max-w-[22rem] mx-auto">
      <img src="/paste-app.png" alt="Paste App" className="h-[15rem] w-full object-cover" />
      <div className="mt-4 px-3">
        <h1 className="font-bold text-2xl mb-2">Paste App</h1>
        <NavLink>
          <p className="text-[#ADB7BE]">Project 4 description</p>
        </NavLink>
      </div>
    </div>
  </div>
</div>

  );
}

export default MyProjects;
