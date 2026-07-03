"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <section className="recent-projects-section mt-30 px-[8%] lg:px-[16%]">
      <h2 className="text-4xl lg:text-5xl font-bold neon-text mb-10">
        Recent Projects.
      </h2>
      <div className="mt-10 hero-swiper">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mt-5"
          >
            {RecentProjects.map((topic) => (
              <SwiperSlide key={topic.id}>
                <Link href="/UI-Components/Projects/project" className="block">
                  <div className="p-0 h-80 rounded-lg overflow-hidden flex flex-col bg-[var(--bg-color)] border border-[var(--prim-light)]">
                    <div className="relative hot-topic-card cursor-pointer flex-1">
                      <Image
                        src={topic.image}
                        alt={topic.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-full object-cover"
                      />
                      <div className="hot-topic-info absolute bottom-2 left-2 neon-card">
                        <h2 className="font-mono text-[var(--white)] font-light neon-text">
                          {topic.title}
                        </h2>
                        <p className="font-bold neon-badge mt-1">
                          {topic.subtitles}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </section>
  );
}
