import Image from "next/image";

const carShapes = [
  {
    name: "SUV",
    count: 364,
    image: "/homepage/suv.svg",
  },
  {
    name: "Hatchback",
    count: 340,
    image: "/homepage/hatchback.svg",
  },
  {
    name: "Saloon",
    count: 83,
    image: "/homepage/saloon.svg",
  },
  {
    name: "Convertible",
    count: 43,
    image: "/homepage/convertible.svg",
  },
  {
    name: "Coupe",
    count: 38,
    image: "/homepage/coupe.svg",
  },
  {
    name: "Estate",
    count: 37,
    image: "/homepage/estate.svg",
  },
];

export default function CarShapeGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-neutral-900">
        Shop by shape
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {carShapes.map((car) => (
          <div
            key={car.name}
            className="bg-white shadow-sm rounded-xl p-4 flex flex-col items-center hover:shadow-md transition"
          >
            <Image
              src={car.image}
              alt={car.name}
              width={150}
              height={80}
              className="object-contain"
            />
            <h3 className="text-lg font-medium mt-2">{car.name}</h3>
            <a
              href="#"
              className="font-bold text-[12px] leading-[100%] flex items-center text-center tracking-[-0.05em] underline text-[#1B55EC]"
            >
              Shop {car.count} cars
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
