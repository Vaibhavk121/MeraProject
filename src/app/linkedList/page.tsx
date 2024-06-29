import React from 'react'
import LinkListFunction from '@/components/BasicOparetion/LinkList/LinkListFunction'
export default function page() {
  return (
    <main className="grid min-h-screen grid-rows-[3rem,22rem,1fr] bg-slate-500">
      <div></div>
      <LinkListFunction/>
      <section className="mx-10 flex grid-rows-2 flex-col items-center justify-center bg-white"></section>
      <section className="bg-orange-300 p-2"></section>
    </main>
  )
}
