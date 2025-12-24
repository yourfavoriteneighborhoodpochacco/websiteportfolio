import AlbumWheel from "../components/AlbumWheel";
import CDPlayer from "../components/CDPlayer";
import AboutTimeline from "../components/AboutTimeline";

export default function Home() {
  return (
    <div className="font-figtree bg-cream text-frostbite min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-cream shadow-md z-50 p-4 flex items-center">
        <h1
          className="text-xl font-bold cursor-pointer text-frostbite"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Michael Poniente
        </h1>
      </nav>

      <main className="pt-20 px-4">
        {/* Album Wheel Section */}
        <section className="mb-16 p-6 rounded-xl border border-frostbite/20 bg-white/20 backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-4 text-frostbite">Album Wheel</h2>
          <AlbumWheel />
        </section>

        {/* CD Player Section */}
        <section className="mb-16 p-6 rounded-xl border border-frostbite/20 bg-white/20 backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-4 text-frostbite">CD Player</h2>
          <CDPlayer />
        </section>

        {/* About Timeline Section */}
        <section className="mb-16 p-6 rounded-xl border border-frostbite/20 bg-white/20 backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-4 text-frostbite">About Timeline</h2>
          <AboutTimeline />
        </section>
      </main>
    </div>
  );
}
