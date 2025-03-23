import Image from "next/image";
import switchlogo from "../assests/instantprecisson.png"

const AmberPro: React.FC = () => {
  return (
    <section className="bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 gap-10">
      {/* Left Image */}
      <div className="flex-shrink-0">
        <Image
          src={switchlogo} // Replace with actual image path
          alt="Amber Pro Switch"
          width={568.91}
          height={558.62}
          className=""
        />
      </div>

      {/* Right Content */}
      <div className="text-center md:text-left max-w-md">
        <p className="font-inter font-medium text-[16px] text-[#FFFFFF] leading-[19.2px] tracking-[1.92px] uppercase mb-2">
           AMBER PRO
        </p>
        <h2 className="text-2xl md:text-[44px] font-medium leading-[57.2px] tracking-[-2px] mb-4">
            Instant Precision
        </h2>
        <p className="text-[#FFFFFFAA] text-sm md:text-[13.89px] font-[400] leading-[18.2px] mb-6 max-w-[354.32px]">
            Adjust brightness, switch scenes, or turn lights on/off with a single touch for seamless control.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full font-inter font-medium text-sm md:text-[15.88px] transition ">
          Explore
        </button>
      </div>
    </section>
  );
};

export default AmberPro;
