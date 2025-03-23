import Image from "next/image";

interface FeatureProps {
  image: string;
  heading1: string;
  description1: string;
  heading2: string;
  description2: string;
  reverse?: boolean;
}

const FeatureSection: React.FC<FeatureProps> = ({
  image,
  heading1,
  description1,
  heading2,
  description2,
  reverse,
}) => {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-20 py-12`}>
      <div className="w-[250px] md:w-[300px] lg:w-[350px] flex-shrink-0">
        <Image src={image} alt={heading1} width={571.53} height={927.46} className="rounded-xl shadow-lg" />
      </div>

      <div className="max-w-[329.26px] text-center md:text-left">
        <div className="text-xl md:text-[32px] font-inter font-medium text-white leading-[38.4px] tracking-[-0.64px]">{heading1}</div>
        <p className="text-[#FFFFFF66] font-inter fornt-[400] text-sm md:text-[21px] leading-[29px] tracking-[-0.8px] mt-2 mb-16">{description1}</p>

        <div className="text-xl md:text-[32px] font-inter font-medium text-white leading-[38.4px] tracking-[-0.64px]">{heading2}</div>
        <p className="text-[#FFFFFF66] font-inter fornt-[400] text-sm md:text-[21px] leading-[29px] tracking-[-0.8px] mt-2">{description2}</p>
      </div>
    </div>
  );
};

export default FeatureSection;
