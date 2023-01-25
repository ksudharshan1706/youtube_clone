import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import React from "react";
import NavBar from "./componants/NavBar";
import Feed from "./componants/Feed";
import VideoDetail from "./componants/VideoDetail";
import ChannelDetails from "./componants/ChannelDetails";
import SearchFeed from "./componants/SearchFeed";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" exact element={<VideoDetail />} />
        <Route path="/channel/:id" exact element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
