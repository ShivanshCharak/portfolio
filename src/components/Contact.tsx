"use client"
import gsap from "gsap"
import Image from "next/image"
export default function Contact(){
    return(<section className="flex flex-col gap-4">
        <section>
            <p className="flex flex-col">
                <span className="text-sm hover:translate-x-2 duration-600 cursor-pointer">Let's collaborate - Book a Call</span>
                <span className="text-sm">India, Pune {`${new Date().getHours()} : ${new Date().getMinutes()}`}</span>
            </p>
        </section>
        <section>
            <p className="flex flex-col">
                 <a className="text-sm inline-block hover:translate-x-2 duration-600"  href="mailto:shivansh17chara@gmail.com">contact@shivansh.dev</a>
                <a className="text-sm hover:translate-x-2 duration-600" href="https://github.com/ShivanshCharak">Github</a>
            </p>
        </section>
    </section>)
}