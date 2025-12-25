import { Link } from "react-router-dom";

export default function CDPlayer() {
  const pages = [
    { label: "CAD Projects", path: "/cadprojects" },
    { label: "Coding Projects", path: "/codingprojects" },
    { label: "Recipes", path: "/recipes" },
    { label: "Affirmation Wall", path: "/affirmationwall" },
    { label: "Project Inspiration", path: "/projectinspiration" },
  ];

  const radius = 180; // distance from center

  return (
    <div className="relative flex justify-center items-center h-[500px]">
      
      {/* CD */}
      <div className="w-64 h-64 rounded-full bg-gray-300 border-4 border-gray-400 flex items-center justify-center z-10">
        <div className="w-10 h-10 rounded-full bg-gray-500" />
      </div>

      {/* Navigation items */}
      {pages.map((page, index) => {
        const angle = (360 / pages.length) * index;

        return (
          <Link
            key={page.label}
            to={page.path}
            className="absolute text-sm font-medium hover:underline"
            style={{
              transform: `
                rotate(${angle}deg)
                translateX(${radius}px)
                rotate(-${angle}deg)
              `,
            }}
          >
            ➜ {page.label}
          </Link>
        );
      })}
    </div>
  );
}
