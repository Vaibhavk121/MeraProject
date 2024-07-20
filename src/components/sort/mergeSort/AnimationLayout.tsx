"use client"
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

interface Array {
  id: string;
  value: number;
}

const welomeText = `Please Click Any Operation to view the Arrays`;
const boxClassVariable = "flex h-14 w-14 items-center justify-center rounded-lg text-xl font-medium drop-shadow-lg bg-rose-500";

const inputClass = "w-[5rem] h-[2.5rem] bg-transparent border rounded-md px-2";
export default function AnimationLayout() {
    const container = useRef<HTMLDivElement>(null);
    const [createNumber, setCreateNumber] = useState(5);
    const { contextSafe } = useGSAP({ scope: container });
  const [mainArray, setMainArray] = useState<Array[]>([]);
  const [defaultText, setDefaultText] = useState<boolean | string>(welomeText);
  const arrayLength = mainArray.length;
  let timeline = gsap.timeline();


    const createInputhander = (event: any) => {
      event.preventDefault();
      setCreateNumber(event.currentTarget.value);
    };

    const generateDefaultArray = () => {
      const newNumbers = [];
      for (let i = 0; i < createNumber; i++) {
        let randomNum = Math.round(Math.random() * 100);
        newNumbers.push({
          id: i.toString(),
          value: randomNum
        });
      }
      setMainArray(newNumbers);
      setDefaultText(false);
    };


    const onCreateButton = contextSafe(() => {
      generateDefaultArray();
      setTimeout(() => {
        timeline.fromTo(
          ".box",
          {
            y: 50,
            stagger: 0.2,
            scale: 0,
            visibility: 0,
            ease: "back.inOut",
            duration: 1
          },
          {
            y: 0,
            stagger: 0.2,
            scale: 1,
            visibility: 1,
            ease: "back.inOut",
            duration: 1
          }
        );
      }, 10);
      
    });

  return (
    <section
      ref={container}
      className="flex h-[100vh] w-full flex-col items-center justify-center bg-black text-white"
    >
      <div className="flex h-[80vh] w-[95%] rounded-lg border-[2px] border-white">
        <div className="flex h-full w-[40%] flex-col items-center  gap-5 rounded-r-lg border-r-[2px] border-white p-5">
          <h5 className="text-2xl">Merge Sort</h5>
          <div className="flex w-full items-center gap-3">
          <p>Create an array of size N = </p>
          <input
                className={inputClass}
                type="number"
                onChange={createInputhander}
                value={createNumber}
              />
              <Button
                className="w-[5rem] hover:scale-100 active:scale-95 duration-100 transition"
                variant={"secondary"}
                onClick={onCreateButton}
              >
                Create
              </Button>
          </div>
          
        </div>
        <div className="flex relative justify-center p-2 w-full overflow-hidden corn">
        {defaultText && (
              <span className="text-2xl font-medium">
                {defaultText}
              </span>
            )}
        {mainArray.map((ele, i) => (
                <div key={i}>
                  <div className="border-2 border-white p-1 rounded-md ">
                    <div className={boxClassVariable + " box " + "box" + ele.id}>
                      {ele.value}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
