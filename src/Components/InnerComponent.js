import React from 'react'
import MainBody from './MainBody'

function InnerComponent() {
  return (
    <div>

    <div className='p-4 bg-white w-full h-24 flex '>
     <p>Addidas Mobile</p>
     <div className='ml-36'>
        <p className='text-gray-200'>Campaings
        <br></br>
        <span className='text-black'>8</span>
        </p>
     </div>
     <div className='ml-36'>
        <p className='text-gray-200'>Campaings
        <br></br>
        <span className='text-black'>8</span>
        </p>
     </div>
     <div className='ml-36'>
        <p className='text-gray-200'>Channela
        <br></br>
        <span className='text-black'>9/10</span>
        </p>
     </div>
     <div className='ml-36  w-32'>
        <p className='text-gray-200'>Last edted by
        <br></br>
        <span className='text-black'>varun</span>
        </p>
     </div>
     <div className='ml-36  w-32'>
        <p className='text-gray-200'>Last Edited on
        <br></br>
        <span className='text-black '>5 hours ago</span>
        </p>
     </div>
    </div>
     <MainBody></MainBody>
    </div>
  )
}

export default InnerComponent
