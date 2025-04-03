import Navbar from "@/components/homecomponent/Navbar";
import HeroSection from "@/components/musiccomponent/HeroSession";
import CustomListening from "@/components/musiccomponent/CustomiseListening";
import FeatureCard from "@/components/musiccomponent/FeatureCard";
import PlaylistCard from "@/components/musiccomponent/PlalistCard";
import MusicSection from "@/components/musiccomponent/MuscicSection";
import LetsContactForm from "@/components/smartHome/Letscontact";


export default function Home() {
    const playlists = [
        { imageUrl: '/playlist1.jpg', altText: 'Playlist 1' },
        { imageUrl: '/playlist2.jpg', altText: 'Playlist 2' },
        { imageUrl: '/playlist3.jpg', altText: 'Playlist 3' },
        { imageUrl: '/playlist4.jpg', altText: 'Playlist 4' }
    ];

    const musicLogos = [
        { src: '/music-logo-1.png', alt: 'Music Logo 1' },
        { src: '/music-logo-2.png', alt: 'Music Logo 2' },
        { src: '/music-logo-3.png', alt: 'Music Logo 3' },
        { src: '/music-logo-4.png', alt: 'Music Logo 4' },
    ];

    return (
        <div className="bg-black min-h-screen w-full">
            <Navbar />
            <main className="flex flex-col items-center justify-center">
                <HeroSection />
                <CustomListening />
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Card */}
                    <FeatureCard
                        title="Wake up to a good morning."
                        description="Imagine waking up to the sound of your favorite music gently playing in the background, setting the perfect tone for your day."
                        backgroundColor="bg-gray-900"
                    >
                        <div className="bg-black p-4 rounded-lg">
                            {/* Mock music player UI */}
                            <div className="w-full h-16 bg-gray-700 rounded-md"></div>
                        </div>
                    </FeatureCard>

                    {/* Right Card */}
                    <FeatureCard
                        title="Music for every room, every occasion."
                        description="Transform your home into a symphony of experiences with music for every occasion!"
                        backgroundColor="bg-white text-black"
                    >
                        <div className="grid grid-cols-3 gap-2">
                            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">🎮</div>
                            <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">🍸</div>
                            <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">🎉</div>
                        </div>
                    </FeatureCard>
                </section>
                <section className="bg-black text-white p-6 md:p-10 rounded-xl mt-6">
                    <h2 className="text-center text-2xl md:text-3xl font-semibold">
                        Playlists to match your vibe
                    </h2>
                    <p className="text-center text-gray-400 mt-2">
                        Whether it`&apos;`s an upbeat playlist to energize your day or calming melodies to ease into your routine, the choice is yours.
                    </p>
                    <div className="flex justify-center gap-4 mt-6">
                        {playlists.map((playlist, index) => (
                            <PlaylistCard key={index} {...playlist} />
                        ))}
                    </div>
                </section>
                <MusicSection
                    title="Let Music Flow Through Your Home"
                    subtitle="Stream from Spotify, Apple Music, or local devices simultaneously across different rooms."
                    logos={musicLogos}
                />
                <LetsContactForm/>
            </main>
        </div>
    );
}