import Image from "next/image";
import hero from "@/public/images/heroSectionImage.png";
import image1 from "@/public/images/Rectangle 45.png";
import image2 from "@/public/images/Image-living room.png";
import image3 from "@/public/images/image 101.png";
import Cards from "./components/card";
import Section from "./components/afterShowMore";

export default function Home() {
  const imagesObj = [
    {
      src: image1,
      alt: "Dining", 
      name: "Dining",
    },
    {
      src: image2,
      alt: "Living",  
      name: "Living",
    },
    {
      src: image3,
      alt: "Bedroom",
      name: "Bedroom",
    },
  ];
  return (
    <main className="flex flex-col">
      <div className="relative h-[44.8rem]">
        <Image
          src={hero}
          alt="luxury lounge"
          className="min-w-full h-[44.8rem] absolute"
        />
        <div className="bg-[#ffe9c1] w-[40.25rem] h-[27.75rem] absolute z-10 ml-[40rem] mt-[8.75rem] 2xl:ml-[58.5] flex justify-center items-center rounded-lg">
          <div className="w-[35.06rem] h-[21.5rem] flex flex-col gap-3">
            <p>New Arrival</p>
            <h1 className="text-primary text-5xl font-bold ">
              Discover Our New Collection
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium provident quas sapiente
            </p>
            <button className="bg-primary p-5 mt-3 text-white rounded-md font-semibold w-[13.875rem]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center flex-col mt-16">
        <div className="text-center font-bold tracking-wide text-2xl flex flex-col"> 
          Browse The Range
          <p className="text-base font-normal text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-full flex justify-center items-center mt-10">
          <div className="grid grid-cols-3 grid-rows-1 gap-3 w-10/12">
            {/* <div> */}
            {imagesObj.map((item, index: number) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-2 justify-center items-center col-span-1 row-span-1 cursor-pointer "
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className="rounded-xl h-[23.8125rem] w-[30rem]"
                  />
                  <button className="bg-transparent font-semibold text-base justify-self-center hover:text-primary">
                    {item.name}
                  </button>
                </div>
              );
            })}
            {/* <Image />
            <button></button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center mt-16 text-center gap-4 items-center">
        <h2 className="font-bold tracking-wide text-3xl text-center w-full">
          Our Products
        </h2>
        <div className="w-10/12 grid grid-cols-4 grid-rows-2 gap-3 items-center bg-white mt-3">
          <Cards />
        </div>
      </div>
      <div className="w-full flex mt-6 justify-center">
        <button className="text-primary border-solid border-2 border-primary py-2 px-12 mb-3 font-semibold text-lg hover:text-white hover:bg-primary">
          Show More
        </button>
      </div>
      <Section />
    </main>
  );
}
