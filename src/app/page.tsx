import AboutSection from "@/components/home/Aboutsection";
import Footer from "@/components/nav-footer/Footer";
import Herosection from "@/components/home/Herosection";
import Visualizesection from "@/components/home/Visualizesection";
import Navbar from "@/components/nav-footer/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main>
      <Herosection />
      <AboutSection />
      <Visualizesection />
    </main>
    </>
  );
}
