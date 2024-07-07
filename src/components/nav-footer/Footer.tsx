import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-3 py-2  justify-center text-lg bg-[#008151] font-medium text-white">
      <section className="flex w-[95%] mt-3 flex-col gap-3">
        <h4 className="text-3xl">Snippet2Sketch</h4>
        <div className="flex justify-between ">
          <div className="flex gap-10 items-center uppercase">
            <Link href="/" className="">
              HOME
            </Link>
            <Link href="/" className="">
              SKETCH
            </Link>
            <Link href="/" className="">
              ABOUT US
            </Link>
          </div>
          <div className="flex gap-10 items-center">
            <a href="/" className="text-xl hover:underline">Want to Contribute ?</a>
            <Button variant={"secondary"} className="text-lg font-semibold rounded-full px-8 py-4">Contact us</Button>
          </div>
        </div>
      </section>
      <section className="w-full border-t-[2px] border-white">
        <p className="text-center my-2">&copy; 2024 Snippet2Sketch</p>
      </section>
    </footer>
  );
};

export default Footer;
