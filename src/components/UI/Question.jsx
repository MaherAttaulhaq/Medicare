import React, { useState } from 'react'
import { FaArrowDown } from "react-icons/fa6";
import data from "../../api/questionData.json"
export const Question = () => {
    const [selected, setselected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setselected(null)
        }
        setselected(i)
    }
    return (
            <section className="container mx-auto px-4 py-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-center">
                        Got Questions?
                    </h1>
                    <div className="container mx-auto">
                        {data.map((item, i) => {
                            return (

                                <div key={i} className="bg-slate-100  rounded-md p-3 my-5" onClick=
                                    {() => toggle(i)}>
                                    <div className="flex justify-between m-4">
                                        <p className="text-2xl font-semibold">{item.question}</p>
                                        <button>
                                            {selected === i ? '-' : '+'}
                                        </button>
                                    </div>
                                    <p className={selected === i ? 'block mb-4' : 'hidden'}>
                                        {item.answer}
                                    </p>
                                </div>
                            )

                        })}
                    </div>
                </div>
            </section>
    )
}


