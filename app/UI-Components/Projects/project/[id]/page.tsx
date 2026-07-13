import React from "react";
import Link from "next/link";
import Image from "next/image";
import projects from "@/app/JsonData/projects.json";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetails({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (!project) {
    return (
      <div className="px-[8%] lg:px-[16%] py-20 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-[var(--prim-color)] mb-4 font-geist-sans">
          Project Not Found
        </h2>
        <p className="text-[var(--text-light)] mb-8 font-geom">
          The project you are trying to view does not exist or has been moved.
        </p>
        <Link
          href="/UI-Components/Projects/project"
          className="btn text-white font-medium px-6 py-2.5 rounded-lg hover:opacity-90 transition font-geist-sans bg-[var(--prim-color)]"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-10 min-h-screen">
        {/* Breadcrumb Navigation */}
        <div
          className="heading border-b pb-5 px-5 mb-10"
          style={{ borderColor: "var(--light-border)" }}
        >
          <div className="flex items-center text-sm md:text-base font-geist-sans">
            <Link
              href="/"
              className="text-[var(--text-light)] hover:text-[var(--white)] flex items-center transition-colors"
            >
              <i className="bi bi-house text-white me-2 px-2 py-1 rounded-full bg-[var(--prim-color)]"></i>
              Home
            </Link>
            <span className="mx-2 text-[var(--text-light)]">
              <i className="ri-arrow-right-wide-line"></i>
            </span>
            <Link
              href="/UI-Components/Projects/project"
              className="text-[var(--text-light)] hover:text-[var(--white)] transition-colors"
            >
              Projects
            </Link>
            <span className="mx-2 text-[var(--text-light)]">
              <i className="ri-arrow-right-wide-line"></i>
            </span>
            <h2 className="text-[var(--text-light)] truncate max-w-[150px] md:max-w-[300px]">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-5xl mx-auto mt-10">
          <div className="bg-[var(--bg-color)]/95 border-2 border-[var(--prim-color)] rounded-3xl p-6 md:p-10 shadow-[0_0_35px_rgba(14,165,234,0.4)] relative overflow-hidden">
            {/* Top decorative gradient blur */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--prim-color)]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Project Image Panel */}
              <div className="lg:col-span-5 w-full flex flex-col items-center">
                <div className="w-full aspect-square bg-white/5 rounded-2xl border border-[var(--prim-color)]/40 flex items-center justify-center relative overflow-hidden group shadow-[0_0_20px_rgba(14,165,234,0.2)]">
                  <Image
                    src={`${basePath}${project.img}`}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Project Info Panel */}
              <div className="lg:col-span-7 flex flex-col h-full justify-between">
                <div>
                  {/* Category / Tag badges based on titles/descriptions */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.title.toLowerCase().includes("agent") && (
                      <span className="text-xs px-3 py-1 rounded-full bg-[var(--prim-color)]/10 border border-[var(--prim-color)]/30 text-[var(--prim-color)] font-geist-sans font-semibold">
                        #AI & Agents
                      </span>
                    )}
                    {project.title.toLowerCase().includes("cv") || project.title.toLowerCase().includes("detection") ? (
                      <span className="text-xs px-3 py-1 rounded-full bg-[var(--prim-color)]/10 border border-[var(--prim-color)]/30 text-[var(--prim-color)] font-geist-sans font-semibold">
                        #Computer Vision
                      </span>
                    ) : null}
                    {project.title.toLowerCase().includes("robot") || project.title.toLowerCase().includes("qbot") ? (
                      <span className="text-xs px-3 py-1 rounded-full bg-[var(--prim-color)]/10 border border-[var(--prim-color)]/30 text-[var(--prim-color)] font-geist-sans font-semibold">
                        #Robotics
                      </span>
                    ) : null}
                    {project.title.toLowerCase().includes("eduquest") || project.title.toLowerCase().includes("exam") ? (
                      <span className="text-xs px-3 py-1 rounded-full bg-[var(--prim-color)]/10 border border-[var(--prim-color)]/30 text-[var(--prim-color)] font-geist-sans font-semibold">
                        #Software Engineering
                      </span>
                    ) : null}
                    {project.title.toLowerCase().includes("processor") || project.title.toLowerCase().includes("fpga") ? (
                      <span className="text-xs px-3 py-1 rounded-full bg-[var(--prim-color)]/10 border border-[var(--prim-color)]/30 text-[var(--prim-color)] font-geist-sans font-semibold">
                        #Hardware Design
                      </span>
                    ) : null}
                    {project.title.toLowerCase().includes("pintos") || project.title.toLowerCase().includes("os") ? (
                      <span className="text-xs px-3 py-1 rounded-full bg-[var(--prim-color)]/10 border border-[var(--prim-color)]/30 text-[var(--prim-color)] font-geist-sans font-semibold">
                        #Operating Systems
                      </span>
                    ) : null}
                  </div>

                  <h1 className="text-3xl md:text-4xl font-extrabold font-geist-sans text-[var(--white)] mb-5 leading-tight tracking-tight drop-shadow-[0_0_15px_rgba(14,165,234,0.4)]">
                    {project.title}
                  </h1>

                  <div className="border-t border-[var(--light-border)] pt-5 mt-5">
                    <h3 className="text-lg font-semibold text-[var(--white)] font-geist-sans mb-3">
                      Project Description
                    </h3>
                    <p className="text-[var(--text-light)] text-[15px] font-geom font-light leading-relaxed mb-6">
                      {project.desc_long}
                    </p>
                  </div>
                </div>

                {/* GitHub details if available */}
                

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-[var(--light-border)] flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
                  <Link
                    href="/UI-Components/Projects/project"
                    className="flex items-center text-[var(--prim-color)] hover:text-[var(--white)] transition-colors duration-300 gap-2 font-geist-sans text-sm font-semibold cursor-pointer w-full sm:w-auto justify-center sm:justify-start"
                  >
                    <i className="bi bi-arrow-left"></i> Back to Projects
                  </Link>

                  {project["git-hub-link"] && (
                    <a
                      href={project["git-hub-link"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--prim-color)] text-white hover:bg-opacity-95 transition-all duration-300 font-geist-sans text-sm font-semibold shadow-[0_0_15px_rgba(14,165,234,0.4)] hover:shadow-[0_0_25px_rgba(14,165,234,0.7)] cursor-pointer w-full sm:w-auto"
                    >
                      <i className="bi bi-github text-lg"></i> View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
