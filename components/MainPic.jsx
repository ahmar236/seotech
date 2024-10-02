import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js

const MainPic = () => {
    return (
        <div className='relative h-44 md:h-96 flex w-full'>
            <Image
                src="/mainpic.png" // Update the path if necessary (relative paths like './' may not work in Next.js Image component)
                alt="Main Image"
                layout="fill" // This makes the image fill the parent container
                objectFit="cover" // Similar to 'object-cover' in CSS
                className='w-full' // You can remove 'object-cover' as it is handled by 'objectFit'
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white bg-opacity-10"></div>
            <h2 className='absolute top-2 md:top-10 left-2 md:left-10 text-lg md:text-5xl text-blue-900 font-extrabold'>
                We feel pride in our services
            </h2>
            <p className='absolute left-2 md:left-10 bottom-2 md:bottom-6 mr-2 md:mr-96 font-extralight text-xs md:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque in impedit dolores id praesentium amet voluptates rem, eligendi dolore iure nostrum! Ab iusto recusandae animi, eum, dolorum sed quod molestias veniam quasi quia aspernatur vel iste odio reprehenderit eos perspiciatis!
            </p>
        </div>
    );
}

export default MainPic;
