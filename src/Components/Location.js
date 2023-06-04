import React from 'react'
import locationImg from '../images/locationImg.png'
import DomainQuota from './DomainQuota'


function Location() {
  return (
    <>
    <div className='  ml-4 bg-white  '>
        <p className='p-2'>Location -Devices</p>
        <div>

     <img src={locationImg}  className='h-64'/>
        </div>
    </div>
    <DomainQuota/>
    </>
  )
}

export default Location
