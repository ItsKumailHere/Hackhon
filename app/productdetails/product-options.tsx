"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ProductOptions() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("purple");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["S", "M", "XL"];
  const colors = ["purple", "black", "brown"];

  return (
    <div className="space-y-6">
      <div>
        <p className="font-medium mb-2 text-[#3A3A3A]">Size</p>
        <div className="flex space-x-4">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={cn(
                "w-8 h-8 rounded border text-[#666666] border-[#D9D9D9] flex items-center justify-center",
                selectedSize === size && "border-[#B88E2F] text-[#B88E2F]"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="font-medium mb-2 text-[#3A3A3A]">Color</p>
        <div className="flex space-x-4">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={cn(
                "w-8 h-8 rounded-full",
                color === "purple" && "bg-purple-500",
                color === "black" && "bg-black",
                color === "brown" && "bg-[#B88E2F]",
                selectedColor === color && "ring-2 ring-offset-2 ring-[#B88E2F]"
              )}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-[#9F9F9F] rounded">
          <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="px-3 py-1 border-r border-[#9F9F9F] text-[#B88E2F]"
          >
            -
          </button>
          <span className="px-4 text-[#3A3A3A]">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-1 border-l border-[#9F9F9F] text-[#B88E2F]"
          >
            +
          </button>
        </div>
        <Button className="bg-[#B88E2F] hover:bg-[#9F7B2A] text-white rounded px-6 py-2">
          Add To Cart
        </Button>
        <Button
          variant="outline"
          className="border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white"
        >
          + Compare
        </Button>
      </div>
    </div>
  );
}