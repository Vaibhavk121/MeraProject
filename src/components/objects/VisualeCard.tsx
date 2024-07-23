import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

interface CardType{
    title: string
    link:string

}

export default function VisualeCard({title,link}:CardType) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-[#00A464] p-5 hover:scale-105 hover:transition-transform hover:duration-100">
            <p className="text-2xl">{title}</p>
            <div className="h-[15rem] w-[22rem] rounded-2xl bg-[#cff6e7]"></div>
            <Link href={`/${link}`} className="flex items-center text-lg hover:underline">
              Learn Now <GoArrowUpRight size={25} />
            </Link>
          </div>
  )
}
