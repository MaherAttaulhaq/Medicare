import React, { useState, useEffect, use } from "react";
import products from "../../api/Product.json";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../store/CartSlice";
import { changequantity } from "../../store/CartSlice";
import { FaStar, FaPlus } from "react-icons/fa";
import { set } from "react-hook-form";
import { removetocart } from "../../store/CartSlice";
export const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const ids = items.map((item) => item.id);
    const filteredProducts = products
      .filter((product) => ids.includes(product.id))
      .map((product) => {
        const cartItem = items.find((item) => item.id === product.id);
        return {
          ...product,
          quantity: cartItem ? cartItem.quantity : 0,
        };
      });
    setProductData(filteredProducts);
  }, [items, products]);
  const proceedToCheckout = () => {

    alert("Proceeding to checkout...");

  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      {productData.length > 0 ? (
        <>
          <div className="bg-white p-6 rounded-lg shadow-md flex gap-2">
            {productData.map((product) => {
              // const cartItem = items.find((item) => item.id === product.id);
              console.log("Product in cart:", productData);
              console.log("Cart Item:", product);
              return (
                <div key={product.id} className="mb-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {product.ProductCategory}
                  </h2>
                  <img
                    src={`/images/${product.ProductImage}`}
                    alt={product.ProductName}
                    className="w-full size-64 object-cover mb-2"
                  />
                  <p className="text-gray-700 mb-1">
                    Category: {product.ProductCategory}
                  </p>
                  <p className="text-gray-700 mb-1">
                    Price: ${product.ProductPrice}
                  </p>
                  <p className="text-gray-700 mb-2">
                    Description: {product.ProductName}
                  </p>
                  <div className="flex items-center gap-2">
                    {/* <button
                      onClick={() =>
                        dispatch(
                          changequantity({
                            id: product.id,
                            quantity: cartItem.quantity + 1,
                          })
                        )
                      }
                      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                      Increase Quantity
                    </button>
                    <button
                      onClick={() =>
                        dispatch(
                          changequantity({
                            id: product.id,
                            quantity:
                              cartItem.quantity - 1 < 1
                                ? 1
                                : cartItem.quantity - 1,
                          })
                        )
                      }
                      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                      Decrease Quantity
                    </button>
                    <span>Quantity: {cartItem.quantity}</span> */}

                    <div className="flex items-center justify-between gap-10">
                      <div>
                        <button
                          onClick={() =>
                            dispatch(
                              changequantity({
                                id: product.id,
                                quantity:
                                  product.quantity - 1 < 1
                                    ? 1
                                    : product.quantity - 1,
                              })
                            )
                          }
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="counter-input"
                          class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                          <svg
                            class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>

                        {/* <input
                        type="text"
                        id="counter-input"
                        data-input-counter
                        class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                        placeholder=""
                        value="2"
                        required
                      /> */}
                        <span className="mx-2">{product.quantity}</span>
                        <button
                          onClick={() =>
                            dispatch(
                              changequantity({
                                id: product.id,
                                quantity: product.quantity + 1,
                              })
                            )
                          }
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="counter-input"
                          class="inline-flex size-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                          <svg
                            class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            dispatch(
                              removetocart({
                                id: product.id,
                                quantity: 0,
                              })
                            )
                          }
                          type="button"
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm p-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
            onClick={proceedToCheckout}
          >
            Proceed to Checkout
          </button>
        </>
      ) : (
        <p className="text-red-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
