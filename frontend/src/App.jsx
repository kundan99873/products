import { useEffect, useState } from "react";
import { getProducts } from "./services/apiServices";

export default function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getProducts();
      setProducts(data.products);
    };
    getData();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center underline my-3">
        Products
      </h1>
      <div>
        {!products ? (
          <h2>Loading...</h2>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
            {products.map((product) => {
              return (
                <div class="max-w-sm rounded overflow-hidden shadow-lg m-3">
                  <img
                    class="w-full h-52 object-contain"
                    src={product.image}
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{product.title}</div>
                    <p class="text-gray-700 text-base font-medium">
                      {product.category}
                    </p>
                    <p class="text-gray-700 text-base">
                      {product.description.length < 70
                        ? product.description
                        : product.description.slice(0, 70) + "..."}
                    </p>
                  </div>
                  <div className="px-6">
                    <p className="text-lg">
                      Rating: {product.rating.rate}{" "}
                      <span>({product.rating.count})</span>
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2 text-lg text-semibold">
                    <p className="text-xl font-bold">{product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
