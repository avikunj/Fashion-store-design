import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Logo from '../../img/logo.png'
import WindowSharpIcon from '@mui/icons-material/WindowSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import './home.scss'
const Header = () => {
  return (<>
  
    <div  className="FashionStoreHeader">
     <Tabs centered>
      <Tab icon={<WindowSharpIcon  className="menu"/>}   />
    <img src={Logo} height="3px" width="64%"  className="logo"/>
      <Tab icon={<NotificationsSharpIcon  className="menu1" />} />
    </Tabs>
    
    
    </div>
  </>
  )
}

export default Header