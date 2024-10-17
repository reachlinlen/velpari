import { PLANT_CATEGORIES } from "@/lib/constants";
import type { PlantCategories } from "@/lib/types";

export default function Categories() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl md:py-8 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="font-semibold text-gray-500">TDEF Plant Species</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Categories of Plants</p>
            <p className="mt-4 text-gray-500">
              The Drawstring Canister comes with multiple strap and handle options to adapt throughout your day.
              Shoulder sling it, backpack it, or handy carry it.
            </p>
          </div>

          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 grid gap-y-4">
            {PLANT_CATEGORIES.map((feature: PlantCategories) => (
              <a href="/plants/fistula" key={feature.key}>
                <div
                  className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                >
                    <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                      <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                      <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                    </div>
                    <div className="flex-auto lg:col-span-7 xl:col-span-8">
                      <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                        {feature.image}
                      </div>
                    </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}