'use client';
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const HeroSection = () =>{
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
            style={{ fontSize: '2em', display: 'inline-block', fontFamily: 'serif'}}
            repeat={2}
            />
    }
        <div className=" flex flex-row">
            <a href="github.com">
                <FontAwesomeIcon icon={faGithubSquare} className=" font-bold size-14"></FontAwesomeIcon>
            </a>
        </div>
        </section>
    )
}

export default HeroSection;