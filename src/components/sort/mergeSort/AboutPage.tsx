"use client";
import SubHero from "@/components/SubHero";
import React, { useRef } from "react";

const content =
  "The Merge Sort algorithm is a divide-and-conquer algorithm that sorts an array by first breaking it down into smaller arrays, and then building the array back together the correct way so that it is sorted.";

export default function AboutPage() {
  const childRef = useRef<{ onCreateButton: () => void }>();

  const onclickHandler = () => {
    childRef.current?.onCreateButton();
  };
  return (
    <SubHero
      title={"Merge Sort"}
      content={content}
      leftLink="stacks"
      leftTitle="Stack"
      rightLink="linkedList"
      rightTitle="Linked List"
      onclick={onclickHandler}
    />
  );
}
