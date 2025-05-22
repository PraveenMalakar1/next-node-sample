"use client";

import { useEffect } from "react";
import { useCarContext, Car } from "@/context/CarContext";

type Props = {
  initialCar: Car | null;
};

export default function VehicleDetailClient({ initialCar }: Props) {
  const { state, dispatch } = useCarContext();

  useEffect(() => {
    if (initialCar) {
      dispatch({
        type: "SET_SELECTED_CAR_ID",
        payload: initialCar.id.toString(),
      });
      // Optionally set cars array if empty
      if (state.cars.length === 0) {
        dispatch({ type: "SET_CARS", payload: [initialCar] });
      }
    }
  }, [initialCar, dispatch, state.cars.length]);

  if (!initialCar) {
    return <p>Car not found</p>;
  }

  const car =
    state.cars.find((c) => c.id.toString() === initialCar.id.toString()) ??
    initialCar;

  return (
    <main>
      <h1>{`${car.make} ${car.model} ${car.variant ?? ""}`}</h1>
      <ul>
        <li>
          <strong>VRM:</strong> {car.vrm}
        </li>
        <li>
          <strong>Colour:</strong> {car.colour}
        </li>
        <li>
          <strong>Mileage:</strong> {car.mileage} miles
        </li>
        <li>
          <strong>Location:</strong> {car.location}
        </li>
        <li>
          <strong>Status:</strong> {car.status}
        </li>
        <li>
          <strong>Price:</strong> £{car.activeAdvertPriceAmount}
        </li>
      </ul>
    </main>
  );
}
