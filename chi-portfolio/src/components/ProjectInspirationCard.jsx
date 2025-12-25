export default function ProjectInspirationCard({ item }) {
  return (
    <div className="w-64 h-64 p-4 bg-white/80 border border-frostbite/20 rounded-sm shadow-sm">
      <h3 className="text-lg font-semibold mb-2 text-frostbite">
        {item.title}
      </h3>

      <p className="text-sm text-frostbite/80">
        {item.description}
      </p>
    </div>
  );
}
