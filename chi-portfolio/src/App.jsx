import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CADProjects from "./pages/CADProjects";
import CodingProjects from "./pages/CodingProjects";
import Recipes from "./pages/Recipes";
import AffirmationWall from "./pages/AffirmationWall";
import ProjectInspiration from "./pages/ProjectInspiration";

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-figtree bg-cream text-frostbite min-h-screen w-screen overflow-x-hidden">
        {/* Navbar - static at top of every page */}
        <nav className="w-full bg-cream p-8 flex items-center">
          <h1 className="tracking-widest text-3xl font-bold cursor-pointer">
            <Link to="/" className="text-frostbite no-underline hover:text-frostbite">
              MICHAEL PONIENTE
            </Link>
          </h1>
        </nav>

        <main className="pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadprojects" element={<CADProjects />} />
            <Route path="/codingprojects" element={<CodingProjects />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/affirmationwall" element={<AffirmationWall />} />
            <Route path="/projectinspiration" element={<ProjectInspiration />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
