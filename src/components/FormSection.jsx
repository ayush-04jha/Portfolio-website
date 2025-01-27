import React from "react";

function FormSection() {
  return (
    <div>
  <div className="flex flex-col sm:flex-row sm:pr-[2rem] sm:justify-between items-center relative mt-[5rem] gap-y-10 sm:gap-y-0">
    {/* Left Div */}
    <div className="sm:w-[50%] px-[1rem] sm:pr-[15rem] sm:mb-[9rem] flex flex-col gap-5 sm:ml-[2rem]">
      <h1 className="self-center sm:self-start w-fit font-bold text-xl">
        Let's Connect
      </h1>
      <p className="text-[#ADB7BE]">
        I'm currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you!
      </p>
      <span className="flex flex-row mt-1 gap-3 items-center">
        <a href="">
          <img src="/github-icon.svg" alt="GitHub" />
        </a>
        <a href="">
          <img src="/linkedin-icon.svg" alt="LinkedIn" />
        </a>
        <a href="">
          <img src="/instagram.png" alt="Instagram" className="h-[3rem]" />
        </a>
      </span>
    </div>

    {/* Form Div */}
    <div className="sm:mr-8 border flex flex-col justify-center items-center">
      <form className="flex flex-col items-center justify-center gap-5">
        {/* Email Field */}
        <div className="w-full">
          <p>Your Email</p>
          <input
            type="email"
            placeholder="ayu.jha321@gmail.com"
            className="w-[90%] sm:w-[40rem] bg-slate-800 rounded-md p-2 mt-2"
          />
        </div>
        {/* Subject Field */}
        <div className="w-full">
          <p>Subject</p>
          <input
            type="text"
            placeholder="Just say Hi!"
            className="w-[90%] sm:w-[40rem] bg-slate-800 rounded-md p-2 mt-2"
          />
        </div>
        {/* Message Field */}
        <div className="w-full">
          <p>Message</p>
          <textarea
            placeholder="Let's talk about..."
            className="w-[90%] sm:w-[40rem] bg-slate-800 rounded-md p-2 mt-2"
          ></textarea>
        </div>
      </form>
      {/* Submit Button */}
      <button className="w-[90%] self-start border sm:w-[40rem] mt-8 rounded-lg h-10 bg-purple-500">
        Send Message
      </button>
    </div>
  </div>
</div>

  );
}

export default FormSection;
