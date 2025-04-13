import Navbar from "@/components/homecomponent/Navbar";
import Image from "next/image";
import HeroEntertain from "@/components/musiccomponent/EntertainFooter";
import HeroSection from "@/components/musiccomponent/HeroSession";
import MusicFlow from "@/components/musiccomponent/MusicFlow";
import MultiRoomAudio from "@/components/musiccomponent/Multiroomaudio";
import PlaylistsSection from "@/components/musiccomponent/PlayListSession";
import entertain2 from "@/components/assests/entertain2.png"




export default function Home() {


    return (
        <div className="bg-black min-h-screen w-full">
            <Navbar />
            <main className="flex flex-col items-center justify-center">
                <HeroSection />
                <div className="relative w-full h-screen flex items-start justify-start">
                    <Image
                        src={entertain2}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 z-0"
                        priority
                    />
                </div>
                <MusicFlow/>
                <MultiRoomAudio/>
                <PlaylistsSection/>
                <HeroEntertain />
            </main>
        </div>
    );
}