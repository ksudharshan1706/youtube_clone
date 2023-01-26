import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import React, { useState } from "react";
import NavBar from "./componants/NavBar";
import Feed from "./componants/Feed";
import VideoDetail from "./componants/VideoDetail";
import ChannelDetails from "./componants/ChannelDetails";
import SearchFeed from "./componants/SearchFeed";
import MenuIcon from "@mui/icons-material/Menu";

const App = () => {
  const [show, setshow] = useState(true);
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <NavBar
          menubutton={
            <MenuIcon
              style={{ color: "#fff", marginTop: "10px", marginRight: "20px" }}
              onClick={() => {
                setshow(!show);
              }}
            />
          }
        />
        {console.log(show)}
        <Routes>
          <Route path="/" exact element={<Feed show={show} />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetails />} />
          <Route
            path="/search/:searchTerm"
            exact
            element={<SearchFeed show={show} />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};
export default App;
