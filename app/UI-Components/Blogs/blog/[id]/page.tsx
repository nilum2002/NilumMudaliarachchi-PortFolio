import React from "react";
import Link from "next/link";
import articles from "@/app/JsonData/Blogs.json";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

export default async function ArticleDetails({ params }: PageProps) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="px-[8%] lg:px-[16%] py-20 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-[var(--prim-color)] mb-4 font-mono">Article Not Found</h2>
        <p className="text-[var(--text-light)] mb-8 font-mono">The article you are trying to view does not exist or has been moved.</p>
        <Link
          href="/UI-Components/Blogs/blog"
          className="btn text-white font-medium px-6 py-2.5 rounded-lg hover:opacity-90 transition font-mono"
        >
          Back to Articles
        </Link>
      </div>
    );
  }

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
            <Link href="/UI-Components/Blogs/blog" className="text-[var(--text-light)] hover:text-white transition-colors">
              Articles
            </Link>
            <span className="mx-2 text-[var(--text-light)]">
              <i className="ri-arrow-right-wide-line"></i>
            </span>
            <h2 className="text-[var(--text-light)] font-mono truncate max-w-[150px] md:max-w-[300px]">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-4xl mx-auto mt-10">
          {/* Article Meta Info */}
          <div className="flex items-center gap-4 text-sm text-[var(--text-light)] mb-4 font-mono">
            <span>{article.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--prim-color)]" />
            <span>{article.readTime}</span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl md:text-5xl font-bold font-mono text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5 mb-10 pb-8 border-b border-[var(--light-boarder)]">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1 rounded-full bg-[var(--prim-color)]/10 border border-[var(--prim-color)]/30 text-[var(--prim-color)] font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Article Body */}
          <article className="max-w-none font-mono text-gray-300 text-base md:text-lg leading-relaxed space-y-6">
            <p className="text-xl text-white font-medium italic border-l-4 border-[var(--prim-color)] pl-4 py-1 mb-8 bg-[var(--bg-color)]/50 p-4 rounded-r-xl border-y border-r border-[var(--light-boarder)]">
              {article.desc}
            </p>
            <div className="whitespace-pre-line bg-[var(--bg-color)] p-6 md:p-8 rounded-2xl border border-[var(--light-boarder)]">
              {article.content}
            </div>
          </article>

          {/* Bottom Navigation / Links */}
          <div className="mt-16 pt-8 border-t border-[var(--light-boarder)] flex flex-col md:flex-row items-center justify-between gap-6">
            <Link
              href="/UI-Components/Blogs/blog"
              className="flex items-center text-[var(--prim-color)] hover:text-white transition-colors duration-300 gap-2 font-mono text-sm font-semibold cursor-pointer"
            >
              <i className="bi bi-arrow-left"></i> Back to Articles
            </Link>

            <a
              href={article.mediumLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-[var(--light-boarder)] text-white hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 font-mono text-sm"
            >
              <i className="bi bi-medium text-lg"></i> Read on Medium
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
