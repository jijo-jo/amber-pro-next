import Image from "next/image";
import bgimage from "../assests/mood-based-bg.jpeg"
import mobileui from "../assests/RGB Lights.png"

const MoodBasedScenes: React.FC = () => {
  return (
    <>
    <section className="relative w-full h-screen flex items-start justify-start text-black bg-white overflow-hidden">
      <Image
        src={bgimage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        priority
      />
      <div className="absolute top-20 left-28 p-4 sm:p-8 text-left ">
        <h1 className="font-inter font-medium text-[36px] md:text-[44px] leading-[57.2px] tracking-[-2px]"
             >
             Mood-Based Ambiance and scenes
        </h1>

        <p
          className="font-inter font-medium w-[315.48px] md:w-[687.46px] text-[12px] md:text-[13.89px] leading-[19px] tracking-[0%] text-[#000000] opacity-50 my-2"
        >
            Set the tone for every moment. From a relaxing evening to a vibrant celebration, create the perfect atmosphere with customizable lighting scenes.
        </p>
        <div
          className="mt-4 flex justify-start"
        >
          <button className="bg-[#FFFFFF] w-auto text-black px-6 py-2 rounded-full text-center font-inter font-medium text-[15.88px] md:text-[15.88px] hover:bg-gray-800 transition">
            Buy now
          </button>
        </div>
      </div>
      <div className="absolute top-1/3 right-1/6">
        <Image
          src={mobileui}
          alt="Mobile Automation UI"
          width={450}
          height={550}
          className=""
        />
      </div>

    </section>
  </>
  );
};

export default MoodBasedScenes;
