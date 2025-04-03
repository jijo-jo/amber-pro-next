import Image from "next/image";
import bgimage from "../assests/securityImage.png";


const SecurityImage: React.FC = () => {
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
      </section>
    </>
  );
};

export default SecurityImage;