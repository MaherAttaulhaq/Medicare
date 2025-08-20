import React from 'react';
import { TbDiscount } from "react-icons/tb";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";
export const Herosection = () => {
    return (
        <section className="container mx-auto px-4 py-10">
            <div className="bg-[#9fe870] rounded-3xl">
                {/* Heading */}
                <div>
                    <h1 className="text-center font-extrabold tracking-widest text-5xl md:text-7xl lg:text-9xl p-6">
                        PHARMACY
                    </h1>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row justify-between relative px-4">
                    {/* Left Text Content */}
                    <div className="flex flex-col mb-10 lg:ml-12">
                        <p className="font-semibold text-lg md:text-xl leading-relaxed">
                            ONLINE MEDICINE DELIVERY IS THE PROCESS <br />
                            OF ORDERING MEDICATIONS THROUGH A <br />
                            WEBSITE OR APP AND HAVING THEM DELIVERED <br />
                            TO YOUR DOORSTEP.
                        </p>

                        {/* Feature Icons */}
                        <div className="flex flex-col md:flex-row mt-10 gap-6">
                            <div className="flex items-center gap-2">
                                <TbDiscount className="bg-black text-white text-2xl p-1 rounded-full" />
                                <p>Delivery to <br /> your doorstep</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <AiFillMedicineBox className="bg-black text-white text-2xl p-1 rounded-full" />
                                <p>100% Genuine <br /> Medicine</p>
                            </div>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="relative lg:absolute lg:-top-36 lg:left-1/2 transform lg:-translate-x-1/2 mb-10 lg:mb-0">
                        <img
                            src="/images/banner.png"
                            alt="girl with a photo"
                            className="w-full max-w-xs mx-auto lg:max-w-md"
                        />
                    </div>

                    {/* Upload Section */}
                    <div className="bg-white w-full md:w-2/3 lg:w-64 mx-auto lg:mr-12 h-64 rounded-xl shadow-md mb-10">
                        <div className="flex justify-around items-center h-1/2 border border-slate-600 p-4 mx-2 mt-4 border-dotted bg-slate-100 rounded-lg">
                            <h1 className="text-black font-bold text-xl">UPLOAD <br /> DESCRIPTION</h1>
                            <ion-icon name="document-text-outline" className="text-5xl"></ion-icon>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-1 ml-4 mt-4">
                            <div className="bg-green-900 text-white rounded-full p-4">
                                <MdOutlineFileUpload className="text-xl" />
                            </div>
                            <div className="bg-green-900 text-white rounded-full px-4 py-2 tracking-widest w-full text-center">
                                <p>Order via Prescription</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

