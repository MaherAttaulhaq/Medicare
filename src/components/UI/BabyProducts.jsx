import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { useSelector } from "react-redux";
import Babyproducts from "../../api/Product.json";
export const BabyProducts = () => {
  const cart = useSelector((store) => store.cart.items);
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
        {Babyproducts.map(
          (product, index) =>
            product.BabyFoodProducts && (
              <div
                key={product.id || index} // Use a unique ID if available, otherwise use the index as a fallback
                className="bg-gray-300 border relative border-gray-300 w-72 md:w-64 rounded-2xl"
              >
                <>
                  <div className="flex justify-center items-center w-full h-60">
                    <img
                      className="w-32 h-32"
                      src={`/images/baby-food/${product.ProductImage}`}
                      alt="baby product photo"
                    />
                  </div>

                  <div className="bg-white rounded-2xl px-2 pb-3">
                    <div className="flex justify-between items-center py-2">
                      <h1 className="text-black font-extralight tracking-wide">
                        {product.ProductCategory}
                      </h1>
                      <div className="flex items-center text-sm text-orange-600">
                        <FaStar className="mr-1" />
                        <span>{product.ProductRating}</span>
                      </div>
                    </div>

                    <p className="text-black font-semibold mt-1">
                      {product.ProductName}
                    </p>

                    <div className="flex justify-between items-center mt-3">
                      <button className="flex items-center gap-1 border border-black rounded-md px-3 py-1 text-sm">
                        <FaPlus />
                        Add to Cart
                      </button>

                      <div className="flex gap-1 items-end">
                        {product.ProductDiscount ? (
                          <>
                            <p className="line-through text-sm font-light">
                              {product.ProductPrice}
                            </p>
                            <span className="font-bold">
                              {product.ProductDiscountPrice}
                            </span>
                          </>
                        ) : (
                          <p className="font-bold">{product.ProductPrice}</p>
                        )}
                      </div>
                    </div>

                    <p className="absolute top-4 right-0 bg-amber-300 text-black px-2 py-1 text-xs font-medium rounded-l-md">
                      {product.ProductDiscount ? "Discount" : "No Discount"}
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
