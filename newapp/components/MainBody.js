import React from 'react'
import ChartComp from './ChartComp'
import VideoPlayer from './VideoPlayer'

function MainBody() {
  return (
    <div className='w-4/5 rounded-xl bg-[#171920] flex  p-2 justify-between'>
      <div className='flex  flex-col items-center p-2 justify-between w-3/5'>
      {/* video block */}
      <VideoPlayer/>
      <ChartComp/>
      </div>
      <div className='data text-white flex flex-col items-start w-2/5 text-sm font-medium ml-4 p-4'>

      <div className='flex w-full bg-[#2E455C] rounded-md p-2 m-1 items-center justify-around'>
        <p>1</p>
        <p>RJ45CH2949</p>
        <p>OUT</p>
        <p>7:54:33</p>
      </div>
      <div className='flex w-full bg-[#2E455C] rounded-md p-2 m-1 items-center justify-around'>
        <p>1</p>
        <p>RJ14YV1102</p>
        <p>OUT</p>
        <p>7:54:38</p>
      </div>
      


      </div>
      </div>
  )
}

export default MainBody