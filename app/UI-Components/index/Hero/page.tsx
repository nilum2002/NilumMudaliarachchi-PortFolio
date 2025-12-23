"use client";

import Image from "next/image";
import Link from "next/link";

import HeroImg from "@/public/me_new.png";
import Heroelm1 from "@/public/Hero-elm1.svg";
import Heroelm2 from "@/public/Hero-elm2.svg";
import Heroelm3 from "@/public/Hero-elm3.svg";
import Heroelm4 from "@/public/Hero-elm4.svg";

import resentProject01 from "@/public/RecentProject01.jpg";
import resentProject02 from "@/public/RecentProject02.jpg";
import resentProject03 from "@/public/RecentProject03.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const RecentProjects = [
  {
    id: "1",
    title: "Automated Restaurant Feedback Agent",
    subtitles: "#AgenticAi",
    image: resentProject01,
    gitHubLink:
      "https://github.com/nilum2002/Automated-Restaurant-Feedback-Agent-SteamNoodles",
  },
  {
    id: "2",
    title: "Computer Vision Based Object Detection For Kuboki Qbot2",
    subtitles: "#CV",
    image: resentProject02,
    gitHubLink: "https://github.com/Team-Botzilla/Final",
  },
  {
    id: "3",
    title: "Multitasking Robot with Low Resources ",
    subtitles: "#Robotics",
    image: resentProject03,
    gitHubLink: "https://github.com/nilum2002/XbotiXRuhuna-GenXis-Academy",
  },
  {
    id: "4",
    title: "Automated Restaurant Feedback Agent",
    subtitles: "#AgenticAi",
    image: resentProject01,
    gitHubLink:
      "https://github.com/nilum2002/Automated-Restaurant-Feedback-Agent-SteamNoodles",
  },
];

export default function Hero() {
  return (
    <div id="hero">
      <div className="hero hero-header px-[8%] lg:px-[16%] pt-10 text-[var(--white)]">
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
        <div className="flex flex-col lg:flex-row justify-between gap-5 z-10 p-5 rounded-md border border-[var(--prim-light)] bg-[var(--bg-color)] relative">
          <div className="w-full lg:w-1/3 relative">
            <h2 className="text-[var(--text)] font-mono text-xl font-bold typing">
              Recent Projects.
            </h2>
            <p className="text-[var(--text-light)]">See My Recent Projects</p>
            <div className="flex gap-3 mt-4">
              <div className="swiper-button-next hero-swiper-next swiper-btn w-8 h-8 bg-[var(--prim-light)] hover:bg-[var(--prim-color)]  rounded-full flex items-center justify-center cursor-pointer text-white">
                <i className="bi bi-arrow-right"></i>
              </div>
              <div className="swiper-button-prev hero-swiper-prev swiper-btn w-8 h-8 bg-[var(--prim-light)] hover:bg-[var(--prim-color)] rounded-full flex items-center justify-center cursor-pointer text-white">
                <i className="bi bi-arrow-left"></i>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[67%] hero-swiper">
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={4}
              spaceBetween={20}
              loop={true}
              breakpoints={{
                1280: { slidesPerView: 3, spaceBetween: 28 },
                1024: { slidesPerView: 2, spaceBetween: 24 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                0: { slidesPerView: 1.1, spaceBetween: 16 },
              }}
              className="mt-5"
            >
              {RecentProjects.map((topic) => (
                <SwiperSlide key={topic.id}>
                  <Link href="/UI-Components/RecentProjects" className="block">
                    <div className="relative hot-topic-card cursor-pointer">
                      <Image
                        src={topic.image}
                        alt={topic.title}
                        // width={280}
                        // height={413}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="hot-topic-info absolute bottom-2 left-2 neon-card">
                        <h2 className="font-mono text-white font-light neon-text">
                          {topic.title}
                        </h2>
                        <p className="font-bold neon-badge mt-1">
                          {topic.subtitles}
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
