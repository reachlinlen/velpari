import { SOUTH_INDIA_TREES } from '@/lib/constants'
import type { PlantSpecies } from '@/lib/types'
import * as React from 'react'

const PlantList = () => {
  const [categoryList, ssetCategoryList] = React.useState<string[]>([])
  const [selectedPlants, setSelectedPlants] = React.useState<PlantSpecies[]>(
    SOUTH_INDIA_TREES.map((tree) => {
      if (categoryList.length > 0) {
        const filteredData = categoryList.filter((category) => tree.keywords.indexOf(category) != -1)
        if (filteredData) {
          return tree
        }
      }
      return tree
    })
  )
  return (
    <>
      <div>
        <div className='flex justify-end'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mt-8">
          {selectedPlants.map((plant) => (
            <a key={plant.id} href={plant.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                {plant.image}
                {/* <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                /> */}
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{plant.name} - {plant.tamil_name}</h3>
                {/* <p>{plant.description}</p> */}
              </div>
              <p className="mt-1 text-sm italic text-gray-500">{plant.description}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default PlantList