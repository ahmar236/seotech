import React from 'react'
import Link from 'next/link';

const data = [
    { url: './logo.png' },
    { url: './logo.png' },
    { url: './logo.png' },
    { url: './logo.png' },
    { url: './logo.png' },
    { url: './logo.png' },
    { url: './logo.png' },
    { url: './logo.png' },
    { url: './logo.png' },
    { url: './logo.png' },
    { url: './logo.png' },
    { url: './logo.png' },
]

const OurWork = () => {
    return (
        <div className='m-10 text-center'>
            <h3 className='text-2xl font-semibold text-center m-2 text-slate-800'>Our Work</h3>
            <h5 className='text-base text-center font-light text-slate-600'>We've achieved great results for our clients. Check out some of our previous work and decide for yourself.</h5>
            < div className=" grid grid-cols-2 md:grid-cols-6 md:gap-16 m-10 " >
                {
                    data.map((item, index) => (
                        <div key={index} className='bg-white w-24 h-24 rounded-lg shadow-md flex justify-center align-middle'>
                            <img src={item.url} className='w-20 h-auto object-contain hover:scale-110 duration-200' />
                        </div>
                    ))
                }
            </div >
            <Link href='#' className='my-10 font-extralight bg-orange-400 px-16 py-2 rounded-lg'>View our Work</Link>
        </div >
    );
}

export default OurWork
