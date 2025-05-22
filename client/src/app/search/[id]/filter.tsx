"use client";

import { useState } from "react";

const FilterComponent = () => {
  const [name, setName] = useState(true);
  return (
    <div className="mt-5">
      <p>
        It is the <b>{name ? "mahesh" : "praveen"}</b> component
      </p>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setName(!name)}
      >
        Click Me!
      </button>
    </div>
  );
};

export default FilterComponent;
