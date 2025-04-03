import Image from "next/image";
import bgimage from "../assests/mood-based-bg.jpeg";
import mobileui from "../assests/image (5) (1).png";

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
        <div className="absolute md:top-20 md:left-28 p-4 md:p-8 text-center md:text-left mt-16 md:mt-2">
          <h1
            className="font-inter font-medium text-center text-[36px] md:text-[44px] leading-[42px] md:leading-[57.2px] tracking-[-2px] max-w-[352.11px] md:max-w-[688px] mt-8 md:mt-2"
          >
            Mood-Based Ambiance and scenes
          </h1>

          <p
            className="font-inter font-medium w-[315.48px] md:w-[687.46px] text-[12px] md:text-[13.89px] leading-[19px] tracking-[0%] text-[#000000] opacity-50 my-2 text-center md:text-left"
          >
            Set the tone for every moment. From a relaxing evening to a vibrant celebration, create the perfect atmosphere with customizable lighting scenes.
          </p>
          <div className="mt-4 flex justify-center md:justify-start">
            <button className="bg-[#FFFFFF] w-auto text-black px-6 py-2 rounded-full text-center font-inter font-medium text-[15.88px] md:text-[15.88px] hover:bg-gray-800 transition mt-2 md:mt-10">
              Buy now
            </button>
          </div>
        </div>
        <div className="absolute top-1/2 md:top-1/4 md:right-1/12">
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
