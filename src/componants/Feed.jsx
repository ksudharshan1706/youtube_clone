import React from 'react'
import { useState,useEffect } from 'react'
import {Box,Stack,Typography} from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = ({show}) => {
  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  
  //after selecting a category in sidebar respective videos will be fetched into setVideos
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>{setVideos(data.items)})
  },[selectedCategory]);
  return (
    <Stack sx={{flexDirection:{sx:
    "column", md:"row"}}}>
      {show?<Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        {console.log(show)}
              <SideBar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>
              <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
                Copyright © 2023 Sudharshan
              </Typography>
      </Box>:null}
      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
          <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
            {selectedCategory} <span style = {{color:'#F31503'}}>
              Videos
            </span>
          </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed