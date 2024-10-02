'use client'; // Add this if you're using Next.js 13+ with the new app directory structure

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const Carousel = () => {
    const images = [
        '/carousal/1.jpg',
        '/carousal/2.jpg',
        '/carousal/3.jpg',
        '/carousal/4.jpg',
        '/carousal/5.jpg',
        '/carousal/6.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, [images.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [nextSlide]); // Now `nextSlide` is in the dependency array

    return (
        <div className='relative w-full mx-auto mt-8'>
            <div className='overflow-hidden rounded-lg'>
                <div
                    className='flex transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((src, index) => (
                        <div key={index} className='w-full flex-shrink-0'>
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                width={1920}
                                height={1080}
                                className='w-full h-[250px] md:h-[500px] object-cover'
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='absolute inset-0 flex items-center justify-between px-4'>
                <button
                    onClick={prevSlide}
                    className='p-2 w-12 h-12 text-white bg-gray-800 rounded-full hover:bg-gray-600 focus:outline-none'
                >
                    &#10094;
                </button>
                <button
                    onClick={nextSlide}
                    className='p-2 w-12 h-12 text-white bg-gray-800 rounded-full hover:bg-gray-600 focus:outline-none'
                >
                    &#10095;
                </button>
            </div>
            <div className='flex justify-center mt-4'>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 mx-2 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
