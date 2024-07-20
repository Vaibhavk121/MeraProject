"use client";
import React from "react";
import { Button } from "../ui/button";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const topScrollHander = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
export default function TopScrollButton() {
  return (
    <Button
      className="mb-20 flex gap-2 rounded-full bg-white p-8 text-xl text-black hover:scale-110 hover:bg-white hover:transition-transform hover:duration-100"
      onClick={topScrollHander}
    >
      <FaRegArrowAltCircleUp />
      <p>Scroll to top</p>
    </Button>
  );
}
