import ArrayFunction from "@/components/BasicOparetion/arrays/ArrayFunction";
import SubHero from "@/components/SubHero";
import { Button } from "@/components/ui/button";

export default function page() {
  const content =
    "Arrays are fundamental to virtually every programming language and application. They Provide a simple yet powerful way to store and manipulate data.";
  return (
    <>
      <main className="">
        <SubHero
          title={"Arrays"}
          content={content}
          leftLink="stacks"
          leftTitle="Stack"
          rightLink="linkedList"
          rightTitle="Linked List"
        />
        <ArrayFunction/>
      </main>
    </>
  );
}
