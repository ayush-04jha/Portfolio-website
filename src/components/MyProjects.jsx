import React from 'react'
import { NavLink } from "react-router-dom";

function MyProjects() {
  return (
    <div className=' flex flex-col items-center justify-normal pt-5'>
      <h1 className='font-bold text-4xl mb-10'>My Projects & CP Achievements</h1>
      {/* buttons */}
      <div className='flex flex-row gap-20 mb-10'>
        <button className='border-[0.2rem] rounded-full p-2 border-gray-800   '>Projects</button>
        <button className='border-[0.2rem] rounded-full p-2 border-gray-800 '>Competitive Programming</button>
      </div>
      {/* projects and all */}
          <div className=' grid grid-cols-3 gap-10  p-5 '>
            {/* project 1 */}
             <div className=' rounded-t-3xl overflow-hidden w-[26rem]   '>
              <img src="/Leet-metric.png"  alt="" className='h-[15rem] w-[41rem]' />
              <div className='mt-4 pl-3'>
                <h1 className='font-bold text-2xl mb-2 '>Leet Metric App</h1>
                <NavLink><p className='text-[#ADB7BE]'>Project 1 description</p></NavLink>
              </div>
             </div>
             {/* project 2 */}
             <div className=' rounded-t-3xl overflow-hidden w-[26rem]  '>
              <img src="/TicTacToe.png" alt="" className='h-[15rem] w-[41rem]' />
              <div className='mt-4 pl-3'>
                <h1 className='font-bold text-2xl mb-2 '>Tic-Tac-Toe Game</h1>
                <NavLink><p className='text-[#ADB7BE]'>Project 2 description</p></NavLink>
              </div>
             </div>
             {/* project-3 */}
             <div className=' rounded-t-3xl overflow-hidden w-[26rem]    '>
              <img src="/Razorpay.png" alt="" className='h-[15rem] w-[41rem]' />
              <div className='mt-4 pl-3'>
                <h1 className='font-bold text-2xl mb-2 '>Razor Pay Clone</h1>
                <NavLink><p className='text-[#ADB7BE]'>Project 3 description</p></NavLink>
              </div>
             </div>
             {/* project-4 */}
             <div className=' rounded-t-3xl overflow-hidden w-[26rem] '>
              <img src="/paste-app.png" alt=""className='h-[15rem] w-[41rem]' />
              <div className='mt-4 pl-3'>
                <h1 className='font-bold text-2xl mb-2 '>Paste App</h1>
                <NavLink><p className='text-[#ADB7BE]'>Project 4 description</p></NavLink>
              </div>
             </div>
             
          </div>
    </div>
  )
}

export default MyProjects
