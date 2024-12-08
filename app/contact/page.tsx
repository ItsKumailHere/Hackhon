import picture from "@/public/images/decle.png";
import Image from "next/image";
import img from "@/public/images/Rectangle1.png";
import logo from "@/public/images/Meubel House_Logos-05.png";

export default function Contact() {
  return (
    <div>
      <div className="relative w-full h-[19.75rem]">
        <Image
          src={img}
          alt="heroImage"
          className="absolute
    "
        />
        <div className="absolute z-10 w-full h-[19.75rem] ">
          <h1 className=" text-gray-900 font-normal flex flex-col text-5xl mt-32 ml-[45%] w-[100%] h-[100%] ">
            <Image src={logo} alt="logo" />
            Shop
          </h1>
        </div>
      </div>
      <div className="mt-20 w-full ">
        <div className="w-full flex justify-center items-center text-center flex-col">
          <h2 className="text-gray-950 font-semibold text-3xl">
            Get In Touch With Us
          </h2>
          <p className="text-gray-400 font-light text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            ipsum cupiditate! Est dolor corporis neque quia sint officiis
            doloribus suscipit perspiciatis impedit aliquid.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="col-span-1 flex flex-col w-[100%] items-center justify-center">
            <div className="text-gray-900 flex flex-col gap-2">
              <h3 className="text-xl font-medium mb-7">Address</h3>
              <p className="text-lg font-normal text-gray-950">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                pariatur assumenda nisi.
              </p>
            </div>
            <div className="text-gray-900 flex flex-col gap-2">
              <h3 className="text-xl font-medium mb-7">Phone</h3>
              <p className="text-lg font-normal text-gray-950">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                pariatur assumenda nisi.
              </p>
            </div>
            <div className="text-gray-900 flex flex-col gap-2">
              <h3 className="text-xl font-medium mb-7">Working Time</h3>
              <p className="text-lg font-normal text-gray-950">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                pariatur assumenda nisi.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col w-[100%] items-center justify-center">
            <h4 className="text-gray-900 text-sm font-normal flex flex-col gap-5 mb-4">Your Name</h4>
            <input type="text" name="" id="" placeholder="Abc" className="focus:outline-none"/>
            <h4 className="text-gray-900 text-sm font-normal flex flex-col gap-5 mb-4">Email Address</h4>
            <input type="text" name="" id="" placeholder="Abc@def.com" className="focus:outline-none"/>
            <h4 className="text-gray-900 text-sm font-normal flex flex-col gap-5 mb-4">Subject</h4>
            <input type="text" name="" id="" placeholder="optional" className="focus:outline-none"/>
            <h4 className="text-gray-900 text-sm font-normal flex flex-col gap-5 mb-4">Message</h4>
            <input type="text" name="" id="" placeholder="Hey! I'd like to ask about" className="focus:outline-none"/>
            <button className="font-light text-white text-base py-2 px-6 rounded-md">Submit</button>
          </div>
        </div>
      </div>
      <Image src={picture} alt="an image" className="w-full -mb-5" />
    </div>
  );
}
