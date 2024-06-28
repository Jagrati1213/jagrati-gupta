import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import workData from "../../data/works.json";

export default function Experience() {
  AOS.init();
  return (
    <div className="experience px-8 lg:px-0" id="experience" data-aos="fade-up">
      <h1 className="heading mb-10">02. Experience</h1>
      <div className="flex flex-wrap justify-center gap-x-7 gap-y-5">
        {workData.map((currWork, index) => {
          return (
            <div
              className="lg:w-[30%] border p-6 border-gray-600 rounded"
              key={index}
            >
              <div className="flex justify-between gap-y-3">
                <div className="flex flex-col gap-2">
                  <h5 className="text-md md:text-xl text-white font-bold uppercase">
                    {currWork?.company}
                  </h5>
                  <p className="text-[14px] md:text-[16px] text-gray-100 italic">
                    {currWork.position}
                  </p>
                </div>
                <p className="mb-0 py-1 italic text-white text-[14px] md:text-[16px]">
                  {currWork?.time}
                </p>
              </div>

              <p className="text-gray-400 my-3 text-[14px] md:text-[16px]">
                {currWork?.des}
              </p>

              {currWork?.workLink && (
                <p className="my-2 pl-0 text-gray-400">
                  I’ve been working with:
                </p>
              )}
              <ul className="text-gray-400 my-3 px-3  work-link">
                {/* Put works Link */}
                {currWork?.workLink?.map((currLink, index) => {
                  return (
                    <li
                      key={index}
                      className=' hover:text-white hover:underline cursor-pointer italic text-green-400 marker:content-["⚡"]'
                    >
                      <a
                        href={currLink?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {currLink?.projectName}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
