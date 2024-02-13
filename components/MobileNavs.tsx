"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import Link from "next/link";
import NavItems from "./NavItems";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { RiMenuAddLine } from "react-icons/ri";

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetTrigger className="align-middle">
          <RiMenuAddLine size={30} className="text-[#eabf3e] me-2" />
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-black/50 md:hidden">
          <NavItems setOpen={setOpen} />
          <div className="flex flex-row w-full justify-center gap-4 mt-5 text-[#eabf3e]">
            <Link
              href="https://www.linkedin.com/in/prabuddha-chatterjee-20b197249/"
              target="blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin size={20} />
            </Link>
            <Link
              href="https://github.com/prabuddha369"
              target="blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/prabuddha.chat?igsh=MTV5MzZmMjByZjNpMQ=="
              target="blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram size={20} />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100014987502269&mibextid=2JQ9oc"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} />
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
