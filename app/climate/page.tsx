import Navbar from "@/components/homecomponent/Navbar";
import InitialPage from "@/components/climatecomponents/InitialPage";
import IntuitiveAppControl from "@/components/climatecomponents/IntrutiveAppContoll";
import Image from "next/image";
import climatefull from "@/components/assests/climatefullimage.png"

export default function Home() {
    return (
        <div className="bg-black min-h-screen w-full">
            <Navbar textcolor="text-white" />
            <main className="flex flex-col items-center justify-center">
                <InitialPage />
                <div className="relative w-full h-screen flex items-start justify-start">
                    <Image
                        src={climatefull}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 z-0"
                        priority
                    />
                </div>
                <IntuitiveAppControl/>
            </main>
        </div>
    );
}