'use client'
import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import './QuickSort.css';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

interface ListItem {
    id: number;
    value: number;
}

const QuickSort = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [defaultText, setDefaultText] = useState(true);
    const [noOfList, setNoOfList] = useState<ListItem[]>([]);
    const [createNumber, setCreateNumber] = useState<number | string>(5);
    const [animationInProgress, setAnimationInProgress] = useState(false);
    const [pivotIndex, setPivotIndex] = useState<number | null>(null);
    const [lowIndex, setLowIndex] = useState<number | null>(null);
    const [highIndex, setHighIndex] = useState<number | null>(null);
    const container = useRef<HTMLDivElement>(null);

    const boxClassVariable = "flex h-14 w-14 items-center justify-center rounded-lg text-white text-xl font-medium drop-shadow-lg ";

    const createInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Math.max(Number(event.currentTarget.value), 1), 100);
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

        gsap.set(".box", { backgroundColor: "transparent" });

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

    const quickSort = async () => {
        if (animationInProgress) return;

        setAnimationInProgress(true);

        const list = [...noOfList];

        const partition = async (low: number, high: number) => {
            let pivot = list[high].value;
            let i = low - 1;

            setPivotIndex(high);
            setLowIndex(low);
            setHighIndex(high);

            for (let j = low; j < high; j++) {
                if (list[j].value < pivot) {
                    i++;
                    await animateSwap(i, j, list);
                }
            }
            await animateSwap(i + 1, high, list);
            return i + 1;
        };

        const quickSortHelper = async (low: number, high: number) => {
            if (low < high) {
                const pi = await partition(low, high);
                await quickSortHelper(low, pi - 1);
                await quickSortHelper(pi + 1, high);
            }
        };

        await quickSortHelper(0, list.length - 1);
        setPivotIndex(null);
        setLowIndex(null);
        setHighIndex(null);
        setAnimationInProgress(false);
        setNoOfList(list);

        gsap.set(".box", { backgroundColor: "transparent" });
    };

    const animateSwap = async (i: number, j: number, list: ListItem[]) => {
        return new Promise<void>((resolve) => {
            [list[i], list[j]] = [list[j], list[i]];
            setNoOfList([...list]);

            const box1 = document.querySelector(`.box${list[i].id}`);
            const box2 = document.querySelector(`.box${list[j].id}`);

            if (box1 && box2) {
                const tl = gsap.timeline();
                tl.to(box1, { backgroundColor: "#f39c12", duration: 0.3 }) // Increased duration
                    .to(box2, { backgroundColor: "#f39c12", duration: 0.3 }, "<") // Increased duration
                    .to(box1, { x: 70 * (j - i), duration: 0.7 }) // Increased duration
                    .to(box2, { x: -70 * (j - i), duration: 0.7 }, "<") // Increased duration
                    .to(box1, { x: 0, duration: 0.7 }) // Increased duration
                    .to(box2, { x: 0, duration: 0.7 }, "<") // Increased duration
                    .to(box1, { backgroundColor: "#3498db", duration: 0.3 }) // Increased duration
                    .to(box2, { backgroundColor: "#3498db", duration: 0.3 }, "<") // Increased duration
                    .eventCallback("onComplete", resolve);
            } else {
                resolve();
            }
        });
    };

    function contextSafe(callback: () => void) {
        return () => {
            if (container.current) {
                callback();
            }
        };
    }

    return (
        <>
            <p className="flex justify-center items-center text-xl text-white p-5">Quick Sort</p>
            <section
                ref={container}
                className="QuickScroll h-[400px] mx-4 md:mx-8 flex justify-between rounded-lg bg-black border-2 border-solid border-white my-20"
            >
                <div className="relative flex">
                    <div
                        className={`border-white border-r-2 border-solid bg-black text-white rounded-sm transition-all duration-300 ${
                            isOpen ? "w-96" : "w-0 overflow-hidden"
                        }`}
                    >
                        {isOpen && (
                            <>
                                <p className="justify-center flex p-1 text-2xl border-white">Quick Sort Operation</p>
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
                                        <span className="text-md font-medium flex items-center">Click to Sort</span>
                                        <Button
                                            className="md:w-[7rem] p-2 ml-2 mt-7"
                                            variant={"secondary"}
                                            onClick={quickSort}
                                        >
                                            Sort
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
                            Click an Operation to view the Quick Sort
                        </span>
                    )}
                    <div className="w-full h-full flex justify-center items-center">
                        {noOfList.map((ele, i) => (
                            <div key={ele.id} className="relative">
                                <div className="relative border-gray-400 border-4 p-1 rounded-md">
                                    <div className={`${boxClassVariable} box box${ele.id} relative`}>
                                        {ele.value.toString()}
                                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white">
                                            {i === pivotIndex ? "Pivot" : ""}
                                            {i === lowIndex ? "Low" : ""}
                                            {i === highIndex ? "High" : ""}
                                        </div>
                                    </div>
                                    <div className="text-lg font-medium absolute left-8 text-center text-white">{i}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default QuickSort;
