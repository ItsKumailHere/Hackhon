"use client";

import { Facebook, Linkedin, Twitter } from "lucide-react";

interface ProductMetaProps {
  sku: string;
  category: string;
  tags: string[];
}

export function ProductMeta({ sku, category, tags }: ProductMetaProps) {
  return (
    <div className="space-y-2 pt-4 border-t border-[#D9D9D9]">
      <p className="text-[#9F9F9F]">
        <span className="font-medium text-[#3A3A3A]">SKU:</span> {sku}
      </p>
      <p className="text-[#9F9F9F]">
        <span className="font-medium text-[#3A3A3A]">Category:</span> {category}
      </p>
      <p className="text-[#9F9F9F]">
        <span className="font-medium text-[#3A3A3A]">Tags:</span> {tags.join(", ")}
      </p>
      <div className="flex items-center space-x-4">
        <span className="font-medium text-[#3A3A3A]">Share:</span>
        <div className="flex space-x-2">
          <Facebook className="w-5 h-5 text-[#B88E2F] cursor-pointer" />
          <Linkedin className="w-5 h-5 text-[#B88E2F] cursor-pointer" />
          <Twitter className="w-5 h-5 text-[#B88E2F] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}