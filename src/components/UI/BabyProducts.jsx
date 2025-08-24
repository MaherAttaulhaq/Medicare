import React, { useEffect, useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { useSelector } from "react-redux";
import Babyproducts from "../../api/Product.json";
import { Query } from "appwrite";
import appwriteService from "../../appwrite/config";
export const BabyProducts = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector((store) => store.cart.items);
  const getProducts = async (filter) => {
    const products = await appwriteService.getProducts(filter);
    if (products) {
      setProducts(products.documents);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await getProducts([Query.equal("babyFoodProducts", true)]);
    };
    fetchData();
  }, []);
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-bold text-5xl">
            Baby Food
            <br /> Collection
          </h1>
        </div>
        <div className="flex gap-1 justify-center items-center">
          <h1 className="font-semibold">SEE ALL PRODUCTS</h1>
          <IoArrowForward />
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center items-center gap-12 md:gap-12">
        {/* <!-- Card 1 --> */}
        {products.map(
          (product, index) =>
            product.foodProducts && (
              <div
                key={product.id || index} // Use a unique ID if available, otherwise use the index as a fallback
                className="bg-gray-300 border relative border-gray-300 w-72 md:w-64 rounded-2xl"
              >
                <>
                  <div className="flex justify-center items-center w-full h-60">
                    <img
                      className="w-32 h-32"
                      src={`/images/baby-food/${product.image}`}
                      alt="baby product photo"
                    />
                  </div>

                  <div className="bg-white rounded-2xl px-2 pb-3">
                    <div className="flex justify-between items-center py-2">
                      <h1 className="text-black font-extralight tracking-wide">
                        {product.category}
                      </h1>
                      <div className="flex items-center text-sm text-orange-600">
                        <FaStar className="mr-1" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    <p className="text-black font-semibold mt-1">
                      {product.name}
                    </p>

                    <div className="flex justify-between items-center mt-3">
                      <button className="flex items-center gap-1 border border-black rounded-md px-3 py-1 text-sm">
                        <FaPlus />
                        Add to Cart
                      </button>

                      <div className="flex gap-1 items-end">
                        {product.discount ? (
                          <>
                            <p className="line-through text-sm font-light">
                              {product.price}
                            </p>
                            <span className="font-bold">
                              {product.discountPrice}
                            </span>
                          </>
                        ) : (
                          <p className="font-bold">{product.price}</p>
                        )}
                      </div>
                    </div>

                    <p className="absolute top-4 right-0 bg-amber-300 text-black px-2 py-1 text-xs font-medium rounded-l-md">
                      {product.discount ? "Discount" : "No Discount"}
                    </p>
                  </div>
                </>
              </div>
            )
        )}
      </div>
    </section>
  );
};
