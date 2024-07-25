"use client";
import { Button } from '@/components/ui/button';
import React, { useRef, useState } from "react";
import MedCube from '@/components/objects/MedCube';
import Link from 'next/link';
import { FaAngleLeft, FaAngleRight, FaAnglesDown } from 'react-icons/fa6';

const AboutMerge = () => {

    const handleScroll = () => {
        if (targetSectionRef.current) {
          targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const targetSectionRef = useRef<HTMLDivElement>(null);
      const [isHoverLeft, setIsHoverLeft] = useState(false);
      const [isHoverRight, setIsHoverRight] = useState(false);

      const linkButtonClass =
      "flex h-full w-[25rem] rounded-t-md items-center justify-center border-[1px] border-black py-2 bg-white opacity-70 hover:opacity-90 active:scale-[0.9] duration-200 ";
  return (
    <>
    <section className="relative flex h-[85vh] flex-col items-center justify-around overflow-hidden text-white">
      <h1 className="p-10 text-6xl">Merge Sort</h1>
      <p className="w-[60%] text-center text-2xl">

            Merge sort divides a list into halves, sorts them, and merges them back together. It sorts efficiently with 
        𝑂
        (
        𝑛
        log
        ⁡
        𝑛
        )
        O(nlogn) time complexity.
      </p>
      <Button variant={"secondary"} className="text-lg m-2"
      onClick={handleScroll}
      >
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
          href="/quicksort"
          className={linkButtonClass}
          onMouseEnter={() => setIsHoverLeft(true)}
          onMouseLeave={() => setIsHoverLeft(false)}
        >
          <div
            className={
              "flex items-center duration-100 " 
            }
          >
            <FaAngleLeft size={"2rem"} /> <p>Quick Sort</p>
          </div>
        </Link>


        <Link
          href="/arrays"
          className={linkButtonClass}
          onMouseEnter={() => setIsHoverRight(true)}
          onMouseLeave={() => setIsHoverRight(false)}
        >
          <div
            className={
              "flex items-center duration-100 w-[340px] justify-center " 
            }
          >
            <p>Array </p> <FaAngleRight size={"2rem"} />
          </div>
        </Link>
      </div>
      </section>


    {/* This is the target section to scroll to */}
    <section ref={targetSectionRef} >
    </section>
  </>
  )
}

export default AboutMerge