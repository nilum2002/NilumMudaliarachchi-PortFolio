"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import UnderConstruction from "@/public/under-construction.png";

export default function projectDetails() {
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
            <h2 className="text-[var(--text-light)]">Articles</h2>
          </div>
        </div>
      </div>

      {/* Under Construction Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-20 px-[8%] lg:px-[16%]">
        <div className="max-w-xs w-full">
          <Image
            src={UnderConstruction}
            alt="Under Construction"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--prim-color)] text-center md:text-left">
            Under Construction
          </h2>
          <p className="text-[var(--text-light)] text-center md:text-left mt-4 max-w-md">
            This page is currently under construction. Check back soon for
            exciting articles and content!
          </p>
        </div>
      </div>
    </>
  );
}
