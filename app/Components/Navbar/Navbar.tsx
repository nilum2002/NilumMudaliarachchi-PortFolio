"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
    const [isFixed, setisFixed] = useState(false);
    const [darkMod, setDarkMode] = useState(true);

  return(
    <>
        <div className={`w-full transition-all duration-500 ${isFixed? "fixed top-0 left-0 -z-100 bg-(--bg-color) backdrop-blur-lg": ""}`} >
            <div className="flex items-center justify-between px-[8%] lg:px-[16%] py-5">
                {/*logo*/}
                <Link href = "/" className="text-3xl font-bold font-geist-mono text-(--prim-color)">
                Nilum <span className="text-(--white)"> Mudaliarachchi</span>
                </Link>

                {/*Desktop Nav */}
                <nav className="hidden lg:flex space-x-6 menu-link relative ">
                    Menu
                </nav>
                {/*right section*/}
                <div className="flex items-center gap-4">
                    <Link href = "/">
                        <button className="btn nav-btn text-white font-medium px-4 py-2 rounded-md hover:opacity-90 transition">
                            hidden
                            
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    </>

  )

}
