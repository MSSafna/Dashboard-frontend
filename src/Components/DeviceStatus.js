import React from 'react'
import ActivityLog from './ActivityLog'

function DeviceStatus() {
  return (
    <div className='flex'>
     <div className='mt-2  bg-white h-64  w-1/3  '>
      <p className='font-semibold m-4 mt-4 pt-4'>Device status</p>
   
     <div className='w-full h-40 overflow-y-scroll '>

      <table className='w-full '>
        <tr className='p'>
            <td className='ml-2 p-2'><span className='p-2 mt-4'>Device Name</span></td>
            <td className='pl-6 m-4 p-2'><button className='  bg-green-800 rounded-md h-6 w-12 '> <span className='text-white text-sm'>online</span></button></td>
            <td className='pl-6 p-2'><span className='p-2 mt-4'>Last response</span></td>
        </tr>

        <tr  className='bg-gray-200 mt-2'>
            <td className='p-2'><span className='p-2 mt-4'>Test Device 01</span></td>
            <td className='pl-6 m-4 p-2'><button className='  bg-red-800 rounded-md h-6 w-12 '> <span className='text-white text-sm'>offline</span></button></td>
            <td className='pl-6 p-2'><span className='p-2 mt-4'>Wed Apr 26 2023 ; 03:00:10</span></td>
        </tr>

        <tr  className=' mt-2'>
            <td className='p-2'><span className='p-2 mt-4'>Test Device 01</span></td>
            <td className='pl-6 m-4 p-2'><button className='  bg-red-800 rounded-md h-6 w-12 '> <span className='text-white text-sm'>offline</span></button></td>
            <td className='pl-6 p-2'><span className='p-2 mt-4'>Wed Apr 26 2023 ; 03:00:10</span></td>
        </tr>

        <tr  className='bg-gray-200 mt-2 '>
            <td className='p-2'><span className='p-2 mt-4'>Test Device 01</span></td>
            <td className='pl-6 m-4 p-2'><button className='  bg-green-800 rounded-md h-6 w-12 '> <span className='text-white text-sm'>online</span></button></td>
            <td className='pl-6 p-2'><span className='p-2 mt-4'>Wed Apr 26 2023 ; 03:00:10</span></td>
        </tr>

        <tr  className=' mt-2'>
            <td className='p-2'><span className='p-2 mt-4'>Test Device 01</span></td>
            <td className='pl-6 m-4 p-2'><button className='  bg-green-800 rounded-md h-6 w-12 '> <span className='text-white text-sm'>online</span></button></td>
            <td className='pl-6 p-2'><span className='p-2 mt-4'>Wed Apr 26 2023 ; 03:00:10</span></td>
        </tr>
        

       


      </table>
     </div>
     </div>
     <ActivityLog/>
    </div>
  )
}

export default DeviceStatus
