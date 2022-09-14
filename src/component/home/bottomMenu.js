import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Home from "@mui/icons-material/Home";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GroupAddSharpIcon from "@mui/icons-material/GroupAddSharp";


import "./home.scss";
import { Link } from "react-router-dom";
const BottomMenu = () => {
  return (
    <Tabs aria-label="icon label tabs example" centered>
    <Link to="/"> <Tab icon={<Home />} label="Home"/></Link>
      <Tab icon={<FavoriteBorderIcon/>} label="Favorite" />
      <Tab icon={<WorkOutlineIcon />}label="Bag"  />
      <Tab icon={<GroupAddSharpIcon />} label="Account"  />
    </Tabs>
  );
};

export default BottomMenu;
