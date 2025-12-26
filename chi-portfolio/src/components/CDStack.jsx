import { Link } from "react-router-dom";
import CDCard from "./CDCard";
import cdData from "../data/cdData";


export default function CDStack() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {cdData.map((cd) => (
        <Link key={cd.title} to={cd.route}>
          <CDCard cd={cd} />
        </Link>
      ))}
    </div>
  );
}

