import Navbar from "@/components/homecomponent/Navbar";
import LetsContactForm from "@/components/smartHome/Letscontact";
import HeroSection from "@/components/security/HeroSection";
import SecurityImage from "@/components/security/SecurityImage";
import DoorViewComponent from "@/components/security/DoorwayComponent";
import SecurityFeatures from "@/components/security/SecurityCards";


export default function Home() {

    return (
        <div className="bg-black min-h-screen w-full">
            <Navbar />
            <main className="flex flex-col items-center justify-center">
                <HeroSection/>
                <SecurityFeatures/>
                <DoorViewComponent/>
                <SecurityImage/>
                <LetsContactForm/>
            </main>
        </div>
    );
}