import React from "react";
import Image from "next/image";
import img from "@/public/images/Rectangle 24.png";
import img2 from "@/public/images/Rectangle 25.png";
import { ArrowRight } from "lucide-react";

export default function Section() {
  return (
    <section className="bg-[#FCF8F3] grid grid-rows-1 grid-cols-3 w-full h-[41.875rem] py-2 top-10">
      <div className="h-full flex flex-col items-center justify-center gap-2  w-[120%] pl-20">
        <h2 className="text-4xl font-bold text-gray-800">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-md text-gray-500 font-light flex flex-wrap ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
          repellendus sunt! Ex architecto veniam
        </p>
        <div className="flex w-full justify-start">
          <button className="py-2 px-8 font-semibold text-center bg-primary text-white text-sm rounded-md mt-1">
            Explore More
          </button>
        </div>
      </div>
      <div className="flex h-full items-center">
        <div className="flex justify-self-center ml-24 w-[25.25rem] h-[36.375rem] ">
          <Image
            src={img}
            alt="a portrait"
            className="relative w-[25.25rem] h-[36.375rem]"
          />
          <div className="absolute bg-white opacity-80 h-[8.125rem] w-[13.5625rem] text-gray-800 text-2xl font-semibold ml-6 mt-[24rem]">
            <div className="flex items-center justify-center h-[100%] w-[100%]">
              Inner Peace
            </div>
          </div>
          <div className="absolute bg-primary w-[3rem] h-[3rem] ml-[13.5rem] mt-[30rem]">
            <div className="flex items-center justify-center w-[100%] h-[100%] text-white">
              <button className=" ">
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-4 mt-9">
        <Image src={img2} alt="a Living Room" />
      </div>
    </section>
  );
}
