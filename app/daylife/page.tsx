import Navbar from "@/components/homecomponent/Navbar";
import SmartHomeSection from "@/components/smartHome/SmartHome";

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full">
    <Navbar />
    <main className="mt-[11.5rem]">
        <SmartHomeSection heading="A Day in the life of a Smart Home" alttext="Scroll Animation video"/>
    </main>
</div>
  );
}