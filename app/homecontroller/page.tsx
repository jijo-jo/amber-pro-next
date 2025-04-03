import Navbar from "@/components/homecomponent/Navbar";
import SmartHomeSection from "@/components/smartHome/SmartHome";
import LetsContactForm from "@/components/smartHome/Letscontact";
import ProductShowcase from "@/components/smartHome/HomecontrollerHero";
import homecontrollerhero from "@/components/assests/homecontrollhero.jpeg"

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full">
    <Navbar />
    <main className="mt-[11.5rem]">
        <SmartHomeSection heading="Home Controller" alttext="Product Video" subHeading="The Brain of Your Smart Home"/>
        <ProductShowcase productImage={homecontrollerhero}/>
        <SmartHomeSection alttext="Product Video/image"/>
        <LetsContactForm/>
    </main>
</div>
  );
}