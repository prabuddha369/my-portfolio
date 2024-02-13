import { headerLinks } from "@/constants";
import Link from "next/link";
import React from "react";

interface NavItemsProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavItems: React.FC<NavItemsProps> = ({ setOpen }) => {
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <ul className="md:flex-between flex w-full flex-col md:items-start items-center gap-5 md:flex-row">
      {headerLinks.map((link, index) => (
        <li
          key={index}
          className="text-primary-500 flex items-center justify-center white-space-nowrap px-5"
        >
          <Link
            href={link.path}
            onClick={handleLinkClick}
            className="text-white hover:text-[#eabf3e] hover:font-bold text-lg px-3 p-1 rounded-lg transition ease-in duration-500"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
