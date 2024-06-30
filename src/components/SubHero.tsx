"use client";
import { FaAngleRight, FaAnglesDown } from "react-icons/fa6";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MedCube from "@/components/objects/MedCube";
import { FaAngleLeft } from "react-icons/fa6";
import SubNavbar from "@/components/nav-footer/SubNavbar";

interface heroType{
    title:string,
    content:string,
    leftLink:string,
    leftTitle:string, 
    rightLink:string,
    rightTitle:string
}

const linkButtonClass =
  "flex h-full w-[25rem] rounded-t-md items-center justify-center border-[1px] border-black py-2 bg-white opacity-70 hover:opacity-90 active:scale-[0.9] duration-200 ";

export default function SubHero({title,content,leftLink,leftTitle,rightLink,rightTitle}:heroType) {
  const [isHoverLeft, setIsHoverLeft] = useState(false);
  const [isHoverRight, setIsHoverRight] = useState(false);
  return (
    <>
      <SubNavbar />
      <section className="relative flex h-[85vh] flex-col items-center gap-10 justify-around overflow-hidden text-white">
        <h1 className="p-10 text-6xl">{title}</h1>
        <p className="w-[60%] text-center text-2xl">
          {content}
        </p>
        <Button variant={"secondary"} className="text-lg">
          Visualise it!
        </Button>
        <Link href={"#new"} className="flex items-center gap-2">
          <FaAnglesDown size={"1.5rem"} />
          <p className="text-lg">Scroll down</p>
        </Link>
        <MedCube
          height={"h-[500px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[19rem]"
          left="left-[2%]"
          right=""
        />
        <MedCube
          height={"h-[500px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[14rem]"
          left="left-[12%]"
          right=""
        />
        <MedCube
          height={"h-[500px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[9rem]"
          left="left-[22%]"
          right=""
        />
        <MedCube
          height={"h-[500px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[19rem]"
          left="right-[8%]"
          right=""
        />
        <MedCube
          height={"h-[500px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[14rem]"
          left="right-[18%]"
          right=""
        />
        <MedCube
          height={"h-[500px]"}
          barwidth={"w-[90px]"}
          topbarwidth={"w-[104px]"}
          topbarheight={"h-[90px]"}
          wtop=""
          bottom="bottom-[9rem]"
          left="right-[28%]"
          right=""
        />
        <div className="absolute bottom-0 flex w-full justify-between text-3xl font-thin text-black">
          <Link
            href={`/${leftLink}`}
            className={linkButtonClass}
            onMouseEnter={() => setIsHoverLeft(true)}
            onMouseLeave={() => setIsHoverLeft(false)}
          >
            <div
              className={
                "flex items-center duration-100 " +
                `${isHoverLeft ? "translate-y-0" : "translate-y-[3rem]"} `
              }
            >
              <FaAngleLeft size={"2rem"} /> <p>{leftTitle}</p>
            </div>
          </Link>

          <Link
            href={`/${rightLink}`}
            className={linkButtonClass}
            onMouseEnter={() => setIsHoverRight(true)}
            onMouseLeave={() => setIsHoverRight(false)}
          >
            <div
              className={
                "flex items-center duration-100 " +
                `${isHoverRight ? "translate-y-0" : "translate-y-[3rem]"} `
              }
            >
              <p>{rightTitle}</p> <FaAngleRight size={"2rem"} />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
