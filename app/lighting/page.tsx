import Navbar from "@/components/homecomponent/Navbar";
import AmberPro from "@/components/lightingcomponents/Amprepro";
import SmartCurtainControlPage from "@/components/lightingcomponents/SmartCurtain";
import Hero from "@/components/lightingcomponents/HeroSession";
import MoodScene from "@/components/lightingcomponents/Moodboardscenes";
import CircadianLighting from "@/components/lightingcomponents/FeatureSession";
import LightingAndShades from "@/components/lightingcomponents/LightingandShade";
import FullScreenVideo from "@/components/lightingcomponents/FullScreenVedio";



export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full">
      <Navbar textcolor="text-white" />
      <main className="flex flex-col items-center justify-center">
        <LightingAndShades />
        <FullScreenVideo />
        <CircadianLighting />
        <MoodScene />
        <Hero />
        <SmartCurtainControlPage />
        <AmberPro />
      </main>
    </div>
  );
}
