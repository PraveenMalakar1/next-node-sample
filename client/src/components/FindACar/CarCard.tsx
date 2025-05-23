import ImageSlider from "@/components/common-components/image-slider";
import { Car } from "@/context/CarContext";
import Image from "next/image";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-2/5">
          <div className="absolute top-2 right-2 z-100">
            <Image
              src={"/icons/heart-icon.svg"}
              alt="Add to Compare"
              width={20}
              height={20}
            />
          </div>
          <ImageSlider images={car.images} alt={car.title} />
          <div className="absolute bottom-0 right-0 p-2 z-100">
            <div className="text-xs text-white bg-black/50 px-2 py-1 rounded-full">
              {car.views} views
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 px-2">
          <div className="flex justify-between items-start">
            <div>
              <div className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mb-1">
                {car.condition}
              </div>
              <h2 className="text-lg font-bold text-gray-800">{car.title}</h2>
              <p className="text-sm text-gray-500">{car.subtitle}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-1">
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

          <div className="flex justify-between items-center mt-1 gap-2">
            <div className="bg-blue-50 rounded-xl p-2 text-center flex-1">
              <p className="font-normal text-base tracking-normal text-[#6C757D]">
                Per month
              </p>
              <p className="font-bold text-2xl tracking-normal text-[#1B55EC]">
                £ {car.monthlyPrice}
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-2 text-center flex-1">
              <p className="font-normal text-base tracking-normal text-[#6C757D]">
                View @ {car.viewPrice}
              </p>
              <p className="font-bold text-2xl tracking-normal text-[#E65848]">
                £ {car.totalPrice}
              </p>
            </div>
          </div>

          <div className="flex items-center mt-2 gap-2 mb-1">
            <div className="flex items-center gap-4 rounded-xl p-1 flex-1 border border-gray-300 shadow-sm bg-[#F0F2F4] justify-between">
              <div>
                <p className="font-semibold text-gray-900 text-[12px]">
                  Instant Credit Check
                </p>
                <p className="text-gray-500 text-[7px]">
                  With no impact on your credit rating
                </p>
              </div>
              <button className="bg-green-500 text-white text-[12px] font-semibold px-2 py-2 rounded-xl flex items-center">
                Check now
                <Image
                  src={"/findacar/check-credit-symbol.svg"}
                  alt="arrow"
                  width={20}
                  height={20}
                  className="ml-[2px]"
                />
              </button>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-[16px] font-semibold rounded-xl p-[9px] text-center flex-1">
              Reserve for £250
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
