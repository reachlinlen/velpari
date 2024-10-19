import { PLANT_CATEGORIES, SOUTH_INDIA_TREES } from '@/lib/constants'
import type { PlantCategories, PlantSpecies } from '@/lib/types'
import { Dialog, DialogBackdrop, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import * as React from 'react'
import { Filters } from './Filters'
import { FilterShadCN } from './FilterShadCN'

const PlantList = () => {
  const [open, setOpen] = React.useState(false)
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
        <div className='flex'>
          {/* <FilterShadCN /> */}
          {/* <Dialog open={open} onClose={setOpen} className="relative z-40 sm:hidden">
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
            />
            <div className="fixed inset-0 z-40 flex">
              <DialogPanel
                transition
                className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
              >
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                      <span className="font-medium text-gray-900">Tree Type</span>
                      <span className="ml-6 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                      </svg>
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-6">
                      {PLANT_CATEGORIES.map((plant: PlantCategories, plantIdx) => (
                        <div key={plant.key} className="flex items-center">
                          <input
                            // defaultValue={option.value}
                            id={`filter-mobile-${plant.name}-${plantIdx}`}
                            name={`${plant.name}[]`}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`filter-mobile-${plant.name}-${plantIdx}`}
                            className="ml-3 text-sm text-gray-500"
                          >
                            {plant.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </DialogPanel>
            </div>
          </Dialog> */}
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mt-8">
          {selectedPlants.map((plant) => (
            <div key={plant.id} className="group">
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
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PlantList