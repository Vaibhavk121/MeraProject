"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const activeClass = "rounded border-2 border-green-400 bg-green-400 ";
  const basicButtonClass = " mx-3 my-3 px-5 py-1 rounded-full text-base text-2xl hover:bg-green-400 hover:opacity-90";

  
  return (
    <nav className="flex w-full justify-center min-h-[15vh] items-center bg-black text-white overflow-hidden ">
      <div className="flex h-max justify-center rounded-full border-2 border-green-400 text-5xl">
        <Link
          href="/"
          className={
            `${pathname === "/" ? activeClass : ""} ` + basicButtonClass 
          }
        >
          Home
        </Link>
        <Link
          href="/visualize"
          className={
            `${pathname === "/visualize" ? activeClass : ""} ` + basicButtonClass
          }
        >
          Visualize
        </Link>
        <Link
          href="/aboutus"
          className={
            `${pathname === "/aboutus" ? activeClass : ""} ` + basicButtonClass
          }
        >
          About Us
        </Link>
      </div>
    </nav>
  );
}
