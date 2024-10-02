import React from 'react';
import Image from 'next/image';

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
                        <Image
                            src="/Logo1.png"
                            alt="Logo 1"
                            width={80}
                            height={80}
                            objectFit="contain"
                            className='hover:scale-110 duration-200'
                        />
                    </div>
                    <div className='bg-white w-16 md:w-32 h-16 md:h-32 shadow-lg border border-slate-400 flex justify-center align-middle'>
                        <Image
                            src="/Logo2.png"
                            alt="Logo 2"
                            width={80}
                            height={80}
                            objectFit="contain"
                            className='hover:scale-110 duration-200'
                        />
                    </div>
                    <div className='bg-white w-16 md:w-32 h-16 md:h-32 shadow-lg border border-slate-400 flex justify-center align-middle'>
                        <Image
                            src="/Logo3.png"
                            alt="Logo 3"
                            width={80}
                            height={80}
                            objectFit="contain"
                            className='hover:scale-110 duration-200'
                        />
                    </div>
                    <div className='bg-white w-16 md:w-32 h-16 md:h-32 shadow-lg border border-slate-400 flex justify-center align-middle'>
                        <Image
                            src="/Logo4.png"
                            alt="Logo 4"
                            width={80}
                            height={80}
                            objectFit="contain"
                            className='hover:scale-110 duration-200'
                        />
                    </div>
                    <div className='bg-white w-16 md:w-32 h-16 md:h-32 shadow-lg border border-slate-400 flex justify-center align-middle'>
                        <Image
                            src="/Logo5.png"
                            alt="Logo 5"
                            width={80}
                            height={80}
                            objectFit="contain"
                            className='hover:scale-110 duration-200'
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Reviews;
