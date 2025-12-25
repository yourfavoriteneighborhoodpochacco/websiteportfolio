import AlbumWheel from "../components/AlbumWheel";
import CDPlayer from "../components/CDPlayer";
import AboutTimeline from "../components/AboutTimeline";

export default function Home() {
    return (
        <div className="font-figtree bg-cream text-frostbite min-h-screen w-screen overflow-x-hidden">

            <main className="pt-20">
                {/* Album Wheel Section */}
                <div className="w-full text-center">
                    <h1 className="font-bold text-5xl mt-4 py-8">
                        Choose the atmosphere.
                    </h1>
                </div>

                <section className="w-full min-h-[70vh] pb-18 flex items-center">
                    <div className="max-w-[1600px] mx-auto px-6 w-full">
                        <AlbumWheel />
                    </div>
                </section>


                {/* CD Player Section */}
                <section className="w-full py-16">
                    <div className="max-w-[1600px] mx-auto px-6">
                        <h2 className="text-2xl font-semibold mb-4">CD Player</h2>
                        <CDPlayer />
                    </div>
                </section>

                {/* About Timeline */}
                <section className="w-full py-16">
                    <div className="max-w-[1600px] mx-auto px-6">
                        <h2 className="text-2xl font-semibold mb-4">About Timeline</h2>
                        <AboutTimeline />
                    </div>
                </section>
            </main>
        </div>
    );
}
