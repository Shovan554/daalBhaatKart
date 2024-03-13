import React from "react";

function FeaturedCategories() {
  return (
    <div className="page-width">
      <div className="mb-2 mt-3">
        <h2 className="text-center">FEATURED CATEGORIES</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="relative col-span-1 row-span-2 men-cat">
          <img src="/fresh.png" alt="Shop Fresh" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="/fresh">
            SHOP FRESH
          </a>
        </div>
        
        <div className="relative col-span-1 row-span-2 kid-cat">
          <img src="/spices.png" alt="Shop Spices" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="/Spices-Masalas">
            SHOP SPICES
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content",
  sortOrder: 5,
};
