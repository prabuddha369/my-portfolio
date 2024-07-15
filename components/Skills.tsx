import React from "react";
import Image from "next/image";
import { core, Backend, Frontend } from "@/constants";
import { GoCpu } from "react-icons/go";
import { FiMonitor } from "react-icons/fi";
import { AiOutlineCode } from "react-icons/ai";

export const Skills = () => {
  return (
    <div className="flex flex-col md:mx-32 mx-12 mt-10 ">
      <h1 className="text-white font-bold text-2xl mb-5 border-b border-b-[#eabf3e] md:border-none pb-2">
        My Skills
      </h1>
      <div className="flex md:flex-row flex-col justify-between gap-4 mx-4">
        <div className="flex flex-col p-5 px-10 bg-white/10 text-white/80 rounded-3xl items-center">
          <GoCpu
            size={50}
            className="text-[#eabf3e] p-3 bg-black rounded-full"
          />
          <h1 className="font-semibold text-xl mb-5">Core</h1>
            {core.map((core, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-center items-center gap-2 py-5 cursor-default"
                >
                  <Image
                    src={core.icon}
                    alt={core.title}
                    height={50}
                    width={50}
                    className="rounded-xl"
                  />
                  <span className="w-full flex flex-col items-start">
                    <div className="text-lg font-semibold">{core.title}</div>
                  </span>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col p-5 px-10 bg-white/10 text-white/80 rounded-3xl items-center">
          <FiMonitor
            size={50}
            className="text-[#eabf3e] p-3 bg-black rounded-xl"
          />
          <h1 className="font-semibold text-xl mb-5">Frontend</h1>
          {Frontend.map((frontend, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-center items-center gap-2 py-5 cursor-default"
              >
                <Image
                  src={frontend.icon}
                  alt={frontend.title}
                  height={50}
                  width={50}
                  className="rounded-xl"
                />
                <span className="w-full flex flex-col items-start">
                  <div className="text-lg font-semibold">{frontend.title}</div>
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col p-5 px-10 bg-white/10 text-white/80 rounded-3xl items-center">
          <AiOutlineCode
            size={50}
            className="text-[#eabf3e] p-3 bg-black rounded-full"
          />
          <h1 className="font-semibold text-xl mb-5">Backend</h1>
          {Backend.map((backend, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-center items-center gap-2 py-5 cursor-default"
              >
                <Image
                  src={backend.icon}
                  alt={backend.title}
                  height={50}
                  width={50}
                  className="rounded-xl"
                />
                <span className="w-full flex flex-col items-start">
                  <div className="text-lg font-semibold">{backend.title}</div>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
