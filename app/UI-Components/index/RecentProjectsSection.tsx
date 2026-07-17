"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import projects from "@/app/JsonData/projects.json";

// Custom helper function to adjust image sizes, dimensions, and object-fit styles
// to prevent clipping of technical screenshots/diagrams while preserving aspect ratios
const getImageSettings = (id: string) => {
  switch (id) {
    case "5": // FPGA schematic/diagram
    case "6": // PintOS architecture diagram
      return {
        width: 380,
        height: 240,
        style: {
          objectFit: "contain" as const,
          width: "100%",
          height: "auto",
          maxHeight: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
      };
    default: // Standard portfolio showcase images
      return {
        width: 380,
        height: 240,
        style: {
          objectFit: "cover" as const,
          width: "100%",
          height: "auto",
          maxHeight: "100%",
        },
      };
  }
};

export default function RecentProjectsSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Sort projects by id in descending order (higher id = higher priority/more recent)
  const sortedProjects = [...projects].sort((a, b) => Number(b.id) - Number(a.id));

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
          {sortedProjects.map((project) => {
            const imgSettings = getImageSettings(project.id);
            return (
              <SwiperSlide key={project.id}>
                <Link
                  href={`/UI-Components/Projects/project/${project.id}`}
                  className="block group"
                >
                  <div className="p-0 h-80 rounded-lg overflow-hidden flex flex-col bg-[var(--bg-color)] border border-[var(--prim-light)]">
                    <div className="relative hot-topic-card cursor-pointer flex-1 overflow-hidden flex items-center justify-center bg-black/10">
                      <Image
                        src={`${basePath}${project.img}`}
                        alt={project.title}
                        width={imgSettings.width}
                        height={imgSettings.height}
                        style={imgSettings.style}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="hot-topic-info absolute bottom-2 left-2 neon-card max-w-[90%] z-10">
                        <p className="font-mono text-[var(--white)] font-light neon-text text-sm leading-relaxed">
                          {project.desc_short}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
