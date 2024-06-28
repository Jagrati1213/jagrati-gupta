import React from "react";
import educationData from "../../data/education.json";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Education() {
  AOS.init();
  return (
    <div className="experience" id="education" data-aos="fade-up">
      <h1 className="heading mb-10">03. Education</h1>
      <div className="flex lg:w-[50%] w-11/12 lg:mt-10 flex-col px-2">
        {educationData.map((curredu, index) => {
          return (
            <div key={index} className="pb-3 my-4">
              <div className="flex justify-between">
                <p className="text-md md:text-xl text-white">
                  {curredu?.university}
                </p>
                <p className="mb-0 py-1 italic text-white md:text-end text-sm">
                  {curredu?.time}
                </p>
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="text-gray-400 md:text-end md:text-[18px] text-[16px]">
                    {curredu?.course}
                  </p>
                  <p className="text-gray-400 md:text-end text-sm">
                    {curredu.score}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
