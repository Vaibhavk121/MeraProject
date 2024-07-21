'use client'
import React, { useRef, useState } from 'react';
import './Queue.css'
import { Button } from "@/components/ui/button"; // Importing Button component from the UI library
import gsap from "gsap"; // Importing GSAP for animations
import { useGSAP } from "@gsap/react"; // Importing useGSAP for context-safe GSAP animations

import { CgArrowLongRightC } from "react-icons/cg";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

// Defining the ListItem interface
interface ListItem {
  id: number;
  value: number;
}

const LinkListFunction = () => {
    const [isOpen, setIsOpen] = useState(true);
    const boxClassVariable = "flex h-14 w-14 items-center justify-center rounded-lg text-white text-xl font-medium drop-shadow-lg ";

    const [defaultText, setDefaultText] = useState(true); // State for showing default text
    const container = useRef<HTMLDivElement>(null); // Ref for the container element
    const [noOfList, setNoOfList] = useState<ListItem[]>([]); // State for the list of items
    const [createNumber, setCreateNumber] = useState<number | string>(5); // State for number of items to create
    const [inputValue, setInputValue] = useState<number>(0); // State for enqueue input value

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
            if (!newNumbers.find(item => item.value === randomNum)) {
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
        setNoOfList(prevList => {
            const newId = prevList.length > 0 ? prevList[prevList.length - 1].id + 1 : 0;
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
            setNoOfList(prevList => prevList.slice(1));
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
        gsap.fromTo(`.box${id}`, {
            y: 500,
            scale: 0,
            visibility: "hidden"
        }, {
            y: 0,
            scale: 1,
            visibility: "visible",
            ease: "back.out",
            duration: 0.5,
        });
    };

    // Animation for dequeue
    const animateDequeue = (id: number) => {
        gsap.to(`.box${id}`, {
            x: -500,
            scale: 0,
            visibility: 0,
            ease: "back.inOut",
            duration: 0.5,
        });
    };

    return (
        <>
            <p className=' flex justify-center items-center text-xl text-white p-5 '>Queue</p>
            <section
            ref={container}
            className="QueueScroll 
            h-[400px] mx-4 md:mx-8 flex justify-between rounded-lg bg-black border-2 border-solid border-white"
            >
                <div className="relative flex">
                <div className={`border-white border-r-2 border-solid bg-black text-white rounded-sm transition-all duration-300 ${isOpen ? 'w-96' : 'w-0 overflow-hidden'}`}>
                    {isOpen && (
                    <>
                        <p className="justify-center flex border-y-2 border-solid p-1 text-xl border-white">Operation</p>
                        <div className="flex items-center m-2">
                        <div className="flex w-full justify-between items-center">
                            <span className="text-md font-medium flex items-center">
                            Create a size N =
                            <input
                                className="w-14 p-1 ml-2 text-center rounded-lg border-2 border-solid border-green-50 bg-black text-white"
                                onChange={createInputHandler}
                                value={createNumber}
                                type="number"
                                min="1"
                                max="100"
                            />
                            </span>
                            <Button className="md:w-[5rem] hover:scale-100 p-2 ml-2 mt-7" 
                             variant={"secondary"}
                            onClick={generateDefaultList}>
                            Create
                            </Button>
                        </div>
                        </div>
                        <div className="flex flex-col items-center gap-3 m-2">
                        <div className="flex w-full justify-between items-center">
                            <span className="text-md font-medium flex items-center">
                            Insert to the Queue
                            <input
                                className="w-14 p-1 ml-2 text-center rounded-lg border-2 border-solid border-green-50 bg-black text-white"
                                onChange={enqueueInputHandler}
                                value={inputValue}
                                type="number"
                                min="1"
                                max="100"
                            />
                            </span>
                            <Button className="md:w-[7rem] hover:scale-100 p-2 ml-2 mt-7" 
                             variant={"secondary"}
                            onClick={enqueue}>
                           Enqueue
                            </Button>
                        </div>
                        </div>
                        <div className="flex flex-col items-center gap-3 m-2">
                        <div className="flex w-full justify-between items-center">
                            <span className="text-md font-medium flex items-center">
                            Delete from Queue
                            </span>
                            <Button className="md:w-[7rem] hover:scale-100 p-2 ml-2 mt-7" 
                             variant={"secondary"}
                            onClick={dequeue}>
                           Dequeue
                            </Button>
                        </div>
                        </div>
                    </>
                    )}
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute top-1/2 transform -translate-y-1/2 bg-white text-black p-2"
                    style={{ right: isOpen ? '-1rem' : '-1rem' }}
                >
                    {isOpen ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowRight />}
                </button>
            </div>

            <div className="flex flex-wrap  justify-center border-2 items-center flex-grow">
                {defaultText && (
                <span className="flex items-center w-full h-full justify-center text-2xl font-medium text-center text-white">
                    Click an Operation to view the Queue
                </span>
                )}
                <div className="w-full h-full flex justify-center items-center">
                    {noOfList.map((ele, i) => (
                        <div key={ele.id} className="relative">
                            <div className="relative border-gray-400 border-4 p-1 rounded-md">
                                 {/* Animated box */}
                                    <div className={`${boxClassVariable} box box${ele.id} relative`}>
                                        {ele.value.toString()}
                                    </div>
                                    {i === 0 && (
                                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12 text-xl text-green-500 text-center">Front</div>
                                    )}
                                    {i === noOfList.length - 1 && (
                                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12 text-xl text-red-500 text-center">Rare</div>
                                    )}
                            </div>
                            <div className="text-lg font-medium absolute left-8 text-center text-white">{i}</div>
                        </div>
                    ))}
                </div>
            </div>
            </section>

            <section className='mt-8 bg-green-600 bg-opacity-70 p-4 flex justify-evenly'>
                <div className="border-2 border-gray-400 bg-black text-white rounded-xl w-[500px] h-[500px] gap-4 m-3
                shadow-[0_20px_50px_rgba(0,0,0,1)]
                ">
                    <p className='border-y-2 border-white p-2 flex justify-center text-2xl'>Code</p>
                </div>
                <div className="bg-black border-2 border-gray-400 text-white rounded-xl w-[500px] h-[500px] gap-4 m-3
                shadow-[0_20px_50px_rgba(0,0,0,1)]
                ">
                    <p className='border-y-2 border-white p-2 flex justify-center text-2xl'>Logger</p>
                </div>
            </section>
        </>
    );
}

export default LinkListFunction;
