'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import './InsertionSort.css';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

// Define the structure of a list item
interface ListItem {
    id: number;
    value: number;
}

const InsertionSort = () => {
    // State to manage the visibility of the sidebar
    const [isOpen, setIsOpen] = useState(true);
    // CSS class for styling the list items
    const boxClassVariable = "flex h-14 w-14 items-center justify-center rounded-lg text-white text-xl font-medium drop-shadow-lg ";

    // State to manage the default text display
    const [defaultText, setDefaultText] = useState(true);
    // Ref to the container element
    const container = useRef<HTMLDivElement>(null);
    // State to manage the list of numbers
    const [noOfList, setNoOfList] = useState<ListItem[]>([]);
    // State to manage the input for creating the list
    const [createNumber, setCreateNumber] = useState<number | string>(5);
    // State to manage the current step of the sorting process
    const [currentStep, setCurrentStep] = useState(1);
    // State to manage the current index being sorted
    const [currentIndex, setCurrentIndex] = useState<number>(1);
    // State to manage whether sorting is in progress
    const [isSorting, setIsSorting] = useState(false);
    // State to manage whether sorting is completed
    const [isSorted, setIsSorted] = useState(false);

    // Handler for the input change event to set the number of list items
    const createInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Math.max(Number(event.currentTarget.value), 1), 100);
        setCreateNumber(value);
    };

    // Function to generate a default list of unique random numbers
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

        // Update state with the new list and reset sorting states
        setNoOfList(newNumbers);
        setDefaultText(false);
        setCurrentStep(1);
        setCurrentIndex(1);
        setIsSorting(false);
        setIsSorted(false);

        // Animate the list items using GSAP
        gsap.from(".box", {
            y: -500,
            stagger: 0.1,
            scale: 0,
            visibility: 0,
            ease: "back.inOut",
            duration: 0.5,
        });
    };

    // Function to perform the next step of the insertion sort
    const getNextStep = async () => {
        let list = [...noOfList];
        let len = list.length;
        let i = currentStep;
        let j = currentIndex;

        if (i < len) {
            if (j > 0 && list[j].value < list[j - 1].value) {
                // Swap the elements if they are out of order
                const temp = list[j];
                list[j] = list[j - 1];
                list[j - 1] = temp;
                await animateSwap(j, j - 1);
                setCurrentIndex(j - 1);
            } else {
                // Move to the next step and index
                setCurrentStep(i + 1);
                setCurrentIndex(i + 1);
            }
            setNoOfList(list);
        } else {
            // Sorting is completed
            setIsSorting(false);
            setIsSorted(true);
        }
    };

    // Function to start the sorting process
    const startInsertionSort = () => {
        setIsSorting(true);
    };

    // Effect to trigger the next step of sorting after a delay
    useEffect(() => {
        if (isSorting && currentStep < noOfList.length) {
            const timer = setTimeout(() => {
                getNextStep();
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isSorting, currentStep, currentIndex, noOfList]);

    // Function to animate the swap of two elements using GSAP
    const animateSwap = (index1: number, index2: number) => {
        return new Promise<void>((resolve) => {
            const box1 = document.querySelector(`.box${noOfList[index1].id}`);
            const box2 = document.querySelector(`.box${noOfList[index2].id}`);

            if (box1 && box2) {
                const tl = gsap.timeline({ onComplete: resolve });

                tl.to([box1, box2], {
                    backgroundColor: (i) => (i === 0 ? "#FFD700" : "#FF4500"),
                    duration: 0.5,
                })
                    .to(
                        box1,
                        {
                            x: -70,
                            duration: 0.3,
                        },
                        "<"
                    )
                    .to(
                        box2,
                        {
                            x: 70,
                            duration: 0.3,
                        },
                        "<"
                    )
                    .to([box1, box2], {
                        x: 0,
                        duration: 0.3,
                    })
                    .to([box1, box2], {
                        backgroundColor: "#000000",
                        duration: 0.3,
                    });
            } else {
                resolve();
            }
        });
    };

    return (
        <>
            <p className="flex justify-center items-center text-xl text-white p-5">Insertion Sort</p>
            <section
                ref={container}
                className="InsertionScroll h-[400px] mx-4 md:mx-8 flex justify-between rounded-lg bg-black border-2 border-solid border-white my-20"
            >
                <div className="relative flex">
                    <div
                        className={`border-white border-r-2 border-solid bg-black text-white rounded-sm transition-all duration-300 ${
                            isOpen ? "w-96" : "w-0 overflow-hidden"
                        }`}
                    >
                        {isOpen && (
                            <>
                                <p className="justify-center flex  p-1 text-2xl border-white">Insertion Sort Operation</p>
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
                                        <Button
                                            className="md:w-[5rem] p-2 ml-2 mt-7"
                                            variant={"secondary"}
                                            onClick={generateDefaultList}
                                        >
                                            Create
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-3 m-2">
                                    <div className="flex w-full justify-between items-center">
                                        <span className="text-md font-medium flex items-center">Start Sorting</span>
                                        <Button
                                            className="md:w-[7rem] p-2 ml-2 mt-7"
                                            variant={"secondary"}
                                            onClick={startInsertionSort}
                                        >
                                            Start
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="absolute top-1/2 transform -translate-y-1/2 bg-white text-black p-2"
                        style={{ right: isOpen ? "-1rem" : "-1rem" }}
                    >
                        {isOpen ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowRight />}
                    </button>
                </div>

                <div className="flex flex-wrap justify-center border-2 items-center flex-grow">
                    {defaultText && (
                        <span className="flex items-center w-full h-full justify-center text-2xl font-medium text-center text-white">
                            Click an Operation to view the Insertion Sort
                        </span>
                    )}
                    <div className="w-full h-full flex justify-center items-center">
                        {noOfList.map((ele, i) => (
                            <div key={ele.id} className="relative">
                                <div className="relative border-gray-400 border-4 p-1 rounded-md">
                                    <div className={`${boxClassVariable} box box${ele.id} relative`}>{ele.value.toString()}</div>
                                </div>
                                <div className="text-lg font-medium absolute left-8 text-center mt-1 text-white">{i}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default InsertionSort;
