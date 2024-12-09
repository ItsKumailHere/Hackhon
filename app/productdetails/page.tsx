"use client";

import { ProductImages } from "./product-images";
import { ProductInfo } from "./product-info";
import { ProductOptions } from "./product-options"
import { ProductMeta } from "./product-meta"
import { ProductTabs } from "./product-tabs";

interface CartProps {
  title?: string;
  price?: number;
  rating?: number;
  description?: string;
  sku?: string;
  category?: string;
  tags?: string[];
}

export default function Cart({
  title = "Asgaard sofa",
  price = 250000.0,
  rating = 5,
  description = "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
  sku = "SS001",
  category = "Sofa",
  tags = ["Sofa", "Chair", "Home", "Shop"],
}: CartProps) {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 bg-white">
      <nav className="text-sm mb-8">
        <span className="text-gray-500">Home / Shop / </span>
        <span className="text-[#B88E2F]">{title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <ProductImages />
        <div className="space-y-6">
          <ProductInfo title={title} price={price} rating={rating} description={description} />
          <ProductOptions />
          <ProductMeta sku={sku} category={category} tags={tags} />
        </div>
      </div>

      <div className="mt-12">
        <ProductTabs rating={rating} />
      </div>
    </div>
  );
}