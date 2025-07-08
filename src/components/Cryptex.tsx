"use client";
import { useState, useEffect, useRef } from "react";
import HoverCursor from "./utils/HoverCursor";
import { Projects, projectsData } from "./utils/projectdata";


export default function ProjectsViewer({
  index,
  onClose,
}: {
  index: number;
  onClose: () => void;
}) {
  console.log("called")
  const projects = projectsData;
  const projectKeys = Object.keys(projects) as Array<keyof Projects>;
  const [currentIndex, setCurrentIndex] = useState(index);

  const [transitionDirection, setTransitionDirection] = useState<"up" | "down">("up");
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  {console.log("index",index,"currentIndex",currentIndex,projectKeys[currentIndex],projects)}

  useEffect(() => {
    const body = document.querySelector("body");
    
    if (index >= 0 && body) {
      console.log("body is hiding")
      body.style.overflow = "hidden";
    }
    return () => {
      if (body) {
        body.style.overflow = "";
      }
    };
  }, [index]);


  useEffect(() => {
    if (index >= 0) {
      console.log("index getting called")
      setCurrentIndex(index);
    }
  }, [index]);
  
 

  // Escape key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  function navigateProject(command: "prev" | "next") {
    if (isAnimating) return;

    setIsAnimating(true);
    setTransitionDirection(command === "prev" ? "down" : "up");

    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }

    setTimeout(() => {
      setCurrentIndex((prev) => {
        {console.log("seeting current index")}
        if (command === "prev") {
          return prev === 0 ? projectKeys.length - 1 : prev - 1;
        } else {
          return prev === projectKeys.length - 1 ? 0 : prev + 1;
        }
      });
      setIsAnimating(false);
    }, 500);
  }

  if (index < 0) return null;

  const currentProject = projects[projectKeys[currentIndex]];
  // console.log(projectKeys[currentIndex],projects)



  return (
    <div
      className={`fixed duration-500 inset-0 bg-black z-50 ${index >= 0 ? "block" : "hidden"}`}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={containerRef}
        className={`
          absolute inset-0 overflow-y-auto
          transition-transform duration-500 ease-in-out
          ${isAnimating
            ? transitionDirection === "up"
              ? "translate-y-full"
              : "-translate-y-full"
            : "translate-y-0"
          }
        `}
      >
        <div className="min-h-screen flex flex-col">
          <div className="px-10 flex-grow">
            <div className="flex justify-between items-start pt-10">
              <h1 className="text-[161px] font-bold mb-10 Inter">
                {currentProject.heading}
              </h1>
              <button
                className="text-sm uppercase tracking-wide Inter px-3 py-2 hover:bg-zinc-900 duration-500 transition-colors cursor-pointer rounded"
                onClick={onClose}
                aria-label="Close project viewer"
                
              >
                Close ✕
              </button>
            </div>

            <p className="text-[15px] max-w-3xl mb-12 Inter">{currentProject.info}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-16">
              <div className="space-y-6 flex justify-between w-[768px]">
                <section>
                  <div className="mb-6">
                    <h2 className="font-bold Inter">Industry</h2>
                    {currentProject.industry.map((industry, idx) => (
                      <span key={idx} className="Inter text-[14px]">
                        {industry}
                        {idx < currentProject.industry.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h2 className="font-bold Inter">Technologies I Used</h2>
                    <p className="Inter text-[14px]">
                      {currentProject.technologyUsed.join(", ")}
                    </p>
                  </div>
                </section>
                <section>
                  <div className="mb-6">
                    <h2 className="font-bold Inter">Github</h2>
                    <a
                      href={currentProject?.githubLink}
                      className="Inter text-[14px] underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repository
                    </a>
                  </div>
                  <div>
                    <h2 className="font-bold Inter">Role</h2>
                    <p className="Inter text-[14px]">{currentProject.role.join(", ")}</p>
                  </div>
                </section>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="font-bold Inter">Challenges</h2>
                  <ul className="list-disc text-[14px] list-inside space-y-1">
                    {currentProject.challenges.map((challenge, idx) => (
                      <li key={idx}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-bold Inter">Solutions</h2>
                  <ul className="list-disc text-[14px] list-inside space-y-1">
                    {currentProject.solutions.map((solution, idx) => (
                      <li key={idx}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <HoverCursor images={currentProject.images} />
          </div>

          <div className="w-full flex justify-center py-20 px-20">
            <button
              onClick={() => navigateProject("prev")}
              className="bg-zinc-900 border-1 w-[30px] border-b-8 border-b-slate-600 px-2 rounded mr-2 cursor-pointer hover:border-none hover:py-[4px] duration-400 transform-border"
              disabled={isAnimating}
              aria-label="Previous project"
            >
              ↑
            </button>

            <section className="w-[300px] flex justify-between">
              <span className="Inter text-[14px]">
                {currentIndex > 0
                  ? projects[projectKeys[currentIndex - 1]].heading
                  : projects[projectKeys[projectKeys.length - 1]].heading}
              </span>
              <span className="Inter text-[14px]">
                {currentIndex < projectKeys.length - 1
                  ? projects[projectKeys[currentIndex + 1]].heading
                  : projects[projectKeys[0]].heading}
              </span>
            </section>

            <button
              onClick={() => navigateProject("next")}
              className="bg-zinc-900 border-1 w-[30px] border-b-8 border-b-slate-600 px-2 rounded cursor-pointer hover:border-none hover:py-[4px] duration-400 transform-border ml-4"
              disabled={isAnimating}
              aria-label="Next project"
            >
              ↓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
