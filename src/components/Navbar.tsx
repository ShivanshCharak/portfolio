"use client"
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import arrayDown from '../../public/arrow-down.svg'
export default function Navbar(){
    const containerRef = useRef<HTMLSpanElement[]>([])

    containerRef.current=[]
    const addToRefs =(el:HTMLDivElement)=>{
        if(el && !containerRef.current.includes(el)){
            containerRef.current.push(el)
        }

    }

    function handleMouseEnter(index:number){
        const el = containerRef.current[index]
        if(el){
            gsap.to(el,{
                y:-20,
                duration:0.3,

                ease:'power1.out'
            })
        }
    }
    function handleMouseLeave(index:number){
        const el = containerRef.current[index]
        if(el){
            gsap.to(el,{
                y:0,
                duration:0.3,
                ease:'power1.out'
            })
        }

    }

    const menuItems = [

        `projects,adventure `,
        "services,magic",
        "playground,experiment",
        "about,identity",
        "journal,thoughts",
      ];
      return(<>
        <header>
            <nav className="flex flex-col">
                {menuItems.map((val,index)=>(
                    <span key={index}  className={`flex flex-col h-[20px] overflow-hidden cursor-pointer mb-[0.5px] text-[13px] Inter animate-reveal`}
                    onMouseEnter={()=>handleMouseEnter(index)}  onMouseLeave={()=>handleMouseLeave(index)}>
                       
                        <div className="" ref={addToRefs}>
                            <span className="Inter">{val.split(',')[0]}</span> <br />
                            <span className="Inter flex">{val.split(',')[1]}<Image src={arrayDown} alt="" width={15} height={15}/></span>
                        </div>
                    </span>
                ))}
            </nav>
        </header>
    </>)
}