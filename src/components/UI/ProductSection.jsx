import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import ProductsData from "../../api/Product.json";
import appwriteService from "../../appwrite/config";
import { Query } from "appwrite";
export const ProductSection = () => {
  const [products, setProducts] = useState([]);
  //   appwriteService.getProduct([]).then((product) => {
  //     if (product) {
  //       setProducts(product.documents);
  //     }
  //   });
  const getProducts = async (filter) => {
    const products = await appwriteService.getProducts(filter);
    if (products) {
      setProducts(products.documents);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await getProducts();
    };
    fetchData();
  }, []);
  const handleShowProducts = async (i) => {
    if (i) {
      await getProducts([Query.equal("deparment", i)]);
    } else {
      await getProducts();
    }
  };
  return (
    <div>
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">
              Trending Products <br /> for you!
            </h1>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <p className="tracking-wider font-semibold">SEE ALL PRODUCTS</p>
            <FaArrowRight />
          </div>
        </div>
        {/* <!--logo--> */}
        <div className="flex flex-wrap md:flex-row md:my-10 my-10 justify-center items-center gap-10">
          <button className="labels" onClick={() => handleShowProducts()}>
            <p className="text-white bg-green-900 px-4 py-2 rounded-full">
              All
            </p>
          </button>
          <button
            className="labels"
            onClick={() => handleShowProducts("Cardiology")}
          >
            <p className="text-white bg-green-900 px-4 py-2 rounded-full">
              Cardiology
            </p>
          </button>
          <button
            className="labels"
            onClick={() => handleShowProducts("Neurology")}
          >
            <p className="text-black bg-slate-100 px-4 py-2 rounded-full">
              Neurology
            </p>
          </button>
          <button
            className="labels"
            onClick={() => handleShowProducts("Pediatrics")}
          >
            <p className="text-black bg-slate-100 px-4 py-2 rounded-full">
              Pediatrics
            </p>
          </button>
          <button
            className="labels"
            onClick={() => handleShowProducts("Gastronerology")}
          >
            <p className="text-black bg-slate-100 px-4 py-2 rounded-full">
              Gastronerology
            </p>
          </button>
          <button
            className="labels"
            onClick={() => handleShowProducts("Nephrology")}
          >
            <p className="text-black bg-slate-100 px-4 py-2 rounded-full">
              Nephrology
            </p>
          </button>
          <button
            className="labels"
            onClick={() => handleShowProducts("Gynocology")}
          >
            <p className="text-black bg-slate-100 px-4 py-2 rounded-full">
              Gynocology
            </p>
          </button>
          <button
            className="labels"
            onClick={() => handleShowProducts("Orthopedics")}
          >
            <p className="text-black bg-slate-100 px-4 py-2 rounded-full">
              Orthopedics
            </p>
          </button>
          <button
            className="labels"
            onClick={() => handleShowProducts("Urology")}
          >
            <p className="text-black bg-slate-100 px-4 py-2 rounded-full">
              Urology
            </p>
          </button>
        </div>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6 md:gap-12 medine-list">
          {/* <!-- Card 1 --> */}

          {products.map(
            (product, index) =>
              product.trendingProducts && (
                <div
                  key={index}
                  className="bg-gray-300 border relative border-gray-300 w-72 md:w-64 rounded-2xl"
                >
                  <div className="flex justify-center items-center w-full h-60">
                    <img
                      className="w-32 h-32"
                      src={`/images/product-logo/${product.image}`}
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
                      <button className="flex items-center gap-1 border border-black rounded-md px-3 py-1 text-sm">
                        <FaPlus />
                        Add to Cart
                      </button>
                      <div className="flex flex-col items-end md:flex md:flex-row md:gap-1">
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
        <div className="flex flex-wrap md:flex md:flex-row gap-12 justify-center items-center mt-10">
          <div className="bg-orange-300 w-96 rounded-2xl">
            <div className="flex flex-col gap-4 mt-4 ml-4">
              <h1 className="font-bold text-3xl">
                Maternal health <br /> and Comfort
              </h1>
              <p>
                BROWSE All
                <IoArrowForward />
              </p>
            </div>
            <div className="flex justify-center items-center gap-12">
              <div className="font-bold text-2xl mt-10">
                <h1>
                  5%
                  <br />
                  Cashback
                </h1>
              </div>
              <div className="flex justify-center items-end">
                <img src="/images/card-pic/card-pic.png" alt="card-pic" />
              </div>
            </div>
          </div>
          <div className="bg-blue-200 w-96 rounded-2xl">
            <div className="flex flex-col gap-4 mt-4 ml-4">
              <h1 className="font-bold text-3xl">
                Headache and migrate Solutions
              </h1>
              <p>
                BROWSE All
                <IoArrowForward />
              </p>
            </div>
            <div className="flex justify-center items-center gap-12">
              <div className="ml-3 text-xl font-bold mt-4">
                <h1 className="font-bold">Flat</h1>
                <h2 className="text-4xl">
                  10% <span className="text-2xl">OFF</span>
                </h2>
              </div>
              <div>
                <img src="/images/card-pic/card-pic-1.png" alt="card-pic" />
              </div>
            </div>
          </div>
          <div className="bg-yellow-200 w-96 rounded-2xl">
            <div className="flex flex-col gap-4 mt-4 ml-4">
              <h1 className="font-bold text-3xl">
                Cold and Flue <br />
                Relief
              </h1>
              <p>
                BROWSE All
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </p>
            </div>
            <div className="flex justify-center items-center gap-6">
              <div className="ml-3 text-xl font-bold mt-4">
                <p>
                  Flat <br />
                  <span className="font-bold text-4xl">10% OFF</span>
                </p>
              </div>
              <div>
                <img src="/images/card-pic/card-pic-2.png" alt="card-pic" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
