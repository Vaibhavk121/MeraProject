import AboutSection from "@/components/home/Aboutsection";
import Herosection from "@/components/home/Herosection";
import Visualizesection from "@/components/home/Visualizesection";
import Navbar from "@/components/nav-footer/Navbar";

export default function Home() {
  return (
    <main>
      <Herosection />
      <AboutSection />
      <Visualizesection />
    </main>
  );
}
