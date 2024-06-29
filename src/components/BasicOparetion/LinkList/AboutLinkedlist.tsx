"use client";

import { Button } from '@/components/ui/button';
import React, { useRef } from 'react';
import SameCube from '@/components/objects/SameCube';
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';
import './LinkedListFunction.css';


const AboutLinklist = () => {
  const targetSectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkButtonClass = 
    "flex h-full items-center justify-around border-[1px] border-black py-2 bg-white opacity-70 hover:opacity-90 active:scale-[0.9] duration-200 px-4";

  return (
    <>
    <section className='  h-screen w-screen bg-black flex justify-center items-center relative'>
    <div className='rounded-md h-[250px] w-[620px] bg-black bg-opacity-50 relative flex flex-col items-center justify-center p-4'>
          <h2 className='text-white  font-bold'>Linked List</h2>
          <p className='text-white text-center mt-5'>
            A linked list is a dynamic data structure where each element (node) contains data and a pointer to the next node, allowing efficient insertions and deletions but requiring sequential access. Types include singly, doubly, and circular linked lists.
          </p>
          <Button
            className='mt-7 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={handleScroll}
          >
            Visualize it!
          </Button>
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <SameCube
            height={"h-[350px]"}
            barwidth={"w-[70px]"}
            topbarwidth={"w-[80px]"}
            topbarheight={"h-[70px]"}
            wtop=""
            bottom="bottom-[13rem]"
            left=""
            right="right-[26vh]"
          />
          <SameCube
            height={"h-[350px]"}
            barwidth={"w-[70px]"}
            topbarwidth={"w-[80px]"}
            topbarheight={"h-[70px]"}
            wtop=""
            bottom="bottom-[10rem]"
            left=""
            right="right-[42vh]"
          />
          <SameCube
            height={"h-[350px]"}
            barwidth={"w-[70px]"}
            topbarwidth={"w-[80px]"}
            topbarheight={"h-[70px]"}
            wtop=""
            bottom="bottom-[7rem]"
            left=""
            right="right-[58vh]"
          />
          <SameCube
            height={"h-[350px]"}
            barwidth={"w-[70px]"}
            topbarwidth={"w-[80px]"}
            topbarheight={"h-[70px]"}
            wtop=""
            bottom="bottom-[13rem]"
            left="left-[1vh]"
            right=""
          />
          <SameCube
            height={"h-[350px]"}
            barwidth={"w-[70px]"}
            topbarwidth={"w-[80px]"}
            topbarheight={"h-[70px]"}
            wtop=""
            bottom="bottom-[10rem]"
            left="left-[18vh]"
            right=""
          />
          <SameCube
            height={"h-[350px]"}
            barwidth={"w-[70px]"}
            topbarwidth={"w-[80px]"}
            topbarheight={"h-[70px]"}
            wtop=""
            bottom="bottom-[7rem]"
            left="left-[34vh]"
            right=""
          />
        </div>
        <div className="absolute bottom-0 flex w-full justify-between text-3xl font-thin text-black">
          <Link href="/stacks" className={`${linkButtonClass} w-[350px] hover:slide-up`}>
            <div className="flex items-center animate-slide">
              <p>Stack</p> <GoArrowUpRight size={"3rem"} />
            </div>
          </Link>
          <Link href="#" className={`${linkButtonClass} w-[350px] hover:slide-up`}>
            <div className="flex items-center animate-slide">
              <p>Queue</p> <GoArrowUpRight size={"3rem"} />
            </div>
          </Link>
        </div>

      </section>

      {/* This is the target section to scroll to */}
      <section ref={targetSectionRef} >
      </section>
    </>
  );
}

export default AboutLinklist;
