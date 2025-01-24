import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function Home() {
  return (
    <div className='flex flex-row  h-screen'>
        {/* greeting and all */}
      <div className=' w-[60%] flex flex-col items-start justify-center gap-8 ps-10 '> 
        <h1 className='text-white text-8xl font-extrabold '>
          <span className='text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-primary-400 to-secondary-600'>
          Hello, I'm
          </span>
          <br />
        <TypeAnimation
        sequence={
          [
            "Ayush",
            1000,
            "Web Developer",
            1000,
            "CP Enthusiast",
            1000

          ]
        }
        wrapper="span"
        speed={50}
        repeat={Infinity}
         
        
        
        />
         </h1>
        

       
        
        <p className='text-[#ADB7BE] mb-6 text-xl'>Empowering Ideas through Technology</p>
        {/* buttons */}
        <div className='flex gap-5 flex-row'>
            <button className='border w-24 h-12 border-black bg-gradient-to-r from-primary-400 to-secondary-600 rounded-full'>Hire Me</button>
            <button className=' w-36 h-12  rounded-full border-4 bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-border '>Download CV</button>
        </div>

        
      </div>
      {/* image png */}
      <div className=' flex items-center justify-center'>
        <img src="/myimage.jpg"  alt="" 
        className='h-[320px] w-[360px] border-black rounded-full'
        />
      </div>
    </div>
  )
}

export default Home
