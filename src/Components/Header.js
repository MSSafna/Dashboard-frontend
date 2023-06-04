import React from 'react'
import account from '../images/account.png'
import notification from '../images/notification.png'
import headset from '../images/headset.png'
import Body from './Body'

function Header() {
    const menus =[{icons:headset},{icons:notification},{icons:account}]
  return (
    <div className='w-full overflow-x-hidden'>
    <div className=' flex h-16 bg-gray-200 justify-end'>
     <div className='ml-2  w-64 pl-3 mt-3 flex'>
     {menus .map ((icon) => (
     <img className='ml-12 w-6 h-6' src={icon.icons}/>
     ))}
     </div>
    </div>
     <Body/>
    </div>
  )
}

export default Header
