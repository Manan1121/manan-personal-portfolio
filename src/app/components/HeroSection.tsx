'use client';
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
 import { faFile } from "@fortawesome/free-solid-svg-icons/faFile";

import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="flex flex-row ">
                <h1 className=" md:text-6xl text-4xl font-extrabold">Manan Shah</h1>
                <h2 className=" md:text-4xl text-xl font-bold pl-4 ">/ˈmʌnən/</h2>
            </div>

            {
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'I am a computer science student',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'I am a web developer',
                        1000,
                        'I am a software developer',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block', fontFamily: 'serif' }}
                    repeat={2}
                />
            }
            <div className=" flex flex-row">
                <a href="https://github.com/Manan1121" target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare} className=" font-bold size-12 hover:text-charcoal md:size-14"></FontAwesomeIcon>
                </a>
                <a href="https://www.linkedin.com/in/manan-shah12" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className=" font-bold size-12 md:size-14 hover:text-charcoal"></FontAwesomeIcon>
                </a>
                <a href="/MananResumeMain.pdf" target="_blank" className="flex items-center justify-center bg-white border border-gray-300 rounded-full px-4 py-0 shadow-lg hover:shadow-xl hover:bg-charcoal hover:text-white transition-shadow duration-300 m-2">
                    <div className="hover:text-white">
                    <FontAwesomeIcon icon={faFile} className="text-black hover:text-white" />
                    <span className="text-sm font-medium text-black ml-2 font-helvetica font-bold hover:text-white">My Resume</span>
                    </div>
                    </a>
                    
            </div>

            <div className="flex-1 flex justify-end items-center mt-8 md:mt-0 md:ml-4 mb-10">
        <div className="w-1/2 max-w-xs md:max-w-sm lg:max-w-md">
          <Image
            src="/MananPhoto-removebg.png" // Adjust the path to your image
            alt="Manan Shah"
            width={500}
            height={600}
            layout="responsive"
            className="rounded-full border-black border-4 shadow-lg shadow-black hidden md:flex"
          />
        </div>
      </div>

        </section>
    )
}

export default HeroSection;