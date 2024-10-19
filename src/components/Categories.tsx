import { PLANT_CATEGORIES } from "@/lib/constants";
import type { PlantCategories } from "@/lib/types";

export default function Categories() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl md:py-8 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="font-semibold text-gray-500">Dravidian Region Plant Species</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Categories of Plants</p>
            <p className="mt-4 text-gray-500">
              <i>Dravidian</i> or <i>Peninsular India</i> or <i>South Indian</i> region holds a very diverse range of shrubs, trees
              that are native, able to tolerate drought, evergreen throughout the year and attracts
              very diverse range of birds, insects, small mammals for their pale to bright 
              coloured flowers, fruits, barks.
            </p>
            <p className="mt-4"><b><i>Climate change</i></b> is happenning as we already felt Scorching sun in the month
            of Septemeber, which is usually a breeze time in our region. Native trees holds the key to
            combat Climate change. Since most of the native trees are drought resistant and has tap root system,
            can withstand heavy winds due to cyclone. Moreover, these trees act as fodder and home to many 
            birds / mammals, as a result the biodiversity improves very drastically ultimately aiding the human beings.
            </p>
          </div>

          {/* <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 grid gap-y-4">
            {PLANT_CATEGORIES.map((feature: PlantCategories) => (
              <a href={`/plants/species?type=${feature.key}`} key={feature.key}>
                <button type="button"
                >
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
                </button>
              </a>
            ))}
          </div> */}
          <div className="mt-16">
          {PLANT_CATEGORIES.map((feature: PlantCategories, featureIdx) => (
            <a href={`/plants/species?type=${feature.key}`} key={feature.key}>
              <button type="button">
                <div
                  key={feature.key}
                  className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                >
                  <div className={`mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 ${featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9'}`}>
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                  </div>
                  <div className={`flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 
                                    ${featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1'}`}
                  >
                    <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                      {feature.image}
                    </div>
                  </div>
                </div>
              </button>
            </a>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}