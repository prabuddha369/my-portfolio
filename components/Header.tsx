"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Eagle_Lake } from "next/font/google";
import NavItems from "./NavItems";
import Link from "next/link";
import MobileNav from "./MobileNavs";
const eagle_lake = Eagle_Lake({ weight: "400", subsets: ["latin"] });

export const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0)");
  const setOpen = () => {
    console.log("Clicked");
  };

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      const isTop = window.scrollY === 0;
      setShow(window.scrollY < lastScrollY || isTop);
      setLastScrollY(window.scrollY);
      setBgColor(isTop ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.9)");
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <header
      id="home"
      className={`text-base rounded-b-xl ps-5 pe-3 py-3 flex justify-between items-center top-0 sticky z-10 transition-transform duration-300 transform ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ backgroundColor: bgColor }}
    >
      <Link href="#">
        <div
          className={`${eagle_lake.className} md:ms-5 text-2xl text-[#eabf3e] p-2 rounded-xl`}
        >
          P.C
        </div>
      </Link>
      <nav className="w-[70%] ms-10 flex gap-14 hidden md:block">
        <NavItems setOpen={setOpen} />
      </nav>
      <div className="w-1/2 flex flex-row justify-end">
        <Link href="/My_Resume.pdf" target="blank" rel="noopener noreferrer">
          <button className="bg-[#eabf3e] text-black px-4 p-2 text-xs md:text-lg rounded-xl md:me-2 me-5">
            My Resume
          </button>
        </Link>
        <div className="flex justify-end gap-3 md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
