"use client";
import {
  EcommTheme,
  InteractiveMotion,
  CodeReview,
  ResponsiveDesign,
  WebVitals,
} from "../../public/SvgPool";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ServicesSection() {
  const serviceRefs = useRef<HTMLSpanElement[]>([]);

  const services = [
    {
      icon: <EcommTheme />,
      title: "Fast and scalable web application ",
      description:
        "Create fast and scalabne web application using cutting edge technologies like Kafka, Redis....",
    },
    {
      icon: <WebVitals />,
      title: "SEO Core Web Vitals Optimization",
      description:
        "Prioritize the improvement of Core Web Vitals metrics for better website performance...",
    },
    {
      icon: <ResponsiveDesign />,
      title: "Responsive Design and Cross-Browser Compatibility",
      description:
        "Ensure seamless adaptation to different screen sizes and flawless functionality across various browsers...",
    },
   
    {
      icon: <InteractiveMotion />,
      title: "Interactive Website Motions",
      description:
        "Enhance websites with captivating motions using cutting-edge technologies like Tailwind, css and GSAP...",
    },
  ];

  useEffect(() => {
    serviceRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            gsap.to(ref, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            });
            observer.unobserve(ref); // trigger only once
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(ref);
    });
  }, []);

  return (
    <div className="mb-10">
      <div className="sticky top-[100px]  w-[90vw] mx-auto mt-10">
        <p className="text-sm Inter font-semibold">What I offer</p>
        <p className="text-6xl Roxie mb-6 mt-4 Stardom-Regular">Services</p>
        <p className="w-[600px] text-sm Inter font-semibold text-gray-300 mb-2">
          Explore My Web Development Services
        </p>
      </div>

      <div className="flex flex-col items-end gap-8">
        {services.map((service, index) => (
          <span
            key={index}
            ref={(el) => (serviceRefs.current[index] = el!)}
            className="service flex w-[650px] h-[140px] opacity-0 translate-y-10 transition-all p-20"
          >
            {service.icon}
            <div className="ml-4">
              <h2 className="Inter text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-sm Inter text-gray-300">{service.description}</p>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
}
