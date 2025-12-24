import { Link } from "react-router-dom";

export default function CDPlayer() {
  return (
    <div className="w-64 h-64 mx-auto bg-gray-300 rounded-full flex items-center justify-center">
      <Link to="/cadprojects" className="absolute">CAD Projects</Link>
      <Link to="/recipes" className="absolute">Recipes</Link>
      <Link to="/codingprojects" className="absolute">Coding Projects</Link>
      <span>CD Placeholder</span>
    </div>
  );
}
