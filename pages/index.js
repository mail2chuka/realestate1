import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menucomp from "@/components/Menucomp";
import { useState } from "react";
import Info from "@/components/Info";
import { InfoData, InfoDataTwo } from "@/public/data/InfoData";
import Footer from "@/components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="overflow-hidden">
      <Navbar toggle={toggle} />
      <Menucomp toggle={toggle} isOpen={isOpen} />
      <Hero />

      <Info {...InfoData} position={1} />
      <Info {...InfoDataTwo} position={2} />
      <Footer />
    </div>
  );
}
