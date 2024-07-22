import React from 'react'

const MainPic = () => {
    return (
        <div className='relative h-96 rounded-3xl overflow-hidden flex w-full'>
            <img src="./mainpic.png" alt="Main Image" className='w-full object-cover' />
            <div className="absolute inset-0 set-0 bg-gradient-to-l from-transparent to-white bg-opacity-10"></div>
            <h2 className='absolute top-6 left-6 text-5xl text-blue-900 font-extrabold'>We feel pride in our services</h2>
            <p className='absolute left-6 bottom-6 mr-96 font-extralight text-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque in impedit dolores id praesentium amet voluptates rem, eligendi dolore iure nostrum! Ab iusto recusandae animi, eum, dolorum sed quod molestias veniam quasi quia aspernatur vel iste odio reprehenderit eos perspiciatis! Et delectus excepturi qui consequuntur quas maxime reiciendis tenetur ab. Expedita inventore est pariatur minima omnis doloremque facilis quod ipsum dolorum, rerum a, quia autem cum. Placeat illum, distinctio porro impedit quia dignissimos doloribus laudantium quod non est nihil atque assumenda minima et, earum molestias repellat quam obcaecati tempore itaque blanditiis soluta. Veritatis delectus rem magni nulla facere quasi! </p>
        </div >
    )
}

export default MainPic
