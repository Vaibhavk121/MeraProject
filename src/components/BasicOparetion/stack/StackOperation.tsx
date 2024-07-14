'use client'
import React, {  useState } from 'react';

const StackOperation = () => {
    
    const [items, setItems] = useState<String[]>([]);
    const [value,setValue] = useState<any>(' ')

    const addItem = (item: string | String,e:any) =>{
    e.preventDefault()
    if(item!=' ' && item!==''){
      setItems([...items,item])
    }
    else
      alert('Enter an item...')
    setValue('')
    }

    const popElement = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault()
        setItems(items => items.slice(0, -1));
    }
    return (
        <>
            <section className='stack_visualise flex h- w-4/5 m-auto border-2 border-white rounded-md z-10 bg-black'>
                <div className='stack_input_box h-max w-2/5  text-white'>
                <p className=' text-white border-2 border-white w-full text-2xl'>Opreations</p>
                    <p className=' my-5 mx-2'>Push Element : <input type="text" id='stack_inputBox' className='text-black' onChange={e=>setValue(e.target.value)} value={value}/> <button type='submit' className=' bg-slate-800 px-6 py-1' onClick={(e)=>addItem(value,e)}>Push</button> <br /></p>
                    <p className=' my-5 mx-2'>POP Element : <button className=' bg-slate-800 px-6 py-1' onClick={(e)=>popElement(e)}>POP</button></p>   
                </div>

                <div className='stack_visualization_section w-3/5 border-2 border-l-white'>
                    <div className='stack_box text-white '>{
                    items.map((data,index)=>{
                        return(
                            <p className='stack_block border-2 border-white py-3 px-5 rounded w-max' key={index}><b>{data}</b></p>
                        )
                    })
                    }</div>
                </div>
            </section>
        </>
    );
}

export default StackOperation;
