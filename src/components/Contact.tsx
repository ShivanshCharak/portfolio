"use client"
import Image from "next/image"
import call from '../../public/call.svg'
import github from '../../public/github.svg'
import email from '../../public/email.svg'
import explore from '../../public/explore.svg'

export default function Contact() {
    return (
        <section className="flex flex-col gap-4 animate-reveal">
            <section>
                <p className="flex flex-col">
                    <span className="relative text-nowrap text-sm hover:translate-x-2 duration-300 cursor-pointer flex group Inter" style={{ animationDelay: "200" }}>
                        <Image 
                            src={call} 
                            className="-left-10 group-hover:opacity-100 opacity-0 mr-1 group-hover:translate-x-0 translate-x-4 duration-300 transition-all absolute" 
                            alt="Call" 
                            width={20} 
                            height={20} 
                        />
                        Let's collaborate - Book a Call
                    </span>
                   
                    <a href="#" className="relative text-sm Inter hover:translate-x-2 duration-300 group inline-block">
                        <Image 
                            src={explore} 
                            className="-left-10 group-hover:opacity-100 opacity-0 mr-1 group-hover:translate-x-0 translate-x-4 duration-300 transition-all absolute" 
                            alt="Explore" 
                            width={20} 
                            height={20} 
                        />
                        India, Pune {`${new Date().getHours()} : ${new Date().getMinutes()}`}
                    </a>
                </p>
            </section>

            <section>
                <p className="flex flex-col gap-1">
                    {/* Email Link */}
                    <a href="mailto:shivansh17chara@gmail.com" className="relative text-sm Inter hover:translate-x-2 duration-300 group inline-block">
                        <Image 
                            src={email} 
                            className="-left-10 group-hover:opacity-100 opacity-0 mr-1 group-hover:translate-x-0 translate-x-4 duration-300 transition-all absolute" 
                            alt="Email" 
                            width={20} 
                            height={20} 
                        />
                        contact@shivansh.dev
                    </a>

                    {/* GitHub Link */}
                    <a href="https://github.com/ShivanshCharak" className="relative text-sm Inter hover:translate-x-2 duration-300 group inline-block">
                        <Image 
                            src={github} 
                            className="-left-10 group-hover:opacity-100 opacity-0 mr-1 group-hover:translate-x-0 translate-x-4 duration-300 transition-all absolute" 
                            alt="GitHub" 
                            width={20} 
                            height={20} 
                        />
                        GitHub
                    </a>

                    {/* Explore Link (if needed) */}
                </p>
            </section>
        </section>
    )
}