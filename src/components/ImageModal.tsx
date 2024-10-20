import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { PlantSpecies } from "@/lib/types";

export function ImageModal({ plant }: { plant: PlantSpecies }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div key={plant.id} className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
            {plant.image}
            {/* <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            /> */}
          </div>
          <div className="mt-4 flex items-start justify-between text-base font-medium text-gray-900 h-10">
            <h3>
              {plant.name} - {plant.tamil_name}
            </h3>
          </div>
          <p className="mt-1 text-sm italic text-gray-500 md:h-20 md:max-h-20 overflow-y-scroll">
            {plant.description}
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white max-w-[720px] w-vw[80%] sm:w-50">
        <DialogHeader>
          <DialogTitle>
            {plant.name} - {plant.tamil_name}
          </DialogTitle>
          <DialogDescription>{plant.imageNoZoom}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
