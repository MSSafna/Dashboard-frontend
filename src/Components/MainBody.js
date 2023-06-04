import React from 'react'
import LiveStatics from './LiveStatics'
import Location from './Location'
import DeviceStatus from './DeviceStatus'

function MainBody() {
    return (
        <>
        <div className='flex flex-warp  mt-4 '>
            <div>
                
            </div>
            <div className='bg-white w-1/3 p-4'>
                <p className='font-semibold'>General inforamtion</p>
                <div className='flex flex-grow'>
                    <p className='text-gray-300'>Projects</p>
                    <div className='bg-gray-300 w-2/3 h-4 ml-4 mt-1 rounded-full ' >
                        <div className='bg-blue-800 w-24 h-4  rounded-full'></div>
                    </div>
                    <p className='text-gray-300 ml-4'>02/10</p>
                </div>

                <div className='flex flex-grow'>
                    <p className='text-gray-300'>Users</p>
                    <div className='bg-gray-300 w-2/3 h-4 ml-8 mt-1 rounded-full ' >
                        <div className='bg-blue-800  h-4  rounded-full'></div>
                    </div>
                    <p className='text-gray-300 ml-4'>03/13</p>
                </div>


                <div className='flex flex-grow'>
                    <p className='text-gray-300'>Channels</p>
                    <div className='bg-gray-300 w-2/3 h-4 ml-2 mt-1 rounded-full ' >
                        <div className='bg-blue-800  h-4  rounded-full'></div>
                    </div>
                    <p className='text-gray-300 ml-4'>03/13</p>
                </div>


                <div className='flex flex-grow'>
                    <p className='text-gray-300'>Device</p>
                    <div className='bg-gray-300 w-2/3 h-4 ml-8 mt-1 rounded-full ' >
                        <div className='bg-blue-800 w-24 h-4  rounded-full'></div>
                    </div>
                    <p className='text-gray-300 ml-4'>05/10</p>
                </div>
            </div>

         <LiveStatics/>
          <div className='h-64'>
         <Location/>
          </div>


        </div>
        <DeviceStatus/>
        </>
    )
}

export default MainBody
