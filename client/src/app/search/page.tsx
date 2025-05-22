import VehicleListClient from "@/components/VehicleListClient";
import { Car } from "@/context/CarContext";

export default async function SearchPage() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/instock-cars"
  );
  const data = await res.json();
  const vehicles: Car[] = data.data.vehicles;

  return <VehicleListClient initialCars={vehicles} />;
}
