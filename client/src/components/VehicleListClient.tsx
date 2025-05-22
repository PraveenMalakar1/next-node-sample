"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCarContext, Car } from "@/context/CarContext";

type Props = {
  initialCars: Car[];
};

export default function VehicleListClient({ initialCars }: Props) {
  const { state, dispatch } = useCarContext();

  // Initialize context state only once with initialCars passed from server
  useEffect(() => {
    if (state.cars.length === 0) {
      dispatch({ type: "SET_CARS", payload: initialCars });
    }
  }, [initialCars, dispatch, state.cars.length]);

  return (
    <main>
      <h1>Used Vehicles In Stock</h1>
      <ul>
        {state.cars.map((car) => (
          <li key={car.id}>
            <Link href={`/search/${car.id}`}>
              {`${car.make} ${car.model} (${car.vrm}) - £${car.activeAdvertPriceAmount}`}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
