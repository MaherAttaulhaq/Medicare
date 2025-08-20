import React from 'react'

export const CategoryCard = () => {
  return (
    <div>
        <section className="container mx-auto px-4 py-10 -mt-16 bg-white rounded-4xl">
            <div className="flex flex-wrap justify-center gap-8 md:gap-10 mt-10">
                <div className="flex flex-col items-center w-24 sm:w-28 md:w-42">
                    <img src="/images/image-1.PNG" alt="Bone & Joint care" className="w-40 h-56" />
                    <p className="font-semibold text-center mt-2 text-sm md:text-base">Bone & Joint care</p>
                </div>

                <div className="flex flex-col items-center w-24 sm:w-28 md:w-42">
                    <img src="/images/image-2.PNG" alt="Diabetes cares" className="w-40 h-56" />
                    <p className="font-semibold text-center mt-2 text-sm md:text-base">Diabetes cares</p>
                </div>

                <div className="flex flex-col items-center w-24 sm:w-28 md:w-42">
                    <img src="/images/image-3.PNG" alt="Kidney care" className="w-40 h-56" />
                    <p className="font-semibold text-center mt-2 text-sm md:text-base">Kidney care</p>
                </div>

                <div className="flex flex-col items-center w-24 sm:w-28 md:w-42">
                    <img src="/images/image-4.PNG" alt="Liver care" className="w-40 h-56" />
                    <p className="font-semibold text-center mt-2 text-sm md:text-base">Liver care</p>
                </div>

                <div className="flex flex-col items-center w-24 sm:w-28 md:w-42">
                    <img src="/images/image-5.PNG" alt="Respiratory care" className="w-40 h-56" />
                    <p className="font-semibold text-center mt-2 text-sm md:text-base">Respiratory care</p>
                </div>

                <div className="flex flex-col items-center w-24 sm:w-28 md:w-42">
                    <img src="/images/image-6.PNG" alt="Eye care" className="w-full h-56" />
                    <p className="font-semibold text-center mt-2 text-sm md:text-base">Eye care</p>
                </div>
            </div>
        </section>
    </div>
  )
}

