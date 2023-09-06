import { Button } from 'flowbite-react'
import React from 'react'
import { HiOutlineArrowRight,HiChat,HiOutlineChat,HiHome,HiOutlineHome,HiOutlineBookmark,HiBookmark } from 'react-icons/hi';
import {IoAnalyticsOutline} from "react-icons/io5"
import {CgNotes} from "react-icons/cg"
function SideNav() {
  return (
    <div className='bg-[#2E455C] flex flex-col items-center justify-center w-20 h-72 rounded-xl'>
        <ul>
            <li>
                <Button className="border-none">
                <HiHome className="h-6 w-6" />
                </Button>
            </li>
            <li>
                <Button className="border-none">
                <HiBookmark className="h-6 w-6" />
                </Button>
            </li>
            <li>
                <Button className="border-none">
                <IoAnalyticsOutline className="h-6 w-6" />
                </Button>
            </li>
            <li>
                <Button className="border-none">
                <HiChat className="h-6 w-6" />
                </Button>
            </li>
            <li>
                <Button className="border-none">
                <CgNotes className="h-6 w-6" />
                </Button>
            </li>
            
        </ul>
    </div>
  )
}

export default SideNav