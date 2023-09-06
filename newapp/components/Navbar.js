import { Avatar } from 'flowbite-react'
import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 '>
        <h2 className='text-white text-3xl font-semibold mx-4'>
            CamAI
        </h2>
        <Avatar rounded/>
        
     
    </div>
  )
}

export default Navbar