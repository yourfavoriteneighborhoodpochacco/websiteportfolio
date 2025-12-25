import projectInspiration from "../data/projectInspiration";
import ProjectInspirationCard from "../components/ProjectInspirationCard";

export default function ProjectInspiration() {
  return (
    <div className="min-h-screen bg-cream text-frostbite p-8">
      <h1 className="text-3xl font-semibold mb-8">
        Project Inspiration
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectInspiration.map((item) => (
          <ProjectInspirationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
