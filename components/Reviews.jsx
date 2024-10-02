import React from 'react'

const Reviews = () => {
    return (
        <div
            className="relative w-full h-52 md:h-72 bg-cover bg-fixed bg-center"
            style={{ backgroundImage: "url('/world.png')" }}
        >
            <div className="absolute inset-0 bg-white opacity-30"></div>
            <div className="relative z-10 text-black text-center flex flex-col items-center justify-center h-full">
                <h1 className="text-lg md:text-2xl font-semibold mb-8">Trusted & supported by</h1>
                <div className='flex mx-4 md:mx-10 justify-center gap-5 md:gap-20'>
                    <div className='bg-white w-16 md:w-32 h-16 md:h-32 shadow-lg border border-slate-400 flex justify-center align-middle'>
                        <img src="./Logo1.png" className='w-10 md:w-20 h-auto object-contain hover:scale-110 duration-200' />
                    </div>
                    <div className='bg-white w-16 md:w-32 h-16 md:h-32 shadow-lg border border-slate-400 flex justify-center align-middle'>
                        <img src="./Logo2.png" className='w-10 md:w-20 h-auto object-contain hover:scale-110 duration-200' />
                    </div>
                    <div className='bg-white w-16 md:w-32 h-16 md:h-32 shadow-lg border border-slate-400 flex justify-center align-middle'>
                        <img src="./Logo3.png" className='w-10 md:w-20 h-auto object-contain hover:scale-110 duration-200' />
                    </div>
                    <div className='bg-white w-16 md:w-32 h-16 md:h-32 shadow-lg border border-slate-400 flex justify-center align-middle'>
                        <img src="./Logo4.png" className='w-10 md:w-20 h-auto object-contain hover:scale-110 duration-200' />
                    </div>
                    <div className='bg-white w-16 md:w-32 h-16 md:h-32 shadow-lg border border-slate-400 flex justify-center align-middle'>
                        <img src="./Logo5.png" className='w-10 md:w-20 h-auto object-contain hover:scale-110 duration-200' />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Reviews
