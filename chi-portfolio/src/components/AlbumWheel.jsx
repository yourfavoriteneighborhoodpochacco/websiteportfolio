import { useState } from "react";
import albums from "../data/albums";
import AlbumCard from "./AlbumCard";

export default function AlbumWheel() {
  const [activeAlbum, setActiveAlbum] = useState(null);

  const handleAlbumClick = (album) => {
    setActiveAlbum(activeAlbum?.title === album.title ? null : album);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex gap-16 pb-8 justify-center flex-wrap">
        {albums.map((album) => (
          <div key={album.title} onClick={() => handleAlbumClick(album)}>
            <AlbumCard album={album} />
          </div>
        ))}
      </div>

      <div
        className={`w-full max-w-4xl transition-all duration-500 ease-in-out overflow-hidden ${
          activeAlbum ? "max-h-[500px] opacity-100 mt-8" : "max-h-0 opacity-0"
        }`}
      >
        {activeAlbum && (
          <iframe
            src={activeAlbum.spotifyPlaylistUrl}
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        )}
      </div>
    </div>
  );
}
