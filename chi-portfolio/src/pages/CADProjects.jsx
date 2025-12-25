import CADProjectCard from "../components/CADProjectCard";
import cadProjects from "../data/cadProjects";

export default function CADProjects() {
  return (
    <div className="min-h-screen w-full p-8 bg-cream text-frostbite">
      <h1 className="text-3xl font-bold mb-8">CAD Projects</h1>

      <div className="flex flex-wrap gap-8">
        {cadProjects.map((project, index) => (
          <CADProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
