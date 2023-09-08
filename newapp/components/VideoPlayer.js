import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer() {
  return (
    <div className='h-1/2 p-2 w-full '>

    <video controls className='w-full rounded-2xl'>
        <source src="sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    
  )
}

export default VideoPlayer