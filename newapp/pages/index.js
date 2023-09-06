
import MainBody from '@/components/MainBody'
import Navbar from '@/components/Navbar'
// import { DropdownDivider } from 'flowbite-react/lib/esm/components/Dropdown/DropdownDivider'
import SideNav from '@/components/SideNav'
import VideoPlayer from '@/components/VideoPlayer'


export default function Home() {
  return (
<main>
  <Navbar/>
  <div className='border-white border-b-2 '></div>
  <div className='flex items-center justify-around my-8' >
  <SideNav/>
  <MainBody/>
  </div>
  
  {/* <VideoPlayer/> */}
</main>
  )
}
