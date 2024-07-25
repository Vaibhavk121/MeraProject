import Navbar from '@/components/nav-footer/Navbar'
import AboutInsertion from '@/components/Sorting/InsertionSort/AboutInsertion'
import InsertionSort from '@/components/Sorting/InsertionSort/InsertionSort'
import React from 'react'

const page = () => {
  return (
    <main>
      <Navbar/>
      <AboutInsertion/>
      <InsertionSort/>
    </main>
  )
}

export default page