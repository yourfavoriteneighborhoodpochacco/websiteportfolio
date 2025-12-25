import { useState } from "react";
import albums from "../data/albums";
import AlbumCard from "./AlbumCard";

export default function AlbumWheel() {
  const [activeAlbum, setActiveAlbum] = useState(null);

  const handleAlbumClick = (album) => {
    setActiveAlbum(activeAlbum?.title === album.title ? null : album);
  };

  return (
    <div className="w-full flex flex-col gap-12">
      {/* Album row */}
      <div className="flex justify-center gap-16 overflow-x-auto overflow-y-hidden py-12">
        {albums.map((album) => (
          <div
            key={album.title}
            onClick={() => handleAlbumClick(album)}
            className="shrink-0"
          >
            <AlbumCard album={album} />
          </div>
        ))}
      </div>

      {/* Spotify embed */}
      {activeAlbum && (
        <div className="w-full flex justify-center pt-8">
          <iframe
            src={activeAlbum.spotifyPlaylistUrl}
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
