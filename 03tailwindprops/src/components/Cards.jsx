import React from 'react'

function Cards(props) {
    console.log("Props", props)
    return (
        <div className='relative h-[400px] w-[300px] rounded-md mt-4'>
        <img src="https://images.pexels.com/photos/30356380/pexels-photo-30356380/free-photo-of-historic-tower-in-krakow-poland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        alt='AirMax Pro'
        className='z-0 h-full w-full rounded-md object-cover' />
        <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
        <div className='absolute bottom-4 left-4 text-left'>
          <h1 className='text-lg font-semibold text-white'>Delba</h1>
          <p className='mt-2 text-sm text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolores?</p>
          <button className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white'>View Profile</button>
        </div>
      </div>
    )
}

export default Cards
