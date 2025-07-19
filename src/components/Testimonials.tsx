"use client";

import React, { useRef } from "react";
import { Avatar } from "antd";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Md Arif Hasan",
    role: "Operator, MEST School",
    feedback:
      "Extremely professional, unique and enjoyable. The effort taken to ensure relevance to our requirements ensured the optimum outcome.",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1752058560/MEST_School_Logo_xvvvem.svg",
  },
  {
    name: "Shah Jamal",
    role: "Owner, Dhaka Marine Dockyard",
    feedback:
      "Working with him was a fantastic experience. His communication was clear, deadlines were met, and the quality of work was top-notch.",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1752058757/favicon_wiu5mt.svg",
  },
  {
    name: "Hiron Mollah",
    role: "Owner, Padma Fishing Net",
    feedback:
      "His attention to detail and dedication to delivering high-quality work truly stood out. Highly recommended.",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1752058912/logo-padma-fishing-net_j2nlbu.png",
  },
  {
    name: "Emily Carter",
    role: "Head of Marketing, BrightIdeas Co.",
    feedback:
      "A truly exceptional developer! His understanding of UX and modern standards helped us launch a beautiful, fast website.",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1750829859/ts_u8kbw9.svg",
  },
  {
    name: "Michael Brown",
    role: "Founder, Startup Hub",
    feedback:
      "He listened carefully, provided great input, and delivered a fast-loading website. Would definitely work with him again!",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1750829854/gsap_jgghpo.svg",
  },
  {
    name: "Sophia Williams",
    role: "Product Manager, Creative Solutions",
    feedback:
      "The design, performance optimization, and SEO were spot on. Communication was smooth, and last-minute changes were handled well.",
    image:
      "https://res.cloudinary.com/tanjumart/image/upload/v1750829852/antd_evulyb.svg",
  },
];

function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef);

      // ✅ Heading + Subheading Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        defaults: { ease: "expo.out" },
      });

      tl.from(q(".testimonials-heading"), {
        x:40,
        y: 40,
        autoAlpha: 0,
        scale: 0.95,
        duration: 0.8,
      }).from(
        q(".testimonials-subheading"),
        {
          x: -30,
          y: 30,
          autoAlpha: 0,
          scale: 0.95,
          duration: 0.6,
        },
        "-=0.4"
      );

      // ✅ Testimonials Card Animation
      gsap.from(q(".testimonial-card"), {
        y: 50,
        autoAlpha: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // ✅ Hover Effect (Premium feel)
      q(".testimonial-card").forEach((card) => {
        const element = card as HTMLElement;
        element.addEventListener("mouseenter", () => {
          gsap.to(element, {
            scale: 1.03,
            boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
            duration: 0.3,
          });
        });
        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            scale: 1,
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            duration: 0.3,
          });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <div
      ref={sectionRef}
      className="max-w-6xl mx-auto text-white py-20"
    >
      <div className="text-center mb-16">
        <h1 className="testimonials-heading text-3xl md:text-4xl mb-4 font-semibold text-cyan-400">
          Client Testimonials
        </h1>
        <p className="testimonials-subheading text-center text-gray-200 mt-2">
          What clients say about working together
        </p>
      </div>

      {/* Marquee Carousel */}
      <div className="overflow-hidden relative  ">
        <div className="flex animate-marquee whitespace-nowrap w-full gap-4 hover:pause-marquee">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="testimonial-card w-[89vw] sm:w-2xl max-w-[90%] sm:max-w-4xl flex-shrink-0 p-4 rounded-md bg-transparent text-white shadow flex flex-col items-center !border !border-[#031919]"
            >
              <Avatar
                size={36}
                src={
                  <Image src={t.image} alt={t.name} width={36} height={36} />
                }
                className="!mb-4"
              />
              <p className="text-sm md:text-base leading-relaxed text-center break-words whitespace-normal overflow-visible">
                {t.feedback}
              </p>
              <p className="text-cyan-400 text-center mt-6 font-semibold">
                {t.name}
              </p>
              <p className="text-xs text-center text-gray-200">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
