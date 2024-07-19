"use client"
import SubHero from '@/components/SubHero'
import React, { useRef } from 'react'
import { ArrayFunction } from './ArrayFunction';

const content =
"Arrays are fundamental to virtually every programming language and application. They Provide a simple yet powerful way to store and manipulate data.";

export default function PageContainer() {
    const childRef = useRef<{ onCreateButton: () => void }>()

    const onclickHandler = () =>{
        childRef.current?.onCreateButton()
    }
  return (
      <main className="">
        <SubHero
          title={"Arrays"}
          content={content}
          leftLink="stacks"
          leftTitle="Stack"
          rightLink="linkedList"
          rightTitle="Linked List"
          onclick={onclickHandler}
        />
        <ArrayFunction ref={childRef}/>
      </main>
  )
}
