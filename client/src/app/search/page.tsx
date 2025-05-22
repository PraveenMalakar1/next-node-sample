import CarListings from "@/components/FindACar/CarListPage";
import CarListPage from "@/components/FindACar/CarListPage";
import FilterSidebar from "@/components/FindACar/FilterSidebar";
import VehicleListClient from "@/components/VehicleListClient";
import { Car } from "@/context/CarContext";

export default async function SearchPage() {
  //   const res = await fetch(
  //     process.env.NEXT_PUBLIC_API_URL + "/api/instock-cars"
  //   );
  //   const data = await res.json();
  //   const vehicles: Car[] = data.data.vehicles;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4">
            <FilterSidebar />
          </div>
          <div className="w-full md:w-3/4">
            <CarListings />
            {/* <Pagination totalPages={25} currentPage={1} />
            <FinanceRepresentative /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
