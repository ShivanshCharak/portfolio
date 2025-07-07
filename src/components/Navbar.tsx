"use client"
import gsap from "gsap";
import { useRef } from "react";
export default function Navbar(){
    const containerRef = useRef([])

    containerRef.current=[]
    const addToRefs =(el)=>{
        if(el && !containerRef.current.includes(el)){
            containerRef.current.push(el)
        }

    }

    function handleMouseEnter(index){
        const el = containerRef.current[index]
        if(el){
            gsap.to(el,{
                y:-25,
                duration:0.3,
                ease:'power1.out'
            })
        }
    }
    function handleMouseLeave(index){
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

        "projects,adventure",
        "services,magic",
        "playground,experiment",
        "about,identity",
        "journal,thoughts",
      ];
    return(<>
        <section>
            <nav className="flex flex-col">
                {menuItems.map((val,index)=>(
                    <span key={index}  className="flex flex-col h-[20px] overflow-hidden cursor-pointer" onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave(index)}>
                        <div className="" ref={addToRefs}>
                            <span className="Inter">{val.split(',')[0]}</span> <br />
                            <span className="Inter">{val.split(',')[1]}</span>
                        </div>
                    </span>
                ))}
            </nav>
        </section>
    </>)
}