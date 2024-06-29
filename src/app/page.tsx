import AboutSection from "@/components/home/Aboutsection";
import Herosection from "@/components/home/Herosection";
import Visualizesection from "@/components/home/Visualizesection";

export default function Home() {
  return (
    <main>
      {/* ------------------------------- Hero Section  ------------------------------- */}
      <Herosection/>
      {/* ------------------------------- AboutUs Section  ------------------------------- */}

      <AboutSection/>
      
      {/* ------------------------------- Visualize Section  ------------------------------- */}
      <Visualizesection/>
    </main>
  );
}
