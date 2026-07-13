"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import HeroImg from "@/public/me_new.png";
import Heroelm1 from "@/public/Hero-elm1.svg";
import Heroelm2 from "@/public/Hero-elm2.svg";
import Heroelm3 from "@/public/Hero-elm3.svg";
import Heroelm4 from "@/public/Hero-elm4.svg";
import UniversityLogo from "@/public/University_of_Moratuwa_logo.png";

const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH || "";

const galleryItems = [
  // {
  //   src: `${BASE_PATH}/img-gallery/FB_IMG_1744092930914.webp`,
  //   alt: "Hardware in the field during testing",
  //   title: "RoboGames 2024/25",
  //   meta: "Robotics",
  // },
  {
    src: `${BASE_PATH}/img-gallery/roboGames2024.jpg`,
    alt: "RoboGames Final 2024/25",
    title: "RoboGames 2024/25",
    meta: "Robotics",
  },
  {
    src: `${BASE_PATH}/img-gallery/robogamesWorkshop.webp`,
    alt: "Robogames Final Workshop 2024/25",
    title: "Robogames Final Workshop 2024/25",
    meta: "Robotics",
  },
  {
    src: `${BASE_PATH}/img-gallery/FB_IMG_1738347096150.webp`,
    alt: "CSE 23 Welcome Event",
    title: "CSE 23 Welcome Event",
    meta: "Welcome event",
  },
  {
    /*FB_IMG_1741144655816 */
    src: `${BASE_PATH}/img-gallery/FB_IMG_1741144655816.webp`,
    alt: "Robogame Finals 2024/25",
    title: "Robogame Finals 2024/25",
    meta: "Robotics",
  },
  {
    src: `${BASE_PATH}/img-gallery/FB_IMG_1745222345540.webp`,
    alt: "ADCScI 2024",
    title: "ADCScI 2024",
    meta: "Workshop",
  },
  {
    src: `${BASE_PATH}/img-gallery/DSC09008.webp`,
    alt: "Code Jam By CSEA 2024",
    title: "Code Jam By CSEA 2024",
    meta: "Competition",
  },
  {
    src: `${BASE_PATH}/img-gallery/DSC09050.webp`,
    alt: "SLIOT Schollo Category Workshop 2026",
    title: "SLIOT Schollo Category Workshop 2026",
    meta: "Workshop",
  },
  {
    src: `${BASE_PATH}/img-gallery/FB_IMG_1776678938087.webp`,
    alt: "SLIOT 20226 Semifinals",
    title: "Selection Committee",
    meta: "Fast iterations",
  },
  {
    src: `${BASE_PATH}/img-gallery/IMG-20260401-WA0070.webp`,
    alt: "SLIOT 20226 Semifinals",
    title: "Selection Committee",
    meta: "Selection Committee",
  },
  {
    src: `${BASE_PATH}/img-gallery/FB_IMG_1741144689677.webp`,
    alt: "RoboGames 2024",
    title: "Finals ",
    meta: "Finalist",
  },
  {
    src: `${BASE_PATH}/img-gallery/FB_IMG_1747571468998.webp`,
    alt: "Code Jam By CSE",
    title: "Code Jam By CSE",
    meta: "Volunteers",
  },
  {
    src: `${BASE_PATH}/img-gallery/IMG-20260403-WA0014.webp`,
    alt: "Workshops",
    title: "Workshops",
    meta: "School Children Arduino Workshops",
  },
  {
    src: `${BASE_PATH}/img-gallery/IMG-20260403-WA0035.webp`,
    alt: "Workshops",
    title: "Workshops",
    meta: "School Children Arduino Workshops",
  },
  {
    src: `${BASE_PATH}/img-gallery/IMG-20260425-WA0130.webp`,
    alt: "SLiOT Full OC",
    title: "SLiOT Full OC Members",
    meta: "Organization Committee Members",
  },
  {
    src: `${BASE_PATH}/img-gallery/IMG-20260425-WA0172.webp`,
    alt: "SLiOT Selection Committe 2026 ",
    title: "Selection Comittee Members",
    meta: "Selection Comittee Members",
  },
  {
    src: `${BASE_PATH}/img-gallery/IMG-20260425-WA0174.webp`,
    alt: "SLiOT Selection Committe 2026 ",
    title: "SLiOT Selection Committe 2026 ",
    meta: "Selection Committe 2026 Leads",
  }
];

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
              <i className="ri-arrow-right-wide-line text-[var(--text-light)]"></i>
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
                style={{ height: "auto" }}
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
        </div>

        <style>{`
          .limit-slides .swiper-slide {
            opacity: 0 !important;
            visibility: hidden;
            transition: opacity 0.4s ease, visibility 0.4s ease;
          }
          .limit-slides .swiper-slide.swiper-slide-active,
          .limit-slides .swiper-slide.swiper-slide-prev,
          .limit-slides .swiper-slide.swiper-slide-next {
            opacity: 1 !important;
            visibility: visible;
          }
          .responsive-slide {
            width: 260px !important;
            height: 280px !important;
          }
          @media (min-width: 768px) {
            .responsive-slide {
              width: 400px !important;
              height: 350px !important;
            }
          }
        `}</style>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="w-full py-12 limit-slides !overflow-visible"
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide
              key={index}
              className="responsive-slide"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="relative overflow-hidden rounded-xl group shadow-[0_0_15px_rgba(14,165,234,0.4)] hover:shadow-[0_0_30px_rgba(14,165,234,0.8)] transition-shadow duration-500 w-full h-full"
                style={{
                  backgroundColor: "var(--bg-color)",
                }}
              >
                {/* Blurred Background Layer to fill empty space */}
                <div className="absolute inset-0">
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-full object-cover blur-xl opacity-60 scale-110"
                  />
                </div>
                {/* Foreground Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300">
                  <p className="font-mono text-white text-xl font-medium neon-text line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-gray-300 text-sm mt-1.5 font-light tracking-wide line-clamp-1">
                    {item.meta}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
