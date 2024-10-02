import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const data = [
    { url: '/logo.png' },
    { url: '/logo.png' },
    { url: '/logo.png' },
    { url: '/logo.png' },
    { url: '/logo.png' },
    { url: '/logo.png' },
    { url: '/logo.png' },
    { url: '/logo.png' },
    { url: '/logo.png' },
    { url: '/logo.png' },
    { url: '/logo.png' },
    { url: '/logo.png' },
];

const OurWork = () => {
    return (
        <div className='m-3 md:m-10 mx-auto px-3 md:px-10 text-center'>
            <h3 className='text-xl md:text-2xl font-semibold text-center m-2 text-slate-800'>Our Work</h3>
            <h5 className='text-base text-center font-light text-slate-600'>
                We&apos;ve achieved great results for our clients. Check out some of our previous work and decide for yourself.
            </h5>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-16 m-4 md:m-10 justify-items-center">
                {data.map((item, index) => (
                    <div key={index} className='bg-white w-16 md:w-24 h-16 md:h-24 rounded-lg shadow-md flex justify-center items-center'>
                        <Image
                            src={item.url}
                            alt={`Work Image ${index + 1}`}
                            width={80} // Set the width and height appropriately
                            height={80}
                            objectFit="contain"
                            className='hover:scale-110 duration-200'
                        />
                    </div>
                ))}
            </div>
            <Link href='#'>
                <a className='my-4 md:my-10 font-extralight bg-orange-400 text-xs md:text-base px-10 md:px-16 py-1 md:py-2 rounded-sm md:rounded-lg'>
                    View our Work
                </a>
            </Link>
        </div>
    );
};

export default OurWork;
