import React from 'react'

const Picture1 = () => {
    return (
        <div className='relative h-96 mx-auto overflow-hidden flex justify-center text-center'>
            <img src="./pic2.png" alt="Main Image" className='w-full object-cover' />
            <div className="absolute bg-white bottom-16 left-44 w-60 h-36 p-2">
                <img src="./f51cc66a9f724c721340e39c1c981a32-Photoroom.png" className='w-20 mx-auto' alt="" />
                <h2 className='text-lg text-blue-900 font-normal'>Unparalelled Tech Services</h2>
            </div>

        </div >
    )
}

export default Picture1