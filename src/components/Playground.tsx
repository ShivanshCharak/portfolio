import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { projectsData } from "./utils/projectdata";

export default function Playground() {
    const playgroundRef = useRef<HTMLDivElement>(null);
    const textArrayRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!playgroundRef.current || !textArrayRef.current || !containerRef.current) return;

       
        const horizontalScrollDistance = playgroundRef.current.scrollWidth - window.innerWidth;


        ScrollTrigger.create({
            trigger: playgroundRef.current,
            start: "top 30%",
            end: `+=${horizontalScrollDistance+300}`, // Continue pinning through horizontal scroll
            pin: true,
            pinSpacing: true,
       
        });

        gsap.to(playgroundRef.current, {
            x: -horizontalScrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: playgroundRef.current,
                start: "top 30%",
                end: `+=${horizontalScrollDistance}`,
                scrub: 1,
            }
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <div ref={containerRef} className="relative w-full overflow-x-hidden h-[250vh] mt-[100px] z-0">
            {/* Scrolling text array */}
            <div ref={textArrayRef} className="absolute top-10 flex items-center animate-scroll">
                {Array.from({length: 50}).map((_, index) => (
                    <div key={index} className="Inter ml-20 text-6xl font-bold">
                        <h2 className="Inter">Playground</h2>
                    </div>
                ))}
            </div>
            
            {/* Horizontally scrolling image grid */}
            <div 
                ref={playgroundRef}
                className="flex gap-8 mt-50 cursor-pointer relative z-0 w-max"
            >


                    <Image src={projectsData["cryptex"]["images"][0]}  alt="Image 1" width={100} height={100} className="rounded-xl shadow-m
                    d w-[1000px] h-[60vh] object-cover" />
                    <Image src={projectsData["cryptex"]["images"][1]}  alt="Image 1" width={100} height={100} className="rounded-xl shadow-m
                    d w-[1000px] h-[60vh] object-cover" />
                     <Image src={projectsData["techUnplugged"]["images"][0]}  alt="Image 1" width={100} height={100} className="rounded-xl shadow-m
                    d w-[1000px] h-[60vh] object-cover" />
                     <Image src={projectsData["techUnplugged"]["images"][1]}  alt="Image 1" width={100} height={100} className="rounded-xl shadow-m
                    d w-[900px] h-[60vh] object-cover" />
          
                
                     <>
                           
        
                 </>
            
            </div>
        </div>
    );
}