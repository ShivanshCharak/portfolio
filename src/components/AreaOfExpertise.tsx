"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import svg from '../../public/array-upward.svg'
gsap.registerPlugin(ScrollTrigger)
export default function AOE({ setSelectedIndex }: { setSelectedIndex: (idx: number) => void }) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const workRef = useRef(null)
  const projectItemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.fromTo(
      workRef.current,
      {
        opacity: 0,
        rotationX: 10,
        rotationY: -5,
        y: 100,
        transformPerspective: 800,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 80%",
          end: "bottom top",
          onEnter: () => {
            requestAnimationFrame(() => ScrollTrigger.refresh())
          }
        },
      }
    );

    // Animation for each project item with stagger
    gsap.fromTo(projectItemsRef.current, {
      opacity: 0,
      y: 100,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15, // Adjust this value for the timing between each item
      ease: "power2.out",
      scrollTrigger: {
        trigger: projectItemsRef.current[0]?.parentElement,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

  }, []);

  const projects = [
    "Cryptex: A Crypto trading website",
    "Tech Unplugged: Serverless Blog Website",
    "Digital Wallet",
    "ContestHunt: hunt all upcoming contests + their solutions",
    "Manara-Al-aman: Clothes selling website",
    "BOO: Social Media Platform",
  ];

  return (
    <div className="relative flex flex-col justify-between w-[90vw] mx-auto mt-10 z-10">
      <section className=" transition-all " ref={workRef}>
        <p className="text-sm">Area of expertise</p>
        <p className="text-6xl font-sans mb-6  Stardom-Regular">Selected Work</p>
        <p className="w-[600px] text-sm text-gray-300 mb-2 Inter">
          Over the past 2 years I have worked on many cool projects. I have
          experience in areas including API integration, MERN, Java Spring, and
          advanced backend services like WebSocket, Redis, Kafka.
        </p>
      </section>

      <section className="mt-10 w-[800px] space-y-4 relative">
        {projects.map((val, idx) => {
          const isHovered = hoverIndex !== null;
          const isActive = hoverIndex === idx;

          return (
            <div
              key={idx}
              ref={el => projectItemsRef.current[idx] = el}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => setSelectedIndex(idx)}
              className={`fade flex items-center gap-7  cursor-pointer transition-opacity duration-700 ${isHovered && !isActive ? "opacity-40" : "opacity-100"
                }`}
            >
              <span
                className={`text-[18px] min-w-[260px] Inter font-[500] transition-colors duration-500 ${isHovered && !isActive ? "text-gray-500/50" : "text-white opacity-100"
                  }`}
              >
                {val}
              </span>
              <div className="h-[1px] flex-2 bg-[#ffffff1a]"></div>
              <span
                className={`text-[13px] min-w-[140px] text-right Inter transition-colors duration-500 ${isHovered && !isActive ? "text-gray-500/50" : "text-white opacity-100"
                  }`}
              >
                Full Stack, Design
              </span>
            </div>
          );
        })}

        <div className="absolute underline font-[400] cursor-pointer w-[800px]  mt-5 Inter flex justify-center">
          <Image src={svg} className="rotate-[40deg] " alt="" width={30} height={30} unoptimized />
          See All Projects <span className="text-[11px] -top-3 no-underline ml-1 Inter">( {projects.length} )</span>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[30vh] pointer-events-none z-50 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </section>
    </div>
  );
}