"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import projects from "@/app/JsonData/projects.json";

const getProjectTags = (id: string) => {
  switch (id) {
    case "1":
      return ["agentic-ai", "langchain", "python"];
    case "2":
      return ["computer-vision", "object-detection", "robotics"];
    case "3":
      return ["robotics", "embedded-systems", "iot"];
    case "4":
      return ["web-development", "react", "testing"];
    case "5":
      return ["fpga", "nano-processor", "vhdl"];
    case "6":
      return ["os", "pintos", "systems-programming"];
    default:
      return ["general"];
  }
};

const getProjectCategory = (id: string) => {
  switch (id) {
    case "1":
      return "AI & Agents";
    case "2":
      return "Computer Vision";
    case "3":
      return "Robotics";
    case "4":
      return "Software Eng";
    case "5":
      return "Hardware Design";
    case "6":
      return "Operating Systems";
    default:
      return "General";
  }
};

export default function Projects() {
  const router = useRouter();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-10 min-h-screen">
        {/* Breadcrumb Navigation */}
        <div className="heading border-b pb-5 px-5 mb-10" style={{ borderColor: "var(--light-border)" }}>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="text-[var(--text-light)] hover:text-[var(--white)] flex items-center transition-colors">
              <i className="bi bi-house text-white me-2 px-2 py-1 rounded-full bg-[var(--prim-color)]"></i>
              Home
            </Link>
            <span className="mx-2 text-[var(--text-light)]">
              <i className="ri-arrow-right-wide-line"></i>
            </span>
            <h2 className="text-[var(--text-light)] font-mono">Projects</h2>
          </div>
        </div>

        {/* Page Title & Desc */}
        <div className="title flex flex-col items-center justify-center text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-5 leading-tight font-mono font-bold text-[var(--white)] typing-01">
            My Latest Projects
          </h1>
          <p className="text-lg text-[var(--text-light)] lg:w-[60%] font-mono">
            Selected projects that reflect my curiosity, creativity, and ability to build impactful tech solutions from concept to execution.
          </p>
        </div>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const tags = getProjectTags(project.id);
            const category = getProjectCategory(project.id);
            return (
              <div
                key={project.id}
                className="group flex flex-col justify-between p-6 rounded-2xl border border-[var(--light-boarder)] bg-[var(--bg-color)] hover:border-[var(--prim-color)] hover:shadow-[0_0_25px_rgba(14,165,234,0.4)] transition-all duration-300 relative overflow-hidden h-[450px]"
              >
                {/* Top decorative gradient blur */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--prim-color)]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[var(--prim-color)]/20 transition-all" />

                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Project Image Header */}
                    <div className="w-full h-40 bg-white/5 rounded-xl border border-[var(--light-boarder)] mb-4 overflow-hidden relative group-hover:border-[var(--prim-color)]/55 transition-all">
                      <Image
                        src={`${basePath}${project.img}`}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Meta Info: Category */}
                    <div className="flex items-center gap-3 text-xs text-[var(--text-light)] mb-2 font-mono">
                      <span className="text-[var(--prim-color)] font-semibold">{category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-mono text-[var(--white)] mb-2 group-hover:text-[var(--prim-color)] transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--text-light)] text-xs leading-relaxed mb-3 line-clamp-2 font-mono">
                      {project.desc_short}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--prim-color)]/10 border border-[var(--prim-color)]/30 text-[var(--white)] font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-[var(--light-boarder)]">
                      {/* Internal Full Project Navigation */}
                      <Link
                        href={`/UI-Components/Projects/project/${project.id}`}
                        className="inline-flex items-center text-sm font-semibold text-[var(--prim-color)] hover:text-[var(--white)] transition-colors duration-300 gap-1.5"
                      >
                        View Project <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
                      </Link>

                      {/* External GitHub Link */}
                      {project["git-hub-link"] && (
                        <a
                          href={project["git-hub-link"]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--white)]/5 border border-[var(--light-boarder)] text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--black)] hover:border-transparent transition-all duration-300"
                          title="View on GitHub"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="bi bi-github text-lg"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
