import SubNavbar from "@/components/nav-footer/SubNavbar";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import TopScrollButton from "@/components/objects/TopScrollButton";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center gap-20 text-white">
      <SubNavbar />
      <article className="flex w-[90%] flex-col gap-5 p-10 max-lg:w-full">
        <h1 className="text-5xl max-md:text-4xl">
          Visualize and Learn efficiently
        </h1>
        <p className="w-[60%] text-2xl max-lg:text-xl max-md:w-full">
          Visualization improves comprehension by making complex concepts easier
          to grasp, as seeing how elements are organized and connected clarifies
          the structure and flow of data.
        </p>
      </article>
      <section className="flex w-[90%] flex-wrap justify-evenly gap-5">
        <div className="flex flex-col gap-5 rounded-2xl bg-[#00A464] p-5">
          <p className="text-2xl">Arrays</p>
          <div className="h-[15rem] w-[25rem] rounded-2xl bg-[#cff6e7]"></div>
          <span className="flex items-center text-lg hover:underline">
            Learn Now <GoArrowUpRight size={25} />
          </span>
        </div>
        <div className="flex flex-col gap-5 rounded-2xl bg-[#00A464] p-5">
          <p className="text-2xl">Linked List</p>
          <div className="h-[15rem] w-[25rem] rounded-2xl bg-[#cff6e7]"></div>
          <span className="flex items-center text-lg hover:underline">
            Learn Now <GoArrowUpRight size={25} />
          </span>
        </div>
        <div className="flex flex-col gap-5 rounded-2xl bg-[#00A464] p-5">
          <p className="text-2xl">Stacks</p>
          <div className="h-[15rem] w-[25rem] rounded-2xl bg-[#cff6e7]"></div>
          <span className="flex items-center text-lg hover:underline">
            Learn Now <GoArrowUpRight size={25} />
          </span>
        </div>
        <div className="flex flex-col gap-5 rounded-2xl bg-[#00A464] p-5">
          <p className="text-2xl">Merge Sort</p>
          <div className="h-[15rem] w-[25rem] rounded-2xl bg-[#cff6e7]"></div>
          <span className="flex items-center text-lg hover:underline">
            Learn Now <GoArrowUpRight size={25} />
          </span>
        </div>
        <div className="flex flex-col gap-5 rounded-2xl bg-[#00A464] p-5">
          <p className="text-2xl">Quick Sort</p>
          <div className="h-[15rem] w-[25rem] rounded-2xl bg-[#cff6e7]"></div>
          <span className="flex items-center text-lg hover:underline">
            Learn Now <GoArrowUpRight size={25} />
          </span>
        </div>
        <div className="flex flex-col gap-5 rounded-2xl bg-[#00A464] p-5">
          <p className="text-2xl">Insertion Sort</p>
          <div className="h-[15rem] w-[25rem] rounded-2xl bg-[#cff6e7]"></div>
          <span className="flex items-center text-lg hover:underline">
            Learn Now <GoArrowUpRight size={25} />
          </span>
        </div>
      </section>
      <div className="flex w-[85%] justify-end">
        <TopScrollButton />
      </div>
    </main>
  );
}
