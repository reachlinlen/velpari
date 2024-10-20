import { PLANT_CATEGORIES } from "@/lib/constants";
import type { PlantCategories } from "@/lib/types";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

const Filters = () => {
  return (
    <PopoverGroup className="hidden sm:flex sm:items-baseline sm:space-x-8">
      <Popover id="desktop-menu" className="relative inline-block text-left">
        <div>
          <PopoverButton className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </PopoverButton>
        </div>
        <PopoverPanel
          transition
          className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <form className="space-y-4">
            {PLANT_CATEGORIES.map((plant: PlantCategories, plantIdx) => (
              <div key={plant.key} className="flex items-center">
                <input
                  id={`filter-${plant.name}-${plantIdx}`}
                  name={`${plant.name}[]`}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor={`filter-${plant.name}-${plantIdx}`}
                  className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                >
                  {plant.name}
                </label>
              </div>
            ))}
          </form>
        </PopoverPanel>
      </Popover>
    </PopoverGroup>
  );
};

export { Filters };
