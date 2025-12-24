import React, { useState } from "react";

export default function AlbumCard({ album }) {
  const [showEmbed, setShowEmbed] = useState(false);

  const handleClick = () => {
    setShowEmbed((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center w-64">
      <div
        className="relative w-64 h-64 cursor-pointer"
        onClick={handleClick}
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
