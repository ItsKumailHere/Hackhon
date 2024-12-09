"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cart() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-center py-12 bg-[#F9F1E7] mb-8">
        <h1 className="text-3xl font-medium mb-2">Cart</h1>
        <p className="text-sm">Home › Cart</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="grid grid-cols-4 gap-4 p-4 bg-[#F9F1E7] text-sm font-medium">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          <div className="grid grid-cols-4 gap-4 p-4 border-b items-center">
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-[#F9F1E7]"></div>
              <div>
                <p className="font-medium">Asgaard sofa</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 p-0 h-auto"
                >
                  <Trash2 className="w-4 h-4 mr-2" /> Remove
                </Button>
              </div>
            </div>
            <div>Rs. 250,000.00</div>
            <div className="flex border rounded-md w-24">
              <button className="px-3 py-1">-</button>
              <span className="px-3 py-1 border-x">1</span>
              <button className="px-3 py-1">+</button>
            </div>
            <div>Rs. 250,000.00</div>
          </div>
        </div>

        <div className="bg-[#F9F1E7] p-6 h-fit">
          <h2 className="text-xl font-medium mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mb-6">
            <span>Total</span>
            <span className="text-[#B88E2F] font-medium">Rs. 250,000.00</span>
          </div>
          <Link href={"/checkout"}>
            <Button className="w-full bg-[#B88E2F] hover:bg-[#A67E2A] text-white">
              Check Out
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
