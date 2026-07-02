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

function renderContent(content: string) {
  const blocks = content.split(/\n\n+/);
  
  return blocks.map((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    
    // Code blocks
    if (trimmed.startsWith('```') && trimmed.endsWith('```')) {
      const code = trimmed.slice(3, -3).trim();
      return (
        <pre key={idx} className="bg-black/50 p-5 rounded-xl border border-[var(--light-boarder)] overflow-x-auto my-6 text-sm text-emerald-400 font-mono leading-relaxed">
          <code>{code}</code>
        </pre>
      );
    }
    
    // Headings
    if (trimmed.startsWith('#')) {
      const match = trimmed.match(/^(#{1,6})\s+(.*)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2];
        if (level === 1) return <h1 key={idx} className="text-3xl font-bold my-6 text-white font-geist-sans tracking-tight">{text}</h1>;
        if (level === 2) return <h2 key={idx} className="text-2xl font-bold my-5 text-white font-geist-sans tracking-tight">{text}</h2>;
        if (level === 3) return <h3 key={idx} className="text-xl font-bold my-4 text-white font-geist-sans tracking-tight">{text}</h3>;
        if (level === 4) return <h4 key={idx} className="text-lg font-bold my-4 text-white font-geist-sans tracking-tight">{text}</h4>;
        return <h5 key={idx} className="text-base font-bold my-4 text-white font-geist-sans tracking-tight">{text}</h5>;
      }
    }
    
    // Blockquote
    if (trimmed.startsWith('>')) {
      const text = trimmed.replace(/^>\s*/, '').replace(/\n>\s*/g, '\n');
      return (
        <blockquote key={idx} className="border-l-4 border-[var(--prim-color)] pl-5 py-3 italic my-6 bg-white/5 p-4 rounded-r-xl border-y border-r border-[var(--light-boarder)] text-gray-200 font-geom text-base">
          {text}
        </blockquote>
      );
    }
    
    // Image Placeholder
    if (trimmed.startsWith('[IMAGE_PLACEHOLDER:')) {
      const srcMatch = trimmed.match(/src="([^"]+)"/);
      const altMatch = trimmed.match(/alt="([^"]+)"/);
      
      const src = srcMatch ? srcMatch[1] : '';
      const alt = altMatch ? altMatch[1] : '';
      
      return (
        <div key={idx} className="my-8 flex flex-col items-center">
          <div className="w-full aspect-[16/10] bg-white/5 rounded-2xl border border-[var(--light-boarder)] flex items-center justify-center relative overflow-hidden group shadow-lg">
            {src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                src={src} 
                alt={alt || 'Blog Image'} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" 
              />
            ) : (
              <span className="text-[var(--text-light)] font-geist-sans text-sm">Image Placeholder</span>
            )}
          </div>
          {alt && alt !== 'Image' && alt !== 'Link' && (
            <p className="text-center text-sm text-[var(--text-light)] mt-3 font-geist-sans italic tracking-wide">
              {alt}
            </p>
          )}
        </div>
      );
    }
    
    // Lists (lines starting with - or numbered)
    if (trimmed.startsWith('- ') || /^\d+\.\s/.test(trimmed)) {
      const lines = trimmed.split('\n');
      return (
        <ul key={idx} className="list-disc pl-6 space-y-2.5 my-4 text-[var(--text-light)] font-geom text-[15px] font-light">
          {lines.map((line, lIdx) => {
            const cleanLine = line.replace(/^-\s*/, '').replace(/^\d+\.\s*/, '');
            return <li key={lIdx} className="leading-relaxed">{cleanLine}</li>;
          })}
        </ul>
      );
    }
    
    // Fallback: normal paragraph
    return (
      <p key={idx} className="text-[var(--text-light)] font-geom text-[15px] font-light leading-relaxed mb-4">
        {trimmed}
      </p>
    );
  });
}

export default async function ArticleDetails({ params }: PageProps) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="px-[8%] lg:px-[16%] py-20 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-[var(--prim-color)] mb-4 font-geist-sans">Article Not Found</h2>
        <p className="text-[var(--text-light)] mb-8 font-geom">The article you are trying to view does not exist or has been moved.</p>
        <Link
          href="/UI-Components/Blogs/blog"
          className="btn text-white font-medium px-6 py-2.5 rounded-lg hover:opacity-90 transition font-geist-sans"
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
          <div className="flex items-center text-sm md:text-base font-geist-sans">
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
            <h2 className="text-[var(--text-light)] truncate max-w-[150px] md:max-w-[300px]">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-5xl mx-auto mt-10">
          {/* Article Meta Info */}
          <div className="flex items-center gap-4 text-sm text-[var(--text-light)] mb-4 font-geist-sans tracking-wide">
            <span>{article.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--prim-color)]" />
            <span>{article.readTime}</span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold font-geist-sans text-white mb-6 leading-tight tracking-tight">
            {article.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5 mb-10 pb-8 border-b border-[var(--light-boarder)]">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3.5 py-1 rounded-full bg-[var(--prim-color)]/10 border border-[var(--prim-color)]/30 text-[var(--prim-color)] font-geist-sans"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Article Body */}
          <article className="max-w-none space-y-8">
            <p className="text-lg md:text-xl text-white font-medium italic border-l-4 border-[var(--prim-color)] pl-5 py-4 mb-8 bg-[var(--bg-color)]/50 p-4 rounded-r-xl border-y border-r border-[var(--light-boarder)] font-geom">
              {article.desc}
            </p>
            <div className="bg-[var(--bg-color)] p-6 md:p-10 rounded-2xl border border-[var(--light-boarder)] space-y-6">
              {renderContent(article.content)}
            </div>
          </article>

          {/* Bottom Navigation / Links */}
          <div className="mt-16 pt-8 border-t border-[var(--light-boarder)] flex flex-col md:flex-row items-center justify-between gap-6">
            <Link
              href="/UI-Components/Blogs/blog"
              className="flex items-center text-[var(--prim-color)] hover:text-white transition-colors duration-300 gap-2 font-geist-sans text-sm font-semibold cursor-pointer"
            >
              <i className="bi bi-arrow-left"></i> Back to Articles
            </Link>

            <a
              href={article.mediumLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-[var(--light-boarder)] text-white hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 font-geist-sans text-sm"
            >
              <i className="bi bi-medium text-lg"></i> Read on Medium
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
