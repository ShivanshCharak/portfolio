"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import svg from '../../public/array-upward.svg'
gsap.registerPlugin(ScrollTrigger)
export default function Journal() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const workRef = useRef(null)
  const projectsRef = useRef(null)


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
        // ease:"easein",
        ease: "none", // GSAP supports this syntax
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 80%",
          end: "bottom top",
          onEnter: () => {
            requestAnimationFrame(() => ScrollTrigger.refresh())
          }
          // toggleAttribute:pla

        },
      }
    );
    gsap.fromTo(projectsRef.current, {
      opacity: 0,
      y: 100,
    }, {
      stagger: 0.5,
      opacity: 1,
      y: 0,
      duration: 5,
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 80%",
      }
    })


  }, []);


  const projects = [
   "    MAY 13, 2025 Gen AI Pipeline for Developers",
   " Feb 18, 2025 Designing E-Commerce Product listing",
    "Feb 17, 2025 Multiple Threads execution & Process utilization",
    "Nov 2, 2024 Understanding the Linux File System",
    "Oct 17, 2024 Introduction to Linux Shell and Essential Commands"
  ];

  return (
    <div className="relative flex flex-col w-[90vw] mx-auto mt-[100rem] z-10 py-10 h-[100vh]">
      <section className=" transition-all " ref={workRef}>
        <p className="text-6xl font-sans mb-6  Stardom-Regular">Journal</p>
        <p className="w-[600px] text-sm text-gray-300 mb-2 Inter">
          Over the past 2 years I have worked on many cool projects. I have
          experience in areas including API integration, MERN, Java Spring, and
          advanced backend services like WebSocket, Redis, Kafka.
        </p>
      </section>

      <section className="mt-10 w-[800px] space-y-4 relative " ref={projectsRef}>
        {projects.map((val, idx) => {
          const isHovered = hoverIndex !== null;
          const isActive = hoverIndex === idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
              // onClick={()=>setSelectedIndex(idx)}
              className={`fade flex items-center gap-7  cursor-pointer transition-opacity duration-700 ${isHovered && !isActive ? "opacity-40" : "opacity-100"
                }`}
            >
              <span
                className={`text-[18px] min-w-[260px] Inter font-[500] transition-colors duration-500 ${isHovered && !isActive ? "text-gray-500/50" : "text-white opacity-100"
                  }`}
              >
                {val}
              </span>
              
           
            </div>
          );
        })}

        <div className="absolute underline font-[400] cursor-pointer w-[800px]  mt-5 Inter flex justify-center">
          <Image src={svg} className="rotate-[40deg] " alt="" width={30} height={30} unoptimized />
          <a href="https://shivanshcharak.hashnode.dev/">View all Blogs</a>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[30vh] pointer-events-none z-50 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </section>

    
        <div className="word-wrap bottom-10 absolute text-[13px] Inter font-semibold w-[300px]">
        Ready to build something extraordinary together? 

Let's collaborate on creating <span className='text-blue-400'>fast</span>, 
 systems that  <span className="text-green-500"> scale </span> 

I'm just one message away - let's make digital magic happen!
        </div>
        <a href="https://drive.google.com/file/d/1AUZoJ58bkUqfOYfbOsWShBAj_CiFVq-h/view?usp=drive_link">
        <div className=" bottom-10 flex w-[140px] cursor-pointer justify-between absolute right-10  text-white bg-zinc-950 hover:bg-zinc-900 duration-400 py-2  px-4  Inter text-[15px] font-semibold border-[0.1px] border-zinc-800 rounded-gray-900 rounded-full"> <Image src={svg} className="rotate-45" alt="" width={20} height={20}/> CV/Resume</div>
        </a>
    

    </div>
  );
}
