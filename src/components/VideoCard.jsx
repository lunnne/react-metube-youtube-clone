import React from 'react'

export const VideoCard = ({video}) => {
  return (
    <div className='card-container'>
        <img src="" alt="thumnail" />
        <span className='title'>{video.snippet.title}</span>
        <span className='author'>author</span>
    </div>
  )
}
