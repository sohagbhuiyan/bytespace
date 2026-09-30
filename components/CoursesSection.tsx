"use client";

import { useState } from "react";
import CourseCard, { type Course } from "@/components/CourseCard";

// Rows exactly as laid out in the design (8 / 6 / 4 + "More")
const categoryRows = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

const courses: Course[] = [
  { title: "Learn Figma from Basic", image: "/images/courses/figma.png" },
  { title: "Build Digital Asset", image: "/images/courses/digital-asset.png" },
  { title: "the Power of Big Data", image: "/images/courses/big-data.png" },
  { title: "Balancing Productivity and Self-Care", image: "/images/courses/productivity.png" },
  { title: "Mastering Money Management", image: "/images/courses/money.png" },
  { title: "From Idea to Startup Success", image: "/images/courses/startup.png" },
];

export default function CoursesSection() {
  const [active, setActive] = useState("Featured");

  return (
    <section id="courses" className="container-page scroll-mt-8 pt-14 lg:pt-[72px]">
      <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
        <h2 className="max-w-[588px] font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[44px]">
          Discover Your Passion, Build Your Skills
        </h2>
        <p className="text-base leading-[1.6] text-shuttle-400 sm:text-lg">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across
          different fields, from technology to the arts, and make a difference in your career and life.
        </p>
      </div>

      {/* Category tabs */}
      <div role="tablist" aria-label="Course categories" className="mt-8 flex flex-col items-center gap-3 lg:mt-[42px] lg:gap-[21px]">
        {categoryRows.map((row, r) => (
          <div key={r} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {row.map((cat) => {
              const selected = cat === active;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(cat)}
                  className={`rounded-3xl px-4 py-3 text-base leading-[1.2] font-medium whitespace-nowrap transition-colors ${
                    selected ? "bg-lime text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
            {r === categoryRows.length - 1 && (
              <button type="button" className="text-base leading-[1.2] font-medium text-brand hover:underline">
                + More
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Course grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-[77px] lg:grid-cols-3 lg:gap-10">
        {courses.map((c) => (
          <CourseCard key={c.title} course={c} />
        ))}
      </div>
    </section>
  );
}
