import Profile from "./Profile";
import ProfClass from "./ProfClass";
import React from "react";
import { Component } from "react";
import githublogo from "../Assets/Images/github.png";
import Resume from "../Assets/Images/Resume.jpg";
import LinkedIn from "../Assets/Images/LinkedIn.png";
import Me from "../Assets/Images/Email_dp.jpg";
import Download from "../Assets/Images/download_button.jpg";
import userContext from "../utils/userContext";

class About extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     console.log("Parent - Constructor");
  //   }

  //   componentDidMount() {
  //     {
  //       console.log("Parent - component did mount");
  //     }
  //   }

  render() {
    return (
      <div className="mb-10 pb-10">
        <h1 className="flex justify-center items-center">About Me </h1>
        <div className="flex items-center justify-center">
          <img src={Me} className="w-28 h-28" alt="" />
          <div className="font-semibold text-Resto-Name">
            <ul className="list-none px-2 mx-2">
              <li>
                Hi! I'm Prathik, a frontend developer who is keen on building
                websites.
              </li>
              <li>
                I'm proficient with the latest technologies like React,
                Typescript, TailwindCSS.
              </li>{" "}
              <li>
                {" "}
                I'm always up for learning new technologies and i love
                challenges.
              </li>
              <li>I'll be adding more to this in future as I upgrade.</li>
            </ul>
          </div>
        </div>
        {/* Social hands */}
        <div className="">
          <h1 className="flex items-center justify-center">My Socials</h1>
          <div className="flex justify-evenly align-middle items-center">
            <a className="" href="https://github.com/Prathik5">
              <img src={githublogo} alt="Github" className="w-10 h-10" />
            </a>
            <a
              className=""
              href="https://www.linkedin.com/in/prathik-prakash-94a16b203/"
            >
              <img src={LinkedIn} alt="LinkedIn" className="w-12 h-12" />
            </a>

            <a href={Resume} download>
              <button className="w-fit h-fit rounded-md bg-black text-white flex items-center justify-center">
                <img src={Download} alt="Download" className="w-4 h-4" />
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
