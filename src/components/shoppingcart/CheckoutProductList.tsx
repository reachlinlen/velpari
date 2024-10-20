import { useStore } from "@nanostores/react";
import { cart } from "../store/store";
import type { Cart, PlantSpecies, PlantSpeciesCount } from "@/lib/types";
import { DRAVIDIAN_TREES } from "@/lib/constants";
import { Input } from "../ui/input";
import { TrashIcon } from "@heroicons/react/24/outline";

const CheckoutProductList = () => {
  const currentCart: Cart = useStore(cart);
  const displayCart: PlantSpeciesCount[] = [];

  Object.keys(currentCart).map((plantID) => {
    const shoppedPlant: PlantSpecies | undefined = DRAVIDIAN_TREES.find(
      (tree) => tree.id == plantID
    );
    shoppedPlant
      ? displayCart.push({
          ...shoppedPlant,
          count: currentCart[plantID],
        })
      : null;
  });

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
      <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Shopping Cart
      </h1>
      <form className="mt-12">
        <section aria-labelledby="cart-heading">
          <h2 id="cart-heading" className="sr-only">
            Items in your shopping cart
          </h2>

          <ul
            role="list"
            className="divide-y divide-gray-200 border-b border-t border-gray-200"
          >
            {displayCart.map((product, productIdx) => {
              return (
                <ShowItem
                  key={product.id}
                  product={product}
                  productIdx={productIdx}
                  currentCart={currentCart}
                />
              );
            })}
          </ul>
        </section>
      </form>
    </div>
  );
};

function ShowItem({
  product,
  productIdx,
  currentCart,
}: {
  product: PlantSpeciesCount;
  productIdx: number;
  currentCart: Cart;
}) {
  const handleDeleteProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    delete currentCart[product.id];
    cart.set({ ...currentCart });
  };
  return (
    <li className="flex py-6">
      <div className="flex-shrink-0 w-20 h-20">
        {/* <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
        /> */}
        {product.imageNoZoom}
      </div>

      <div className="ml-4 flex flex-1 flex-col sm:ml-6">
        <div>
          <div className="flex justify-between">
            <h4 className="text-sm">
              {/* <a
                href={product.href}
                className="font-medium text-gray-700 hover:text-gray-800"
              > */}
              {product.name}-{product.tamil_name}
              {/* </a> */}
            </h4>
            {/* <p className="ml-4 text-sm font-medium text-gray-900">
              {product.price}
            </p> */}
          </div>
          {/* <p className="mt-1 text-sm text-gray-500">{product.tamil_name}</p> */}
          <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        </div>

        {/* <div className="mt-4 flex flex-1 items-end justify-between"> */}
        {/* <p className="flex items-center space-x-2 text-sm text-gray-700">
            {product.inStock ? (
              <CheckIcon
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 text-green-500"
              />
            ) : (
              <ClockIcon
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 text-gray-300"
              />
            )}

            <span>
              {product.inStock
                ? "In stock"
                : `Will ship in ${product.leadTime}`}
            </span>
          </p> */}
        <div className="mt-4 flex items-center justify-between sm:left-1/2 sm:top-0 sm:mt-0 sm:flex">
          <Input defaultValue={product.count} className="w-20" />
          <button
            type="button"
            className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3 w-fit"
            onClick={handleDeleteProduct}
          >
            <TrashIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* </div> */}
    </li>
  );
}

export { CheckoutProductList };
