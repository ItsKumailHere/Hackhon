"use client";

import { Grid, List, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";

export default function Shop() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-center py-12 bg-[#F9F1E7]  mb-8">
        {/* FIX IMAGES ISSUE */}
        <h1 className="text-3xl font-medium mb-2">Shop</h1>
        <p className="text-sm">Home › Shop</p>
      </div>

      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
          <div className="flex gap-2">
            <Grid className="w-5 h-5" />
            <List className="w-5 h-5" />
          </div>
          <p className="text-sm text-gray-500">Showing 1–8 of 12 results</p>
        </div>
        <div className="flex items-center gap-4">
          <Select>
            <option>Default</option>
          </Select>
          <Select>
            <option>16</option>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className=" relative">
            <div className="aspect-square bg-[#F9F1E7] mb-4 relative">
              {i % 2 === 0 && (
                <span className="absolute top-6 right-6 bg-red-500 text-white text-xs px-1 py-1 rounded-full">
                  -30%
                </span>
              )}
              {i === 3 && (
                <span className="absolute top-6 right-6 bg-green-500 text-white text-xs px-1 py-1 rounded-full">
                  New
                </span>
              )}
              <div className="hidden group-hover:flex gap-2 absolute bottom-6 left-1/2 -translate-x-1/2">
                <Button size="sm" variant="ghost" className="bg-white">Share</Button>
                <Button size="sm" variant="ghost" className="bg-white">Compare</Button>
                <Button size="sm" variant="ghost" className="bg-white">Like</Button>
              </div>
            </div>
            <h3 className="font-medium">Syltherine</h3>
            <p className="text-sm text-gray-500">Stylish cafe chair</p>
            <div className="flex gap-2 items-center mt-2">
              <span className="font-medium">Rp 2.500.000</span>
              <span className="text-gray-400 line-through text-sm">Rp 3.500.000</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}