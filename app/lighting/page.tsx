import Navbar from "@/components/homecomponent/Navbar";
import HeroSectionLight from "@/components/lightingcomponents/HeroSession";
import ContactForm from "@/components/homecomponent/ContactForm";
import CuriouslySupports from "@/components/lightingcomponents/CuriouslySupport";
import AmberPro from "@/components/lightingcomponents/Amprepro";
import MoodBasedScenes from "@/components/lightingcomponents/Moodboardscenes";
import FeatureSection from "@/components/lightingcomponents/FeatureSession";
import master1 from "@/components/assests/Master Bedroom.png"
import master2 from "@/components/assests/RGB Lights.png"
// import master3 from "@/components/assests/master-3.png"


const features = [
    {
      image: master1.src, 
      heading1: "Control your lights with ease",
      description1:
        "Whether through our mobile app, touch panels, or voice commands. Enjoy instant adjustments without leaving your seat.",
      heading2: "Energy Efficiency Made Simple",
      description2:
        "Reduce energy consumption effortlessly with smart scheduling, occupancy sensors, and dimming features that adapt to your daily routine.",
    },
    {
      image: master2.src,
      heading1: "Color Your World with Intelligent Lighting",
      description1:
        "Why settle for ordinary lighting when you can transform your space with RGB Smart Lights? Create stunning ambiances, enhance moods, and personalize your home like never before.",
      heading2: "Mood-Based Ambiance and Scenes",
      description2:
        "Set the tone for every moment. From a relaxing evening to a vibrant celebration, create the perfect atmosphere with customizable lighting scenes.",
      reverse: true,
    },
    {
      image: master1.src,
      heading1: "Adaptive Lighting for Every Moment",
      description1:
        "Lighting plays a crucial role in setting the mood, enhancing productivity, and improving overall well-being. Seamlessly shift between warm and cool tones to match your lifestyle and environment.",
      heading2: "Natural Light at Your Fingertips",
      description2:
        "Mimic the natural light cycle with tunable white lighting—bright and cool in the morning for energy and focus, and warm and cozy in the evening for relaxation and comfort.",
    },
  ];


export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full">
    <Navbar textcolor="text-white"/>
    <main className="flex flex-col items-center justify-center">
       <HeroSectionLight/>
       <div className="bg-black min-h-screen px-6 md:px-16 py-16">
      {features.map((feature, index) => (
        <FeatureSection key={index} {...feature} />
      ))}
    </div>
       <MoodBasedScenes/>
       <AmberPro/>
       <CuriouslySupports/>
       <ContactForm/>
    </main>
</div>
  );
}
