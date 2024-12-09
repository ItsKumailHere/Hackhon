"use client";

// components/Navbar.tsx
import { User, Search, Heart, ShoppingCart, Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import img from "@/public/images/Meubel House_Logos-05.png";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image src={img} alt="logo" width={32} height={50} />
          <Link href="/" className="text-2xl font-bold text-black">
            Funiro
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-black focus:outline-none"
          >
            <Menu className="w-6 h-6" /> 
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-12 ">
          <Link
            href="/"
            className="text-sm font-semibold tracking-wider text-black hover:underline underline-offset-2 font decoration-primary"
          >
            Home
          </Link>
          <Link
            href="/shope"
            className="text-sm font-semibold tracking-wider text-black hover:underline underline-offset-2 decoration-primary"
          >
            Shop
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold tracking-wider text-black hover:underline underline-offset-2 decoration-primary"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold tracking-wider text-black hover:underline underline-offset-2 decoration-primary"
          >
            Contact
          </Link>
        </div>

        {/* Icons Section */}
        <div className="hidden md:flex items-center space-x-6">
          <User className="w-5 h-5 text-gray-950 hover:text-primary cursor-pointer" />
          <Search className="w-5 h-5 text-gray-950 hover:text-primary cursor-pointer" />
          <Heart className="w-5 h-5 text-gray-950 hover:text-primary cursor-pointer" />
          <Link href={"/cart"}>
          <ShoppingCart className="w-5 h-5 text-gray-950 hover:text-primary cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="space-y-4 px-4 py-4">
            <Link
              href="#"
              className="block text-sm font-medium text-gray-600 hover:text-black"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block text-sm font-medium text-gray-600 hover:text-black"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="block text-sm font-medium text-gray-600 hover:text-black"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="block text-sm font-medium text-gray-600 hover:text-black"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-6 pt-2">
              <User className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              <Search className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              <Heart className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
