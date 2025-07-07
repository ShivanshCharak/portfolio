"use client"

export default function HeroPage() {
  const words = "FULL-STACK DEVLOPER & DEVOPS CAPABLE"

  const wordSpans = words.split(" ").map((val, index) => {
    const delay =  600 + index*200// customize delay step here
    return (
      <span
        key={index}
        style={{animationDelay:`${delay}ms`}}
        className={`animate-reveal transition-all  delay-[${delay}ms] word inline-block mr-4  font-black inter opacity-0`}
      >
        {val}
      </span>
    )
  })

  return (
    <div
      style={{ fontSize: "min(max(60px,9vw),170px)" }}
      className="w-[60%] h-[100vh] mt-[15%] -ml-[20%] overflow-hidden break-words leading-[1.1]"
    >
      {wordSpans}
    </div>

  )
}
