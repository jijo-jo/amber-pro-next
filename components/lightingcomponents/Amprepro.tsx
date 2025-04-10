import Image from "next/image";
import switchlogo from "../assests/2_Black_black_Final_2.png";

const AmberPro: React.FC = () => {
  return (
    <section className="bg-black text-white flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-16 gap-10 md:gap-32 md:my-16">
      
      <div className="flex-shrink-0 order-first md:order-first flex flex-col items-center">
        <Image
          src={switchlogo}
          alt="Amber Pro Switch"
          width={500}
          height={500}
          className=""
        />

        <button className="bg-white text-black px-6 py-2 rounded-full font-inter font-medium text-sm md:text-[15.88px] transition mt-4 md:hidden">
          Explore
        </button>
      </div>

      <div className="text-center md:text-left max-w-md order-last md:order-last">
        <p className="font-inter font-medium text-[16px] text-[#FFFFFF] leading-[19.2px] tracking-[1.92px] uppercase mb-2">
          AMBER PRO
        </p>
        <h2 className="text-[44px] font-medium leading-[57.2px] tracking-[-2px] mb-4 bg-gradient-to-r from-[#FFFFFF] to-[#999999] text-transparent bg-clip-text">
          Instant Precision
        </h2>
        <p className="text-[#FFFFFFAA] text-sm md:text-[13.89px] font-[400] leading-[18.2px] mb-6 max-w-[354.32px]">
          Adjust brightness, switch scenes, or turn lights on/off with a single touch for seamless control.
        </p>

        <button className="bg-white text-black px-6 py-2 rounded-full font-inter font-medium text-sm md:text-[15.88px] transition hidden md:inline-block">
          Explore
        </button>
      </div>
    </section>
  );
};

export default AmberPro;

