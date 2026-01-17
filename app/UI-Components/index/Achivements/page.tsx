"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import robogamesAchievement from "@/public/AchivementRobogames.webp";
import examAchivement01 from "@/public/examAchivemnt01.webp";
import examAchivement02 from "@/public/examAchivemnt02.webp";
import xtreamAchievement from "@/public/IEEExtream01.png";
import codeArenaAchivement from "@/public/CodeArena01.webp";

const AchievementsList = [
  {
    id: "1",
    title: "GCE A/L Examination",
    description: "I Got 3'A and Selected to the University of Moratuwa in 2023",
    image: examAchivement02, // Replace with your image path
  },
  {
    id: "2",
    title: "GCE O/L Examination",
    description: "I got 9A's GCE O/L examination 2018",
    image: examAchivement01,
  },
  {
    id: "3",
    title: "IESL Robogames 2024",
    description: "Awarded the title of Finalist in the University Category.",
    image: robogamesAchievement,
  },
  {
    id: "4",
    title: "IEEEXtream2025",
    description: "Our team placed top200 teams in SL Section",
    image: xtreamAchievement,
  },
  {
    id: "5",
    title: "CodeArena 2025",
    description: "Awarded the title of Finalist in the University Category.",
    image: codeArenaAchivement,
  },
];

export default function Achievements() {
  return (
    <section className="relative z-10 mt-28 lg:mt-6 px-[8%] lg:px-[16%] py-16 bg-[var(--body-color)] text-[var(--white)]">
      <div className="max-w-5xl space-y-6">
        <h2 className="text-4xl lg:text-5xl font-bold neon-text">
          Achivements.
        </h2>
        <p className="text-lg text-[var(--text-light)] leading-relaxed">
          A showcase of key milestones in My Journey.
        </p>
      </div>

      <div className="mt-10 achievements-swiper">
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
          className="mt-8"
        >
          {AchievementsList.map((achievement) => (
            <SwiperSlide key={achievement.id}>
              <div className="p-0 h-80 rounded-lg overflow-hidden flex flex-col bg-[var(--bg-color)] border border-[var(--prim-light)]">
                <div className="relative hot-topic-card cursor-pointer flex-1">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                  <div className="hot-topic-info absolute bottom-2 left-2 neon-card">
                    <h2 className="font-mono text-white font-light neon-text text-sm">
                      {achievement.title}
                    </h2>
                    <p className="font-bold neon-badge mt-1 text-xs">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
