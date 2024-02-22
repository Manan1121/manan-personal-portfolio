import React from 'react'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { title } from 'process';
import NavLink from './NavLink';

interface navLinkType{
    path: string,
    title: string
}

interface menuOverlayProps{
    navLinks: navLinkType[],
    navBarOpen: boolean,
    toggleNavBar: () => void
}

const MenuOverlay: React.FC<menuOverlayProps> = ({navLinks, navBarOpen, toggleNavBar}) => {
  return (
    <div>
            <Menu 
                menuButton={
                <button onClick = {toggleNavBar}  className="flex items-center text-slate-950 px-4 py-3 border rounded mr-4 border-slate-950 hover:text-slate-600 hover:border-slate-600">
                    {!navBarOpen ? <Bars3Icon className="w-5 h-5"></Bars3Icon>: <XMarkIcon className="w-5 h-5"></XMarkIcon>}
                </button>
            }>
                {navLinks.map((link, index) => (
                    <MenuItem key={index}>
                        <NavLink href={link.path} title={link.title}></NavLink>
                    </MenuItem>
                ))}

            </Menu>

    </div>
  )
}

export default MenuOverlay