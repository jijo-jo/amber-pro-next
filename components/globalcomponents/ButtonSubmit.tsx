'use client'
import React from "react";

interface ButtonSubmitProps {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const ButtonSubmit: React.FC<ButtonSubmitProps> = ({ title, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-auto bg-[#00B7E1] text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all"
    >
      {title}
    </button>
  );
};

export default ButtonSubmit;

