"use client";

import Image from "next/image";
import { useState } from "react";

interface FilterCategoryProps {
  title: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

function FilterCategory({
  title,
  isOpen = false,
  onToggle,
}: FilterCategoryProps) {
  return (
    <div className="border-b border-gray-200">
      <div
        className="flex justify-between items-center py-4 cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="text-base font-medium text-gray-900">{title}</h3>
        <Image
          src={"/icons/down-arrow.svg"}
          alt="click"
          width={20}
          height={20}
        />
      </div>
      {isOpen && (
        <div className="pb-4">
          {/* Filter content would go here */}
          <p className="text-sm text-gray-500">Filter options for {title}</p>
        </div>
      )}
    </div>
  );
}

export default function FilterSidebar() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const filters = [
    "Location",
    "Manufacturer",
    "Model",
    "Trim",
    "Price",
    "Year",
    "Gearbox",
    "Fuel type",
    "Body type",
    "Engine size",
    "Doors",
    "Colour",
    "Mileage",
    "ULEZ Compliance",
  ];

  return (
    <div className="space-y-4">
      {/* Sort Section */}
      <div className="bg-white rounded-full shadow-sm p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src={"/icons/sort-icon.svg"}
              alt="sort"
              width={20}
              height={20}
            />
            <span className="text-blue-600 font-medium">Sort</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-800">Relevance</span>
            <Image
              src={"/icons/down-arrow.svg"}
              alt="click"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>

      {/* Filters Header */}
      <div className="bg-white rounded-full shadow-sm p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src={"/icons/filter-icon.svg"}
              alt="Filter"
              width={20}
              height={20}
            />
            <span className="text-blue-600 font-medium">Filters</span>
          </div>
          <button className="flex items-center gap-1 text-red-500 bg-red-50 px-3 py-1 rounded-full text-sm">
            Clear all (3)
            <div className="bg-red-500 rounded-full p-0.5">
              <Image
                src={"/icons/red-circle-cross.svg"}
                alt="cross"
                width={20}
                height={20}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Filter Categories */}
      <div className="bg-white rounded-lg">
        {filters.map((filter) => (
          <FilterCategory
            key={filter}
            title={filter}
            isOpen={openCategory === filter}
            onToggle={() => toggleCategory(filter)}
          />
        ))}
      </div>
    </div>
  );
}
