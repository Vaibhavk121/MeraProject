import React from 'react';
import Navbar from '@/components/nav-footer/Navbar';
import BubbleSort from '@/components/Sorting/BubbleSort/BubbleSort';
import AboutBubble from '@/components/Sorting/BubbleSort/AboutBubble';



const Page = () => {
  return (
    <>
      <Navbar />
      <AboutBubble/>
      <BubbleSort />
    </>
  );
};

export default Page;