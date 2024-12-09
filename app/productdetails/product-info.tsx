"use client";

import { Star } from "lucide-react";

interface ProductInfoProps {
  title: string;
  price: number;
  rating: number;
  description: string;
}

export function ProductInfo({ title, price, rating, description }: ProductInfoProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-medium text-[#3A3A3A]">{title}</h1>
      <p className="text-xl text-[#B88E2F]">Rs. {price.toLocaleString()}.00</p>
      <div className="flex items-center space-x-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#FFC700] text-[#FFC700]" />
        ))}
        <span className="text-sm text-gray-500 ml-2">({rating} Reviews)</span>
      </div>
      <p className="text-[#666666]">{description}</p>
    </div>
  );
}