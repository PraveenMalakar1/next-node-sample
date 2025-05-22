"use client";

import { useState } from "react";

export default function HeroForm() {
  const [activeTab, setActiveTab] = useState<"buy" | "exchange">("buy");
  const [priceType, setPriceType] = useState<"cash" | "finance">("cash");

  return (
    <div className="w-full max-w-sm mx-auto rounded-[20px] shadow-lg overflow-hidden bg-white">
      {/* Tabs */}
      <div className="relative flex rounded-t-[20px] overflow-hidden bg-transparent">
        {/* Buy Tab */}
        <button
          onClick={() => setActiveTab("buy")}
          className={`w-1/2 py-4 text-sm font-semibold text-center relative z-10 transition-all duration-300
      ${
        activeTab === "buy"
          ? "bg-white text-blue-600"
          : "bg-gray-100 text-gray-400"
      }
      rounded-t-[20px]`}
        >
          Buy
        </button>

        {/* Part Exchange Tab */}
        <button
          onClick={() => setActiveTab("exchange")}
          className={`w-1/2 py-4 text-sm font-semibold text-center relative z-10 transition-all duration-300
      ${
        activeTab === "exchange"
          ? "bg-white text-blue-600"
          : "bg-gray-100 text-gray-400"
      }
      rounded-t-[20px]`}
        >
          Part Exchange
        </button>
      </div>

      {/* Content based on active tab */}
      <div className="bg-white px-6 py-6">
        {activeTab === "buy" && (
          <>
            <h2 className="text-center text-base font-semibold text-gray-900 mb-4">
              Find your next car
            </h2>

            {/* Dropdowns */}
            <select className="w-full mb-3 border border-gray-300 text-sm rounded-xl px-4 py-3 focus:outline-none">
              <option>Select make</option>
            </select>
            <select className="w-full mb-3 border border-gray-300 text-sm rounded-xl px-4 py-3 focus:outline-none">
              <option>Model</option>
            </select>

            {/* Cash/Finance Switch */}
            <div className="flex bg-gray-100 rounded-full p-1 mb-3">
              <button
                onClick={() => setPriceType("cash")}
                className={`flex-1 py-2 text-sm font-semibold rounded-full transition ${
                  priceType === "cash"
                    ? "bg-blue-100 text-black"
                    : "text-gray-500"
                }`}
              >
                Cash price
              </button>
              <button
                onClick={() => setPriceType("finance")}
                className={`flex-1 py-2 text-sm font-semibold rounded-full transition ${
                  priceType === "finance"
                    ? "bg-blue-100 text-black"
                    : "text-gray-500"
                }`}
              >
                Finance
              </button>
            </div>

            {/* Max Price Dropdown */}
            <select className="w-full mb-5 border border-gray-300 text-sm rounded-xl px-4 py-3 focus:outline-none">
              <option>Max cash price</option>
            </select>

            {/* Search Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3 rounded-xl transition">
              Search over 938 cars
            </button>

            {/* Lifestyle Search Link */}
            <p className="text-center text-xs text-gray-400 mt-4">
              Not sure where to start? Try our{" "}
              <a href="#" className="text-gray-700 font-medium underline">
                Lifestyle Search
              </a>
            </p>
          </>
        )}

        {activeTab === "exchange" && (
          <>
            <h2 className="text-center text-base font-semibold text-gray-900 mb-4">
              Find my vehicle
            </h2>

            <input
              type="text"
              placeholder="Car registration"
              className="w-full mb-3 border border-gray-300 text-sm rounded-xl px-4 py-3 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Mileage"
              className="w-full mb-5 border border-gray-300 text-sm rounded-xl px-4 py-3 focus:outline-none"
            />

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3 rounded-xl transition">
              Find my vehicle
            </button>
          </>
        )}
      </div>
    </div>
  );
}
