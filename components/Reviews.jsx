import React from 'react'

const Reviews = () => {
    return (
        <div
            className="relative w-full h-64 bg-cover bg-fixed bg-center"
            style={{ backgroundImage: "url('/world.png')" }}
        >
            <div className="absolute inset-0 bg-white opacity-30"></div>
            <div className="relative z-10 text-black text-center flex flex-col items-center justify-center h-full">
                <h1 className="text-2xl font-semibold my-6">Trusted & supported by</h1>
                <div className='flex mx-10 justify-between gap-20'>
                    <div className='bg-white w-32 h-32 shadow-lg border border-slate-400 flex justify-center align-middle'>
                        <img src="./Logo1.png" className='w-20 h-auto object-contain hover:scale-110 duration-200' />
                    </div>
                    <div className='bg-white w-32 h-32 shadow-lg border border-slate-400 flex justify-center align-middle'>
                        <img src="./Logo2.png" className='w-20 h-auto object-contain hover:scale-110 duration-200' />
                    </div>
                    <div className='bg-white w-32 h-32 shadow-lg border border-slate-400 flex justify-center align-middle'>
                        <img src="./Logo3.png" className='w-20 h-auto object-contain hover:scale-110 duration-200' />
                    </div>
                    <div className='bg-white w-32 h-32 shadow-lg border border-slate-400 flex justify-center align-middle'>
                        <img src="./Logo4.png" className='w-20 h-auto object-contain hover:scale-110 duration-200' />
                    </div>
                    <div className='bg-white w-32 h-32 shadow-lg border border-slate-400 flex justify-center align-middle'>
                        <img src="./Logo5.png" className='w-20 h-auto object-contain hover:scale-110 duration-200' />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Reviews
