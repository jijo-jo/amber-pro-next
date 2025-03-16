import React from "react";
import Link from "next/link";

interface NavLinkProps {
  label: string;
  href: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, href, className }) => {
  return (
    <Link
      href={href}
      className={`block md:px-4 md:py-2 text-[12px] sm:text-base text-[#8F8F8F] hover:text-white transition ${className}`}
    >
      {label}
    </Link>
  );
};

export default NavLink;

