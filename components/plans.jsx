import React from 'react'
import Link from 'next/link';

const data = [
    {
        head: 'BASIC',
        color: 'text-black',
        rate: '500',
        kwords: '30 Keywords',
        blinks: '40 Backlinks (per month)',
        gbp: 'GBP (GMB) - ',
        tick: 'bx-check',
        geo: 'Geotagging - ',
        geotick: 'bx-x',
        border: 'border-sky-800',
        width: 'border-1',
    },
    {
        head: 'SILVER',
        color: 'text-black',
        rate: '700',
        kwords: '40 Keywords',
        blinks: '60 Backlinks (per month)',
        gbp: 'GBP (GMB) - ',
        tick: 'bx-check',
        geo: 'Geotagging - ',
        geotick: 'bx-x',
        border: 'border-sky-800',
        width: 'border-1',
    },
    {
        head: 'GOLD',
        color: 'text-amber-500',
        rate: '1000',
        kwords: '50 Keywords',
        blinks: '100 Backlinks (per month)',
        gbp: 'GBP (GMB) - ',
        tick: 'bx-check',
        geo: 'Geotagging - ',
        geotick: 'bx-check',
        border: 'border-amber-500',
        width: 'border-8',
    },
    {
        head: 'PREMIUM',
        color: 'text-black',
        rate: '1800',
        kwords: '100 Keywords',
        blinks: '200 Backlinks (per month)',
        gbp: 'GBP (GMB) - ',
        tick: 'bx-check',
        geo: 'Geotagging - ',
        geotick: 'bx-check',
        border: 'border-sky-800',
        width: 'border-1',
    },

];

const Plans = () => {
    return (
        <div id='plans'
            className="relative w-full h-[900px] md:h-[650px] mx-auto bg-cover bg-fixed bg-center"
            style={{ backgroundImage: "url('/pic1.png')" }}>
            <div className="absolute inset-0 bg-sky-700 opacity-50"></div>
            <div className=' absolute inset-0 p-2 md:p-10'>
                <div className='text-center text-white mb-5 md:mb-10'>
                    <h3 className='text-xl md:text-3xl font-medium'>Our Plans</h3>
                    <h5 className='text-sm md:text-xl font-extralight'>Choose the plan that right for you and let’s get started</h5>
                </div>
                < div className=" grid grid-cols-1 px-2 md:px-10 md:grid-cols-4 gap-2 md:gap-16 justify-items-stretch" >
                    {
                        data.map((item, index) => (
                            <div key={index} className={`w-full p-1 md:p-6 bg-white border ${item.border} ${item.width} shadow-xl shadow-gray-500 font-extralight rounded-xl text-center`}>
                                < h5 className={`text-2xl md:text-4xl font-extrabold ${item.color} pb-1 md:pb-6 mt-1 md:mt-2`} > {item.head}</h5>
                                < hr className='mx-0' />
                                <div className='flex justify-center items-center py-1 md:py-4'>
                                    <p className='mb-2 md:mb-4 text-xs md:text-base italic'>$</p>
                                    <h5 className='text-lg md:text-4xl text-green-400 font-semibold italic'>{item.rate}</h5>
                                    <p className='italic text-xs md:text-sm font-bold mt-2 md:mt-4'>monthly</p>
                                </div>
                                <p className='font-extralight text-xs md:text-sm md:py-2'>{item.kwords}</p>
                                <p className='font-extralight text-xs md:text-sm md:py-2'>{item.blinks}</p>
                                <div className='flex justify-center items-center py-0 md:py-2'>
                                    <p className='font-extralight text-xs md:text-sm py-0 md:py-2'>{item.gbp}</p>
                                    <i className={`bx ${item.tick} text-sm md:text-lg font-bold`}></i>
                                </div>
                                <div className='flex justify-center items-center py-0 md:py-2'>
                                    <p className='font-extralight  text-xs md:text-sm p-0 md:py-2'>{item.geo}</p>
                                    <i className={`bx ${item.geotick} text-sm md:text-lg font-bold`}></i>
                                </div>
                                <div className='py-1 md:py-8'>
                                    <Link href='#' className='text-white bg-orange-400 px-8 py-1 md:py-2 rounded-xl font-extralight text-sm md:text-base'>Start Today</Link>
                                </div>

                            </div>
                        ))
                    }
                </div >
            </div >

        </div >
    );
}

export default Plans
