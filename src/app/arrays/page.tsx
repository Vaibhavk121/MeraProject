"use client";
import { FaAngleRight, FaAnglesDown } from "react-icons/fa6";
import React, { useState } from "react";
import ArrayFunction from "@/components/BasicOparetion/arrays/ArrayFunction";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MedCube from "@/components/objects/MedCube";
import { FaAngleLeft } from "react-icons/fa6";

const linkButtonClass =
  "flex h-full w-[25rem] rounded-t-md items-center justify-center border-[1px] border-black py-2 bg-white opacity-70 hover:opacity-90 active:scale-[0.9] duration-200 ";

export default function Page() {
  const [isHoverLeft, setIsHoverLeft] = useState(false);
  const [isHoverRight, setIsHoverRight] = useState(false);
  return (
    <main className="">
      <section className="relative flex h-[85vh] flex-col items-center justify-around overflow-hidden text-white">
        <h1 className="p-10 text-6xl">Arrays</h1>
        <p className="w-[60%] text-center text-2xl">
          Arrays are fundamental to virtually every programming language and
          application. They Provide a simple yet powerful way to store and
          manipulate data.
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
            href="/stacks"
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
              <FaAngleLeft size={"2rem"} /> <p>Stack</p>
            </div>
          </Link>

          <Link
            href="/linkedList"
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
              <p>Linked List</p> <FaAngleRight size={"2rem"} />
            </div>
          </Link>
        </div>
      </section>
      <section className="new h-[100vh] bg-white"></section>
    </main>
  );
}
