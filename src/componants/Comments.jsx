import React from 'react'
import { Stack,Box,Typography,Card,CardContent,CardMedia } from '@mui/material'
import { demoProfilePicture } from '../utils/constants'
import { Link } from 'react-router-dom'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const Comments = ({comments}) => {
    console.log("comments",comments)
  return (
    <Stack marginTop="50px" direction="column" flexWrap = "wrap" justifyContent="center" gap = {2}>
        {comments.map((item,idx)=>{
            return(
            <Stack key={item.id} sx={{color:'#fff'}}> 
                <Stack style={{display:"flex",flexDirection:"row"}}>
                    <Link to={`/channel/${item?.snippet.topLevelComment?.snippet?.authorChannelId?.value}`}>
                        <CardMedia 
                        image = {item?.snippet.topLevelComment?.snippet?.authorProfileImageUrl||demoProfilePicture}
                        alt = {item?.snippet.topLevelComment?.snippet?.authorDisplayName}
                        sx={{borderRadius:'50%', height:'50px',width:'50px',mb:2,border:'1px solid #e3e3e3'}}
                        />
                    </Link>
                    <CardContent style={{display:"flex",flexDirection:"column"}}>
                        <Link to={`/channel/${item?.snippet.topLevelComment?.snippet?.authorChannelId?.value}`}  marginTop="-10px">
                        <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                            {item?.snippet.topLevelComment?.snippet?.authorDisplayName}
                            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                        </Typography>
                        </Link>
                        <Typography varient="h4" marginTop="10px">
                            {item?.snippet.topLevelComment?.snippet?.textDisplay} 
                        </Typography> 
                    </CardContent>
                </Stack>
            </Stack>
            )
        })} 
    </Stack>
  )
}

export default Comments