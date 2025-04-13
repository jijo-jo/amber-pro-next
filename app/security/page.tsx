import Navbar from "@/components/homecomponent/Navbar";
import Image from "next/image";
import HeroSection from "@/components/security/HeroSection";
import DoorViewComponent from "@/components/security/DoorwayComponent";
import SecurityFeatures from "@/components/security/SecurityCards";
import securitybg2 from "@/components/assests/securitybg2.jpeg"
import securitybg3 from "@/components/assests/securitybg3.jpeg"
import SurveillancePreview from "@/components/security/SecurityFooter";


export default function Home() {

    return (
        <div className="bg-black min-h-screen w-full">
            <Navbar />
            <main className="flex flex-col items-center justify-center">
                <HeroSection/>
                <div className="relative w-full h-screen flex items-start justify-start">
                    <Image
                        src={securitybg2}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 z-0"
                        priority
                    />
                </div>
                <SecurityFeatures/>
                <DoorViewComponent/>
                <div className="relative w-full h-screen flex items-start justify-start">
                    <Image
                        src={securitybg3}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 z-0"
                        priority
                    />
                </div>
                <SurveillancePreview/>
            </main>
        </div>
    );
}