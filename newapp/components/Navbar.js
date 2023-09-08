import { Avatar } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 '>
      <Link href={"/"}>

        <h2 className='text-white text-3xl font-semibold mx-4'>
            ANPR_VISION
        </h2>
        </Link>

        <Avatar rounded/>
        
     
    </div>
  )
}

export default Navbar