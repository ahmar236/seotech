import React from 'react';
import Link from 'next/link';

const data = [
    {
        icon: 'bxs-hand-up',
        heading: 'PPC Services',
        details: 'S-Digi Marketing is committed to providing exceptional and reliable PPC services.'
    },
    {
        icon: 'bx-cog',
        heading: 'Brand Strategy',
        details: 'A brand strategy is a long-term plan designed to develop a successful brand and achieve specific goals.'
    },
    {
        icon: 'bx-buildings',
        heading: 'Local SEO',
        details: 'Your local presence encompasses all the information prospective customers can find about you online.'
    },
    {
        icon: 'bx-bar-chart-alt-2',
        heading: 'SEO Analysis',
        details: 'As long as search engines exist, people will compete for the top spot on search engine results pages.'
    },
];

const Cards2 = () => {
    return (
        <div id='services' className='m-0 bg-sky-700 p-3 md:p-10'>
            <div className='text-center text-white m-3 md:mb-10'>
                <h3 className='text-lg md:text-2xl font-medium'>Our Top Notch Services</h3>
                <h5 className='text-base md:text-lg font-extralight'>Top-tier services to meet all your digital needs</h5>
            </div>
            < div className=" grid grid-cols-1 place-items-center md:grid-cols-4 gap-4 md:gap-10" >
                {
                    data.map((item, index) => (
                        <div key={index} className="max-w-sm p-1 md:p-6 bg-amber-100 border border-sky-800 shadow text-black text-center">
                            <i className={`bx ${item.icon} text-orange-400 text-2xl md:text-5xl hover:scale-125 duration-150 m-2 md:m-6`}></i>
                            <a href="#">
                                <h5 className="mb-2 text-base md:text-xl mx-2 font-normal tracking-tight text-black hover:text-orange-400">
                                    {item.heading}
                                </h5>
                            </a>
                            <p className="mb-3 font-extralight text-xs text-black">
                                {item.details}
                            </p>
                            <Link href='#' className='text-orange-400 font-light text-xs md:text-base'>More info..</Link>
                        </div>
                    ))
                }
            </div >
        </div >
    );
}

export default Cards2;
