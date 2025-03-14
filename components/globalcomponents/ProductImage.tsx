import React from "react";
import Image from "next/image";
import ProductImg from "../assests/homecontroler.png"; 

const ProductImage: React.FC = () => {
  return (
    <div className="w-[344px] h-[268.4px] sm:w-[1148.6px] sm:h-[540.26px] flex justify-center items-center bg-black px-4 sm:px-0 mb-16 md:mb-28 rounded-[7px] md:rounded-[19px] shadow-lg">
        <Image
          src={ProductImg}
          alt="Smart Home Controller"
          className="w-[90%] h-[90%] object-contain"
        />
    </div>
  );
};

export default ProductImage;

