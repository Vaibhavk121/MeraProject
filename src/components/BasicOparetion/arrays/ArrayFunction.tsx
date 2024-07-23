/* eslint-disable react/display-name */
// ArrayFunction.js
"use client";
import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);


interface Array {
  id: string;
  value: number;
}

const boxClassVariable = "flex h-14 w-14 items-center justify-center rounded-lg text-xl font-medium drop-shadow-lg bg-rose-500";
const inputClass = "w-[5rem] h-[2.5rem] bg-transparent border rounded-md px-2";

export const ArrayFunction = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    onCreateButton
  }));

  const welomeText = `Please Click Any Operation to view the Arrays`;


  const [insertNumberIndex, setInsertNumberIndex] = useState("4");
  const [insertNumber, setInsertNumber] = useState("24");
  const [deleteNumberIndex, setDeleteNumberIndex] = useState("4");
  const [createNumber, setCreateNumber] = useState(5);
  const [appendNumber, setAppendNumber] = useState(6);
  const [elementNotFound, setElementNotFound] = useState(false)
  const [elementScanner, setElementScanner] = useState(false)
  const [defaultText, setDefaultText] = useState<boolean | string>(welomeText);
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });
  const [mainArray, setMainArray] = useState<Array[]>([]);
  const arrayLength = mainArray.length;
  let timeline = gsap.timeline();

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

  const appendOneElement = () => {
    setMainArray((prev) => [
      ...prev,
      {
        value: appendNumber,
        id: arrayLength.toString()
      }
    ]);
    setDefaultText(false);
  };

  const insertToIndex = () => {
    if (
      !insertNumberIndex ||
      Number(insertNumberIndex) < 0 ||
      Number(insertNumberIndex) > mainArray.length
    ) {
      setDefaultText("Please Enter a Valid Index Number");
      return;
    }
    let lastInx = arrayLength;
    let newArray = [...mainArray]; 
    newArray.push({
      id: "",
      value: 0
    });

    while (Number(insertNumberIndex) < lastInx) {
      newArray[lastInx].id = lastInx.toString();
      newArray[lastInx].value = newArray[lastInx - 1].value;
      lastInx--;
    }

    newArray[lastInx] = {
      id: insertNumberIndex,
      value: Number(insertNumber)
    };

    setMainArray(newArray);
    setDefaultText(false);
    insertButtomAnimate(insertNumberIndex);
  };





  const onDeleteHandler = () => {
    setElementScanner(true)
    let scannerLength = 70;
  if(arrayLength >= 15){
    scannerLength = 68
  }
    let move = 0;
    let num = +deleteNumberIndex
    let index:number = mainArray.findIndex((item:Array) => item.value === num);
    if(index === -1) {
      for(let i = 0; i < arrayLength; i++) {
        setTimeout(() => {
          timeline.fromTo(
            `.scan`,
            { x:move, duration: 1, ease: "back.out"},
            {  x:move+scannerLength,duration: 1, ease: "back.out"}
            )
              move += scannerLength;
            }, 100);
        }
        setTimeout(()=>{
          setElementNotFound(true)
        },arrayLength * 1000)

        setTimeout(()=>{
          timeline.fromTo(`.scan`,
            {y:0, duration:1, ease: "back.out"},
            {y:50,opacity:0,duration:1,ease:"back.inOut"}
          )
        },arrayLength * 1200)
        
        setTimeout(()=>{
          setElementScanner(false)
          setElementNotFound(false)
        },arrayLength * 1500)
        


    }else{
      for(let i = 0; i < arrayLength; i++) {
      setTimeout(() => {
        timeline.fromTo(
          `.scan`,
          { x:move, duration: 1, ease: "back.out"},
          {  x:move+scannerLength,duration: 1, ease: "back.out"}
          )
          move += scannerLength;
          }, 100);
        if (mainArray[i].value === num) {
          break;
        }
      }
      
      
    setTimeout(() => {
      timeline.fromTo(`.box${index}`,
        {y:0, duration:1, ease: "back.out"},
        {y:100,opacity:0,duration:1,ease:"back.inOut"}
      )
      timeline.fromTo(`.scan`,
        {y:0, duration:1, ease: "back.out"},
        {y:50,opacity:0,duration:1,ease:"back.inOut"}
      )
    }, index * 1000);

    setTimeout(() => {
      for(let i = index; i < arrayLength; i++){
        timeline.fromTo(`.box${i}`,
          {x:70,y:0,opacity:1},
          {x:0,y:0,opacity:1}
        )
      }
      const newArray = mainArray.filter((val,i) => val.value != num)
      setMainArray(newArray)
      setElementScanner(false)
    }, index * 1500);
  }
}
  


  const insertButtomAnimate = (id: string) => {
    for (let i = 0; i < Number(id); i++) {
      timeline.fromTo(
        `.box${i}`,
        { y: 0, ease: "back.out" },
        { y: 80, ease: "back.out", duration: 0.5 }
      );
    }

    timeline.fromTo(
      `.box${id}`,
      {
        x: -100 * Number(id),
        visibility: 0,
        ease: "back.Out",
        duration: 1,
        delay: 0.1
      },
      {
        x: 0,
        scale: 1,
        visibility: 1,
        duration: 1,
        ease: "back.Out"
      },
      ">"
    );

    for (let i = 0; i < Number(id); i++) {
      timeline.fromTo(
        `.box${i}`,
        { y: 7, ease: "back.out", duration: 0.5 },
        { y: 0, ease: "back.out", duration: 0.5 }
      );
    }
  };

  const onAppendButton = contextSafe(() => {
    appendOneElement();
    setTimeout(() => {
      gsap.fromTo(
        `.box${arrayLength}`,
        {
          x: 100,
          visibility: 0,
          ease: "back.Out",
          duration: 0.5,
          delay: 0.1
        },
        {
          x: 0,
          scale: 1,
          visibility: 1,
          duration: 0.5,
          ease: "back.Out"
        }
      );
    }, 10);
    setTimeout(() => {
      gsap.fromTo(
        `.index${arrayLength}`,
        {
          opacity: 0,
          duration: 0.3,
          scale: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          delay: 0.1
        }
      );
    }, 10);
  });

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
          duration: 0.5
        },
        {
          y: 0,
          stagger: 0.2,
          scale: 1,
          visibility: 1,
          ease: "back.inOut",
          duration: 0.5
        }
      );
    }, 10);
    setTimeout(() => {
      timeline.fromTo(
        ".index",
        {
          y: -20,
          stagger: 0.2,
          scale: 0,
          visibility: 0,
          ease: "back.inOut",
          duration: 0.3
        },
        {
          y: 0,
          stagger: 0.2,
          scale: 1,
          visibility: 1,
          ease: "back.inOut",
          duration: 0.3
        }
      );
    }, 10);
  });

  useEffect(() => {
    let scalelength = 1;
    if (arrayLength >= 12) {
      scalelength = 0.8;
    }
    if (arrayLength >= 15) {
      scalelength = 0.5;
    }
    if (arrayLength >= 25) {
      scalelength = 0.3;
    }
    if (arrayLength >= 42) {
      scalelength = 0.2;
    }
    if (arrayLength >= 60) {
      scalelength = 0.1;
    }
    setTimeout(() => {
      gsap.fromTo(
        `.arrayContainer`,
        {
          scale: scalelength
        },
        {
          scale: scalelength
        }
      );
    }, 10);
    
  }, [arrayLength]);

  return (
    <>
      <section
        ref={container}
        className="flex flex-col justify-center items-center h-[100vh] bg-black text-white "
      >
        <div className="w-[95%] flex h-[80vh] border-[2px] border-white rounded-lg ">
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
            <div className="w-full flex gap-3 items-center ">
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
                onChange={(e) => setInsertNumber(e.target.value)}
                value={insertNumber}
              />
              <p>At index</p>
              <input
                className={inputClass}
                type="number"
                onChange={(e) => setInsertNumberIndex(e.target.value)}
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
              <p>Delete element number </p>
              <input
                className={inputClass}
                type="number"
                onChange={(e)=>setDeleteNumberIndex(e.target.value)}
                value={deleteNumberIndex}
              />
              <Button
                className="w-[5rem] hover:scale-100 active:scale-95 duration-100 transition"
                onClick={onDeleteHandler}
                variant={"secondary"}
              >
                Delete
              </Button>
            </div>
          </div>
          <div className="flex relative justify-center items-center w-full overflow-hidden corn">
            {defaultText && (
              <span className="text-2xl font-medium">
                {defaultText}
              </span>
            )}
            {!defaultText && <div className="flex arrayContainer items-center">
            {elementScanner && <div className="scan border-2 border-white p-1 rounded-md w-[5rem] mb-[2rem] h-[5rem] "></div>}
              {mainArray.map((ele, i) => (
                <div key={i}>
                  <div className="border-2 border-white p-1 rounded-md ">
                    <div className={boxClassVariable + " box " + "box" + ele.id}>
                      {ele.value}
                    </div>
                  </div>
                  <div className={"text-lg font-medium text-center mt-2 index " + "index" + i}>
                    {i}
                  </div>
                </div>
              ))}
            </div>}
            {elementNotFound && <span className="absolute bottom-10 ">Element not found</span>}
          </div>
        </div>
      </section>
    </>
  );
});
