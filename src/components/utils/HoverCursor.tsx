"use client"
import { useRef,useState,useEffect } from "react"

export default function HoverCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = wrapper.getBoundingClientRect();
            console.log(rect.left, e.clientX)
            setPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
            console.log(position)
        };

        const handleEnter = () => setIsHovering(true);
        const handleLeave = () => setIsHovering(false);

        wrapper.addEventListener("mousemove", handleMouseMove);
        wrapper.addEventListener("mouseenter", handleEnter);
        wrapper.addEventListener("mouseleave", handleLeave);
        return () => {
            wrapper.removeEventListener("mousemove", handleMouseMove);
            wrapper.removeEventListener("mouseenter", handleEnter);
            wrapper.removeEventListener("mouseleave", handleLeave);
        };
    }, [])

    return (
        <div ref={wrapperRef} className="relative group">
            <div
                className={`absolute z-10 w-20 h-20 rounded-full border border-white bg-white/1 pointer-events-none transition-opacity duration-200 ease-in-out ${isHovering ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                style={{

                    left: position.x - 24,
                    top: position.y - 24,
                }}
            />
            {/* Children will be passed here */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer relative z-0">
                <img src="/images/System-design.png" alt="SysGlad Dashboard" className="rounded-xl shadow-md" />
                <img src="/images/sysglad-logo.png" alt="Cryptex" className="rounded-xl shadow-md bg-zinc-900 flex items-center justify-center" />
                <img src="/images/System-design.png" alt="Control Room" className="rounded-xl shadow-md" />
            </div>
        </div>
    );
}