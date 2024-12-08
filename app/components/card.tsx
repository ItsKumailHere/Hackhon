"use client";

import Image from "next/image";
import { productData } from "./data";

export default function Cards() { 
  return (
    <>
      {productData.map((item, x) => {
        return (
          <>
            <div className="w-[17rem] h-[27.875rem] flex flex-col justify-start items-start p-0 rounded-xl bg-[#F4F5F7] cursor-pointer" key={x}>
              <Image
                src={item.src}
                alt={item.alt}
                // className="w-[17.8125rem] h-[19.8125rem] rounded-md"
                className="w-[17rem] h-[19.8125rem] rounded-ss-xl "
              />
              <div className="flex items-start flex-col justify-start p-3">
                <h4 className="text-gray-900 font-semibold text-lg">Product</h4>
                <p className="text-gray-600 text-base font-light">
                  Lorem, ipsum dolor.
                </p>
                <p className="text-gray-950 font-bold">{item.rp}</p>
              </div>
            </div>
          </>
        );
      })}
    </> 
  );
}
