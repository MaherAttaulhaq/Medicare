import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { TbLogin2 } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux";
export const Header = () => {
  const [location, setlocation] = useState([
    {
      id: 1,
      name: "Karachi",
    },
    {
      id: 2,
      name: "Lahore",
    },
    {
      id: 3,
      name: "Multan",
    },
    {
      id: 4,
      name: "Peshawar",
    },
  ]);
  const [totalquantity, setTotalQuantity] = useState(0);
  const cart = useSelector((store) => store.cart.items);
  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    setTotalQuantity(total);
  }, [cart]);
  return (
    <header>
      <div className="bg-slate-100 m-4 p-4 md:p-6 border rounded-2xl border-transparent max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left section */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
            {/* Logo */}
            <div className="flex items-center gap-2 border-b md:border-b-0 md:border-r border-slate-300 pr-4">
              <img
                src="public\images\logo.PNG"
                alt="Company logo"
                className="w-10 md:w-12"
              />
              <NavLink to="/">
                <h1 className="font-bold text-xl md:text-2xl">Medicare</h1>
              </NavLink>
            </div>

            <button className="hamburger block md:hidden cursor-pointer">
              <ion-icon name="menu-outline" className="text-3xl"></ion-icon>
            </button>

            <form className="text-center md:text-left mobileMenu">
              <label
                htmlFor="countries"
                className="text-sm text-gray-600 flex gap-1 items-center"
              >
                <span>
                  <CiLocationOn />
                </span>
                <span>Select location</span>
              </label>
              <select id="countries" className="block w-full p-2.5 text-sm">
                {location.map((l) => {
                  return <option key={l.id}>{l.name}</option>;
                })}
              </select>
            </form>

            {/* Search */}
            <div className="flex items-center w-full md:w-auto gap-2 bg-white rounded-full p-2 mt-2 md:mt-0 shadow-md mobileMenu">
              <IoSearchOutline className="text-black bg-green-500 rounded-2xl text-xl m-1 p-0.5" />
              <input
                type="text"
                placeholder="Search medicine & health items"
                className="flex-grow md:w-60 outline-none text-sm px-2 bg-transparent placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Right section (Navigation & Buttons) */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto mobileMenu">
            {/* New Services */}
            <div className="text-center md:text-left">
              <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-md">
                New
              </span>
              <p className="font-semibold text-sm md:text-base flex items-center justify-center md:justify-start gap-1">
                Healthcare Services
                <ion-icon
                  name="chevron-down-outline"
                  className="text-base"
                ></ion-icon>
              </p>
            </div>

            {/* Offers */}
            <NavLink to="/offers">
              <div className="flex items-center justify-center text-orange-600 gap-1">
                <RiDiscountPercentLine className="text-lg" />
                <p className="text-sm md:text-base">Offers</p>
              </div>
            </NavLink>

            {/* Cart */}
            <NavLink to="/cart">
              <button className="flex items-center justify-center gap-1 cartitem relative">
                <CiShoppingCart className="text-3xl" />
                <span className="absolute top-2/3 right-2/3 bg-red-700 text-white text-sm size-4 flex justify-center items-center rounded-full">
                  {totalquantity}
                </span>
                <p className="text-sm md:text-base">Cart</p>
              </button>
            </NavLink>

            {/* Login */}
            <NavLink to="/login">
              <button className="flex items-center justify-center gap-1">
                <TbLogin2 className="text-lg" />
                <p className="text-sm md:text-base">Login</p>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
