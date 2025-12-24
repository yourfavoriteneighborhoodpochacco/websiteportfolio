// src/components/AlbumWheel.jsx
export default function AlbumWheel() {
  return (
    <div className="flex overflow-x-auto gap-4 p-4">
      <div className="w-48 h-48 bg-gray-300 flex-shrink-0 flex items-center justify-center cursor-pointer">
        Album 1
      </div>
      <div className="w-48 h-48 bg-gray-300 flex-shrink-0 flex items-center justify-center cursor-pointer">
        Album 2
      </div>
      <div className="w-48 h-48 bg-gray-300 flex-shrink-0 flex items-center justify-center cursor-pointer">
        Album 3
      </div>
      {/* Add more album placeholders */}
    </div>
  );
}
