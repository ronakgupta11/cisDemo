import { Button } from 'flowbite-react'
import React from 'react'

import { HiOutlineArrowRight,HiChat,HiOutlineChat,HiHome,HiOutlineHome,HiOutlineBookmark,HiBookmark } from 'react-icons/hi';
import {IoAnalyticsOutline} from "react-icons/io5"
import {CgNotes} from "react-icons/cg"
import Link from 'next/link';
function SideNav() {
  return (
    <div className='bg-[#2E455C] flex flex-col items-center justify-center w-20 h-72 rounded-3xl'>
        <ul>
            <li>
                <Link href={"/"}>
                <Button className="border-none">
                <HiHome className="h-6 w-6" />
                </Button>
                </Link>
                
            
                
            </li>
            <li>
                <Link href={"/records"}>
                <Button className="border-none">
                <HiBookmark className="h-6 w-6" />
                </Button>
                </Link>
                
            </li>
            <li>
            <Link href={"/analytics"}>
                <Button className="border-none">
                <IoAnalyticsOutline className="h-6 w-6" />
                </Button>
                </Link>

                
            </li>
            <li>
            <Link href={"/analytics"}>
                <Button className="border-none">
                <HiChat className="h-6 w-6" />
                </Button>
                </Link>
               
            </li>
            <li>
            <Link href={"/records"}>
                <Button className="border-none">
                <CgNotes className="h-6 w-6" />
                </Button>
                </Link>
                
            </li>
            
        </ul>
    </div>
  )
}

export default SideNav