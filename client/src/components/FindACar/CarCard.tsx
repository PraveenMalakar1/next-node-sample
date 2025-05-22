import ImageSlider from "@/components/common-components/image-slider";
import { Car } from "@/context/CarContext";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-2/5 h-64">
          <div className="absolute top-2 right-2 z-10">^</div>
          <ImageSlider images={car.images} alt={car.title} />
          <div className="absolute bottom-0 right-0 p-2 z-10">
            <div className="text-xs text-white bg-black/50 px-2 py-1 rounded-full">
              {car.views} views
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 p-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mb-2">
                {car.condition}
              </div>
              <h2 className="text-lg font-bold text-gray-800">{car.title}</h2>
              <p className="text-sm text-gray-500">{car.subtitle}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <div className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
              {car.fuelType}
            </div>
            <div className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
              {car.transmission}
            </div>
            <div className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
              {car.mileage}
            </div>
            <div className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
              {car.engineSize}
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="text-xs text-gray-500">Per month</p>
              <p className="text-xl font-bold text-blue-600">
                £ {car.monthlyPrice}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">View @ {car.viewPrice}</p>
              <p className="text-xl font-bold text-red-600">
                £ {car.totalPrice}
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-sm">
              Instant Credit Check
            </button>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm">
              Reserve for £250
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
