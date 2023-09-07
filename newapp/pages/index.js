
import Chart from '@/components/ChartComp'
import MainBody from '@/components/MainBody'
import Navbar from '@/components/Navbar'
// import { DropdownDivider } from 'flowbite-react/lib/esm/components/Dropdown/DropdownDivider'
import SideNav from '@/components/SideNav'
// import VideoPlayer from '@/components/VideoPlayer'

import { useState,useEffect } from 'react'
export default function Home() {
  const [frameStream, setFrameStream] = useState([]);

  // useEffect(() => {
  //   // Fetch or receive frame stream from your API and set it to frameStream
  //   // For demonstration, let's assume you receive an array of frame URLs
  //   // You should replace this with actual API integration
  //   const fakeFrameStream = [
  //     'https://picsum.photos/200/300',
  //     'https://picsum.photos/200/300',,
  //     "https://picsum.photos/200/300",
  //     "https://picsum.photos/200/300",
  //     "https://picsum.photos/200/300",
      
  //     // Add more frame URLs here
  //   ];
  //   setFrameStream(fakeFrameStream);
  // }, []);
  return (
<>
  <Navbar/>
  <div className='border-white border-b-2 '></div>
  {/* <h1>Video Stream</h1> */}
  {/* <VideoPlayer frameStream={frameStream} /> */}
  <div className='flex items-center justify-around my-8' >
  <SideNav/>
  <MainBody/>
  {/* <Chart/> */}
  </div>

</>


  )
}
