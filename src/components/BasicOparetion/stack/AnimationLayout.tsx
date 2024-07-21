"use client";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

interface Array {
  id: string;
  value: number;
}

const welomeText = `Please Click Any Operation to view the Arrays`;
const boxClassVariable =
  "flex h-full items-center justify-center rounded-lg text-xl font-medium drop-shadow-lg bg-rose-500";

const inputClass = "w-[5rem] h-[2.5rem] bg-transparent border rounded-md px-2";
export default function AnimationLayout() {
  const container = useRef<HTMLDivElement>(null);
  const [createNumber, setCreateNumber] = useState(5);
  const [pushElement, setPushElement] = useState(4);
  const [mainArray, setMainArray] = useState<Array[]>([]);
  const [Msg, setMsg] = useState<boolean | string>(false);
  const [defaultText, setDefaultText] = useState<boolean | string>(welomeText);
  const [elementScanner, setElementScanner] = useState(false);
  const [pushBtn, setPushBtn] = useState(false);
  let [top, setTop] = useState(0);
  let [topPointer, setTopPointer] = useState(1);
  const { contextSafe } = useGSAP({ scope: container });

  const arrayLength = mainArray.length;
  let timeline = gsap.timeline();

  const createInputhander = (event: any) => {
    event.preventDefault();
    setCreateNumber(event.currentTarget.value);
  };
  const pushInputhander = (event: any) => {
    event.preventDefault();
    setPushElement(event.currentTarget.value);
  };

  const generateDefaultArray = () => {
    const newNumbers = [];
    setTop(0);
    for (let i = 0; i < createNumber; i++) {
      newNumbers.push({
        id: i.toString(),
        value: -1,
      });
    }
    setMainArray(newNumbers);
    setDefaultText(false);
    setTimeout(() => {
      gsap.fromTo(
        ".scan",
        { y: topPointer },
        {
          y: 0,
          duration: 1,
          ease: "back.inOut",
        },
      );
    }, 10);
    setTopPointer(-1);
  };

  // Push opeartion to the timeline
  const pushButtonHandler = () => {
    const newArray = [...mainArray];
    newArray[top] = { id: top.toString(), value: pushElement };
    setMainArray(newArray);
  };

  const onPushOperation = contextSafe(() => {
    if (top >= arrayLength) {
      setMsg("Array size is full");
      setTimeout(() => {
        setMsg("");
      }, 2000);
      return;
    }
    setElementScanner(true);
    setTimeout(() => {
      timeline.fromTo(
        `.box${top}`,
        { y: -300, duration: 1, ease: "back.inOut", opacity: 0 },
        { y: 0, duration: 1, ease: "back.inOut", opacity: 1 },
      );
    }, 1);
    pushButtonHandler();
    setTimeout(() => {
      setPushBtn(true);
      const newLevel = topPointer + -65;
      gsap.fromTo(
        ".scan",
        { y: topPointer },
        {
          y: newLevel,
          duration: 1,
          ease: "back.inOut",
          onComplete: () => {
            setTopPointer(newLevel);
            setPushBtn(false);
          },
        },
      );
      const newTop = top + 1;
      setTop(newTop);
    }, 1);
  });

  const popButtonHandler = () => {
    if (top <= 0) {
      setMsg("Nothing to POP");
      setTimeout(() => {
        setMsg(false);
      }, 2000);
      return;
    }
    const newTop = top - 1;
    setTop(newTop);
    setTimeout(() => {
      timeline.fromTo(
        `.box${newTop}`,
        { y: 0, duration: 1, ease: "back.inOut", opacity: 1 },
        { y: -300, duration: 1, ease: "back.inOut", opacity: 0 },
      );
    }, 1);
    setTimeout(() => {
      const newLevel = topPointer - -65;
      gsap.fromTo(
        ".scan",
        { y: topPointer },
        {
          y: newLevel,
          duration: 1,
          ease: "back.inOut",
          onComplete: () => {
            setTopPointer(newLevel);
          },
        },
      );
    }, 1);
    setTimeout(() => {
      const newArray = [...mainArray];
      newArray[newTop] = { id: newTop.toString(), value: -1 };
      setMainArray(newArray);
    }, 1000);
  };

  const onPeekBtnHandler = () => {
    setTimeout(() => {
      gsap.fromTo(
        `.box${top - 1}`,
        { scale: 1.5, duration: 2, ease: "back.inOut", backgroundColor: "red" },
        {
          scale: 1,
          duration: 1,
          ease: "back.inOut",
          backgroundColor: "rgb(244 63 94 / var(--tw-bg-opacity))",
        },
      );
    }, 1);
  };

  useEffect(() => {
    let scalelength = 1;

    if (arrayLength >= 8) {
      scalelength = 0.7;
    }
    if (arrayLength >= 10) {
      scalelength = 0.7;
   
    }
    if (arrayLength >= 11) {
      scalelength = 0.5;

    }
    if (arrayLength >= 16) {
      scalelength = 0.3;
    }
    if (arrayLength >= 26) {
      scalelength = 0.2;
    }
    setTimeout(() => {
      gsap.fromTo(
        `.stackContainer`,
        {
          scale: scalelength,
          
        },
        {
          scale: scalelength,
        
        },
      );
    }, 10);
  }, [arrayLength]);

  return (
    <section
      ref={container}
      className="flex h-[100vh] w-full flex-col items-center justify-center bg-black text-white "
    >
      <div className="flex h-[80vh] w-[95%] rounded-lg border-[2px] border-white">
        <div className="flex h-full w-[40%] flex-col items-center  gap-5 rounded-r-lg border-r-[2px] border-white p-5">
          <h5 className="text-2xl">Stack Operations</h5>
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
                        onClick={generateDefaultArray}
                    >
                        Create
                    </Button>
          </div>
          <div className="flex w-full items-center gap-3">
                <p>Push Operation = </p>
                <input
                        className={inputClass}
                        type="number"
                        onChange={pushInputhander}
                        value={pushElement}
                    />
                    <Button
                        className="w-[5rem] hover:scale-100 active:scale-95 duration-100 transition"
                        variant={"secondary"}
                        onClick={onPushOperation}
                        disabled={pushBtn ? true : false}
                    >
                        Push()
                    </Button>
            </div>
          <div className="flex w-full items-center gap-3">
                <p>Pop Operation = </p>
                    <Button
                        className="w-[5rem] hover:scale-100 active:scale-95 duration-100 transition"
                        variant={"secondary"}
                        onClick={popButtonHandler}
                        disabled={pushBtn ? true : false}
                    >
                        Pop()
                    </Button>
            </div>
          <div className="flex w-full items-center gap-3">
                <p>Peek Operation = </p>
                    <Button
                        className="w-[5rem] hover:scale-100 active:scale-95 duration-100 transition"
                        variant={"secondary"}
                        onClick={onPeekBtnHandler}
                    >
                        Peek()
                    </Button>
            </div>
        </div>
        <div className="flex  relative items-center justify-center flex-col-reverse p-2 w-full overflow-hidden corn">
          
        {defaultText && (
              <span className="text-2xl font-medium ">
                {defaultText}
              </span>
            )}
            {!defaultText && <div className="flex  flex-col-reverse stackContainer">
              <div className={`scan   p-1 rounded-md justify-end   w-[15rem] h-[5rem] flex items-center gap-1 text-xl ${elementScanner ? "" :"opacity-0"}`}>
                <FaArrowLeftLong size={30} />Top
              </div>
            {mainArray.map((ele, i) => (
              <div key={i} className="">
                        <div className="border-2 border-white p-1  h-16 w-[10rem] flex flex-col justify-center ">
                            {ele.value !== -1 && <div className={boxClassVariable + " box " + "box" + ele.id}>
                                {ele.value}
                                </div>}
                            </div>
                    </div>
                ))}
              </div>}
              {Msg && <p className="text-2xl font-medium absolute  mb-3 bottom-5">{Msg}</p>}
              </div>
        </div>
    </section>
  );
}
