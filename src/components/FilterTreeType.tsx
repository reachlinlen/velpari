import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PLANT_CATEGORIES } from "@/lib/constants";
import type { PlantCategories } from "@/lib/types";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

export function FilterTreeType({
  categoryList,
  handleCategoryChange,
}: {
  categoryList: String[];
  handleCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <AdjustmentsHorizontalIcon className="w-5 h-5" />
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <form className="space-y-4">
          {PLANT_CATEGORIES.map((plant: PlantCategories) => (
            <div key={plant.key} className="flex items-center">
              <input
                id={`${plant.id}`}
                name={`${plant.name}[]`}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                onChange={handleCategoryChange}
                checked={
                  categoryList.find((category) => category == plant.id)
                    ? true
                    : false
                }
              />
              <label
                htmlFor={`${plant.id}`}
                className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
              >
                {plant.name}
              </label>
            </div>
          ))}
        </form>
      </PopoverContent>
    </Popover>
  );
}
