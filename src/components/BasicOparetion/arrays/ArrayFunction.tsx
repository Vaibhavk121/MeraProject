"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface Array{
  id: string;
  value: number;
}

const boxClassVariable =
  "flex h-14 w-14 items-center justify-center rounded-lg bg-rose-500 text-xl font-medium drop-shadow-lg ";

const welomeText = "Please Click Any Operation to view the Arrays"

export default function ArrayFunction() {

  const [swapIndexFirst, setSwapIndexFirst] = useState("1");
  const [swapIndexSecond, setSwapIndexSecond] = useState("3");
  const [insertNumberIndex, setInsertNumberIndex] = useState("4");
  const [insertNumber, setInsertNumber] = useState("24");
  const [createNumber, setCreateNumber] = useState(5);
  const [appendNumber, setAppendNumber] = useState(6);
  const [defaultText, setDefaultText] = useState<boolean | string>(welomeText);
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });
  const [mainArray, setMainArray] = useState<Array[]>([]);
  const arrayLength = mainArray.length;
  

  const createInputhander = (event: any) => {
    event.preventDefault();
    setCreateNumber(event.currentTarget.value);
  };
  const appendInputhander = (event: any) => {
    event.preventDefault();
    setAppendNumber(event.currentTarget.value);
  };


  const generateDefaultArray = () => {
    const newNumbers = [];
    for (let i =0;i< createNumber;i++) {
      let randomNum = Math.round(Math.random() * 100);
      newNumbers.push({
        id: i.toString(),
        value:randomNum
      })
    }
    setMainArray(newNumbers);
    setDefaultText(false);
  };

  const appendOneElement = () => {
    setMainArray((prev) => [...prev, {
      value: appendNumber,
      id: arrayLength.toString()
    }]);
    setDefaultText(false);
  };

  const insertToIndex = () => {
    if(!insertNumberIndex || 
      Number(insertNumberIndex) < 0 || 
      Number(insertNumberIndex) > mainArray.length){
      setDefaultText("Please enter a valid index number")
      return;
    }
    let lastInx = arrayLength;
    let newArray = [...mainArray]; // copy of the mainArray
    newArray.push({
      id: "",
      value: 0
    })

     while (Number(insertNumberIndex) < lastInx) {
      newArray[lastInx].id = lastInx.toString();
      newArray[lastInx].value = newArray[lastInx - 1].value;
      lastInx--;
      }
      
      newArray[lastInx] = {
        id: insertNumberIndex,
        value: Number(insertNumber),
        };
        
      setMainArray(newArray)
      setDefaultText(false);
      insertButtomAnimate(insertNumberIndex)
    }


    const swapNumberByIndex = ()=>{
      let timeline = gsap.timeline()
      if(!swapIndexFirst || 
        !swapIndexSecond || 
        Number(swapIndexFirst) < 0 || 
        Number(swapIndexSecond) < 0 || 
        Number(swapIndexFirst) > mainArray.length ||
        Number(swapIndexSecond) > mainArray.length){
        setDefaultText("Please enter a valid index number")
        return;
      }

      let newArray = [...mainArray]; // copy of the mainArray
      let temp = newArray[Number(swapIndexFirst)];
      newArray[Number(swapIndexFirst)] = newArray[Number(swapIndexSecond)];
      newArray[Number(swapIndexSecond)] = temp;
      

      if(swapIndexFirst < swapIndexSecond){
        gsap.fromTo(`.box${swapIndexFirst}`,
          { y:0,duration:1,ease:"back.out"},
          {y:-50,duration:1,ease:"back.out"})
          setMainArray(newArray);
      }
      if(swapIndexFirst > swapIndexSecond){}

      setMainArray(newArray);
    }

    

    const insertButtomAnimate = (id:string)=>{
      let timeline = gsap.timeline()
      for (let i = 0; i < Number(id); i++) {
        timeline.fromTo(
          `.box${i}`,
          { y: 0, ease: "back.out" },
          { y: 80, ease: "back.out", duration: 0.5 },
        )
      }
  
      timeline.fromTo(`.box${id}`, 
          {
          x: -100 * Number(id),
          visibility: 0,
          ease: "back.Out",
          duration: 1,
          delay: 0.1,
          },{
            x: 0,
            scale: 1,
            visibility: 1,
            duration: 1,
            ease: "back.Out",
        },">");

        for (let i = 0; i < Number(id); i++) {
          timeline.fromTo(
            `.box${i}`,
            { y: 7, ease: "back.out" , duration: 0.5 },
            { y: 0, ease: "back.out", duration: 0.5 },
          )
        }
    }



  const onAppendButton = contextSafe(() => {
    appendOneElement()
    setTimeout(() => { 
      gsap.fromTo(`.box${arrayLength}`, 
        {
        x: 100,
        visibility: 0,
        ease: "back.Out",
        duration: 1,
        delay: 0.1,
        },{
          x: 0,
          scale: 1,
          visibility: 1,
          duration: 1,
          ease: "back.Out",
      });
    }, 10);


  });
  
  const onCreateButton = contextSafe(() => {
    generateDefaultArray();
    setTimeout(() => {
      gsap.fromTo(".box", {
        y: -50,
        stagger: 0.2,
        scale: 0,
        visibility: 0,
        ease: "back.inOut",
        duration: 1,
      },{
        y: 0,
        stagger: 0.2,
        scale: 1,
        visibility: 1,
        ease: "back.inOut",
        duration: 1,
      });
    }, 10);
  });



  return (
    <>
      <section
        ref={container}
        className="mx-10 flex grid-rows-2 flex-col items-center justify-center bg-white"
      >
        {defaultText && (
          <span className="text-2xl font-medium">
            {defaultText}
          </span>
        )}
        <div className="flex" >
          {mainArray.map((ele, i) => (
            <div key={i}>
              <div className="border-2 border-black p-1">
                <div className={boxClassVariable + " box " + "box" + ele.id}>
                  {ele.value}
                </div>
              </div>
                <div className="text-lg font-medium text-center">{i}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-orange-300 py-2">
        <div className="flex justify-evenly">
          <div className="flex flex-col items-center gap-3">
            <Button
              className="w-[5rem] hover:scale-100 active:scale-95 duration-100 transition"
              onClick={onCreateButton}
            >
              Create
            </Button>
            <span className="text-sm w-[80%] font-medium">
              To Create An Array Of Length{" "}
              <input
                className="w-10 p-1"
                type="number"
                onChange={createInputhander}
                value={createNumber}
              />{" "}
              Numbers
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button
              className="w-[5rem] hover:scale-100 active:scale-95 duration-100 transition"
              onClick={onAppendButton}
            >
              Append
            </Button>
            <span className="text-sm w-[80%] font-medium">
              To Add an element to end of the array of {" "}
              <input
                className="w-10 p-1"
                type="number"
                onChange={appendInputhander}
                value={appendNumber}
              />{" "}
              Numbers
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button
              className="w-[5rem] hover:scale-100 active:scale-95 duration-100 transition"
              onClick={insertToIndex}
            >
              Insert
            </Button>
            <span className="text-sm w-[80%] font-medium">
              To Insert New Value has {" "}
              <input
                className="w-12 p-1"
                type="number"
                onChange={(e)=>setInsertNumber(e.target.value)}
                value={insertNumber}
              />{" "}
              To Index number {" "}
              <input
                className="w-10 p-1"
                type="number"
                onChange={(e)=>setInsertNumberIndex(e.target.value)}
                value={insertNumberIndex}
              />{" "}
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button
              className="w-[5rem] hover:scale-100 active:scale-95 duration-100 transition"
              onClick={swapNumberByIndex}
            >
              Swap
            </Button>
            <span className="text-sm w-[80%] font-medium">
              To Swap Two element by Index of {" "}
              <input
                className="w-12 p-1"
                type="number"
                onChange={(e)=>setSwapIndexSecond(e.target.value)}
                value={swapIndexSecond}
              />{" "}
              And By Index of {" "}
              <input
                className="w-10 p-1"
                type="number"
                onChange={(e)=>setSwapIndexFirst(e.target.value)}
                value={swapIndexFirst}
              />{" "}
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button
              className="w-[5rem] hover:scale-100 active:scale-95 duration-100 transition"
              onClick={onCreateButton}
            >
              Remove
            </Button>
            <span className="text-sm w-[80%] font-medium">
              To Create An Array Of Length{" "}
              <input
                className="w-10 p-1"
                type="number"
                onChange={createInputhander}
                value={createNumber}
              />{" "}
              Numbers
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
