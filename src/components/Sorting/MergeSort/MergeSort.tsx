'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import './MergeSort.css';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

interface ListItem {
    id: number;
    value: number;
}

interface MergeStep {
    left: number;
    mid: number;
    right: number;
    array: ListItem[];
}

const MergeSort = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [defaultText, setDefaultText] = useState(true);
    const container = useRef<HTMLDivElement>(null);
    const [noOfList, setNoOfList] = useState<ListItem[]>([]);
    const [createNumber, setCreateNumber] = useState<number | string>(5);
    const [steps, setSteps] = useState<MergeStep[]>([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [isSorting, setIsSorting] = useState(false);
    const [isSorted, setIsSorted] = useState(false);

    const boxClassVariable = "flex h-14 w-14 items-center justify-center rounded-lg text-white text-xl font-medium drop-shadow-lg";

    const createInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.currentTarget.value), 100);
        setCreateNumber(value);
    };

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
        resetSortState();

        gsap.from(".box", {
            y: -500,
            stagger: 0.1,
            scale: 0,
            visibility: 0,
            ease: "back.inOut",
            duration: 0.5,
        });
    };

    const resetSortState = () => {
        setCurrentStep(0);
        setSteps([]);
        setIsSorting(false);
        setIsSorted(false);
    };

    const merge = (left: ListItem[], right: ListItem[]) => {
        let sortedArr: ListItem[] = [];
        while (left.length && right.length) {
            if (left[0].value < right[0].value) {
                sortedArr.push(left.shift()!);
            } else {
                sortedArr.push(right.shift()!);
            }
        }
        return [...sortedArr, ...left, ...right];
    };

    const mergeSortHelper = (array: ListItem[], start: number, end: number, steps: MergeStep[]) => {
        if (start >= end) return [array[start]];

        const mid = Math.floor((start + end) / 2);
        const left = mergeSortHelper(array, start, mid, steps);
        const right = mergeSortHelper(array, mid + 1, end, steps);

        const merged = merge(left, right);

        steps.push({ left: start, mid, right: end, array: merged });
        return merged;
    };

    const startMergeSort = () => {
        setIsSorting(true);
        const initialArray = [...noOfList];
        const newSteps: MergeStep[] = [];
        mergeSortHelper(initialArray, 0, initialArray.length - 1, newSteps);
        setSteps(newSteps);
    };

    useEffect(() => {
        if (isSorting && currentStep < steps.length) {
            const timer = setTimeout(() => {
                animateStep(steps[currentStep]).then(() => {
                    setCurrentStep(currentStep + 1);
                });
            }, 1000);

            return () => clearTimeout(timer);
        } else if (currentStep >= steps.length) {
            setIsSorting(false);
            setIsSorted(true);
        }
    }, [isSorting, currentStep, steps]);

    const animateStep = ({ left, mid, right, array }: MergeStep) => {
        return new Promise<void>((resolve) => {
            const boxes = Array.from(document.querySelectorAll('.box'));
            const tl = gsap.timeline({ onComplete: resolve });

            tl.to(boxes.slice(left, right + 1), {
                backgroundColor: "#FFD700",
                duration: 0.5,
            })
            .to(boxes.slice(left, mid + 1), {
                x: -50,
                duration: 0.5,
            }, "<")
            .to(boxes.slice(mid + 1, right + 1), {
                x: 50,
                duration: 0.5,
            }, "<")
            .to(boxes.slice(left, right + 1), {
                x: 0,
                backgroundColor: "#000000",
                duration: 0.5,
            });

            array.forEach((item, index) => {
                const box = boxes[left + index];
                if (box) {
                    box.textContent = item.value.toString();
                }
            });
        });
    };

    return (
        <>
            <p className="flex justify-center items-center text-xl text-white p-5">Merge Sort</p>
            <section
                ref={container}
                className="MergeScroll h-[400px] mx-4 md:mx-8 flex justify-between rounded-lg bg-black border-2 border-solid border-white my-20"
            >
                <div className="relative flex">
                    <div className={`border-white border-r-2 border-solid bg-black text-white rounded-sm transition-all duration-300 ${isOpen ? "w-96" : "w-0 overflow-hidden"}`}>
                        {isOpen && (
                            <>
                                <p className="justify-center flex p-1 text-2xl border-white">Merge Sort Operation</p>
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
                                            onClick={startMergeSort}
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
                            Click an Operation to view the Merge Sort
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

export default MergeSort;
