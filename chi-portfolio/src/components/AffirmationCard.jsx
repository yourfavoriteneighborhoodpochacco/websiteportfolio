import React from "react";

export default function AffirmationCard({ message }) {
  return (
    <div className="w-48 h-48 p-4 m-2 bg-white/80 text-frostbite shadow-lg rounded-md flex items-center justify-center text-center font-semibold text-sm">
      {message}
    </div>
  );
}
