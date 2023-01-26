import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ChannelCard from './ChannelCard'

const ChannelDetails = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setvideos] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setchannelDetail(data?.items[0]));

    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setvideos(data?.items));
  }, [id])
  
  return (
    <Box minHeight="95vh">
      <Box>
        <div style = {{
          background: 'radial-gradient(circle, rgba(238,174,174,1) 0%, rgba(148,168,233,1) 100%)',
          zIndex:10,
          height:'300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>  
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetails