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
  "flex h-14 w-14 items-center justify-center rounded-lg  text-xl font-medium drop-shadow-lg ";

  const inputClass = "w-[5rem] h-[2.5rem] bg-transparent border rounded-md px-2"

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
  let timeline = gsap.timeline()

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
    setTimeout(() => { 
      gsap.fromTo(`.index${arrayLength}`, 
        {
       
        opacity: 0,
        duration: 0.3,
        scale:0,
      },{
        
        scale:1,
          opacity: 1,
          duration: 0.3,
          delay: 0.1,
      });
    }, 10);


  });
  
  const onCreateButton = contextSafe(() => {
    generateDefaultArray();
    setTimeout(() => {
      timeline.fromTo(".box", {
        y: 50,
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
    setTimeout(() => {
      timeline.fromTo(".index", {
        y: -20,
        stagger: 0.2,
        scale: 0,
        visibility: 0,
        ease: "back.inOut",
        duration: 0.7,
      },{
        y: 0,
        stagger: 0.2,
        scale: 1,
        visibility: 1,
        ease: "back.inOut",
        duration: 0.7,
      });
    }, 10);
  });



  return (
    <>
      <section
        ref={container}
        className="flex flex-col justify-center items-center h-[100vh] bg-black text-white "
      >
        <div className="w-[95%] flex h-[80vh] border-[2px] border-white rounded-lg">
            <div className="w-[40%] h-full border-r-[2px] border-white rounded-r-lg flex flex-col items-center gap-5 p-5 justify-evenly">
              <h5 className="text-2xl">Array operations</h5>
              <div className="w-full flex gap-3 items-center ">
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
              <div className="w-full flex gap-3 items-center overflow-hidden">
                  <p>Append </p>
                  <input
                  className={inputClass}
                  type="number"
                  onChange={appendInputhander}
                  value={appendNumber}
                />
                <Button
                className="w-[5rem] hover:scale-100 active:scale-95 duration-100 transition"
                onClick={onAppendButton}
                variant={"secondary"}
                >
                Append
                </Button>
              </div>
              <div className="w-full flex gap-3 items-center">
                  <p>Insert </p>
                  <input
                  className={inputClass}
                  type="number"
                  onChange={(e)=>setInsertNumber(e.target.value)}
                  value={insertNumber}
                  />
                  <p>At index</p>
                  <input
                    className={inputClass}
                    type="number"
                    onChange={(e)=>setInsertNumberIndex(e.target.value)}
                    value={insertNumberIndex}
                  />
                <Button
                  className="w-[5rem] hover:scale-100 active:scale-95 duration-100 transition"
                  onClick={insertToIndex}
                  variant={"secondary"}
                  >
                  Insert
                </Button>
              </div>
              <div className="w-full flex gap-3 items-center">
                  <p>Delete element at index </p>
                  <input
                  className={inputClass}
                  type="number"
                  onChange={appendInputhander}
                  value={appendNumber}
                />
                <Button
                className="w-[5rem] hover:scale-100 active:scale-95 duration-100 transition"
                onClick={onAppendButton}
                variant={"secondary"}
                >
                Delete
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              {defaultText && (
                <span className="text-2xl font-medium">
                  {defaultText}
                </span>
              )}
              <div className="flex" >
                {mainArray.map((ele, i) => (
                  <div key={i}>
                    <div className="border-2 border-white p-1 rounded-md">
                      <div className={boxClassVariable + " box " + "box" + ele.id}>
                        {ele.value}
                      </div>
                    </div>
                      <div className={"text-lg font-medium text-center mt-2 index " + "index" + i}>{i}</div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>
    </>
  );
}
