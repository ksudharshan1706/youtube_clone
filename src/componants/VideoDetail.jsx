
import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from "./Videos";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";
import Comments from "./Comments";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [comments, setcomments] = useState(null)
  const [show, setshow] = useState(true)
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))

      fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`)
      .then((data) => setcomments(data.items))
  }, [id]);

  // if(!videoDetail?.snippet) return <Loader />;

  // const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh" marginLeft="30px">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%",  top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2} >
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
          
            {show ? (
                  <div className="comments" onClick={()=>setshow(!show)}>
                    <h3 color="white">Show Less Comments</h3>
                    <KeyboardArrowUpIcon  sx={{ color: "#fff" }} />
                  </div>  
                ) : (
                  <div className="comments" onClick={()=>setshow(!show)}>
                     <h3 color="white">100 Comments</h3>
                    <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                  </div>  
                )}
                {comments&&show?<Comments comments={comments}/>:null}
        </Box>
        {videos?
          <Box sx={{ width:{xs:'60%',md:'25%'},marginLeft:{md:'1%',xs:'15%'}}} px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos  videos={videos?videos:null} direction="column" />
          </Box> :null}
        
      </Stack>
    </Box>
  );
};

export default VideoDetail;