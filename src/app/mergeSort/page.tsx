import AboutPage from '@/components/sort/mergeSort/AboutPage'
import AnimationLayout from '@/components/sort/mergeSort/AnimationLayout'
import SubHero from '@/components/SubHero'
import React from 'react'

export default function page() {
  return (
    <main className=' flex flex-col justify-center items-center'>
        <AboutPage/>
        <AnimationLayout/>
    </main>
  )
}
