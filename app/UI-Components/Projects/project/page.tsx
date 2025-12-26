"use client";
import { useState } from "react";

import projects from "@/app/JsonData/projects.json";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    id: "all",
    label: "All Projects",
  },
  {
    id: "robotics",
    label: "Robotics",
  },
  {
    id: "Computer Vision",
    label: "Computer Vision",
  },
  {
    id:"AI",
    label: "AI",
  },
  {
    id: "Software-Eng",
    label: "Software Engineering",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-10">
        <div className="heading border-b border-[var(--light-border) pb-5 px-5 mb-10">
          <div className="flex">
            <Link href="/" className="text-[var(--text-light)]">
              <i className="bi bi-house text-white me-2 px-2 py-1 rounded-full  bg-[var(--prim-color)]"></i>
              Home
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-[var(--text-white)]"></i>
            </span>
            <h2 className="text-[var(--text-light)]">Projects</h2>
          </div>
        </div>
        <div className="title flex flex-col items-center justify-center ">
          <h1 className="text-5xl mb-5 leading-15 font-mono font-bold typing-01">
            My Latest Projects
          </h1>
          <p className="text-xl text-[var(--text-light)] text-center lg:w-[60%] mb-10  font-mono">
            Selected projects that reflect my curiosity, creativity, and ability
            to build impactful tech solutions from concept to execution.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[var(--prim-color)] text-[var(--text-white)] font-semibold"
                  : "border-2 text-[var(--text-white)] border-[var(--prim-color)] hover:bg-[var(--prim-color)] hover:border-transparent cursor-pointer hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-15">
          {activeTab === "all" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Link
                  href={`/UI-Components/Projects/projectDetails/${project.id}`}
                  key={index}
                >
                  <div className="project-section rounded-2xl overflow-hidden z-10 cursor-pointer relative group h-[400px]">
                    <div className="project-image h-full">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={300}
                        height={300}
                        className="rounded-lg object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {/* Dark overlay that appears on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 z-10"></div>

                    <div className="project-content absolute p-5 bottom-0 left-0 z-20 w-full transform translate-y-0 group-hover:-translate-y-5 transition-all duration-500">
                      <div className="bg-[var(--bg-color)]/90 backdrop-blur-md rounded-2xl p-6 border-2 border-[var(--prim-color)] shadow-[0_0_30px_rgba(14,165,234,0.6)] group-hover:shadow-[0_0_50px_rgba(14,165,234,0.9)] transition-all duration-500">
                        <h3 className="text-2xl md:text-3xl text-[var(--prim-color)] font-mono font-bold drop-shadow-[0_0_15px_rgba(14,165,234,0.8)] leading-tight">
                          {project.title}
                        </h3>
                        <p className="font-mono text-gray-300 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-600 mt-2">
                          {project.desc}
                        </p>
                        {project["git-hub-link"] && (
                          <a
                            href={project["git-hub-link"]}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center mt-3 text-[var(--prim-color)] hover:text-white transition-colors duration-300 drop-shadow-[0_0_10px_rgba(14,165,234,0.6)] hover:drop-shadow-[0_0_15px_rgba(14,165,234,0.9)]"
                          >
                            <i className="bi bi-github mr-2"></i>GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {activeTab === "robotics" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(2, 3).map((project, index) => (
                <Link
                  href={`/UI-Components/Projects/projectDetails/${project.id}`}
                  key={index}
                >
                  <div className="project-section rounded-2xl overflow-hidden z-10 cursor-pointer relative group h-[400px]">
                    <div className="project-image h-full">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={300}
                        height={300}
                        className="rounded-lg object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {/* Dark overlay that appears on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 z-10"></div>

                    <div className="project-content absolute p-5 bottom-0 left-0 z-20 w-full transform translate-y-0 group-hover:-translate-y-5 transition-all duration-500">
                      <div className="bg-[var(--bg-color)]/90 backdrop-blur-md rounded-2xl p-6 border-2 border-[var(--prim-color)] shadow-[0_0_30px_rgba(14,165,234,0.6)] group-hover:shadow-[0_0_50px_rgba(14,165,234,0.9)] transition-all duration-500">
                        <h3 className="text-2xl md:text-3xl text-[var(--prim-color)] font-mono font-bold drop-shadow-[0_0_15px_rgba(14,165,234,0.8)] leading-tight">
                          {project.title}
                        </h3>
                        <p className="font-mono text-gray-300 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-600 mt-2">
                          {project.desc}
                        </p>
                        {project["git-hub-link"] && (
                          <a
                            href={project["git-hub-link"]}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center mt-3 text-[var(--prim-color)] hover:text-white transition-colors duration-300 drop-shadow-[0_0_10px_rgba(14,165,234,0.6)] hover:drop-shadow-[0_0_15px_rgba(14,165,234,0.9)]"
                          >
                            <i className="bi bi-github mr-2"></i>GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {activeTab === "Software-Eng" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(3, 4).map((project, index) => (
                <Link
                  href={`/UI-Components/Projects/projectDetails/${project.id}`}
                  key={index}
                >
                  <div className="project-section rounded-2xl overflow-hidden z-10 cursor-pointer relative group h-[400px]">
                    <div className="project-image h-full">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={300}
                        height={300}
                        className="rounded-lg object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {/* Dark overlay that appears on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 z-10"></div>

                    <div className="project-content absolute p-5 bottom-0 left-0 z-20 w-full transform translate-y-0 group-hover:-translate-y-5 transition-all duration-500">
                      <div className="bg-[var(--bg-color)]/90 backdrop-blur-md rounded-2xl p-6 border-2 border-[var(--prim-color)] shadow-[0_0_30px_rgba(14,165,234,0.6)] group-hover:shadow-[0_0_50px_rgba(14,165,234,0.9)] transition-all duration-500">
                        <h3 className="text-2xl md:text-3xl text-[var(--prim-color)] font-mono font-bold drop-shadow-[0_0_15px_rgba(14,165,234,0.8)] leading-tight">
                          {project.title}
                        </h3>
                        <p className="font-mono text-gray-300 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-600 mt-2">
                          {project.desc}
                        </p>
                        {project["git-hub-link"] && (
                          <a
                            href={project["git-hub-link"]}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center mt-3 text-[var(--prim-color)] hover:text-white transition-colors duration-300 drop-shadow-[0_0_10px_rgba(14,165,234,0.6)] hover:drop-shadow-[0_0_15px_rgba(14,165,234,0.9)]"
                          >
                            <i className="bi bi-github mr-2"></i>GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {activeTab === "Computer Vision" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(1, 2).map((project, index) => (
                <Link
                  href={`/UI-Components/Projects/projectDetails/${project.id}`}
                  key={index}
                >
                  <div className="project-section rounded-2xl overflow-hidden z-10 cursor-pointer relative group h-[400px]">
                    <div className="project-image h-full">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={300}
                        height={300}
                        className="rounded-lg object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {/* Dark overlay that appears on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 z-10"></div>

                    <div className="project-content absolute p-5 bottom-0 left-0 z-20 w-full transform translate-y-0 group-hover:-translate-y-5 transition-all duration-500">
                      <div className="bg-[var(--bg-color)]/90 backdrop-blur-md rounded-2xl p-6 border-2 border-[var(--prim-color)] shadow-[0_0_30px_rgba(14,165,234,0.6)] group-hover:shadow-[0_0_50px_rgba(14,165,234,0.9)] transition-all duration-500">
                        <h3 className="text-2xl md:text-3xl text-[var(--prim-color)] font-mono font-bold drop-shadow-[0_0_15px_rgba(14,165,234,0.8)] leading-tight">
                          {project.title}
                        </h3>
                        <p className="font-mono text-gray-300 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-600 mt-2">
                          {project.desc}
                        </p>
                        {project["git-hub-link"] && (
                          <a
                            href={project["git-hub-link"]}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center mt-3 text-[var(--prim-color)] hover:text-white transition-colors duration-300 drop-shadow-[0_0_10px_rgba(14,165,234,0.6)] hover:drop-shadow-[0_0_15px_rgba(14,165,234,0.9)]"
                          >
                            <i className="bi bi-github mr-2"></i>GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {activeTab === "AI" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 1).map((project, index) => (
                <Link
                  href={`/UI-Components/Projects/projectDetails/${project.id}`}
                  key={index}
                >
                  <div className="project-section rounded-2xl overflow-hidden z-10 cursor-pointer relative group h-[400px]">
                    <div className="project-image h-full">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={300}
                        height={300}
                        className="rounded-lg object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {/* Dark overlay that appears on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 z-10"></div>

                    <div className="project-content absolute p-5 bottom-0 left-0 z-20 w-full transform translate-y-0 group-hover:-translate-y-5 transition-all duration-500">
                      <div className="bg-[var(--bg-color)]/90 backdrop-blur-md rounded-2xl p-6 border-2 border-[var(--prim-color)] shadow-[0_0_30px_rgba(14,165,234,0.6)] group-hover:shadow-[0_0_50px_rgba(14,165,234,0.9)] transition-all duration-500">
                        <h3 className="text-2xl md:text-3xl text-[var(--prim-color)] font-mono font-bold drop-shadow-[0_0_15px_rgba(14,165,234,0.8)] leading-tight">
                          {project.title}
                        </h3>
                        <p className="font-mono text-gray-300 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-600 mt-2">
                          {project.desc}
                        </p>
                        {project["git-hub-link"] && (
                          <a
                            href={project["git-hub-link"]}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center mt-3 text-[var(--prim-color)] hover:text-white transition-colors duration-300 drop-shadow-[0_0_10px_rgba(14,165,234,0.6)] hover:drop-shadow-[0_0_15px_rgba(14,165,234,0.9)]"
                          >
                            <i className="bi bi-github mr-2"></i>GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
