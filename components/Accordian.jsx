'use client'
import React from 'react'
import Image from 'next/image'

function Accordian() {
    const images = [
        '/accordian/1.png',
        '/accordian/2.png',
        '/accordian/3.png',
        '/accordian/4.png',
        '/accordian/5.png',
        '/accordian/6.png'
    ];

    const animation = (e) => {
        const cards = document.querySelectorAll('.card');

        const reset = () => {
            cards.forEach(card => {
                card.classList.remove('animation');
            });
        };

        if (!e.target.closest('.card')) return;

        reset();

        e.target.closest('.card').classList.add('animation');
    };

    return (
        <div className=' h-44 md:h-96 grid place-items-center'>
            <div className='flex gap-[0.15rem] p-[0.15rem]'>
                {images.map((image, index) => (
                    <div
                        key={index}
                        onClick={animation}
                        className='card flex-1 h-44 md:h-96 cursor-pointer overflow-hidden transition delay-700'
                    >
                        <Image
                            src={image}
                            alt={`Accordian Image ${index + 1}`}
                            width={500}
                            height={500}
                            className='w-full h-full object-cover'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accordian;
