import React from 'react';

const data = [
    {
        icon: 'bx-line-chart',
        heading: 'Online Reputation Management',
        details: 'Negative press and feedback can significantly damage your business. If not addressed promptly, your business may struggle to recover. Our expert team specializes in enhancing positive brand visibility and minimizing the impact of negative feedback.'
    },
    {
        icon: 'bx-bar-chart-alt-2',
        heading: 'Conversions',
        details: 'The ultimate objective of any marketing campaign is the conversion rate. Many inexperienced marketers lose sight of this by focusing excessively on experimentation. We prioritize creating lean and straightforward campaigns that are centered on achieving conversions.'
    },
    {
        icon: 'bxs-hourglass',
        heading: 'Real-Time Analytics',
        details: 'Our team diligently monitors all marketing campaigns to ensure they run smoothly. This vigilance allows us to promptly identify any negative shifts in trends and respond immediately. Quick action helps maintain your website’s ranking and protect your company’s reputation.'
    },
];

const Cards1 = () => {
    return (
        <div className='m-3 md:m-10'>
            < div className=" grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8" >
                {
                    data.map((item, index) => (
                        <div key={index} className="max-w-sm p-1 md:p-6 bg-white border border-gray-200 shadow text-center">
                            <i className={`bx ${item.icon} text-orange-400 text-2xl md:text-5xl hover:scale-125 duration-150 m-2 md:m-6`}></i>
                            <a href="#">
                                <h5 className="mb-2 text-base md:text-xl mx-2 font-semibold tracking-tight text-gray-900 hover:text-orange-400">
                                    {item.heading}
                                </h5>
                            </a>
                            <p className="mb-3 font-extralight text-xs md:text-sm text-gray-500">
                                {item.details}
                            </p>
                        </div>
                    ))
                }
            </div >
        </div>
    );
}

export default Cards1;
