"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import articles from "@/app/JsonData/Blogs.json";

export default function Articles() {
  const router = useRouter();

  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-10 min-h-screen">
        {/* Breadcrumb Navigation */}
        <div className="heading border-b pb-5 px-5 mb-10" style={{ borderColor: "var(--light-border)" }}>
          <div className="flex items-center text-sm md:text-base">
            <Link href="/" className="text-[var(--text-light)] hover:text-white flex items-center transition-colors">
              <i className="bi bi-house text-white me-2 px-2 py-1 rounded-full bg-[var(--prim-color)]"></i>
              Home
            </Link>
            <span className="mx-2 text-[var(--text-light)]">
              <i className="ri-arrow-right-wide-line"></i>
            </span>
            <h2 className="text-[var(--text-light)] font-mono">Articles</h2>
          </div>
        </div>

        {/* Page Title & Desc */}
        <div className="title flex flex-col items-center justify-center text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-5 leading-tight font-mono font-bold text-white typing-01">
            Articles & Insights
          </h1>
          <p className="text-lg text-[var(--text-light)] lg:w-[60%] font-mono">
            Here are My interest topics ... 
          </p>
        </div>

        {/* Articles Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-[var(--light-boarder)] bg-[var(--bg-color)] hover:border-[var(--prim-color)] hover:shadow-[0_0_25px_rgba(14,165,234,0.4)] transition-all duration-300 relative overflow-hidden h-[420px]"
            >
              {/* Top decorative gradient blur */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--prim-color)]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[var(--prim-color)]/20 transition-all" />

              <div>
                {/* Meta Info: Date and Read Time */}
                <div className="flex items-center gap-3 text-xs text-[var(--text-light)] mb-4 font-mono">
                  <span>{article.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--prim-color)]" />
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold font-mono text-white mb-3 group-hover:text-[var(--prim-color)] transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-light)] text-sm leading-relaxed mb-4 line-clamp-3 font-mono">
                  {article.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--prim-color)]/10 border border-[var(--prim-color)]/30 text-white font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--light-boarder)]">
                {/* Internal Full Article Navigation */}
                <Link
                  href={`/UI-Components/Blogs/blog/${article.id}`}
                  className="inline-flex items-center text-sm font-semibold text-[var(--prim-color)] hover:text-white transition-colors duration-300 gap-1.5"
                >
                  Read Article <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </Link>

                {/* External Medium Link */}
                <a
                  href={article.mediumLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-[var(--light-boarder)] text-white hover:bg-white hover:text-black hover:border-transparent transition-all duration-300"
                  title="Read on Medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="bi bi-medium text-lg"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
