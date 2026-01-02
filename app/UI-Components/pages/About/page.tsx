"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import HeroImg from "@/public/me_new.png";
import Heroelm1 from "@/public/Hero-elm1.svg";
import Heroelm2 from "@/public/Hero-elm2.svg";
import Heroelm3 from "@/public/Hero-elm3.svg";
import Heroelm4 from "@/public/Hero-elm4.svg";
import UniversityLogo from "@/public/University_of_Moratuwa_logo.png";

const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH || "/NilumMudaliarachchi-PortFolio";

const galleryItems = [
  {
    src: `${BASE_PATH}/img-gallery/FB_IMG_1744092930914.jpg`,
    alt: "Hardware in the field during testing",
    title: "RoboGames 2024/25",
    meta: "Robotics",
  },
  {
    src: `${BASE_PATH}/img-gallery/roboGames2024.jpg`,
    alt: "RoboGames Final 2024/25",
    title: "RoboGames 2024/25",
    meta: "Robotics",
  },
  {
    src: `${BASE_PATH}/img-gallery/robogamesWorkshop.jpg`,
    alt: "Architecture sketch for an AI pipeline",
    title: "AI pipeline design",
    meta: "Model ops & data flow",
  },
  {
    src: `${BASE_PATH}/img-gallery/FB_IMG_1738347096150.jpg`,
    alt: "Observability dashboard screenshot",
    title: "Backend observability",
    meta: "Tracing & metrics",
  },
  {
    /*FB_IMG_1741144655816 */
    src: `${BASE_PATH}/img-gallery/FB_IMG_1741144655816.jpg`,
    alt: "Robotics demo on a test bench",
    title: "Robotics",
    meta: "Control + firmware",
  },
  {
    src: `${BASE_PATH}/img-gallery/FB_IMG_1745222345540.jpg`,
    alt: "Hackathon team collaboration",
    title: "Team builds",
    meta: "Fast iterations",
  },
];

export default function AboutMe() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 1500); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused, currentSlide]);

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

      {/* Image gallery slideshow */}
      <section className="px-[8%] lg:px-[16%] mt-10 lg:mt-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <p className="text-[var(--text-light)] text-sm uppercase tracking-[0.2em] font-unbounded">
              Snapshots
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] neon-text">
              Image Gallery.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[var(--text-light)] text-sm">
              {currentSlide + 1} / {galleryItems.length}
            </span>
          </div>
        </div>

        <div className="relative">
          {/* Main slideshow container with coverflow effect */}
          <div
            className="relative h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {galleryItems.map((item, index) => {
                // Calculate circular offset
                let offset = index - currentSlide;
                const total = galleryItems.length;

                // Wrap around for circular effect
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const absOffset = Math.abs(offset);

                // Only show slides within 2 positions of current
                if (absOffset > 2) return null;

                return (
                  <div
                    key={item.src}
                    onClick={() => setCurrentSlide(index)}
                    className="absolute transition-all duration-500 ease-out cursor-pointer"
                    style={{
                      transform: `
                        translateX(${offset * 320}px) 
                        translateZ(${-absOffset * 200}px)
                        rotateY(${offset * -15}deg)
                        scale(${1 - absOffset * 0.2})
                      `,
                      zIndex: 10 - absOffset,
                      opacity: absOffset === 0 ? 1 : 0.4,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div
                      className="relative overflow-hidden rounded-xl border transition-all duration-300"
                      style={{
                        width: "280px",
                        height: "280px",
                        borderColor:
                          offset === 0
                            ? "var(--prim-color)"
                            : "var(--light-border)",
                        backgroundColor: "var(--bg-color)",
                        boxShadow:
                          offset === 0
                            ? "0 0 20px rgba(0,255,255,0.5)"
                            : "0 10px 30px rgba(0,0,0,0.3)",
                      }}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                      />

                      {offset === 0 && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-transparent to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="font-mono text-white text-lg font-light neon-text">
                              {item.title}
                            </p>
                            <p className="text-[var(--text-light)] text-xs mt-1">
                              {item.meta}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--bg-color)]/80 border-2 flex items-center justify-center hover:bg-[var(--bg-color)] transition backdrop-blur-sm z-20"
              style={{
                borderColor: "var(--prim-color)",
              }}
              aria-label="Previous slide"
            >
              <i className="bi bi-chevron-left text-[var(--prim-color)] text-xl"></i>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--bg-color)]/80 border-2 flex items-center justify-center hover:bg-[var(--bg-color)] transition backdrop-blur-sm z-20"
              style={{
                borderColor: "var(--prim-color)",
              }}
              aria-label="Next slide"
            >
              <i className="bi bi-chevron-right text-[var(--prim-color)] text-xl"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="relative z-10 mt-12 lg:mt-16 px-[8%] lg:px-[16%]  bg-[var(--body-color)] text-[var(--white)]">
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
        <h2 className="text-4xl lg:text-5xl font-bold mb-10 neon-text">
          Education.
        </h2>

        <div
          className="border rounded-lg p-8 flex flex-col md:flex-row gap-6 items-start"
          style={{
            borderColor: "var(--light-border)",
            backgroundColor: "var(--bg-color)",
          }}
        >
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
