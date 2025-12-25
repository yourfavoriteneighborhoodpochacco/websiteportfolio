import React from "react";
import AffirmationCard from "../components/AffirmationCard";
import affirmations from "../data/affirmations";

export default function AffirmationWall() {
  return (
    <div className="min-h-screen w-full flex flex-wrap justify-center items-start p-8 gap-4 bg-cream">
      {affirmations.map((a, index) => (
        <AffirmationCard key={index} message={a.message} />
      ))}
    </div>
  );
}
