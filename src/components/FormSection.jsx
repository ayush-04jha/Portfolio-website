import React from "react";

function FormSection() {
  return (
    <div>
       <div className=" flex flex-row h-[35rem] justify-between items-center relative mt-[5rem] ">
      {/* left div */}
      <div className="w-[50%] pr-[15rem] mb-[9rem] flex flex-col gap-5 ml-10  ">
        <h1 className="font-bold text-xl">Let's Connect</h1>
        <p className="text-[#ADB7BE]">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <span className="flex flex-row mt-1 gap-3  items-center">
          <a href="">
          <img src="/github-icon.svg" alt="" />
          </a>
          <a href="">
          <img src="/linkedin-icon.svg" alt="" />
          </a>
          <a href="" className="">
            <img src="/instagram.png" alt="" className="h-[5rem] " />
          </a>
          
        </span>
      </div>
      {/* form div */}
      <div className="mr-8">
        <form action="" className=" mr-10">
          <div className="my-3">
            <p>Your email</p>
            <input type="text" placeholder="ayu.jha321@gmail.com" className="w-[40rem]  bg-slate-800 rounded-md p-[0.3rem] mt-2"/>
          </div>
          <div className="my-8">
            <p>Subject</p>
            <input type="text" placeholder="Just say Hii!" className="w-[40rem]  bg-slate-800 rounded-md p-[0.3rem] mt-2"/>
          </div>
          <div>
            <p>Message</p>
           
            <textarea name="" id="" placeholder="Lest talk about..." className="w-[40rem]  bg-slate-800 rounded-md p-[0.3rem] mt-2"></textarea>
          </div>
        </form>
        <button className=" w-[40rem] mt-8 rounded-lg h-8 bg-purple-500"> Send Message </button>
      </div>
    </div>
    </div>
    
  );
}

export default FormSection;
