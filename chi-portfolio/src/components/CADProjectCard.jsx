import React from "react";

export default function CADProjectCard({ project }) {
  return (
    <div className="w-56 h-56 p-4 border border-frostbite/30 bg-white/70 backdrop-blur-sm flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-frostbite/80">
          {project.description}
        </p>
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium underline mt-2"
      >
        View project
      </a>
    </div>
  );
}
