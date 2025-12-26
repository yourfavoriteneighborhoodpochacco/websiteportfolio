export default function CDCase({ label, index }) {
  return (
    <div
      className="
        w-48 h-16 
        bg-neutral-100 
        border border-neutral-300
        shadow-md
        flex items-center px-4
        cursor-pointer
        transition-transform duration-200
        hover:translate-x-2
      "
      style={{
        transform: `translateY(${index * -6}px)`,
        zIndex: 10 - index,
      }}
    >
      <p className="font-bold tracking-widest text-sm">
        {label}
      </p>
    </div>
  );
}
