import React from "react";

export default function CodingProjectCard({ project }) {
  return (
    <div className="w-56 h-56 p-4 border border-frostbite/30 bg-white/70 text-frostbite flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition">
      <h3 className="font-semibold text-lg">
        {project.title}
      </h3>

      <p className="text-sm opacity-80">
        {project.description}
      </p>

      <span className="text-xs underline opacity-70">
        View project
      </span>
    </div>
  );
}
