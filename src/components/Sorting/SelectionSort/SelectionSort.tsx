'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import './SelectionSort.css';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

interface ListItem {
    id: number;
    value: number;
}

const SelectionSort = () => {
    // State management
    const [isOpen, setIsOpen] = useState(true);
    const [defaultText, setDefaultText] = useState(true);
    const [noOfList, setNoOfList] = useState<ListItem[]>([]);
    const [createNumber, setCreateNumber] = useState<number | string>(5);
    const [currentStep, setCurrentStep] = useState(0);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const [minIndex, setMinIndex] = useState<number | null>(null);
    const [animationInProgress, setAnimationInProgress] = useState(false);
    const container = useRef<HTMLDivElement>(null);

    // CSS class for styling the boxes
    const boxClassVariable = "flex h-14 w-14 items-center justify-center rounded-lg text-white text-xl font-medium drop-shadow-lg ";

    // Handler for the input change event to create the number of elements
    const createInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.currentTarget.value), 100);
        setCreateNumber(value);
    };

    // Function to generate a list of random unique numbers
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
        setCurrentStep(0);
        setCurrentIndex(null);
        setMinIndex(null);

        // Animation for creating new boxes
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

    // Function to perform one step of the selection sort
    const selectionSortStep = () => {
        if (animationInProgress) return;

        setAnimationInProgress(true);
        let list = [...noOfList];
        let len = list.length;
        let i = Math.floor(currentStep / len);
        let j = currentStep % len;

        if (i >= len - 1) {
            setAnimationInProgress(false);
            return;
        }

        setCurrentIndex(j);
        setMinIndex(i);

        // Function to find the minimum index
        const findMinIndex = () => {
            let minIdx = i;
            for (let k = i + 1; k < len; k++) {
                if (list[k].value < list[minIdx].value) {
                    minIdx = k;
                }
            }
            return minIdx;
        };

        const minIdx = findMinIndex();
        setMinIndex(minIdx);

        // Animation functions
        const animateCurrent = () => {
            return gsap.to(`.box${list[j].id}`, {
                backgroundColor: '#FFD700',
                duration: 0.5,
            });
        };

        const animateMin = () => {
            return gsap.to(`.box${list[minIdx].id}`, {
                backgroundColor: '#FF4500',
                duration: 0.5,
            });
        };

        const resetColors = () => {
            return gsap.to(`.box`, {
                backgroundColor: '#000000',
                duration: 0.5,
            });
        };

        const animateSwap = () => {
            if (minIdx !== i) {
                const temp = list[i];
                list[i] = list[minIdx];
                list[minIdx] = temp;
                setNoOfList(list);

                const box1 = document.querySelector(`.box${list[i].id}`);
                const box2 = document.querySelector(`.box${list[minIdx].id}`);

                if (box1 && box2) {
                    const tl = gsap.timeline();
                    tl.to(box1, { x: 70, duration: 0.5 })
                        .to(box2, { x: -70, duration: 0.5 }, "<")
                        .to(box1, { x: 0, duration: 0.5 })
                        .to(box2, { x: 0, duration: 0.5 }, "<");
                }
            }
        };

        // Chaining the animations
        animateCurrent()
            .then(() => animateMin())
            .then(() => animateSwap())
            .then(() => resetColors())
            .then(() => {
                setCurrentStep(currentStep + 1);
                setAnimationInProgress(false);
            });
    };

    // Helper function to ensure context safety
    function contextSafe(callback: () => void) {
        return () => {
            if (container.current) {
                callback();
            }
        };
    }

    return (
        <>
            <p className="flex justify-center items-center text-xl text-white p-5">Selection Sort</p>
            <section
                ref={container}
                className="SelectionScroll h-[400px] mx-4 md:mx-8 flex justify-between rounded-lg bg-black border-2 border-solid border-white"
            >
                <div className="relative flex">
                    <div
                        className={`border-white border-r-2 border-solid bg-black text-white rounded-sm transition-all duration-300 ${
                            isOpen ? "w-96" : "w-0 overflow-hidden"
                        }`}
                    >
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
                                        <span className="text-md font-medium flex items-center">Click for Visualizing</span>
                                        <Button
                                            className="md:w-[7rem] p-2 ml-2 mt-7"
                                            variant={"secondary"}
                                            onClick={selectionSortStep}
                                        >
                                            Next
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
                            Click an Operation to view the Selection Sort
                        </span>
                    )}
                    <div className="w-full h-full flex justify-center items-center">
                        {noOfList.map((ele, i) => (
                            <div key={ele.id} className="relative">
                                <div className="relative border-gray-400 border-4 p-1 rounded-md">
                                    <div className={`${boxClassVariable} box box${ele.id} relative`}>{ele.value.toString()}</div>
                                    {i === currentIndex && (
                                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-14 text-xl text-green-500 text-center">
                                            i
                                        </div>
                                    )}
                                    {i === minIndex && (
                                        <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 text-xl text-red-500 text-center">
                                            min
                                        </div>
                                    )}
                                </div>
                                <div className="text-lg font-medium absolute left-8 text-center text-white">{i}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-8 bg-green-600 bg-opacity-70 p-4 flex justify-evenly">
                <div
                    className="border-2 border-gray-400 bg-black text-white rounded-xl w-[500px] h-[500px] gap-4 m-3
                shadow-[0_20px_50px_rgba(0,0,0,1)]"
                >
                    <p className="border-y-2 border-white p-2 flex justify-center text-2xl">Code</p>
                </div>
                <div
                    className="border-2 border-gray-400 bg-black text-white rounded-xl w-[500px] h-[500px] gap-4 m-3
                shadow-[0_20px_50px_rgba(0,0,0,1)]"
                >
                    <p className="border-y-2 border-white p-2 flex justify-center text-2xl">Explanation</p>
                </div>
            </section>
        </>
    );
};

export default SelectionSort;
