import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
export const Featured = () => {
    return (
        <div>
            <section className="container mx-auto px-4 py-10">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-5xl font-bold">Featured Brands</h2>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <NavLink to='/'>
                            <button className="font-bold uppercase">SEE ALL</button>
                        </NavLink>
                        <FaArrowRight />
                    </div>
                </div>
                {/* <!--logo--> */}
                <div className="flex flex-wrap md:flex-row gap-12 mt-16 justify-center items-center">
                    <div className="flex-col justify-center items-center bg-slate-200 rounded-full size-28">
                        <div className="flex justify-center items-center w-24 h-24">
                            <img src="/images/logo/logo-1.png" alt="logo-1" />
                        </div>
                    </div>
                    <div className="flex-col justify-center items-center bg-slate-200 rounded-full size-28">
                        <div className="flex justify-center items-center w-24 h-24">
                            <img src="/images/logo/logo-2.png" alt="logo-2" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-slate-200 rounded-full size-28">
                        <div className="flex justify-center items-center w-24 h-24">
                            <img src="/images/logo/logo-3.png" alt="logo-3" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-slate-200 rounded-full size-28">
                        <div className="flex justify-center items-center w-24 h-24">
                            <img src="/images/logo/logo-4.png" alt="logo-4" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-slate-200 rounded-full size-28">
                        <div className="flex justify-center items-center w-24 h-24">
                            <img src="/images/logo/logo-5.png" alt="logo-5" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-slate-200 rounded-full size-28">
                        <div className="flex justify-center items-center w-24 h-24">
                            <img src="/images/logo/logo-6.png" alt="logo-6" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-slate-200 rounded-full size-28">
                        <div className="flex justify-center items-center w-24 h-24">
                            <img src="/images/logo/logo-7.png" alt="logo-7" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


