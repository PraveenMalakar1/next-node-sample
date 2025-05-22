"use client";

import { Car, useCarContext } from "@/context/CarContext";
import CarCard from "./CarCard";

export default function CarListings() {
  const { state, dispatch } = useCarContext();

  return (
    <div className="space-y-4">
      {state.cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
