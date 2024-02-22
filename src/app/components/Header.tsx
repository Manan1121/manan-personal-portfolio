"use client";
import exp from "constants";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "About",
        path: "#about"
    },

    {
        title: "Projects",
        path: "#projects"
    },

    {
        title: "Contact",
        path: "#contact"
    }
];

const Header = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);

    const toggleNavBar = () =>{
        setNavBarOpen(!navBarOpen);
    };

    return (
        <header className="bg-white text-black shadow-md bg-opacity-20">
            <nav className="flex flex-wrap w-screen justify-between items-center p-4 ">
                <Link href={"/"}>
                    <Image src="/Manan Logo M.png" className="h-8 w-auto " height={100} width={100} alt="logo"></Image>
                </Link>
                    <div className="mobile-menu md:hidden block">
                        <MenuOverlay navLinks={navLinks} navBarOpen={navBarOpen} toggleNavBar={toggleNavBar}></MenuOverlay>
                    </div>

                    <div className="menu hidden md:block md:w-auto" id="navBar">
                        <ul className="flex md:p-4 md:flex-row space-x-8">
                            {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}></NavLink>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                
            </nav>
        </header>
    );

};

export default Header;