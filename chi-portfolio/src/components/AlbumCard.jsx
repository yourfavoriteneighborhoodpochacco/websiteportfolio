import React, { useState } from "react";

export default function AlbumCard({ album }) {
  const [showEmbed, setShowEmbed] = useState(false);

  const handleClick = () => {
    setShowEmbed((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center w-64">
      <div
        onClick={handleClick}
        className="
          relative w-64 h-64 cursor-pointer
          border border-frostbite/30
          shadow-[12px_20px_30px_rgba(0,0,0,0.35)]
          transition-transform duration-300
          hover:scale-[1.02]
        "
      >
        <img
          src={album.cover}
          alt={album.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
