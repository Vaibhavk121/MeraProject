"use client";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "../ui/button";

const Visualizesection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="visualise_container relative">
      <div className="visualise_title absolute ml-20 mt-14 flex">
        <p id="circle"></p> <p className="text-4xl text-white">Visualize</p>
      </div>

      <div className="visualise_card mx-auto mt-40 h-2/4 w-3/4">
        <Carousel responsive={responsive}>
          <Link href="/">
            <div className="h-80 w-72 rounded-3xl bg-white">
              <div className="visualize_card h-full w-full">
                <p className="absolute left-4 top-4 text-xl">Arrays</p>
              </div>
            </div>
          </Link>

          <Link href="/">
            <div className="h-80 w-72 rounded-3xl bg-white">
              <div className="visualize_card h-full w-full">
                <p className="absolute left-4 top-4 text-xl">Stacks</p>
              </div>
            </div>
          </Link>

          <Link href="/">
            <div className="h-80 w-72 rounded-3xl bg-white">
              <div className="visualize_card h-full w-full">
                <p className="absolute left-4 top-4 text-xl">Queue</p>
              </div>
            </div>
          </Link>

          <Link href="/">
            <div className="h-80 w-72 rounded-3xl bg-white">
              <div className="visualize_card h-full w-full">
                <p className="absolute left-4 top-4 text-xl">Linked List</p>
              </div>
            </div>
          </Link>
        </Carousel>
      </div>

      <Button
        className="mx-3 ml-44 mt-12 h-max rounded-2xl bg-white px-3 py-1 text-xl text-black hover:bg-white"
        onClick={() => (window.location.href = "/visualize")}
      >
        Explore more <b>&#8594;</b>
      </Button>
    </div>
  );
};

export default Visualizesection;
