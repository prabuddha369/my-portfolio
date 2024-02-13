import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/constants";

export const Projects = () => {
  return (
    <div className="flex flex-col md:items-center mt-28">
      <h1 className="w-[80%] border-b border-b-[#eabf3e] md:border-none mx-10 ps-2 pb-2 md:pb-0 text-white font-bold text-2xl" id="projects">My Projects</h1>
      <div className="flex md:flex-wrap justify-center md:flex-row flex-col">
        {projects.map((project, index) => {
          return (
              <div
                key={index}
                className="md:w-[45%] px-16 flex flex-col justify-center items-center gap-2 py-10 cursor-default"
              >
                <Image
                  src={project.icon}
                  alt={project.title}
                  height={200}
                  width={400}
                  className="rounded-xl"
              />
              <span className="w-full flex flex-col items-start">
                <div className="text-lg font-semibold">{project.title}</div>
                <div className="flex flex-row"><div className="text-sm text-white/70 me-5">{project.description}</div><Link className="pointer-cursor" href={project.link} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt className="text-white/60" size={20}/></Link></div>
             </span>
              </div>
          );
        })}
      </div>
    </div>
  );
};
