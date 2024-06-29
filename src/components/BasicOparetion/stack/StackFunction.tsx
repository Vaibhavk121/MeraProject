'use client'
import React from 'react'
import { useState } from 'react'


export default function StackFunction() {

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
    <main className="grid min-h-screen grid-rows-[3rem,22rem,1fr] bg-slate-500">
      <div></div>
      <section className="mx-10 flex grid-rows-2 flex-col items-center justify-center bg-white overflow-scroll">
        <div>{
          items.map((data,index)=>{
            return(
              <p className='stack_block border-2 border-black py-3 px-5 rounded' key={index}><b>{data}</b></p>
            )
          })
          }</div>
      </section>
      <section className="bg-orange-300 p-2">

          <form>
            <input type="text" id='stack_inputBox' onChange={e=>setValue(e.target.value)} value={value}/>
            <button type='submit' onClick={(e)=>addItem(value,e)}>Push</button>
          </form>
        
          <button onClick={(e)=>popElement(e)}>POP</button>
      </section>
    </main>
  )
}