import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { PLANT_CATEGORIES } from "@/lib/constants"
import type { PlantCategories } from "@/lib/types"
 
export function FilterShadCN() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
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
      </PopoverContent>
    </Popover>
  )
}