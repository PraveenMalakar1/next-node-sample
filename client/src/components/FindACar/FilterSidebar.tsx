import type React from "react";

interface FilterCategoryProps {
  title: string;
  children?: React.ReactNode;
}

function FilterCategory({ title, children }: FilterCategoryProps) {
  return (
    <div className="border-b pb-3">
      <div className="flex justify-between items-center py-2 cursor-pointer">
        <h3 className="text-sm font-medium">{title}</h3>▼
      </div>
      {children}
    </div>
  );
}

export default function FilterSidebar() {
  const filters = [
    "Location",
    "Manufacturer",
    "Model",
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
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold">Filters</h2>
      </div>
      <div className="space-y-1">
        {filters.map((filter) => (
          <FilterCategory key={filter} title={filter} />
        ))}
      </div>
    </div>
  );
}
