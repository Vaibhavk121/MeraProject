'use client'
import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button"; // Importing Button component from the UI library
import gsap from "gsap"; // Importing GSAP for animations
import { useGSAP } from "@gsap/react"; // Importing useGSAP for context-safe GSAP animations
import './LinkedListFunction.css'
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
    const [appendNumber, setAppendNumber] = useState<number | string>(6); // State for number to append
    const [appendNumber1, setAppendNumber1] = useState<number | string>(0); // State for number to append at the start
    const [insertNumber, setInsertNumber] = useState<number | string>(3); // State for number to insert
    const [insertPosition, setInsertPosition] = useState<number | string>(4); // State for position to insert
    const [deletePosition, setDeletePosition] = useState<number | string>(); // State for position to delete
    const [searchNumber, setSearchNumber] = useState<number | string>(); // State for number to search


    // Handlers for input changes
    const createInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.currentTarget.value), 100);
        setCreateNumber(value);
    };

    const appendInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.currentTarget.value), 100);
        setAppendNumber(value);
    };

    const appendInputHandler1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.currentTarget.value), 100);
        setAppendNumber1(value);
    };

    const insertInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.currentTarget.value), 100);
        setInsertNumber(value);
    };

    const insertPositionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.currentTarget.value), 100);
        setInsertPosition(value);
    };

    const deletePositionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.currentTarget.value), 100);
        setDeletePosition(value);
    };

    const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.currentTarget.value), 100);
        setSearchNumber(value);
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

    // Append an element to the front of the list
    const appendOneElementFirst = () => {
        const newNumber = Number(appendNumber1);
        const newItem = { id: Date.now(), value: newNumber };

        setNoOfList((prev) => {
            if (prev.length >= 100) return prev;
            return [newItem, ...prev];
        });
        setDefaultText(false);

        const onAppendFirst = contextSafe(() => {
            setTimeout(() => {
                gsap.from(`.box${newItem.id}`, {
                    background: "blue",
                    y:-100,
                    stagger: 0.1,
                    visibility: 0,
                    ease: "back.Out",
                    duration: 2,
                    delay: 0.1,
                });
            }, 10);
        });
        onAppendFirst();
        
    };

    // Append an element to the end of the list
    const appendOneElement = () => {
        const newNumber = Number(appendNumber);
        const newItem = { id: Date.now(), value: newNumber };

        setNoOfList((prev) => {
            if (prev.length >= 100) return prev;
            return [...prev, newItem];
        });
        setDefaultText(false);

        const onAppendButton = contextSafe(() => {
            setTimeout(() => {
                gsap.from(`.box${newItem.id}`, {
                    background: 'purple',
                    x: 100,
                    stagger: 0.1,
                    visibility: 0,
                    ease: "back.Out",
                    duration: 2,
                    delay: 0.1,
                });
            }, 10);
        });
        onAppendButton();
    };

    // Insert an element at a specific position
    const insertOneElement = () => {
        const newNumber = Number(insertNumber);
        const newItem = { id: Date.now(), value: newNumber };
        const position = Math.min(Number(insertPosition), noOfList.length);

        setNoOfList((prev) => {
            if (prev.length >= 100) return prev;
            const updatedList = [...prev];
            updatedList.splice(position, 0, newItem);
            return updatedList;
        });
        setDefaultText(false);

        const onInsertButton = contextSafe(() => {
            setTimeout(() => {
                gsap.from(`.box${newItem.id}`, {
                    background: 'green',
                    x: 0,
                    y: -100,
                    stagger: 0.2,
                    visibility: 0,
                    ease: "back.Out",
                    duration: 2,
                    delay: 0.1,
                });
            }, 10);
        });
        onInsertButton();
    };

    // Delete an element with animation
    const deleteElement = (index: number, direction: 'left' | 'right' | 'up') => {
        const removedElement = noOfList[index];
        let animationProps: any = {
            visibility: 0,
            ease: "back.inOut",
            duration: 1,
            onComplete: () => {
                setNoOfList((prev) => {
                    const updatedList = [...prev];
                    updatedList.splice(index, 1);
                    return updatedList;
                });
                setDefaultText(false);
                gsap.to(".box", {
                    x: 0,
                    y: 0,
                    stagger: 0.1,
                    ease: "back.inOut",
                    duration: 1,
                });
            }
        };

        if (direction === 'left') {
            animationProps = { ...animationProps, x: -100 };
        }
        if (direction === 'right') {
            animationProps = { ...animationProps, x: 100 };
        }
        if (direction === 'up') {
            animationProps = { ...animationProps, y: -100 };
        }

        gsap.to(`.box${removedElement.id}`, animationProps);
    };

    // Delete element from the front of the list
    const deleteFromFront = () => {
        deleteElement(0, 'left');
    };

    // Delete element from the middle of the list
    const deleteFromMiddle = () => {
        const position = Math.min(Number(deletePosition), noOfList.length - 1);
        deleteElement(position, 'up');
    };

    // Delete element from the end of the list
    const deleteFromRear = () => {
        deleteElement(noOfList.length - 1, 'right');
    };

    // Search for an element and animate if found
    const searchElement = () => {
        const searchNum = Number(searchNumber);
        const foundItem = noOfList.find(item => item.value === searchNum);
        if (foundItem) {
            gsap.to(`.box${foundItem.id}`, {
                background: 'yellow',
                scale: 1.5,
                yoyo: true,
                repeat: 1,
                duration: 0.8,
            });
        } else {
            console.log("Element not found in the list");
        }
    };

    // Function to safely wrap GSAP animations with context
    function contextSafe(callback: () => void) {
        return () => {
            if (container.current) {
                callback();
            }
        };
    }

    return (
        <>
            <p className=' flex justify-center items-center text-xl text-white p-5 '>Linked List</p>
            <section
            ref={container}
            className=" HorizontalScroller
            h-[400px] mx-4 md:mx-8 flex justify-between rounded-lg bg-black border-2 border-solid border-white my-20"
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
                            <Button className="md:w-[5rem] hover:scale-100 p-2 ml-2"
                             variant={"secondary"}
                            onClick={generateDefaultList}>
                            Create
                            </Button>
                        </div>
                        </div>
                        <div className="flex flex-col items-center gap-3 m-2">
                        <div className="flex w-full justify-between items-center">
                            <span className="text-md font-medium flex items-center">
                            Insert to the list
                            <input
                                className="w-14 p-1 ml-2 text-center rounded-lg border-2 border-solid border-green-50 bg-black text-white"
                                onChange={appendInputHandler1}
                                value={appendNumber1}
                                type="number"
                                min="1"
                                max="100"
                            />
                            </span>
                            <Button className="md:w-[7rem] hover:scale-100 p-2 ml-2"
                             variant={"secondary"}
                            onClick={appendOneElementFirst}>
                            front
                            </Button>
                        </div>
                        </div>
                        <div className="flex flex-col items-center gap-3 m-2">
                        <div className="flex w-full justify-between items-center">
                            <span className="text-md font-medium flex items-center">
                            Insert in rare of the list
                            <input
                                className="w-14 p-1 ml-2 text-center rounded-lg border-2 border-solid border-green-50 bg-black text-white"
                                onChange={appendInputHandler}
                                value={appendNumber}
                                type="number"
                                min="1"
                                max="100"
                            />
                            </span>
                            <Button className="md:w-[7rem] hover:scale-100 p-2 ml-2"
                             variant={"secondary"}
                            onClick={appendOneElement}>
                            rear
                            </Button>
                        </div>
                        </div>
                        <div className="flex flex-col items-center gap-3 m-2">
                        <div className="flex w-full justify-between items-center">
                            <span className="text-md font-medium flex items-center">
                            Insert
                            <input
                                className="w-14 p-1 ml-2 text-center rounded-lg border-2 border-solid border-green-50 bg-black text-white"
                                onChange={insertInputHandler}
                                value={insertNumber}
                                type="number"
                                min="1"
                                max="100"
                            />
                            <span className="ml-2">at Index </span>
                            <input
                                className="w-14 p-1 ml-2 text-center rounded-lg border-2 border-solid border-green-50 bg-black text-white"
                                onChange={insertPositionHandler}
                                value={insertPosition}
                                type="number"
                                min="0"
                                max="100"
                            />
                            </span>
                            <Button className="md:w-[7rem] hover:scale-100 p-2 ml-2"
                             variant={"secondary"}
                            onClick={insertOneElement}>
                            middle
                            </Button>
                        </div>
                        </div>
                        <div className="flex flex-col items-center gap-3 m-2">
                        <div className="flex w-full justify-between items-center">
                            <span className="text-md font-medium flex items-center">
                            Delete element at =
                            </span>
                            <div className="flex gap-2 ml-2">
                            <Button className="md:w-[7rem] hover:scale-100 p-2" 
                             variant={"secondary"}
                            onClick={deleteFromFront}>
                                Front
                            </Button>
                            <Button className="md:w-[7rem] hover:scale-100 p-2" 
                             variant={"secondary"}
                            onClick={deleteFromRear}>
                                Rear
                            </Button>
                            </div>
                        </div>
                        </div>
                        <div className="flex flex-col items-center gap-3 m-2">
                        <div className="flex w-full justify-between items-center">
                            <span className="text-md font-medium flex items-center">
                            Delete element at Index
                            <input
                                className="w-14 p-1 ml-2 text-center rounded-lg border-2 border-solid border-green-50 bg-black text-white"
                                onChange={deletePositionHandler}
                                value={deletePosition}
                                type="number"
                                min="0"
                                max="100"
                            />
                            </span>
                            <div className="flex flex-col gap-2 ml-2">
                            <Button className="md:w-[7rem] hover:scale-100 p-2" 
                             variant={"secondary"}
                            onClick={deleteFromMiddle}>
                                Middle
                            </Button>
                            </div>
                        </div>
                        </div>
                        <div className="flex flex-col items-center gap-3 m-2">
                        <div className="flex w-full justify-between items-center">
                            <span className="text-md font-medium flex items-center">
                            Number to Search
                            <input
                                className="w-14 p-1 ml-2 text-center rounded-lg border-2 border-solid border-green-50 bg-black text-white"
                                onChange={searchInputHandler}
                                value={searchNumber}
                                type="number"
                                min="1"
                                max="100"
                            />
                            </span>
                            <Button className="md:w-[7rem] hover:scale-100 p-2 ml-2" 
                             variant={"secondary"}
                            onClick={searchElement}>
                            Search
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
                <span className=" flex items-center w-full h-full  justify-center text-2xl font-medium text-center text-white">
                    Click an Operation to view the Linked List
                </span>
                )}
                
                <div className=" w-full h-full flex justify-center items-center">
                    {noOfList.map((ele, i) => (
                        <div key={ele.id} className="relative  scrollerLinklist m-5">
                        { i < noOfList.length - 1 && <div
                            style={{
                            position: 'absolute',
                            height: '2px',
                            width: '80px', // Adjust width based on spacing between boxes mate 
                            backgroundColor: 'white',
                            top: '2.5rem',
                            left: '6rem', // Adjust positioning to connect the line to the right side of the box for your own mate 
                            transform: 'translateY(-50%)',
                            }}
                        >
                        </div>
                        }

                        <div className="relative w-[122px] border-gray-400 border-4 p-1 rounded-md">
                            {/* Non-animated vertical line */}
                            <div
                                className="absolute"
                                style={{
                                top: 0,
                                bottom: 0,
                                left: '4rem',
                                borderLeft: '2px solid white',
                                transform: 'translateX(-50%)',
                                zIndex: 10, // Ensures the line is above the content
                                }}
                            ></div>

                            {/* Animated box */}
                                <div className={`${boxClassVariable} box box${ele.id} relative`}>
                                    {ele.value.toString()}
                                </div>
                                {i === 0 && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12 text-xl text-green-500 text-center">Head</div>
                                )}
                                {i === noOfList.length - 1 && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12 text-xl text-red-500 text-center">Tail</div>
                                )}
                        </div>
                            <div className="text-lg font-medium absolute left-8 text-center text-white">{i}</div>
                    </div>
                    ))}
                </div>
            </div>
            </section>
                    
        </>
    );
}

export default LinkListFunction;
