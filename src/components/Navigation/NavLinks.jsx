import { useEffect, useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi/index.js"
import ThemeSwitcher from "./ThemeSwitcher"
import {Links} from "./LinksArray"

const NavLinks = () => {
   
    const [open, setOpen] = useState(false);

    return (
        <>
            <ul className={` lg:flex lg:items-center   gap-x-3 text-center text-lg font-normal" ${open ? "flex flex-col  gap-y-8 fixed top-14 left-0 right-0 bottom-0 min-h-screen bg-[#ffffff] dark:bg-black text-base pt-20 pb-[120px] overflow-y-scroll " : "hidden text-sm"}`}>
                {
                    Links.map((link) => (
                        <div key={link.title}>
                            <li className={link.title === "Login" && "login-btn py-2 px-4 rounded-lg text-white "}>
                                <a href={link.location} >{link.title}</a>
                            </li>
                        </div>
                    ))
                }
                 
            <ThemeSwitcher open={open}/>
            </ul>
            <GiHamburgerMenu className={`cursor-pointer lg:hidden text-2xl `} onClick={() => setOpen(open => !open)}/>
        </>
    )
}

export default NavLinks