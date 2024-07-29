import React from 'react'

const MainPic = () => {
    return (
        <div className='relative h-44 md:h-96 flex w-full'>
            <img src="./mainpic.png" alt="Main Image" className='w-full object-cover' />
            <div className="absolute inset-0 set-0 bg-gradient-to-l from-transparent to-white bg-opacity-10"></div>
            <h2 className='absolute top-2 md:top-10 let-2 md:left-10 text-lg md:text-5xl text-blue-900 font-extrabold'>We feel pride in our services</h2>
            <p className='absolute left-2 md:left-10 bottom-2 md:bottom-6 mr-2 md:mr-96 font-extralight text-xs md:text-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque in impedit dolores id praesentium amet voluptates rem, eligendi dolore iure nostrum! Ab iusto recusandae animi, eum, dolorum sed quod molestias veniam quasi quia aspernatur vel iste odio reprehenderit eos perspiciatis! </p>
        </div >
    )
}

export default MainPic
