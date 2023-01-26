import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import {logo} from '../utils/constants'
import React from "react";
import SearchBar from './SearchBar';
import MenuIcon from '@mui/icons-material/Menu';
const NavBar = ({menubutton}) => ( 

  
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    {/* <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link> */}
    <div className='menuAndIcon'>
      
      {/* <MenuIcon style={{color:"#fff",marginTop:"10px", marginRight:"20px"}}/> */}
      {menubutton}
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={50} />
      </Link>
    </div>
    <SearchBar />
    <img src="https://lh3.googleusercontent.com/a/AEdFTp6MQhNIC-tSwKHA8mnT6lu3FM3MuUH3nPLjhtQpDg=s360-p-rw-no" 
    alt="logo" height={50} width={50} style={{borderRadius:"50%",aspectRatio:1}}/>
  </Stack>
);


export default NavBar;
