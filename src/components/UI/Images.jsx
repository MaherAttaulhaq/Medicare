import React from 'react'

export const Images = () => {
    return (
        <div>
            <section className="container mx-auto px-4 py-10">
                <div className="flex flex-col gap-10 justify-around items-center md:flex md:flex-row">
                    <div className="bg-slate-200 rounded-2xl">
                        <div className="flex flex-col gap-10 justify-center items-center m-28">
                            <img src="/images/card/cards-removebg-preview.png" alt="card" />
                            <h1 className="text-3xl font-bold">Download our <br /><span className="text-gray-500">Healthcare</span><span>
                                App for <br />our easy access
                            </span>
                            </h1>
                        </div>
                        <div className="flex justify-start items-start m-10 pl-14 gap-4">
                            <img src="/images/card/play-removebg-preview.png" alt="phone" />
                            <img src="/images/card/istore-removebg-preview.png" alt="phone" />
                        </div>
                    </div>
                    <div className="bg-yellow-300 rounded-2xl">
                        <div className="flex justify-end items-end gap-1 mr-1">
                            <img src="/images/logo.PNG" alt="logo" className="w-10 h-10 mt-1" />
                            <p className="text-2xl font-semibold">Medicare</p>
                        </div>
                        <div className="flex justify-center items-center relative">
                            <img src="/images/card/iphone-removebg-preview.png" alt="iphone" />
                            <div className="absolute top-30 right-10">
                                <img src="/images/card/dr-removebg-preview.png" alt="dr" />
                            </div>
                            <div className="absolute top-70 left-10">
                                <img src="/images/card/dental-removebg-preview.png" alt="dental" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


