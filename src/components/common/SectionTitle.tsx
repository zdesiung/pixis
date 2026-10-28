import React from "react";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}: SectionTitleProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={`flex flex-col mb-10 max-w-3xl ${align === "center" ? "mx-auto" : ""} ${alignment[align]}`}>
      {subtitle && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-500/10 border border-amber-500/20 mb-3">
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          {subtitle}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-sm sm:text-base leading-relaxed ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
      <div className="w-16 h-1 bg-amber-500 rounded-full mt-4"></div>
    </div>
  );
}
