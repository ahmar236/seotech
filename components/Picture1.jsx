import React from 'react';
import Image from 'next/image';

const Picture1 = () => {
    return (
        <div className='h-auto mx-5 w-full md:mx-auto overflow-hidden flex justify-center text-center gap-x-10'>
            <Image
                src="/seo analysis.jpg"
                alt="SEO Analysis"
                width={400} // Adjust width and height according to your needs
                height={300}
                objectFit="cover"
                className='w-full w-1/3 shadow-md'
            />
            <Image
                src="/inbound marketing.jpg"
                alt="Inbound Marketing"
                width={400}
                height={300}
                objectFit="cover"
                className='w-full w-1/3 shadow-md'
            />
        </div>
    );
};

export default Picture1;
