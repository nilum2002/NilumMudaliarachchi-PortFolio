"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import resentProject01 from "@/public/RecentProject01.webp";
import resentProject02 from "@/public/RecentProject02.webp";
import resentProject03 from "@/public/RecentProject03.webp";
import resentProject04 from "@/public/RecentProject04.webp";

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
    title: "EduQuest Online Learning Platform",
    subtitles: "#SoftwareEng",
    image: resentProject04,
    gitHubLink: "https://github.com/GenXisLabs/EduQuest",
  },
];

export default function RecentProjectsSection() {
  return (
    <section className="recent-projects-section mt-15 px-[8%] lg:px-[16%]">
      <h2 className="text-4xl lg:text-5xl font-bold neon-text mb-10">
        Recent Projects.
      </h2>
      <div className="flex flex-col lg:flex-row justify-between gap-5 z-10 p-3 rounded-md border border-[var(--prim-light)] bg-[var(--bg-color)] relative">
        <div className="w-full lg:w-1/3 relative">
          <p className="text-[var(--text-light)]">
            See My Recent Projects here
          </p>
          <div className="flex gap-3 mt-4">
            <div className="swiper-button-next hero-swiper-next swiper-btn w-8 h-8 bg-[var(--prim-light)] hover:bg-[var(--prim-color)]  rounded-full flex items-center justify-center cursor-pointer text-white">
              <i className="bi bi-arrow-right"></i>
            </div>
            <div className="swiper-button-prev hero-swiper-prev swiper-btn w-8 h-8 bg-[var(--prim-light)] hover:bg-[var(--prim-color)] rounded-full flex items-center justify-center cursor-pointer text-white">
              <i className="bi bi-arrow-left"></i>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[67%] hero-swiper mt-8">
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
                <Link href="/UI-Components/Projects/project" className="block">
                  <div className="relative hot-topic-card cursor-pointer">
                    <Image
                      src={topic.image}
                      alt={topic.title}
                      loading="lazy"
                      placeholder="blur"
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
    </section>
  );
}
