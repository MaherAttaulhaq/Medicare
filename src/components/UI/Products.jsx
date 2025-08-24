import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { GoUpload } from "react-icons/go";
import ProductsData from "../../api/Product.json";
import { useSelector, useDispatch } from "react-redux";
import { addtocart } from "../../store/CartSlice";
import appwriteService from "../../appwrite/config";
import store from "../../store/store";
import { Query } from "appwrite";
export const Products = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async (filter) => {
    const products = await appwriteService.getProducts(filter);
    if (products) {
      setProducts(products.documents);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await getProducts([Query.equal("bestdealsProduct", true)]);
    };
    fetchData();
  }, []);
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleAddTocart = (id, quantity) => {
    console.log("Product added to cart:", id, quantity);
    dispatch(addtocart({ id, quantity }));
  };
  return (
    <div>
      <section className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="font-bold text-5xl">
              Todays best deals
              <br /> for you!
            </h1>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <h1 className="font-semibold">SEE ALL PRODUCTS</h1>
            <FaArrowRight />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-6 md:gap-12 products">
          {/* // cards-section */}
          {products.map(
            (product, index) =>
              product.bestdealsProduct && (
                <div
                  key={index}
                  className="bg-gray-300 border relative border-gray-300 w-72 md:w-64 rounded-2xl"
                >
                  <div className="flex justify-center items-center w-full h-60">
                    <img
                      className="w-32 h-32"
                      src={`/images/${product.image}`}
                      alt="product photo"
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
                      <button
                        className="flex items-center gap-1 border border-black rounded-md px-3 py-1 text-sm"
                        onClick={() => handleAddTocart(product.id, 1)}
                      >
                        <FaPlus className="mr-1" />
                        Add to Cart
                      </button>
                      <div className="flex flex-col items-end">
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
                          <p className="absolute top-4 right-0 bg-amber-300 text-black px-2 py-1 text-xs font-medium rounded-l-md">
                            {product.discount}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mt-10 px-4 ">
          {/* <!-- Card 1 --> */}
          <div className="w-full md:w-full bg-yellow-300 rounded-2xl border border-yellow-300 p-5">
            <div className="bg-white border-2 border-dotted border-gray-400 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 p-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-green-900">
                  Upload prescription
                  <br />
                  to place order
                </h2>
                <p className="text-sm text-gray-700 mt-2">
                  Upload only{" "}
                  <span className="font-medium">.jpg .png or .pdf</span> files
                  <br />
                  Size limit is 15 MB
                </p>
              </div>
              <GoUpload className="text-4xl text-green-900" />
            </div>

            {/* <!-- card 2 --> */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex justify-center items-center gap-1.5">
                <button className="flex items-center gap-2 bg-black text-yellow-300 px-2 py-2 rounded-full  sm:w-auto">
                  <MdOutlineFileUpload />
                </button>
                <span className="text-sm font-semibold bg-black text-amber-400 rounded-2xl p-2">
                  Order Via Prescription
                </span>
              </div>
              <div>
                <a
                  href="#"
                  className="text-green-900 underline text-sm font-semibold hover:text-green-800"
                >
                  How to order?
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="w-full md:w-full bg-pink-300 rounded-2xl border border-pink-300 p-5">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-green-900">
                Don’t have a<br />
                Prescription?
              </h2>
              <p className="text-sm text-gray-700 mt-2">
                Upload only{" "}
                <span className="font-medium">.jpg .png or .pdf</span> files
                <br />
                Size limit is 15 MB
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex justify-center items-center gap-1">
                <button className="flex items-center gap-2 bg-black text-pink-300 px-4 py-2 rounded-xl w-full sm:w-auto">
                  <span className="text-sm font-semibold">
                    Order Via Prescription
                  </span>
                </button>
                <IoHomeOutline className="text-xl rounded-xl bg-black text-pink-400" />
              </div>
              <div>
                <img
                  src="/images/doctor-image.png"
                  alt="doctor-image"
                  className="w-24 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
