"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import HeroImg from "@/public/me_new.png";
import Heroelm1 from "@/public/Hero-elm1.svg";
import Heroelm2 from "@/public/Hero-elm2.svg";
import Heroelm3 from "@/public/Hero-elm3.svg";
import Heroelm4 from "@/public/Hero-elm4.svg";
import UniversityLogo from "@/public/University_of_Moratuwa_logo.png";

export default function AboutMe() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-10">
        <div
          className="heading border-b pb-5 px-5 mb-10"
          style={{ borderColor: "var(--light-border)" }}
        >
          <div className="flex">
            <Link href="/" className="text-[var(--text-light)]">
              <i className="bi bi-house text-white me-2 px-2 py-1 rounded-full bg-[var(--prim-color)]"></i>
              Home
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-[var(--text-white)]"></i>
            </span>
            <h2 className="text-[var(--text-light)]">About Me</h2>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-10 justify-between items-center mt-10">
          <div className="w-full lg:w-1/2">
            <span className="text-[var(--text-light)] font-unbounded text-[15px] font-bold animate-bounce inline-block">
              Hey There!
            </span>
            <h1 className="text-[var(--text)] font-geist-sans text-4xl sm:text-5xl lg:text-7xl font-bold my-6">
              I'm Nilum Mudaliarachchi.
            </h1>
            <p className="font-geom text-[15px] font-light text-[var(--text-light)] leading-relaxed">
              I build intelligent and impactful solutions by combining software,
              hardware, and modern technologies. Every algorithm, system, and
              design choice I make serves a purpose — to create efficient,
              innovative, and real-world engineering solutions.
            </p>
          </div>

          {/* Hero image*/}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="hero-image relative z-10">
              <Image
                src={HeroImg}
                alt="Nilum Mudaliarachchi"
                width={450}
                height={600}
                className="w-full h-auto"
              />
              <Image
                src={Heroelm1}
                alt="Heroelm1"
                className="hero-elm hero-elm-1"
              />
              <Image
                src={Heroelm2}
                alt="Heroelm2"
                className="hero-elm hero-elm-2"
              />
              <Image
                src={Heroelm3}
                alt="Heroelm3"
                className="hero-elm hero-elm-3"
              />
              <Image
                src={Heroelm4}
                alt="Heroelm4"
                className="hero-elm hero-elm-4"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="relative z-10 mt-28 lg:mt-40 px-[8%] lg:px-[16%]  bg-[var(--body-color)] text-[var(--white)]">
        <div className="max-w-5xl space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold neon-text">
            About Me.
          </h2>
          <p className="text-lg text-[var(--text-light)] leading-relaxed">
            I'm Nilum Mudaliarachci, passionate undergraduate at the University
            of Moratuwa pursuing a BSc (Hons) in Computer Science And
            Engineering. I’m passionate about AI, machine learning, intelligent
            automation, and backend development, with hands-on experience in
            embedded systems. I enjoy building scalable, intelligent solutions
            using technologies like ESP32, STM boards, and Raspberry Pi,
            seamlessly integrating software and hardware.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative z-10 mt-20 px-[8%] lg:px-[16%] bg-[var(--body-color)] text-[var(--white)]">
        <h2 className="text-4xl lg:text-5xl font-bold mb-10 neon-text">Education.</h2>
        
        <div className="border rounded-lg p-8 flex flex-col md:flex-row gap-6 items-start" style={{ borderColor: "var(--light-border)", backgroundColor: "var(--bg-color)" }}>
          <div className="flex-shrink-0">
            <Image
              src={UniversityLogo}
              alt="University of Moratuwa"
              width={100}
              height={100}
              className="w-24 h-24 object-contain"
            />
          </div>
          
          <div className="flex-grow">
            <h3 className="text-2xl font-bold mb-3">University of Moratuwa</h3>
            <h4 className="text-lg text-[var(--text-light)] mb-2">
              Honours Degree of Bachelor of the Science of Engineering
            </h4>
            <p className="text-[var(--text-light)] italic mb-4">
              Specialization in Computer Science and Engineering
            </p>
            <div className="flex items-center text-[var(--text-light)]">
              <i className="bi bi-calendar3 me-2"></i>
              <span>2023-present</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
