import React from 'react'
import Link from 'next/link';

const data = [
    {
        head: 'BASIC',
        rate: '500',
        kwords: '30 Keywords',
        blinks: '40 Backlinks (per month)',
        gbp: 'GBP (GMB) - ',
        tick: 'bx-check',
        geo: 'Geotagging - ',
        geotick: 'bx-x'
    },
    {
        head: 'SILVER',
        rate: '700',
        kwords: '40 Keywords',
        blinks: '60 Backlinks (per month)',
        gbp: 'GBP (GMB) - ',
        tick: 'bx-check',
        geo: 'Geotagging - ',
        geotick: 'bx-x'
    },
    {
        head: 'GOLD',
        rate: '1000',
        kwords: '50 Keywords',
        blinks: '100 Backlinks (per month)',
        gbp: 'GBP (GMB) - ',
        tick: 'bx-check',
        geo: 'Geotagging - ',
        geotick: 'bx-check'
    },
    {
        head: 'PREMIUM',
        rate: '1800',
        kwords: '100 Keywords',
        blinks: '200 Backlinks (per month)',
        gbp: 'GBP (GMB) - ',
        tick: 'bx-check',
        geo: 'Geotagging - ',
        geotick: 'bx-check'
    },

];

const Plans = () => {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-fixed bg-center"
            style={{ backgroundImage: "url('/pic1.png')" }}>
            <div className="absolute inset-0 bg-sky-700 opacity-50"></div>
            <div className=' absolute inset-0 p-10'>
                <div className='text-center text-black mb-10'>
                    <h3 className='text-2xl font-medium'>Our Plans</h3>
                    <h5 className='text-lg font-extralight'>Choose the plan that right for you and let’s get started</h5>
                </div>
                < div className=" grid grid-cols-1 md:grid-cols-4 md:gap-10" >
                    {
                        data.map((item, index) => (
                            <div key={index} className="max-w-sm p-6 bg-white border border-sky-800 shadow font-extralight rounded-xl text-center">
                                <h5 className='text-2xl pb-6 mt-2'>{item.head}</h5>
                                <hr className='mx-0' />
                                <div className='flex justify-center items-center py-4'>
                                    <p className='mb-4'>$</p>
                                    <h5 className='text-4xl text-green-400 font-semibold italic'>{item.rate}</h5>
                                    <p className='italic text-sm font-bold mt-4'>monthly</p>
                                </div>
                                <p className='font-extralight text-sm py-2'>{item.kwords}</p>
                                <p className='font-extralight text-sm py-2'>{item.blinks}</p>
                                <div className='flex justify-center items-center py-2'>
                                    <p className='font-extralight text-sm'>{item.gbp}</p>
                                    <i className={`bx ${item.tick} text-lg font-bold`}></i>
                                </div>
                                <div className='flex justify-center items-center py-2'>
                                    <p className='font-extralight text-sm'>{item.geo}</p>
                                    <i className={`bx ${item.geotick} text-lg font-bold`}></i>
                                </div>
                                <div className='py-8'>
                                    <Link href='#' className='text-white bg-orange-400 px-8 py-2 rounded-xl font-extralight text-base'>Start Today</Link>
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
