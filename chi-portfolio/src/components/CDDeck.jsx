export default function CDDeck({ activeCD }) {
  return (
    <div className="w-72 h-72 rounded-full bg-neutral-800 flex items-center justify-center relative shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
      <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 shadow-inner flex items-center justify-center">
        <div className="w-12 h-12 bg-gray-700 rounded-full" />

        <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-white/20 blur-md" />
        <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/10 blur-md" />
      </div>

      <div className="absolute top-6 right-0 w-32 h-2 bg-neutral-600 rounded origin-left rotate-45 shadow-md" />
    </div>
  );
}
