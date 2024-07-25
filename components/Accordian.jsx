'use client'
import React from 'react'
import Image from 'next/image'

function Accordian() {

    const animation = (e) => {

        const cards = document.querySelectorAll('.card');

        const reset = () => {
            cards.forEach(card => {
                card.classList.remove('animation')
            })
        }

        if (!e.target.closest('.card')) return;

        reset();

        e.target.parentElement.classList.add('animation');
    }
    return (
        <div className='h-96 grid place-items-center'>
            <div className='flex gap-[0.15rem] p-[0.15rem]'>
                <div onClick={animation}
                    className='card flex-1 h-96 cursor-pointer overflow-hidden transition delay-700' >
                    <Image
                        src='/accordian/1.png'
                        alt=''
                        width={500}
                        height={500}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div onClick={animation}
                    className='card flex-1 h-96 cursor-pointer overflow-hidden transition delay-700' >
                    <Image
                        src='/accordian/2.png'
                        alt=''
                        width={500}
                        height={500}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div onClick={animation}
                    className='card flex-1 h-96 cursor-pointer overflow-hidden transition delay-700' >
                    <Image
                        src='/accordian/3.png'
                        alt=''
                        width={500}
                        height={500}
                        className=' w-full h-full object-cover'
                    />
                </div>
                <div onClick={animation}
                    className='card flex-1 h-96 cursor-pointer overflow-hidden transition delay-700' >
                    <Image
                        src='/accordian/4.png'
                        alt=''
                        width={500}
                        height={500}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div onClick={animation}
                    className='card flex-1 h-96 cursor-pointer overflow-hidden transition delay-700' >
                    <Image
                        src='/accordian/5.png'
                        alt=''
                        width={500}
                        height={500}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div onClick={animation}
                    className='card flex-1 h-96 cursor-pointer overflow-hidden transition delay-700' >
                    <Image
                        src='/accordian/6.png'
                        alt=''
                        width={500}
                        height={500}
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
        </div >
    )
}

export default Accordian
