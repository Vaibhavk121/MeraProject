'use client'
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const StackOperation = () => {
    const [items, setItems] = useState<String[]>([]);
    const [value, setValue] = useState<string>('');

    const stackBoxRef = useRef<HTMLDivElement | null>(null);

    const addItem = (item: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (item !== ' ' && item !== '') {
            setItems(prevItems => {
                const newItems = [...prevItems, item];
                setTimeout(() => {
                    if (stackBoxRef.current) {
                        const newItem = stackBoxRef.current.lastElementChild;
                        gsap.fromTo(newItem, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.5 });
                    }
                }, 0);
                return newItems;
            });
        } else {
            alert('Enter an item...');
        }
        setValue('');
    };

    const popElement = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (items.length > 0) {
            if (stackBoxRef.current) {
                const lastItem = stackBoxRef.current.lastElementChild;
                if (lastItem) {
                    gsap.to(lastItem, { opacity: 0, y: -50, duration: 0.5, onComplete: () => {
                        setItems(items => items.slice(0, -1));
                    } });
                }
            }
        } else {
            alert('No items to pop...');
        }
    };

    return (
        <>
            <section className='stack_visualise flex h- w-4/5 m-auto border-2 border-white rounded-md z-10 bg-black'>
                <div className='stack_input_box h-max w-2/5 text-white'>
                    <p className='text-white border-2 border-white w-full text-2xl'>Operations</p>
                    <p className='my-5 mx-2'>
                        Push Element: 
                        <input 
                            type="text" 
                            id='stack_inputBox' 
                            className='text-black mx-4' 
                            onChange={e => setValue(e.target.value)} 
                            value={value} 
                        />
                        <button type='submit' className='bg-slate-800 px-6 py-1' onClick={(e) => addItem(value, e)}>Push</button>
                    </p>
                    <p className='my-5 mx-2'>
                        POP Element: 
                        <button className='bg-slate-800 px-6 py-1 mx-4' onClick={(e) => popElement(e)}>POP</button>
                    </p>
                </div>

                <div className='stack_visualization_section w-3/5 border-2 border-l-white'>
                    <div className='stack_box text-white' ref={stackBoxRef}>
                        {items.map((data, index) => (
                            <div className=' p-2 border-2 border-white' key={index}>
                                <p className='stack_block bg py-3 px-5 rounded w-max' key={index}>
                                    <b>{data}</b>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default StackOperation;
