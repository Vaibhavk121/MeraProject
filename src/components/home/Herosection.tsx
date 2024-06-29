"use client"
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import { GoArrowUpRight } from "react-icons/go";
import HeroCubes from "../objects/HeroCubes";


export default function Hero() {

  const linkButtonClass =
    "flex h-full w-full items-center justify-around border-[1px] border-black py-2 bg-white opacity-70 hover:opacity-90 active:scale-[0.9] duration-200 ";
  return (
    <section className="flex min-h-screen flex-col items-center overflow-hidden bg-black text-white relative">
      <Navbar />
      <p className="text-7xl font-medium absolute left-[50%] top-[25%] translate-x-[-50%] translate-y-[-20%]">Snippet2Sketch</p>
      <div className="relative h-[87vh] w-full overflow-hidden ">
      <HeroCubes/>
      <div className="absolute bottom-0 flex w-full text-3xl font-thin text-black">
        <Link href="/arrays" className={linkButtonClass}>
          <p>Array</p> <GoArrowUpRight size={"3rem"} className="ml-24" />
        </Link>
        <Link href="/stacks" className={linkButtonClass}>
          <p>Stack</p> <GoArrowUpRight size={"3rem"} className="ml-24" />
        </Link>
        <Link href="#" className={linkButtonClass}>
          <p>Queue</p> <GoArrowUpRight size={"3rem"} className="ml-24" />
        </Link>
        <Link href="/linkedList" className={linkButtonClass}>
          <p>Linked List</p> <GoArrowUpRight size={"3rem"} className="ml-24" />
        </Link>
      </div>
      </div>
    </section>
  );
}
