import cdData from "../data/cdData";
import CDCard from "./CDCard";

export default function CDStack() {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {cdData.map((cd, index) => (
        <CDCard key={index} cd={cd} />
      ))}
    </div>
  );
}
