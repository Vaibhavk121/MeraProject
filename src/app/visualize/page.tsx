import SubNavbar from "@/components/nav-footer/SubNavbar";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import TopScrollButton from "@/components/objects/TopScrollButton";
import VisualeCard from "@/components/objects/VisualeCard";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center text-white">
      <div className="flex max-w-[1280px] flex-col gap-20">
        <SubNavbar />
        <article className="flex flex-col gap-5">
          <h1 className="text-5xl max-md:text-4xl">
            Visualize and Learn efficiently
          </h1>
          <p className="w-[60%] text-2xl max-lg:text-xl max-md:w-full">
            Visualization improves comprehension by making complex concepts
            easier to grasp, as seeing how elements are organized and connected
            clarifies the structure and flow of data.
          </p>
        </article>
        <section className="flex flex-wrap items-center justify-center gap-10">
          <VisualeCard title="Arrays" link="arrays" />
          <VisualeCard title="Linked List" link="linkedList" />
          <VisualeCard title="Stacks" link="stacks" />
          <VisualeCard title="Bubble Sort" link="bubblesort" />
          <VisualeCard title="Merge Sort" link="mergesort" />
          <VisualeCard title="Quick Sort" link="quicksort" />
          <VisualeCard title="Insertion Sort" link="insertionsort" />
        </section>
        <div className="flex justify-end">
          <TopScrollButton />
        </div>
      </div>
    </main>
  );
}
