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
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-16 md:gap-32 py-16`}>
      <div className="w-[250px] md:w-[300px] lg:w-[350px] flex-shrink-0">
        <Image src={image} alt={heading1} width={500} height={800} className="rounded-xl shadow-lg" />
      </div>

      <div className="max-w-[340px] text-left">
        <div className="text-[32px] md:text-[32px] font-inter font-medium text-white leading-[38.4px] tracking-[-0.64px] max-w-[329.26px]">{heading1}</div>
        <p className="text-[#FFFFFF66] font-inter fornt-[400] text-[21px] md:text-[21px] leading-[29px] tracking-[-0.8px] mt-6 mb-8 md:mb-20 ">{description1}</p>

        <div className="text-[32px] md:text-[32px] font-inter font-medium text-white leading-[38.4px] tracking-[-0.64px] max-w-[329.26px]">{heading2}</div>
        <p className="text-[#FFFFFF66] font-inter fornt-[400] text-[21px] md:text-[21px] leading-[29px] tracking-[-0.8px] mt-6">{description2}</p>
      </div>
    </div>
  );
};

export default FeatureSection;
