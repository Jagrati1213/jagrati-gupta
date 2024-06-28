import React, { useState } from "react";
import FooterLink from "../Footer/FooterLink";
import projectData from "../../data/projects.json";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Project() {
  const [showProjects, setShowProjects] = useState(3);
  const toggleShowBtn = () => {
    if (showProjects < projectData.length - 1) {
      setShowProjects(projectData.length);
    } else {
      setShowProjects(3);
    }
  };
  AOS.init();
  return (
    <div
      className="w-full py-10 flex flex-col justify-center items-center m-auto"
      id="project"
      data-aos="fade-up"
    >
      <h1 className="heading">04. Worthy Projects</h1>

      <div className="project-container lg:w-[80%]">
        {projectData?.slice(0, showProjects).map((currEle, idx) => {
          return (
            <div key={idx} className={`project-card group`}>
              <a href={currEle?.projectLink} target="_blank">
                <div className="card-header">
                  <div className="flex justify-between text-xl mb-2">
                    <span className="text-[#93f6dd] text-3xl">
                      <ion-icon name="folder-outline"></ion-icon>
                    </span>
                    <span className="text-white">
                      <a href={currEle?.projectLink} target="_blank">
                        <ion-icon name="share-social-outline"></ion-icon>
                      </a>
                    </span>
                  </div>

                  <h6 className="project-title">{currEle?.title}</h6>
                  <p className="text-sm mb-2 text-gray-400">{currEle?.des}</p>
                </div>
                <ul className="flex flex-wrap justify-between items-center text-[#93f6dd]">
                  {currEle?.skill?.map((currSkill, index) => {
                    return (
                      <li
                        key={index}
                        className="text-xs lg:text-sm tracking-wide mx-3 my-1"
                      >
                        {currSkill}
                      </li>
                    );
                  })}
                </ul>
              </a>
            </div>
          );
        })}
      </div>

      <button onClick={toggleShowBtn} className="show-btn">
        {showProjects < projectData.length - 1 ? "Show More" : "Show Less"}
      </button>

      <div className="profile-links flex lg:w-[60%] w-[80%] justify-center">
        <FooterLink
          link="https://github.com/Jagrati1213"
          iconName="logo-github"
        />
        <FooterLink
          link="https://www.linkedin.com/in/jagrati-gupta-abbb43217/"
          iconName="logo-linkedin"
        />
        <FooterLink link="https://twitter.com/home" iconName="logo-twitter" />
      </div>
    </div>
  );
}
