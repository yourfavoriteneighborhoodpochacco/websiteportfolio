export default function CDCard({ cd }) {
  return (
    <div
      className="
        relative w-56 h-64
        rounded-xl
        border border-white/20
        shadow-[0_20px_40px_rgba(0,0,0,0.25)]
        flex flex-col items-center justify-center
        transition-transform duration-300
        hover:scale-[1.03]
        overflow-hidden
      "
      style={{
        backgroundImage: 'url(/textures/brown-wood.jpg)', // put a brown wood texture in public/textures
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 shadow-inner flex items-center justify-center">
        <div className="absolute inset-1/3 rounded-full bg-gray-700" />
        <div className="absolute top-2 left-2 w-10 h-10 rounded-full bg-white/20 blur-md" />
      </div>

      <p className="mt-4 text-sm tracking-wide uppercase text-center text-neutral-900 font-semibold">
        {cd.title}
      </p>
    </div>
  );
}
