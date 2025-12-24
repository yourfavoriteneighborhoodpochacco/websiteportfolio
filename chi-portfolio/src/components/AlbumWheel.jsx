import { useState } from "react";
import albums from "../data/albums";
import AlbumCard from "./AlbumCard";

export default function AlbumWheel() {
  const [activeAlbum, setActiveAlbum] = useState(null);

  const handleAlbumClick = (album) => {
    setActiveAlbum(activeAlbum?.title === album.title ? null : album);
  };

  return (
    <div className="p-4">
      {/* Album covers */}
      <div className="flex gap-8 overflow-x-auto">
        {albums.map((album) => (
          <div key={album.title} onClick={() => handleAlbumClick(album)}>
            <AlbumCard album={album} />
          </div>
        ))}
      </div>

      {/* Spotify embed */}
      {activeAlbum && (
        <div className="mt-8 w-full flex justify-center">
          <iframe
            src={activeAlbum.spotifyUrl}
            width="100%"   // full width
            height="380"   // Spotify standard height
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
