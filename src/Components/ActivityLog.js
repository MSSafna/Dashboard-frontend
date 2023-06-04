import React from 'react'
import monitor from '../images/monitorImg.png'
import playlist from '../images/playlist.png'
import command from '../images/command-line.png'

function ActivityLog() {
  return (
    <div className=' ml-8 bg-white mt-2  ' style={{width: '428px'
    }}>
     <div className='p-4'>
        <p className='font-semibold'>Activity Logs</p>
     </div>
      <div className=' h-40 overflow-y-scroll w-full  -mt-4'>

        <table>
            <tr>
                <td>
                    <img src={monitor} className='w-6 h-6 ml-4'/>
                </td>
                <td >
                   <p className='mt-4 ml-3 text-lg'>Device
                   <span className='text-xs '><p>
                     FutureIK-device1 report generated successfully</p></span>
                   </p>
                </td>
                <td >
                    <p className='mt-4 ml-2 text-gray-300'>16Mar 2023,
                      <span> <p>06:30:25 PM</p></span>  
                    </p> 
                </td>   
                
            </tr>

            <tr>
                    <td colspan="3">
                    <hr class="border-gray-500 w-full -mt-2"/>
                    </td>
           </tr>


           <tr>
                <td>
                    <img src={command} className='w-6 h-6 ml-4 -mt-6'/>
                </td>
                <td >
                   <p className='-mt-2 ml-3 text-lg'>Compaign
                   <span className='text-xs '><p>
                     FutureIK-device1 report generated successfully</p></span>
                   </p>
                </td>
                <td >
                    <p className='-mt-2 ml-2 text-gray-300'>16Mar 2023,
                      <span> <p>06:30:25 PM</p></span>  
                    </p> 
                </td>   
                
            </tr>
            <tr>
                    <td colspan="3 ">
                    <hr class="border-gray-500 w-full -mt-2"/>
                    </td>
           </tr>


           <tr>
                <td>
                    <img src={playlist} className='w-6 h-6 ml-4 -mt-6'/>
                </td>
                <td >
                   <p className='-mt-2 ml-3 text-lg'>Zones
                   <span className='text-xs '><p>
                     FutureIK-Display 1 created successfully</p></span>
                   </p>
                </td>
                <td >
                    <p className='-mt-2 ml-2 text-gray-300'>16Mar 2023,
                      <span> <p>06:30:25 PM</p></span>  
                    </p> 
                </td>   
                
            </tr>

        </table>
      </div>
       


     
    </div>
  )
}

export default ActivityLog
