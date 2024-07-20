import AboutPage from '@/components/Sorting/mergeSort/AboutPage'
import AnimationLayout from '@/components/Sorting/mergeSort/AnimationLayout'
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
