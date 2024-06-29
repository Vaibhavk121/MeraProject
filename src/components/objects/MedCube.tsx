"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface Bar {
  wtop: string | undefined;
  bottom: string | undefined;
  left: string | undefined;
  right: string | undefined;
  height: string | undefined;
  barwidth: string | undefined;
  topbarwidth: string | undefined;
  topbarheight: string | undefined;
}

export default function MedCube({
  height,
  barwidth,
  topbarwidth,
  topbarheight,
  wtop,
  bottom,
  left,
  right,
}: Bar) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".midBox", {
        y: 50,
        opacity: 0,
        duration: 3,
      });
    },
    { scope: containerRef },
  );

  useEffect(() => {
    const animation = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    animation
      .fromTo(
        ".midBox",
        { y: 0 },
        {
          y: 70,
          duration: 2,
          ease: "power1.inOut",
          stagger: 0.1,
          delay: 4.9,
        },
      )
      .fromTo(
        ".midBox",
        { y: 70 },
        {
          y: 0,
          duration: 2,
          ease: "power1.inOut",
          stagger: 0.1,
        },
      );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div ref={containerRef} >
      <div className={`absolute ${bottom} ${wtop} ${left} ${right} midBox`}>
        <div
          className={
            "absolute left-[-2.85rem] top-[-1.4rem] translate-x-[42px] translate-y-[-7px] rotate-[150deg] skew-x-[30deg] skew-y-[0deg] border-[3px] border-b-[4px] border-r-[4px] border-solid border-black bg-[#00FF9B] " +
            ` ${topbarwidth} ${topbarheight}`
          }
        ></div>
        <div
          className={
            "absolute left-[-2.6rem] top-[40px] skew-x-[180deg] skew-y-[210deg] border-[3px] border-b-[4px] border-l-[4px] border-solid border-black bg-[#00A464] " +
            `${height} ${barwidth}`
          }
        ></div>
        <div
          className={
            "absolute left-[47px] top-[40px] skew-x-[180deg] skew-y-[150deg] border-[3px] border-b-[4px] border-r-[4px] border-solid border-black bg-[#00FF9B] " +
            `${height} ${barwidth}`
          }
        ></div>
      </div>
    </div>
  );
}
