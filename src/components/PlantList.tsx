import { DRAVIDIAN_TREES } from "@/lib/constants";
import type { Cart, PlantSpecies } from "@/lib/types";
import * as React from "react";
import { FilterTreeType } from "./FilterTreeType";
import { Button } from "./ui/button";
import { ImageModal } from "./ImageModal";
import { cart } from "./store/store";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Input } from "./ui/input";

const PlantList = () => {
  const [categoryList, setCategoryList] = React.useState<string[]>([]);
  const selectedPlants: PlantSpecies[] = [];

  DRAVIDIAN_TREES.map((tree) => {
    if (categoryList.length > 0) {
      const filteredData = categoryList.filter(
        (category) => tree.keywords.indexOf(category) != -1
      );
      if (filteredData.length > 0) {
        selectedPlants.push(tree);
        return;
      }
    } else {
      selectedPlants.push(tree);
      return;
    }
  });

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      categoryList.push(e.target.id);
    } else {
      const index = categoryList.indexOf(e.target.id);
      categoryList.splice(index, 1);
    }
    setCategoryList([...categoryList]);
  };

  const handleAddCart =
    (plant: PlantSpecies) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentCart: Cart = cart.get();
      currentCart[plant.id] = Number(e.target.value);
      cart.set({
        ...currentCart,
      });
    };

  return (
    <>
      <div>
        <div className="flex justify-end mr-4">
          <FilterTreeType
            categoryList={categoryList}
            handleCategoryChange={handleCategoryChange}
          />
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mt-8">
          {selectedPlants.map((plant: PlantSpecies) => (
            <div key={plant.id}>
              <ImageModal plant={plant} />
              <div className="flex justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" className="">
                      Add to cart
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <Input
                      type="number"
                      onChange={handleAddCart(plant)}
                      placeholder="Enter count of plants"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            // <div key={plant.id} className="group">
            //   <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
            //     {plant.image}
            //     {/* <img
            //       alt={product.imageAlt}
            //       src={product.imageSrc}
            //       className="h-full w-full object-cover object-center group-hover:opacity-75"
            //     /> */}
            //   </div>
            //   <div className="mt-4 flex items-start justify-between text-base font-medium text-gray-900 h-10">
            //     <h3>{plant.name} - {plant.tamil_name}</h3>
            //   </div>
            //   <p className="mt-1 text-sm italic text-gray-500 h-20 max-h-20 overflow-y-scroll">{plant.description}</p>
            //   <div className='flex justify-center'>
            //     <Button variant="ghost" className=''>Add to cart</Button>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlantList;
