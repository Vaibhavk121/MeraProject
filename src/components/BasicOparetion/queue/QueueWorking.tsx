"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Queue.css";
import { Button } from "@/components/ui/button"; // Importing Button component from the UI library
import gsap from "gsap"; // Importing GSAP for animations
import { useGSAP } from "@gsap/react"; // Importing useGSAP for context-safe GSAP animations

import { CgArrowLongRightC } from "react-icons/cg";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

// Defining the ListItem interface
interface ListItem {
  id: number;
  value: number;
}

const LinkListFunction = () => {
  const [isOpen, setIsOpen] = useState(true);
  const boxClassVariable =
    "flex h-14 w-14 items-center justify-center rounded-lg text-white text-xl font-medium drop-shadow-lg bg-rose-500";

  const [defaultText, setDefaultText] = useState(true); // State for showing default text
  const container = useRef<HTMLDivElement>(null); // Ref for the container element
  const [noOfList, setNoOfList] = useState<ListItem[]>([]); // State for the list of items
  const [createNumber, setCreateNumber] = useState<number | string>(5); // State for number of items to create
  const [inputValue, setInputValue] = useState<number>(0); // State for enqueue input value
  const arrayLength = noOfList.length;
  // Handlers for input changes
  const createInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.currentTarget.value), 100);
    setCreateNumber(value);
  };

  const enqueueInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.currentTarget.value), 100);
    setInputValue(value);
  };

  // Generate a default list of unique random numbers
  const generateDefaultList = () => {
    const newNumbers: ListItem[] = [];
    const targetLength = Number(createNumber);

    if (isNaN(targetLength)) {
      console.error("createNumber is not a valid number");
      return;
    }

    let id = 0;
    while (newNumbers.length < targetLength) {
      let randomNum = Math.round(Math.random() * 100);
      if (!newNumbers.find((item) => item.value === randomNum)) {
        newNumbers.push({ id: id++, value: randomNum });
      }
    }

    setNoOfList(newNumbers);
    setDefaultText(false);

    // Animate new list creation
    const onCreateButton = contextSafe(() => {
      setTimeout(() => {
        gsap.from(".box", {
          y: -500,
          stagger: 0.1,
          scale: 0,
          visibility: 0,
          ease: "back.inOut",
          duration: 1,
        });
      }, 10);
    });
    onCreateButton();
  };

  const enqueue = () => {
    const randomValue = Math.round(Math.random() * 100); // Generate a new random value
    setNoOfList((prevList) => {
      const newId =
        prevList.length > 0 ? prevList[prevList.length - 1].id + 1 : 0;
      const newList = [...prevList, { id: newId, value: randomValue }];
      setTimeout(() => {
        animateEnqueue(newId); // Animation after adding the new item
      }, 10);
      return newList;
    });
    setInputValue(randomValue); // Update the input value with the new random value
  };

  const dequeue = () => {
    if (noOfList.length === 0) return;
    animateDequeue(noOfList[0].id);
    setTimeout(() => {
      setNoOfList((prevList) => prevList.slice(1));
    }, 500); // Match the duration with the animation
  };

  // Function to safely wrap GSAP animations with context
  function contextSafe(callback: () => void) {
    return () => {
      if (container.current) {
        callback();
      }
    };
  }

  // Animation for enqueue
  const animateEnqueue = (id: number) => {
    gsap.fromTo(
      `.box${id}`,
      {
        x: 500,
        scale: 0,
        visibility: "hidden",
      },
      {
        x: 0,
        scale: 1,
        visibility: "visible",
        ease: "back.out",
        duration: 0.5,
      },
    );
  };

  // Animation for dequeue
  const animateDequeue = (id: number) => {
    gsap.fromTo(
      `.box${id}`,
      { x: 0, scale: 1, visibility: 1, duration: 0.5 },
      {
        x: -500,
        scale: 0,
        visibility: 0,
        ease: "back.inOut",
        duration: 0.5,
      },
    );
  };

  useEffect(() => {
    let scalelength = 1;
    if (arrayLength >= 12) {
      scalelength = 0.8;
    }
    if (arrayLength >= 13) {
      scalelength = 0.5;
    }
    if (arrayLength >= 15) {
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
          scale: scalelength,
        },
        {
          scale: scalelength,
        },
      );
    }, 10);
  }, [arrayLength]);

  return (
    <>
      <p className="flex items-center justify-center p-5 text-xl text-white">
        Queue
      </p>
      <section
        ref={container}
        className="mx-4 flex h-[400px] justify-between rounded-lg border-2 border-solid border-white bg-black md:mx-8 my-20"
      >
        <div className="relative flex w-[30%]">
          <div
            className={`rounded-sm border-r-2 border-solid border-white bg-black text-white transition-all duration-300 ${isOpen ? "w-96" : "w-0 overflow-hidden"}`}
          >
            {isOpen && (
              <>
                <p className="flex justify-center border-y-2 border-solid border-white p-1 text-xl">
                  Operation
                </p>
                <div className="m-2 flex items-center">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-md flex items-center font-medium">
                      Create a size N =
                      <input
                        className="ml-2 w-14 rounded-lg border-2 border-solid border-green-50 bg-black p-1 text-center text-white"
                        onChange={createInputHandler}
                        value={createNumber}
                        type="number"
                        min="1"
                        max="100"
                      />
                    </span>
                    <Button
                      className="ml-2 mt-7 p-2 hover:scale-100 md:w-[5rem]"
                      variant={"secondary"}
                      onClick={generateDefaultList}
                    >
                      Create
                    </Button>
                  </div>
                </div>
                <div className="m-2 flex flex-col items-center gap-3">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-md flex items-center font-medium">
                      Insert to the Queue
                      <input
                        className="ml-2 w-14 rounded-lg border-2 border-solid border-green-50 bg-black p-1 text-center text-white"
                        onChange={enqueueInputHandler}
                        value={inputValue}
                        type="number"
                        min="1"
                        max="100"
                      />
                    </span>
                    <Button
                      className="ml-2 mt-7 p-2 hover:scale-100 md:w-[7rem]"
                      variant={"secondary"}
                      onClick={enqueue}
                    >
                      Enqueue
                    </Button>
                  </div>
                </div>
                <div className="m-2 flex flex-col items-center gap-3">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-md flex items-center font-medium">
                      Delete from Queue
                    </span>
                    <Button
                      className="ml-2 mt-7 p-2 hover:scale-100 md:w-[7rem]"
                      variant={"secondary"}
                      onClick={dequeue}
                    >
                      Dequeue
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-1/2 -translate-y-1/2 transform bg-white p-2 text-black"
            style={{ right: isOpen ? "-1rem" : "-1rem" }}
          >
            {isOpen ? (
              <MdKeyboardDoubleArrowLeft />
            ) : (
              <MdKeyboardDoubleArrowRight />
            )}
          </button>
        </div>
        <div className="relative flex w-full items-center justify-center overflow-hidden">
          <div className="arrayContainer relative flex w-full items-center justify-center">
            {defaultText && (
              <span className="flex h-full w-full items-center justify-center text-center text-2xl font-medium text-white">
                Click an Operation to view the Queue
              </span>
            )}
            {noOfList.map((ele, i) => (
              <div key={ele.id} className="relative">
                <div className="relative rounded-md border-4 border-gray-400 p-1">
                  {/* Animated box */}
                  <div
                    className={`${boxClassVariable} box box${ele.id} relative`}
                  >
                    {ele.value.toString()}
                  </div>
                  {i === 0 && (
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 transform text-center text-xl text-green-500">
                      Front
                    </div>
                  )}
                  {i === noOfList.length - 1 && (
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 transform text-center text-xl text-red-500">
                      Rare
                    </div>
                  )}
                </div>
                <div className="absolute left-8 text-center text-lg font-medium text-white">
                  {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default LinkListFunction;
