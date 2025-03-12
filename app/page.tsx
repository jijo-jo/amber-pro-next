import Navbar from "@/components/homecomponent/Navbar";
import HeroSection from "@/components/homecomponent/HeroSession";
import ContactForm from "@/components/homecomponent/ContactForm";
import OfficeSession from "@/components/homecomponent/OfficeSession";
import SmartDashboard from "@/components/homecomponent/Smartdashbord";
import ControllerPage from "@/components/homecomponent/ControllerPage";
import officeImage from "@/components/assests/officeimage.jpeg"

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full">
    <Navbar />
    <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <OfficeSession
            title="Curiously Home"
            description="A Curiousfly Home is a seamlessly automated living space designed for ultimate comfort, convenience, and efficiency. Every element is crafted to provide a luxurious and intuitive living experience, making your home smarter, safer, and more efficient."
            buttonText="Explore"
            backgroundImage={officeImage}
        />
        <ControllerPage/>
        <SmartDashboard/>
        <ContactForm />
        
    </main>
</div>
  );
}
