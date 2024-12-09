"use client";

export function ProductImages() {
  return (
    <div className="space-y-4">
      <div className="aspect-square bg-[#F9F1E7] rounded-lg"></div>
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="aspect-square bg-[#F9F1E7] rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
          ></div>
        ))}
      </div>
    </div>
  );
}