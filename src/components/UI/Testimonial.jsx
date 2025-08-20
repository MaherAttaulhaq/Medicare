import React, { useRef } from 'react'
import { FaStar } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { MdCardMembership } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const Testimonial = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div>
            <section className="container mx-auto px-4 py-10">
                <div className="flex flex-col md:flex md:flex-row justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-bold">What our Customers say</h1>
                        <div className="flex gap-6 my-5">
                            <div className="flex gap-1.5">
                                <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                    <FaStar />
                                </div>
                                <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                    <FaStar />
                                </div>
                                <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                    <FaStar />
                                </div>
                                <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                    <FaStar />
                                </div>
                                <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                    <FaStar />
                                </div>
                            </div>
                            <div className="flex">
                                <p className="font-bold text-xl">460 Reviews on <span
                                    className="text-white bg-green-600 size-6 flex justify-center items-center">
                                    <FaStar />
                                </span>Trustpilot
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <div className="flex gap-2">
                            <button >
                                <p>PREVIOUS
                                    <IoMdArrowRoundBack className="mt-1.5" onClick={previous} />
                                </p>
                            </button>
                            <button >
                                <p>NEXT
                                    <IoArrowForward className="mt-1.5" onClick={next} />
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}>
                    <div className="bg-blue-50 max-w-92 my-10 rounded-2xl">
                        <h1 className="font-bold text-2xl m-10">
                            I had a great check-up at <br />this medical hospital services
                        </h1>
                        <p className="m-10">
                            “I have been a patient at your Medicare healthcare service for over a year now, and I must say
                            that I am extremely satisfied with the level.”
                        </p>
                        <div className="flex gap-1.5 mt-10 mx-10">
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                        </div>
                        <div className="mb-10 ml-10 mt-1">
                            <p className="text-md font-semibold">Darline Robertson</p>
                        </div>
                    </div>
                    <div className="bg-blue-50 max-w-92 my-10 rounded-2xl">
                        <h1 className="font-bold text-2xl m-10">
                            I recently underwent a procedure at Medicare Health Service
                        </h1>
                        <p className="m-10">
                            “I have been a patient at your Medicare healthcare service for over a year”
                        </p>
                        <div className="flex gap-1.5 mt-10 mx-10">
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                        </div>
                        <div className="mb-10 ml-10 mt-1">
                            <p className="text-md font-semibold">Brooklyn Simmons</p>
                        </div>
                    </div>
                    <div className="bg-blue-50 max-w-92 my-10 rounded-2xl">
                        <h1 className="font-bold text-2xl m-10">
                            I had a virtual appointment with Medicare Health Service
                        </h1>
                        <p className="m-10">
                            “I have been a patient at your Medicare healthcare service for over a year now, and I must say
                            that I am extremely satisfied”
                        </p>
                        <div className="flex gap-1.5 mt-10 mx-10">
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                        </div>
                        <div className="mb-10 ml-10 mt-1">
                            <p className="text-md font-semibold">Jacob Jones</p>
                        </div>
                    </div>
                    <div className="bg-blue-50 max-w-92 my-10 rounded-2xl">
                        <h1 className="font-bold text-2xl m-10">
                            I recently visited Medicare Health Service for a routine check-up
                        </h1>
                        <p className="m-10">
                            The staff took all necessary precautions to ensure safety during the pandemic, and my doctor
                            provided clear explanations about my health.
                        </p>
                        <div className="flex gap-1.5 mt-10 mx-10">
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                        </div>
                        <div className="mb-10 ml-10 mt-1">
                            <p className="text-md font-semibold">Robert Fox</p>
                        </div>
                    </div>
                    <div className="bg-blue-50 max-w-92 my-10 rounded-2xl">
                        <h1 className="font-bold text-2xl m-10">
                            I had a great check-up at <br />this medical hospital services
                        </h1>
                        <p className="m-10">
                            “I have been a patient at your Medicare healthcare service for over a year now, and I must say
                            that I am extremely satisfied with the level.”
                        </p>
                        <div className="flex gap-1.5 mt-10 mx-10">
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                        </div>
                        <div className="mb-10 ml-10 mt-1">
                            <p className="text-md font-semibold">Darline Robertson</p>
                        </div>
                    </div>
                    <div className="bg-blue-50 max-w-92 my-10 rounded-2xl">
                        <h1 className="font-bold text-2xl m-10">
                            I recently underwent a procedure at Medicare Health Service
                        </h1>
                        <p className="m-10">
                            “I have been a patient at your Medicare healthcare service for over a year”
                        </p>
                        <div className="flex gap-1.5 mt-10 mx-10">
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                        </div>
                        <div className="mb-10 ml-10 mt-1">
                            <p className="text-md font-semibold">Brooklyn Simmons</p>
                        </div>
                    </div>
                    <div className="bg-blue-50 max-w-92 my-10 rounded-2xl">
                        <h1 className="font-bold text-2xl m-10">
                            I had a virtual appointment with Medicare Health Service
                        </h1>
                        <p className="m-10">
                            “I have been a patient at your Medicare healthcare service for over a year now, and I must say
                            that I am extremely satisfied”
                        </p>
                        <div className="flex gap-1.5 mt-10 mx-10">
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                        </div>
                        <div className="mb-10 ml-10 mt-1">
                            <p className="text-md font-semibold">Jacob Jones</p>
                        </div>
                    </div>
                    <div className="bg-blue-50 max-w-92 my-10 rounded-2xl">
                        <h1 className="font-bold text-2xl m-10">
                            I recently visited Medicare Health Service for a routine check-up
                        </h1>
                        <p className="m-10">
                            The staff took all necessary precautions to ensure safety during the pandemic, and my doctor
                            provided clear explanations about my health.
                        </p>
                        <div className="flex gap-1.5 mt-10 mx-10">
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                            <div className="text-white bg-green-600 size-8 flex justify-center items-center">
                                <FaStar />
                            </div>
                        </div>
                        <div className="mb-10 ml-10 mt-1">
                            <p className="text-md font-semibold">Robert Fox</p>
                        </div>
                    </div>
                </Slider>
                <div className="flex flex-col justify-center items-center gap-20 md:flex md:flex-row md:gap-10">
                    <div className="bg-yellow-300 rounded-2xl">
                        <div
                            className="flex bg-black text-yellow-400 gap-1 rounded-md justify-center items-center mt-10 w-28 ml-5">
                            <TbTruckDelivery className="pt-0.5" />
                            <span>Delievery</span>
                        </div>
                        <div className="m-5">
                            <p className="text-5xl font-bold">Enjoy free <br />deleivery within<br /> 2 hours</p>
                        </div>
                        <div className="flex justify-between items-center gap-20">
                            <div className="flex mt-20 ml-5 gap-0.5">
                                <p className="bg-white text-black rounded-full px-4 py-2 font-bold">Order now</p>
                                <div className="rounded-2xl p-2 bg-white text-black mt-1 font-bold">
                                    <IoArrowForward />
                                </div>
                            </div>
                            <div className="mr-5">
                                <img src="/images/card (2).png" alt="man a photo" className="h-48" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-300 rounded-2xl">
                        <div
                            className="flex bg-black text-yellow-400 gap-1 rounded-md justify-center items-center mt-10 w-40 ml-5">
                            <MdCardMembership className="pt-0.5" />
                            <span>Membership Card</span>
                        </div>
                        <div className="m-5">
                            <p className="text-5xl font-bold">You can enjoy a 5%<br />discount within a<br /> Healthcard</p>
                        </div>
                        <div className="flex justify-between items-center gap-20">
                            <div className="flex mt-30 ml-5  gap-0.5">
                                <p className="bg-white text-black rounded-full px-1 py-2 font-bold text-center">Get Healthcard Now</p>
                                <div className="rounded-2xl p-2 bg-white text-black mt-1 font-bold place-content-center">
                                    <IoArrowForward />
                                </div>
                            </div>
                            <div>
                                <img src="/images/card (1).png" alt="man a photo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}


