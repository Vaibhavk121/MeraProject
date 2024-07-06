'use client'
import Link from 'next/link';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Visualizesection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='visualise_container relative '>
      <div className="visualise_title absolute flex  mt-14 ml-20">
        <p id='circle'></p> <p className=' text-4xl text-white'>Visualize</p>
      </div>

      <div className='visualise_card h-2/4 w-3/4 mx-auto mt-40'>
          <Carousel responsive={responsive}>
            <Link href='/'><div className=' h-80 w-72 bg-white rounded-3xl'>
                <div className="visualize_card h-full w-full">
                  <p className=' absolute top-4 left-4 text-xl'>Arrays</p>
                </div>
            </div>
            </Link>

            <Link href='/'><div className=' h-80 w-72 bg-white rounded-3xl'>
                <div className="visualize_card h-full w-full">
                  <p className=' absolute top-4 left-4 text-xl'>Stacks</p>
                </div>
            </div>
            </Link>

            <Link href='/'><div className=' h-80 w-72 bg-white rounded-3xl'>
                <div className="visualize_card h-full w-full">
                  <p className=' absolute top-4 left-4 text-xl'>Queue</p>
                </div>
            </div>
            </Link>

            <Link href='/'><div className=' h-80 w-72 bg-white rounded-3xl'>
                <div className="visualize_card h-full w-full">
                  <p className=' absolute top-4 left-4 text-xl'>Linked List</p>
                </div>
            </div>
            </Link>

          </Carousel>
      </div>

      <button className='text-xl text-black bg-white rounded-2xl px-3 py-1 mx-3 h-max mt-12 ml-44'>Explore more <b>&#8594;</b></button>
      
    </div>
  )
}

export default Visualizesection