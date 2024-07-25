import Navbar from '@/components/nav-footer/Navbar'
import AboutQuick from '@/components/Sorting/QuickSort/AboutQuick'
import QuickSort from '@/components/Sorting/QuickSort/QuickSort'
import React from 'react'

const page = () => {
  return (
    <main>
      <Navbar/>
      <AboutQuick/>
      <QuickSort/>
    </main>
  )
}

export default page