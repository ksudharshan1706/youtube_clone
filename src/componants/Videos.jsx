import React from 'react'
import { Stack,Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import SideBar from './SideBar'
const Videos = ({videos}) => {
  
  return (
    <Stack direction="row" flexWrap = "wrap" justifyContent="center" gap = {2}>
        {videos.map((item,idx)=>{
            return(
            <Box key={idx}>
                {item.id.videoId && <VideoCard video = {item}/>}
                {item.id.channelId && <ChannelCard channel={item}/>}
            </Box>
            )
        })}
    </Stack>
  )
}

export default Videos