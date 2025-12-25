import CodingProjectCard from "../components/CodingProjectCard";
import codingProjects from "../data/codingProjects";

export default function CodingProjects() {
  return (
    <div className="min-h-screen w-full p-8 bg-cream">
      <h1 className="text-3xl font-semibold mb-8 text-frostbite">
        Coding Projects
      </h1>

      <div className="flex flex-wrap gap-6">
        {codingProjects.map((project, index) => (
          <CodingProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
