"use client";
import { useState } from "react";
import Link from "next/link";

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
            <h2 className="text-[var(--text-light)]">ProjectDetails</h2>
          </div>
        </div>
      </div>
    </>
  );
}
