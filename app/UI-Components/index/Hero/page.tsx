"use client";

import Image from "next/image";
import Link from "next/link";

import HeroImg from "@/public/me_new.png";
import Heroelm1 from "@/public/Hero-elm1.svg";
import Heroelm2 from "@/public/Hero-elm2.svg";
import Heroelm3 from "@/public/Hero-elm3.svg";
import Heroelm4 from "@/public/Hero-elm4.svg";

export default function Hero() {
  return (
    <div>
      <div className="hero hero-header px-[8%] lg:px-[16%] pt-10 text-(--white)">
        {/*Hero Section*/}
        <div className="w-full flex flex-col lg:flex-row gap-5 justify-between items-center">
          <div className="w-full lg:w-1/2 lg:-mt-8">
            <span className="text-[var(--text-light)] font-unbounded text-[15px] font-bold animate-bounce inline-block">
              Hey There!
            </span>
            <h1 className="text-[var(--text)] font-geist-sans text-4xl sm:text-5xl lg:text-7xl font-bold my-6">
              I'm Nilum Mudaliarachchi.
            </h1>
            <p className="font-geom text-[15px] font-light text-[var(--text-light)]">
              I build intelligent and impactful solutions by combining software,
              hardware, and modern technologies. Every algorithm, system, and
              design choice I make serves a purpose — to create efficient,
              innovative, and real-world engineering solutions.
            </p>
          </div>

          {/* Hero image*/}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="hero-image relative z-10 lg:self-start lg:mt-2 md:mt-0">
              <Image
                src={HeroImg}
                alt="Nilum Mudaliarachchi"
                width={450}
                height={600}
              />
              <Image
                src={Heroelm1}
                alt="Heroelm1"
                className="hero-elm hero-elm-1"
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
        {/*Resent projects */}
        <div className="flex flex-col lg:flex-row justify-between gap-5 z-10 p-5 round-md border-[var(--prim-light)] bg-[var(--bg-color)] relative ">
          <div className="w-full lg:w-1/1 relative">
            <h2 className="text-[var(--text)]"> </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
