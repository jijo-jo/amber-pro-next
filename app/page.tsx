import Navbar from "@/components/homecomponent/Navbar";
import HeroSection from "@/components/homecomponent/HeroSession";
import ContactForm from "@/components/homecomponent/ContactForm";
import OfficeSession from "@/components/homecomponent/OfficeSession";
import SmartDashboard from "@/components/homecomponent/Smartdashbord";
import ControllerPage from "@/components/homecomponent/ControllerPage";
import officeImage from "@/components/assests/createbg.jpeg"

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full">
    <Navbar />
    <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <OfficeSession
            title="Curiousfly Home"
            description="A Curiousfly Home is a seamlessly automated living space designed for ultimate comfort, convenience, and efficiency."
            buttonText="Explore"
            backgroundImage={officeImage}
        />
        <ControllerPage/>
        <SmartDashboard/>
        <div className="mt-32">
        <ContactForm />
        </div>
      
        
    </main>
</div>
  );
}
