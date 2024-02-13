import React from "react";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export const Contact = () => {
  return (
    <footer className="bg-white/10 p-10 md:px-32 text-white/80">
      <h1 className="text-4xl font-semibold text-[#eabf3e] mb-10 md:mb-5 md:text-3xl" id="connect">
        Let&apos;s Connect
      </h1>
      <div className="flex flex-row justify-between items-center">
        <p className="hidden md:block">
        Prabuddha Chatterjee is a software engineer<br/>with expertise in both Android development and<br/>Full-stack web development.
        </p>
        <div className="flex flex-col gap-2 items-start ms-2">
          <div className="flex flex-row justify-center items-center">
          <Link href="mailto:chatterjee.prabuddha.work@gmail.com" target="blank" rel="noopener noreferrer" className="text-white/50">
            <MdAlternateEmail
              size={40}
              className="bg-black text-[#eabf3e] p-2 rounded-lg me-5"
              />
              </Link>
            <div>
              <p>Email</p>
              <Link href="mailto:chatterjee.prabuddha.work@gmail.com" target="blank" rel="noopener noreferrer" className="text-white/50">
                chatterjee.prabuddha.work@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
          <Link href="https://www.google.com/maps/d/u/0/viewer?mid=1VFzjeArnHwIghbeiCRbBMQTOquk&hl=en&ll=22.570421360426508%2C88.36496953036234&z=12" target="blank" rel="noopener noreferrer" className="text-white/50">
            <FaLocationDot
              size={40}
              className="bg-black text-[#eabf3e] p-2 rounded-lg me-5"
              />
              </Link>
            <div>
              <p>Location</p>
              <Link href="https://www.google.com/maps/d/u/0/viewer?mid=1VFzjeArnHwIghbeiCRbBMQTOquk&hl=en&ll=22.570421360426508%2C88.36496953036234&z=12" target="blank" rel="noopener noreferrer" className="text-white/50">
                Kolkata, West Bengal, India
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-5 pt-10 flex flex-row text-[#eabf3e] md:justify-start justify-center items-center gap-4 mt-5 md:mt-0">
        <Link href="https://www.linkedin.com/in/prabuddha-chatterjee-20b197249/" target="blank" rel="noopener noreferrer"><IoLogoLinkedin size={32} /></Link>
        <Link href="https://github.com/prabuddha369" target="blank" rel="noopener noreferrer"><IoLogoGithub size={32} /></Link>
        <Link href="https://www.instagram.com/prabuddha.chat?igsh=MTV5MzZmMjByZjNpMQ==" target="blank" rel="noopener noreferrer"><IoLogoInstagram size={32} /></Link>
        <Link href="https://www.facebook.com/profile.php?id=100014987502269&mibextid=2JQ9oc" target="blank" rel="noopener noreferrer"><FaFacebook size={30} /></Link>
      </div>
      <p className="w-full text-center mt-5 pt-2 border-t border-t-[#eabf3e]">
        Made with ❤️ by Prabuddha
      </p>
    </footer>
  );
};
