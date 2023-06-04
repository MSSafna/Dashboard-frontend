
import React  from 'react';

import dashboard from '../images/dashboard.png'
import logo  from '../images/logo.png'
import campaign from '../images/campaign.png'
import channels  from '../images/channels.png'
import commands from '../images/command.png'

import device  from '../images/devices.png'
import history  from '../images/history.png'
import  medialibrary  from '../images/medialibrary.png'
import zone  from '../images/zone.png'




function Sidebar() {

    const menus=[
        {icon:dashboard , name:'Dashboard'},
        {icon:campaign , name:'campaign'},
        {icon:channels , name:'channels'},
        {icon:commands , name:'commands'},
        {icon:device , name:'device'},
        {icon:history , name:'history'},
        {icon:medialibrary , name:'medialibrary'},
        {icon:zone , name:'zone'},
]

  return (
    <section >
      <div className='p-4 bg-blue-900 flex flex-col h-screen w-48 pr-2 ' >
        <div className=' flex item-center '>
        <img src={logo} /> 
        </div>
        {menus.map((datas, i) => (
       <div className='flex m-3 justify-between w-full pt-4 pr-4'>
        <div><img src={datas.icon} alt='image' className='w-6 h-6'></img></div>
         <div className='flex flex-grow item-center '>
         <div className='text-white  ml-4'>{datas.name}</div>
         </div>
       </div>
        ))}
      </div>
        
    </section>
  );
}

export default Sidebar;
