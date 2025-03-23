import Image from "next/image";
import dalilogo from "../assests/dalilogo.png"
import philiplogo from "../assests/philipslogo.png"

const CuriouslySupports: React.FC = () => {
  return (
    <section className="bg-black text-white text-center py-16 px-6">
      <h2 className="font-inter text-2xl md:text-[44px] font-medium mb-8 leading-[57.2px] tracking-[-2px]">
          Curiousfly supports
      </h2>

      <p className="text-[#757575] max-w-[844.98px] font-inter mx-auto text-sm md:text-[21px] leading-[29px] tracking-[-2px]">
      Curiousfly’s tunable lights are compatible with DALI (Digital Addressable Lighting Interface), ensuring precise dimming and automation in high-end residential and commercial projects. Additionally, we support Philips Hue, allowing you to integrate with your existing smart lighting ecosystem for an effortless experience.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-10">
        <div className="flex flex-col items-center">
          <Image 
            src={dalilogo}
            alt="DALI Alliance" 
            width={387.93} 
            height={209} 
          />
        </div>

        <div className="flex flex-col items-center">
          <Image 
            src={philiplogo}
            alt="Philips Hue" 
            width={216.04} 
            height={216.04} 
          />
        </div>
      </div>
    </section>
  );
};

export default CuriouslySupports;