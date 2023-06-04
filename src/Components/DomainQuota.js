import React from 'react'

function DomainQuota() {
  return (
    <div className='ml-4 mt-2   bg-white' style={{width:'481px',height:'214px'}} >
     <p className='p-4 font-semibold'>Domain Quota</p>
     <div className='flex'>
     <div className=" w-24 h-24 rounded-full border-8 border-gray-300 bg-transparent ml-4 mr-8 -mt-6">
      <p className='ml-4 mt-6 text-gray-300'>60.33%
      <span> <p className='-mt-2 ml-1'>Used</p></span>
      </p>
     
      </div>
     <div className='flex'>

     <div>
        <p className='text-gray-300 -mt-2'>Data Usage</p>
        <p className='-mt-4 text-xl'>60.33gb/100gb</p>
     </div>
     <div className='-mt-10 ml-6 mr-4'>
      <table>
        <tr>
            <td>
              <p className='text-gray-300'> Today
              <span className='-mt-4'><p className='text-2xl text-black'>30.00%</p></span>
                </p> 
             </td>
             <td>
                <p className='-mt-2 ml-4 text-sm text-green-700'>increase
                <span><p className='text-lg text-black'>+15.00</p></span>
                </p>
             </td>
        </tr>



        <tr className='-mt-4'>
            <td>
              <p className='text-gray-300'> This week
              <span className='-mt-4'><p className='text-2xl text-black'>15.00%</p></span>
                </p> 
             </td>
             <td>
                <p className='-mt-2 ml-4 text-sm text-red-700'>Decrease
                <span><p className='text-lg text-black'>-15.00</p></span>
                </p>
             </td>
        </tr>
      </table>
     </div>
     </div>
     </div>
    </div>
  )
}

export default DomainQuota
