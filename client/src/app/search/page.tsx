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
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">1</span>
                <span className="text-gray-500">Sort</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Relevance</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Clear All
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center gap-1">
                Diesel
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </span>
            </div>
            <CarListings />
            {/* <Pagination totalPages={25} currentPage={1} />
            <FinanceRepresentative /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
