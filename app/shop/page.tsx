import img from "@/public/images/Rectangle1.png";
import Image from "next/image";
import Cards from "../components/card";
import picture from "@/public/images/decle.png";
import logo from "@/public/images/Meubel House_Logos-05.png";

export default function Shop() {
  return (
    <div className="">
      <div className="relative w-full h-[19.75rem]">
        <Image
          src={img}
          alt="heroImage"
          className="absolute
    "
        />
        <div className="absolute z-10 w-full h-[19.75rem] ">
          <h1 className=" text-gray-900 font-normal flex flex-col text-5xl mt-32 ml-[45%] w-[100%] h-[100%] ">
            <Image src={logo} alt="logo" className="ml-6" />
            Shop
          </h1>
        </div>
      </div>
      <div className="flex w-full h-16 bg-[#F9F1E7] -mt-4"></div>
      <section className="w-full flex justify-center mb-10">
        <div className=" grid grid-cols-4 grid-rows-2 gap-3 items-center w-[90%] mt-5">
          <Cards />
        </div>
      </section>

      <Image src={picture} alt="an image" className="w-full -mb-1" />
    </div>
  );
}
