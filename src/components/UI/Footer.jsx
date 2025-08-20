import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export const Footer = () => {
    return (
        <div>
            <footer className="container mx-auto bg-green-900 rounded-2xl px-4 py-10 my-10">
                <div className="bg-white mx-auto rounded-2xl">
                    <div className="flex justify-around items-center">
                        <div className="flex flex-col mt-10">
                            <h1 className="text-2xl font-semibold mb-10">Company</h1>
                            <ul>
                                <li>What new</li>
                                <li>About</li>
                                <li>contact us</li>
                                <li>Career</li>
                                <li>Social media</li>
                                <li>Press</li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-10">
                            <h1 className="text-2xl font-semibold mb-10">Commmunity</h1>
                            <ul>
                                <li>What new</li>
                                <li>About</li>
                                <li>contact us</li>
                                <li>Career</li>
                                <li>Social media</li>
                                <li>Press</li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-10">
                            <h1 className="text-2xl font-semibold mb-10">Support</h1>
                            <ul>
                                <li>What new</li>
                                <li>About</li>
                                <li>contact us</li>
                                <li>Career</li>
                                <li>Social media</li>
                                <li>Press</li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-10">
                            <h1 className="text-2xl font-semibold mb-10">Trust & level</h1>
                            <ul>
                                <li>What new</li>
                                <li>About</li>
                                <li>contact us</li>
                                <li>Career</li>
                                <li>Social media</li>
                                <li>Press</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-10 px-10">
                        <div className="flex gap-1">
                            <img src="/images/card/play-removebg-preview.png" alt="phone" />
                            <img src="/images/card/istore-removebg-preview.png" alt="phone" />
                        </div>
                        <div className="flex gap-2">
                            <div className="rounded-full bg-slate-300 flex justify-center items-center size-10">
                                <FaFacebook className="size-5 p-0.5" />
                            </div>
                            <div className="rounded-full bg-slate-300 flex justify-center items-center size-10">
                                <FaInstagramSquare className="size-5 p-0.5" />
                            </div>
                            <div className="rounded-full bg-slate-300 flex justify-center items-center size-10">
                                <FaXTwitter className="size-5 p-0.5" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-green-200 flex justify-center items-center mt-2 p-10 rounded-2xl my-3">
                    <img src="/images/logo.PNG" alt="logo" className="size-25" />
                    <h1 className="text-7xl font-bold text-green-800">MEDICARE</h1>
                </div>
                <div className="flex justify-between items-center text-green-100 mt-10">
                    <p>2022 Medicare</p>
                    <p>Design and developed by MUNESO</p>
                </div>
            </footer >
        </div>
    )
}


