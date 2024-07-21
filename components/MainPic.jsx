import React from 'react'

const MainPic = () => {
    return (
        <div className='relative h-96 rounded-3xl overflow-hidden flex w-full'>
            <img src="./mainpic.png" alt="Main Image" className='w-full object-cover' />
            <h1 className='absolute top-3 left-3 text-5xl text-blue-900 font-extrabold z-50 flex'>We feel pride in our services</h1>
            <p></p>
        </div >
    )
}

export default MainPic
