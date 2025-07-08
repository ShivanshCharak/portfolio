"use client"
import HeroPage from "@/components/HeroPage";
import RotatingLogo from "@/components/logo";
import Navbar from "@/components/Navbar";
import ProjectsViewer from "@/components/Cryptex";
import AOE from "@/components/AreaOfExpertise";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Playground from "@/components/Playground";
import { useState } from "react";
import Journal from "@/components/Journal";
export default function Home() {
const [selectedIndex, setSelectedIndex] = useState(0)
const [selectedServices, setSelectedServices] = useState(-1)


  return (
    <main className="min-h-screen bg-black text-white flex flex-col ">

      <div className="flex flex-row justify-between w-full fixed">
        
        <RotatingLogo />
        <div className="w-[30vw] flex justify-between p-10 ">
          <Navbar />
          <Contact />

        </div>
      </div>
      <div className="flex-grow flex items-center justify-center">

        <HeroPage />
        <div className="absolute bottom-10 right-10 w-[300px] animate-pulse font-semibold text-zinc-500 text-left cursor-pointer hover:shine-effect">
          Tries to create Fast, Scalable and reliable systems by using the concept of system design
        </div>

      </div>
      <div>
        <AOE  setSelectedIndex={setSelectedIndex}/>
      </div>
      <div>
        <Services />
      </div>
      <Playground />
    
    
      <ProjectsViewer index={selectedIndex}  onClose={() => setSelectedIndex(-1)} />
        <Journal/>

    </main>
  );
}
