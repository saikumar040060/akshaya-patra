"use client";

import { useState } from "react";
import MenuSidebar from "@/components/menu/MenuSidebar";
import MenuSearch from "@/components/menu/MenuSearch";
import MenuCard from "@/components/menu/MenuCard";

import { soupItems } from "@/components/menu/data/soupItems";
import { vegAppetizers } from "@/components/menu/data/vegAppetizers";
import { nonVegAppetizers } from "@/components/menu/data/nonVegAppetizers";
import { tandooriVeg } from "@/components/menu/data/tandooriVeg";
import { tandooriNonVeg } from "@/components/menu/data/tandooriNonVeg";
import { indoChineseVeg } from "@/components/menu/data/indoChineseVeg";
import { indoChineseNonVeg } from "@/components/menu/data/indoChineseNonVeg";
import { vegCurries } from "@/components/menu/data/vegCurries";
import { nonVegCurries } from "@/components/menu/data/nonVegCurries";
import { vegBiryanis } from "@/components/menu/data/vegBiryanis";
import { nonVegBiryanis } from "@/components/menu/data/nonVegBiryanis";
import { breads } from "@/components/menu/data/breads";
import { specials } from "@/components/menu/data/specials";
import { dosa } from "@/components/menu/data/dosa";
import { drinksDesserts } from "@/components/menu/data/drinksDesserts";
import { thali } from "@/components/menu/data/thali";
import { kidsMenu } from "@/components/menu/data/kidsMenu";
import { catering } from "@/components/menu/data/catering";

const categories = [
  "Soups",
  "Appetizers - Veg",
  "Appetizers - Non Veg",
  "Tandoori - Veg",
  "Tandoori - Non Veg",
  "Indo Chinese - Veg",
  "Indo Chinese - Non Veg",
  "Veg Curries",
  "Non-Veg Curries",
  "Veg Biryanis",
  "Non-Veg Biryanis",
  "Breads",
  "Specials",
  "Dosa",
  "Drinks & Desserts",
  "Thali",
  "Kids Menu",
  "Catering"
];

const allItems = [
  ...soupItems,
  ...vegAppetizers,
  ...nonVegAppetizers,
  ...tandooriVeg,
  ...tandooriNonVeg,
  ...indoChineseVeg,
  ...indoChineseNonVeg,
  ...vegCurries,
  ...nonVegCurries,
  ...vegBiryanis,
  ...nonVegBiryanis,
  ...breads,
  ...specials,
  ...dosa,
  ...drinksDesserts,
  ...thali,
  ...kidsMenu,
  ...catering
];

export default function MenuPage() {
  const [selectedCat, setSelectedCat] = useState("Soups");
  const [search, setSearch] = useState("");

  const filteredItems = allItems.filter((item) => {
    return (
      item.category.toLowerCase() === selectedCat.toLowerCase() &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <main className="min-h-screen px-4 py-10 bg-[#fff8f0]">
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-8">
        Our Menu
      </h1>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-6">
        <MenuSidebar
          categories={categories}
          selected={selectedCat}
          onSelect={setSelectedCat}
        />

        <div className="flex-1">
          <MenuSearch
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClear={() => setSearch("")}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredItems.length ? (
              filteredItems.map((item, idx) => (
                <MenuCard key={idx} name={item.name} price={item.price} />
              ))
            ) : (
              <p className="text-center text-gray-500">No items found.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
